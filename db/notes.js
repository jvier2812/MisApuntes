import mongoose, { Schema, model } from 'mongoose'

const db_conn_str = 'mongodb://127.0.0.1:27017/exampledb'
const db = mongoose.connection
mongoose.connect(db_conn_str, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

db.on('error', (err) => console.log('connection error: ', err))
db.once('open', () => console.log('Connected to db: ', db_conn_str))

const blogSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    meta: {
        votes: Number,
        favs: Number
    }
})

const tagSchema = new Schema({
    name: String,
    description: String
})
const Blog = model('Blog', blogSchema)
const Tag = model('Tag', tagSchema)

/* Blog.insertMany([
    { title: 'Titulo1', body: 'body1 body', meta: { votes: 11, favs: 3 } },
    { title: 'Titulo2', body: 'body2 body', meta: { votes: 1, favs: 5 } },
    { title: 'Titulo3', body: 'body3 body', meta: { votes: 4, favs: 7 } }
])
    .then(() => console.log('data inserted'))
    .catch((err) => console.log(err))
 */
/* Blog.insertMany([
    { title: 'Titulo4', tags: ['tag1', 'tag2', 'tag3'] },
    { title: 'Titulo5', tags: ['tag1'] },
    { title: 'Titulo6', tags: ['tag3'] }
])
    .then(() => console.log('data inserted'))
    .catch((err) => console.log(err)) */
/* Tag.insertMany([
    { name: 'tag1', description: 'es el tag1' },
    { name: 'tag2', description: 'es el tag2' },
    { name: 'tag3', description: 'es el tag3' }
])
    .then(() => console.log('data inserted'))
    .catch((err) => console.log(err))
 */
const AsyncQuery1 = async () => {
    try {
        const blogs1 = await Blog.find({ title: 'Titulo1' })
        const blogs2 = await Blog.aggregate().match({
            title: 'Titulo1'
        })
        console.log('datafinded1: ', blogs1)
        console.log('datafinded2: ', blogs2)
    } catch (error) {
        console.log(error)
    }
}
const AsyncQuery2 = async () => {
    try {
        const blogs = await Blog.aggregate()
            .match({})
            .unwind('tags')
            .lookup({
                from: 'tags',
                localField: 'tags',
                foreignField: 'name',
                as: 'tagInfo'
            })
            .unwind('tagInfo')
        console.log('datafinded: ', blogs)
    } catch (error) {
        console.log(error)
    }
}
const AsyncQuery3 = async () => {
    try {
        const blogs = await Blog.aggregate().match({
            _id: new mongoose.Types.ObjectId('5fe187b18bb4bb1b84e6e481')
        })
        console.log('datafinded: ', blogs)
    } catch (error) {
        console.log(error)
    }
}
AsyncQuery3()
