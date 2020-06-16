# REDES CHEAT SHEET

#### MODOS EN ROUTER Y SWITCH
-Modo EXEC usuario: Examen limitado del router, Acceso remoto

-Modo EXEC privilegiado: Examen detallado del router y acceso remoto, Depuracion y prueba, Manipulacion de archivos

-Modo de configuracion global: omandos de configuracion global | -Otros modos de configuracion global| 

-Otros modos de configuracion global: Para interfaces generalmente

|Modo en router|Indicador|
|--|--|
| 1.Indicador de modo usuario|Router>|
| 2.Comando enable|Router>enable|
| 3.Indicador modo privilegiado|Router#|
| 4.Comando configure terminal|Router#configure terminal|
| 5.Indicador de modo configuracion global|Router(config)#|

## SWITCH

#### Comando para mostrar las direcciones mac conocidas para el switch
```
Switch# show mac-address-table 
```

#### Configuracion de nombre
```
Switch# enable 
Switch# configure terminal 
Switch(config)# hostname Switch_UPC 
```

#### Creación de Vlans 
```
Switch# configure terminal 
Switch(config)# vlan {#numero_de_Vlan} 
Switch(config)# name {"Nombre_de_Vlan"} 
Switch(config-if)# exit 
```

#### Asignacion de interfaces a las Vlan 
```
Switch# configure terminal 
Switch(config)# interface f0/{nro_puerto_pc} 
Switch(config-if)# switchport access vlan {#numero_de_Vlan} 
Switch(config-if)# exit 
```

#### Comando para ver las vlan
```
Switch# show running
```

#### Configuración de Puertos Trunk 
```
Switch# configure terminal 
Switch(config)# interface f0/{#nro_de_puerto_que_comunica} 
Switch(config-if)# switchport mode trunk 
Switch(config-if# switchport trunk allowed vlan all. 
Switch(config-if)# exit 
```

#### Configuracion VLAN administrativa
-Permite entrar a una switch desde una pc
```
Switch_UPC#interface Vlan{#nro_vlan_admin}
Switch_UPC(config-if)#ip address {ip} {mascara} 
Switch_UPC(config-if)#no shutdown 
```

#### Borrar configuracion de las vlans
```
Switch# delete flash:vlan.dat
```

#### Borrar configuracion del switch
```
Switch#erase startup-config
Switch#reload
```

### Rutas estáticas y sumarización

#### Sintaxis
```
Router(config)#ip route [red] [mask] [interfaz] [distancia] [permanent]
```
red: red o subred del dest.
mask: mascara de subred
interfaz: direccion ip de la interfaz para llegar a destino
distancia : opcional, distancia administrativa
permanent: opcional, indica la no eliminacion de la ruta


### Servidores en packet tracer

DNS server: relaciona el nombre de dominio y su direccion ip
Web server: procesa una aplicacion del lado del servidor, generalmente usa el protocolo http
Mail server: mensajes

### Access List (ACL)
Controlan el flujo de trafico en equipos de redes, tanto enrutadores como comutadores- 

#### Tipos de acl:
ACL estandar: solo especificamos direccion de origen
ACL extendida: protocolo, direccion origen y destino

#### wildcard
Si se traduce a binario, el 0 significa las posiciones que deben coincidir.
Por defecto es 0.0.0.0

#### Crear una ACL estándar
```
(config)#access-list [#lista] [permit|deny] [ip origen] [wildcard]
```
#lista: estandar de 1 a 99, extendida de 100 a 199.
permiso: "permit" o "deny"-
ip: direccion ip origen.
wildcard: mascara wildcard, en mayoria de caso es mac inversa-

Ejemplos:
```
(config)#access-list 1 deny 10.5.3.0 0.0.0.255
(config)#access-list 1 permit host 10.5.3.37
(config)#access-list 1 permit any
```

#### Crear una ACL extendida
```
(config)#access-list [#lista] [permit|deny] [protocolo] 
[origen] [host|any] [destino] [comparacion]
[establisehed][log]
```
#lista: de 100 a 199
prot: protocolo, TCP, IP, UDP, ICMP
puerto origen
origen: [ip origen] + [wildcard]
destino: [ip destino] + [mask]
wildcard y mask: opcionales
comparacion: [lt|gt|eq|neq|#]
lt: menor que, gt: mayor que, eq: igual, neq: no igual, #: numero especifico o rango
Establisehed: (opcional) Se usa solo para TCP de entrada. Esto permite que él tráfico TCP pase si el paquete utiliza una conexión ya establecida (por ejemplo posee un conjunto de bits ACK)
Log: (opcional) Envía un mensaje de registro a la consola a un servidor syslog determinado.

|#Puerto|Nombre|
|-|-|
|20|Datos del protocolo FTP|
|21|FTP|
|23| Telnet|
|25| SMTP|
|69| TFTP|
|53| DNS|
|80| HTTP|
|443| HTTPS|
|631| IPP|


Ejemplos:
```
(config)#access-list 105 permit TCP 10.5.4.0 0.0.0.255 host 10.5.64.30 eq 80
(config)#access-list 105 permit IP 10.5.3.37 host 10.5.64.0 0.0.0.255
(config)#access-list 105 deny IP 10.5.3.0 0.0.0.255 any
```

#### Asociación de la lista a una interfaz
```
Router(config)#interface [interfaz]
Router(config-if)#ip access-group [#lista][in|out]
```
in|out: especifica si será un filtro de entrada o de salida

#### Como eliminar las listas de acceso
Desde el modo interfaz donde se aplico la lista:
```
Router(config-if)#no ip access-group [#lista]
```
Desde el modo global elimine la ACL
```
router(config)#no access-list [#lista]
```
#### Lista de access-list
```
Router#show access-list
```
