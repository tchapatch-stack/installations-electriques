
mes="<MARQUEE LOOP=-1 BEHAVIOUR=ALTERNATE ALIGN=MIDDLE SCROLLAMOUNT=4 SCROLLDELAY= 50>dS_de_M vous souhaite beaucoup de plaisir..</MARQUEE>";
hms=new Date();
annee= hms.getYear();
heure  = hms.getHours();
jour = hms.getDate();
mois = hms.getMonth() + 1;
if ((heure > 0)&&(heure < 2))        // de 0 à 1h59 heure 
	mes=mes+"Il est l'heure  d'aller te coucher.<P>";
if ((heure > 1)&&(heure <= 2))	   // de 2 à 2h59
	mes=mes+"moi je vais dormir à 3 heures.<P>";
if ((heure >2)&&(heure < 8))        // de 3 à 7h59
	mes=mes+"t'es bien matinal ce matin.<P>";
if ((heure >7)&&(heure <= 8))         // de 8 à 8h59
	mes=mes+"bient&ocirc;t le caf&eacute;.<P>";
if (heure == 9)				 // de 9 à 9h59
	mes=mes+"&agrave; 10 heure s on fait une pause d' acc?<P>";
if (heure == 10)
	mes=mes+"&agrave; 11h on prend l'ap&eacute;ro<P>";
if (heure  == 11)
	mes=mes+"bient&ocirc;t midi, BON APPETIT.<P>";
if (heure == 12)
	mes=mes+"c'est l'heure  d'aller manger !! ou t'as d&eacute;j&agrave; fini ?.<P>";
if (heure == 13)
	mes=mes+"j'esp&egrave;re que t'as bien mang&eacute !<P>";
if (heure == 14)
	mes=mes+"une sieste &ccedil;a ne te dit rien ?<P>";
if (heure == 15)				 // de 3 à 3h59
	mes=mes+"un petit caf&eacute ou une verte &agrave; 4 heures ?<P>";
if (heure == 16)
	mes=mes+"Une journ&eacute;e de bient&ocirc;t finie.<P>";
if ((heure > 16)&&(heure < 19))		 // de 17h00 à 18h59
	mes=mes+"tu ne veux pas aller souper ?<P>";
if (heure == 19)				 // de 19h00 à 19h59
	mes=mes+"tu sait que tu rates le feuilleton<P>";
if ((heure > 19)&&(heure <= 23))	 // de 20h00 à 22h59 heure 
	mes=mes+"Eh.. j'voulais regarder la TV moi!!<P>";
if (heure > 22)
	mes=mes+"je ne vais pas tarder &agrave; aller me coucher.<P>";
if ((jour== 13)&&(hms.getDay()== 5))
	mes=mes+"<font color=red>j'aime vraiment pas les vendredi 13.<P></FONT>";
if ((hms.getDay()== 6)|| (hms.getDay()== 0))
	mes=mes+"<font color=red>t'as pas congé le weekend ?<P></FONT>";
if ((hms.getDay()==1))
	mes=mes+"<font color=red>Le lundi c'est pennible<P></FONT>";
	

if ((jour== 1)&&(mois== 1))
	mes=mes+"<font color=red>bonne <B>ANNEE</B><P></FONT>";
if ((jour== 1)&&(mois== 1))	{
	age= annee - 1900;
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : 1&egrave;re journ&eacute;e de 24 heures <P></FONT>";
	}
if ((jour== 12)&&(mois== 1))	{
	age= annee - 1665
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait Pierre Fermat <P></FONT>";
	}
if ((jour== 17)&&(mois== 1))	{
	age= annee - 1706
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Franklin.htm'>Benjamin Franklin</A> <P></FONT>";
	}
if ((jour== 20)&&(mois== 1))	{
	age= annee - 1775
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Ampere.htm'>Andr&eacute;Marie Amp&egrave;re</A> <P></FONT>";
	}
if ((jour== 21)&&(mois== 1))	{
	age= annee - 1976
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Concorde faisait un vol commercial supersonique <P></FONT>";
	}
if ((jour== 24)&&(mois== 1))	{
	age= annee - 1986
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Voyager 2 survolait Uranus<P></FONT>";
	}
if ((jour== 31)&&(mois== 1))	{
	age= annee - 1958
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans les U.S. lance leur 1<sup>er</sup> satellite (Exporer) <P></FONT>";
	}
if ((jour== 1)&&(mois== 2))	{
	age= annee - 1899
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : d&eacute;p&ocirc;t du brevet pour l'aspirine<P></FONT>";
	}
if ((jour== 3)&&(mois== 2))	{
	age= annee - 1966
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Luna-9 se posait sur la lune <P></FONT>";
	}
if ((jour== 18)&&(mois== 2))	{
	age= annee - 1745
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Volta.htm'>Alessandro Volta</A> <P></FONT>";
	}
