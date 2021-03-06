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

* operátor
  * főoldal
  * about
  * login/logout
  * tennivalók
    * hozzáadás
    * szerkesztés
    * törlés
  * felhasználók
    * hozzáadás
    * szerkesztés
    * törlés 

###Végpontok
* GET / : Főoldal
* GET /about : Információ
* GET /login : Bejelentkezés
* POST /login : Bejelentkezési adatok felküldése
* GET /login/signup : Regisztráció
* POST /login/signup : Regisztációs adatok felküldése
* GET /todos/list : Tennivalók listája
* GET /todos/new : Új tennivaló hozzáadása
* POST /todos/new : Új tennivaló hozzáadása, adatok küldése
* GET /todos/edit/:id : Tennivaló szerkesztése
* POST /todos/dit/:id : Tennivaló szerkesztése, adatok küldése
* GET /todos/delete/:id : Tennivaló törlése

###Oldalvázlatok
![Főoldal](docs/images/fooldal.png)
![Lista](docs/images/lista.png)

###Modellek
![Modellek](docs/images/models.png)

##Tesztelés
###Egységteszt
Az egységtesztet mocha és chai keretrendszerrel végeztem.

###Funkcionális tesztelés
Funkcionális teszteléshez a Selenium IDE-t használtam, segítségevel a következő folyamatot vizsgáltam meg:
* Regisztráció
* Bejelentkezés
* Új tennivaló
* Szerkesztés
* Törlés
* Kilépés

##Felhasználói dokumentáció
###Ajánlott hardver-, szoftver konfiguráció
####A program használatához szükséges
* Web-böngésző
* Javascript (node.js)

###Telepítés
* A komplett project letöteő a jobb oldali menü, "Download ZIP" gombjára kattintva
* Kicsomagolás után, a server.js futtatásával indítható az alkalmazás

###A program használata
* A program használatához regisztációszükséges
* Regisztáció után be lehet jelentkezni
* Ezt követően a tennivalók listáját láthatjuk
* Itt vehetünk fel új tennivalót
* Illetve törölhetünk, vagy módosíthatunk egy meglévőt
* Ha befejeztük a munkát, a kilépés gombra kattintva léphetünk ki