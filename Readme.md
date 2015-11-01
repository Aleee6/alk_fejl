#Családi todo alkalmazás
##Követelményanalízis
###Funkcionális követelmények
* Felhasználóként szeretnék tennivalót hozzáadni --> Új tennivaló
* Felhasználóként szeretném módosítani a tennivalókat --> Szerkesztés, törlés
* Az Operátor tudja kezelni a felhasználókat --> (nem került megvalósításra)

###Nem funkcioniális követelmények
* Felhasználóbarát elrendezés, kinézet
* Egyszerű használat
* Felhasználók adatainak tárolása

###Használatieset-modell
####Szerepkörök
* vendég --> Főoldal, Regisztáció, Bejelentkezés
* felhasználó --> Tennivalók kezelése + Vendég szerepköre
* operátor --> Felhasználó szerepkörén túl a felhasználók kezelése

![Használatieset](docs/images/haszn_eset.png)

####Tennivaló hozzáadása
![Hozzáadás](docs/images/hozzaad.png)

##Tervezés
###Oldaltérkép
* publikus
  * főoldal
  * about
  * login

* felhasználó
  * főoldal
  * about
  * login/logout
  * tennivalók
    * hozzáadás
    * szerkesztés
    * törlés

Végpontok
Felhasználóifelület-modell
Oldalvázlatok
Designterv (nem kell, elég a végső megvalósítás kinézete)
Osztálymodell
Adatmodell
Adatbázisterv
Állapotdiagram
Dinamikus működés
Szekvenciadiagram
Implementáció

Fejlesztői környezet bemutatása
Könyvtárstruktúrában lévő mappák funkiójának bemutatása
Tesztelés

Automatikus tesztek szükségesek. Nem kell teljeskörű tesztelés, a hallgató mutassa meg, hogy képes ilyen tesztek írására.

Tesztelési környezet bemutatása
Egységtesztek: legalább 1 adatmodell tesztelése
Funkcionális felületi tesztek: legalább 1 folyamat tesztelése
VAGY: Selenium IDE használatával
VAGY: zombie.js használatával
Tesztesetek felsorolása: milyen eseteket próbált végig a hallgató
Felhasználói dokumentáció

A futtatáshoz ajánlott hardver-, szoftver konfiguráció
Telepítés lépései: hogyan kerül a Githubról a célgépre a program
A program használata