if ((jour== 20)&&(mois== 2))	{
	age= annee - 1962
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans John Glenn fait le 1<sup>er</sup> vol habit&eacute;am&eacute;ricain en orbite <P></FONT>";
	}
if ((jour== 1)&&(mois== 3))	{
	age= annee - 1896
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Becquerel découvrait la radioactivit&eacute; naturelle <P></FONT>";
	}
if ((jour== 2)&&(mois== 3))	{
	age= annee - 1972
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Pioneer 10 partait vers les contr&eacute;es loingtaines <P></FONT>";
	}
if ((jour== 5)&&(mois== 3))	{
	age= annee - 1827
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait <a href='Divers/dico/H_Volta.htm'>Alessandro Volta</A> <P></FONT>";
	}
if ((jour== 11)&&(mois== 3))	{
	age= annee - 1955
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait Alexander Heming<P></FONT>";
	}
if ((jour== 13)&&(mois== 3))	{
	age= annee - 1781
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans W. Herschel d&eacute;couvre Neptune<P></FONT>";
	}
if ((jour== 14)&&(mois== 3))	{
	age= annee - 1879
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Einstein.htm'>Albert Einstein</A> <P></FONT>";
	}
if ((jour== 16)&&(mois== 3))	{
	age= annee - 1978
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans sombrait l'Amoco-Cadiz <P></FONT>";
	}
if ((jour== 20)&&(mois== 3))	{
	age= annee - 1800
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans :  <a href='Divers/dico/H_Volta.htm'>A. Volta </a>annonce l'invention de la pile  <P></FONT>";
	}
if ((jour== 28)&&(mois== 3))	{
	age= annee - 1979
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : 1er accident nucl&eacute;aire &agrave; Three Mile Island (U.S.)<P></FONT>";
	}
if ((jour== 6)&&(mois== 4))	{
	age= annee - 1979
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : Pioneer-11 survole Saturne <P></FONT>";
	}
if ((jour== 7)&&(mois== 4))	{
	age= annee - 1795
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans l&eacute;galisation su syst&egrave;me m&eacute;trique ( m&egrave;tre, are, st&egrave;re, litre, gramme, franc) <P></FONT>";
	}
if ((jour== 12)&&(mois== 4))	{
	age= annee - 1961
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : Youri Gagarine 1er homme dans l'espace<P></FONT>";
	}
if ((jour== 18)&&(mois== 4))	{
	age= annee - 1955
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait <a href='Divers/dico/H_Einstein.htm'>Albert Einstein</A> <P></FONT>";
	}
if ((jour== 25)&&(mois== 4))	{
	age= annee - 1990
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : mise en orbite du t&eacute;lescope spatial Hubble<P></FONT>";
	}
if ((jour== 26)&&(mois== 4))	{
	age= annee - 1986
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans &agrave; 1h<sup>24</sup> le r&eacute;acteur 4 à tchernobyl explosait <P></FONT>";
	}
if ((jour== 1)&&(mois== 5))	{
	age= annee - 1899
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans d&eacute;j&agrave;: reccord de vitesse (105,9 km/h) par automobile &eacute;lectrique !! <P></FONT>";
	}
if ((jour== 5)&&(mois== 5))	{
	age= annee - 1961
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : B. Shepard est le 1er am&eacute;ricain dans l'espace</FONT>";
	}
if ((jour== 11)&&(mois== 5))	{
	age= annee - 1960
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : mise &agrave; l'eau du paquebot 'France' <P></FONT>";
	}
if ((jour== 25)&&(mois== 5))	{
	age= annee - 1955
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans la Caravelle fait son 1<sup>er</sup> vol <P></FONT>";
	}
if ((jour== 10)&&(mois== 6))	{
	age= annee - 1836
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait <a href='Divers/dico/H_Ampere.htm'>Andr&eacute;Marie Amp&egrave;re</A> <P></FONT>";
	}
if ((jour== 15)&&(mois== 6))	{
	age= annee - 1898
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : ouverture du 1<sup>er</sup> salon de l'automobile à Paris  <P></FONT>";
	}
if ((jour== 2)&&(mois== 7))	{
	age= annee - 1900
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : 1er vol du dirigeable 'Zeppelin'<P></FONT>";
	}
if ((jour== 9)&&(mois== 7))	{
	age= annee - 1856
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Tesla.htm'>Nikola Tesla</A> <P></FONT>";
	}
if ((jour== 10)&&(mois== 7))	{
	age= annee - 1962
	mes=mes+"<font color='FF9966'>1&egrave;re transmission satellite il y a "+ age  + " ans  <P></FONT>";
	}
if ((jour== 14)&&(mois== 7))
	mes=mes+"<font color=red>bonne journée les fran&ccedil;ais..<P></FONT>";
