## MODOS EN ROUTER Y SWITCH
|Modo EXEC usuario   |Modo EXEC privilegiado |Modo de configuracion global|Otros modos de configuracion global  |
|---|---|---|---|
| .Examen limitado del router .Acceso remoto | * Examen detallado del router y acceso remoto * Depuracion y prueba -Manipulacion de archivos   | -Comandos de configuracion global | -Otros modos de configuracion global| 
| Switch>            | Switch#               | Switch(config)#      | Switch(config-)#      |
| Router>            | Router#               | Router(config)#      | Router(config-)#      |

|Modo en router||
|--|--|
| 1.Indicador de modo usuario|Router>|
| 2.Comando enable|Router>enable|
| 3.Indicador modo privilegiado|Router#|
| 4.Comando configure terminal|Router#configure terminal|
| 5.Indicador de modo configuracion global|Router(config)#|

## SWITCH

### Comando para mostrar las direcciones mac conocidas para el switch
```
Switch# show mac-address-table 
```

### Configuracion de nombre
```
Switch# enable 
Switch# configure terminal 
Switch(config)# hostname Switch_UPC 
```

### Creación de Vlans 
```
Switch# configure terminal 
Switch(config)# vlan {#numero_de_Vlan} 
Switch(config)# name {"Nombre_de_Vlan"} 
Switch(config-if)# exit 
```

### Asignacion de interfaces a las Vlan 
```
Switch# configure terminal 
Switch(config)# interface f0/{nro_puerto_pc} 
Switch(config-if)# switchport access vlan {#numero_de_Vlan} 
Switch(config-if)# exit 
```

### Comando para ver las vlan
```
Switch# show running
```

Configuración de Puertos Trunk 
```
Switch# configure terminal 
Switch(config)# interface f0/{#nro_de_puerto_que_comunica} 
Switch(config-if)# switchport mode trunk 
Switch(config-if# switchport trunk allowed vlan all. 
Switch(config-if)# exit 
```

Configuracion VLAN administrativa
-Permite entrar a una switch desde una pc
```
Switch_UPC#interface Vlan{#nro_vlan_admin}
Switch_UPC(config-if)#ip address {ip} {mascara} 
Switch_UPC(config-if)#no shutdown 
```

Borrar configuracion de las vlans
```
Switch# delete flash:vlan.dat
```

Borrar configuracion del switch
```
Switch#erase startup-config
Switch#reload
```
