MODOS EN ROUTER Y SWITCH
+--------------------+-----------------------+----------------------+-----------------------+
|Modo EXEC usuario   |Modo EXEC privilegiado |Modo de configuracion |Otros modos de configu |
|                    |                       |global                |racion global          |
+--------------------+-----------------------+----------------------+-----------------------+
|-Examen limitado del|-Examen detallado del  |-Comandos de configu- |-Otros modos de        | 
|router              |router y acceso remoto |racion global         |configuracion          |
|-Acceso remoto      |-Depuracion y prueba   |                      |global                 |
|                    |-Manipulacion de arch. |                      |                       |
+--------------------+-----------------------+----------------------+-----------------------+
| Switch>            | Switch#               | Switch(config)#      | Switch(config-)#      |
| Router>            | Router#               | Router(config)#      | Router(config-)#      |
+--------------------+-----------------------+----------------------+-----------------------+

Router>               (indicador modo exec usuario)
Router>enable  
Router#               (indicador modo privilegiado)
Router#configure terminal
Router(config)#       (indicador de modo conf glob)

##SWITCH
Comando para mostrar las direcciones mac conocidas para el switch
Switch# show mac-address-table 

Configuracion de nombre
Switch# enable 
Switch# configure terminal 
Switch(config)# hostname Switch_UPC 

Creación de Vlans 
Switch# configure terminal 
Switch(config)# vlan {#numero_de_Vlan} 
Switch(config)# name {"Nombre_de_Vlan"} 
Switch(config-if)# exit 


Asignacion de interfaces a las Vlan 
Switch# configure terminal 
Switch(config)# interface f0/{nro_puerto_pc} 
Switch(config-if)# switchport access vlan {#numero_de_Vlan} 
Switch(config-if)# exit 

Comando para ver las vlan
Switch# show running

Configuración de Puertos Trunk 
Switch# configure terminal 
Switch(config)# interface f0/{#nro_de_puerto_que_comunica} 
Switch(config-if)# switchport mode trunk 
Switch(config-if# switchport trunk allowed vlan all. 
Switch(config-if)# exit 

Configuracion VLAN administrativa
-Permite entrar a una switch desde una pc
Switch_UPC#interface Vlan{#nro_vlan_admin}
Switch_UPC(config-if)#ip address {ip} {mascara} 
Switch_UPC(config-if)#no shutdown 

Borrar configuracion de las vlans
Switch# delete flash:vlan.dat

Borrar configuracion del switch
Switch#erase startup-config
Switch#reload