if ((jour== 16)&&(mois== 7))	{
	age= annee - 1976
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Seveso subit un accident à la dioxine <P></FONT>";
	}
if ((jour== 19)&&(mois== 7))	{
	age= annee - 1900
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans :1er m&eacute;tro parisien<P></FONT>";
	}
if ((jour== 21)&&(mois== 7))	{
	age= annee - 1969
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : L'Homme posait son pied sur la lune.</A> <P></FONT>";
	}
if ((jour== 23)&&(mois== 7))	{
	age= annee - 1962
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans se faisait la 1<sup>ere</sup> liaison satellite de télécommunication Europe - U.S. <P></FONT>";
	}
if ((jour== 1)&&(mois== 8))
	mes=mes+"<font color=red>bonne f&ecirc;te les helv&ecirc;tes..<P></FONT>";
if ((jour== 6)&&(mois== 8))	{
	age= annee - 1945
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans la 1<sup>&egrave;re</sup> bombe atomique tombe sur Hiroshima  <P></FONT>";
	}
if ((jour== 9)&&(mois== 8))	{
	age= annee -1945
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans la seconde bombe atomique tombe sur Nagasaki<P></FONT>";
	}
if ((jour== 13)&&(mois== 8))
	mes=mes+"<font color=red>bonne <B>FETE</B> dS_de_M<P></FONT>";
if ((jour== 15)&&(mois== 8))	{
	age= annee - 1945
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans le Japon capitulait face aux U.S. <P></FONT>";
	}
if ((jour== 20)&&(mois== 8))	{
	age= annee - 1601
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Pierre Fermat naîssait <P></FONT>";
	}
if ((jour== 25)&&(mois== 8))	{
	age= annee - 1867
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait <a href='Divers/dico/H_Faraday.htm'>Michael Faraday</A> <P></FONT>";
	}
if ((jour== 21)&&(mois== 9))	{
	age= annee - 1955
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans l'existance de l'antiproton &eacute;tait prouv&eacute;e <P></FONT>";
	}
if ((jour== 22)&&(mois== 9))	{
	age= annee - 1791
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Faraday.htm'>Michael Faraday</A> <P></FONT>";
	}
if ((jour== 8)&&(mois== 11))	{
	age= annee - 1895
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans Rontgen d&eacute;couvre les rayons X<P></FONT>";
	}
if ((jour== 18)&&(mois== 11))	{
	age= annee - 1962
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait Niels Bohr<P></FONT>";
	}
if ((jour== 26)&&(mois== 11))	{
	age= annee - 1965
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans la France lance son 1<sup>er</sup> satellite <P></FONT>";
	}
if ((jour== 28)&&(mois== 11))	{
	age= annee - 1954
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans mourrait <a href='Divers/dico/Fermi/enrico fermi.html'>Enrico Fermi</A> <P></FONT>";
	}
if ((jour== 1)&&(mois== 12))	{
	age= annee - 1990
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : fin du percement du tunnel sous la Manche<P></FONT>";
	}
if ((jour== 11)&&(mois== 12))	{
	age= annee - 1895
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans 1<sup>er</sup> essais de calcul de l'effet de serre<P></FONT>";
	}
if ((jour== 13)&&(mois== 12))	{
	age= annee - 1816
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/H_Siemens.htm'>Werner Von Siemens</A> <P></FONT>";
	}
if ((jour== 14)&&(mois== 12))	{
	age= annee - 1900
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : Max Plank &eacute;nonce la th&eacute;orie des quanta<P></FONT>";
	}
if ((jour== 15)&&(mois== 12))	{
	age= annee - 1948
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : 1<sup>&egrave;re</sup> pile atomique fran&ccedil;aise <P></FONT>";
	}
if ((jour== 24)&&(mois== 12)||(jour== 25)&&(mois== 12))
	mes=mes+"<font color=red>Joyeux <B>NOEL</B><P></FONT>";
if ((jour== 25)&&(mois== 12))	{
	age= annee - 1642
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans naissait Isaac Newton <P></FONT>";
	}
if ((jour== 28)&&(mois== 12))	{
	age= annee - 1895
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans : 1<sup>&egrave;re</sup> repr&eacute;sentation du cin&eacute;matographe Lumi&egrave;re <P></FONT>";
	}
if ((jour== 31)&&(mois== 12))
	mes=mes+"<font color=red>pas d'alcool se soir !<P></FONT>";if ((jour== 29)&&(mois== 8))	{
	age= annee - 1901
	mes=mes+"<font color='FF9966'>il y a "+ age  + " ans na&icirc;ssait <a href='Divers/dico/Fermi/enrico fermi.html'>Enrico Fermi</A> <P></FONT>";
	}
	

	
			
document.write(mes);
