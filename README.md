# Ninja Mestre

## Før I begynder at kode
| Spørgsmål                         | Gruppens Beslutning                                                             |
|-----------------------------------|---------------------------------------------------------------------------------|
| Hvilke filer skal projektet have? | `server.js`, `logger.js`                                                        |
| Hvor håndteres routes?            | `server.js`                                                                     |
| Hvor anvendes async/await?        | Anvendes til filhåndtering i forbindelse med /read-file & /write-file endpoints |
| Hvor håndteres fejl?              | Asynkron kode (vores to endpoints /read-file & /write-file)                     |
| Hvilket event skal udsendes?      | log event                                                                       |
| Hvad skal loggen indeholde?       | GET /read file, POST /write-file                                                |
| Hvordan vil i teste fejlforløbet? | Manuel test, brug af Postman / Browser                                          |

## Hvad laver programmet?
Programmet er en simpel Node.js server, der kan håndtere filoperationer. Den har to endpoints: en GET endpoint til at læse en fil og en POST endpoint til at skrive til en fil. Serveren bruger async/await til at håndtere asynkrone filoperationer, hvilket gør koden mere læsbar og nemmere at vedligeholde. Derudover udsender serveren log events, som kan bruges til at spore aktivitet og fejl.

## Endpoints
| Metode | Endpoint    | Funktion           |
|--------|-------------|--------------------|
| GET    | /read-file  | Læser en fil       |
| POST   | /write-file | Skriver til en fil |

## Asykronitet
Forklar med egne ord:

**Hvad sker der i Node.js, mens serveren venter på en filoperation?**

I Node.js, når serveren venter på en filoperation, bliver den ikke blokeret. I stedet for at vente på, at operationen er færdig, kan serveren fortsætte med at håndtere andre forespørgsler. Dette gør Node.js meget effektivt til håndtering af mange samtidige forbindelser.

## EventEmitter
Forklar:

**Hvilket event bruger I, og hvornår bliver det udsendt?**

Vi bruger et "log" event, som bliver udsendt hver gang der sker en filoperation, enten ved at læse eller skrive til en fil. Dette event kan bruges til at logge aktiviteten i serveren og spore eventuelle fejl.

## Test
Beskriv kort:

- Hvordan I testede succes 

Vi testede succes ved at kalde de to endpoints med korrekte parametre og verificere, at serveren returnerede de forventede resultater.

- Hvordan I fremkaldte en fejl 

Vi fremkaldte en fejl ved at kalde endpoints med forkerte parametre og verificere, at serveren returnerede de forventede fejlmeddelelser.

- Hvordan I testede flere requests  

Vi brugte flere klienter (Postman / Browser) til at sende flere samtidige requests til serveren og verificerede, at serveren håndterede dem korrekt uden at gå ned.

## Refleksionsspørgsmål

**Hvorfor bruges async/await i stedet for callbacks?**

Async/await gør koden mere læsbar og nemmere at vedligeholde, da den tillader os at skrive asynkrone operationer som om de var synkrone.

**Hvad ville der ske, hvis du fjernede eventEmitteren?**

Hvis vi fjernede eventEmitteren, ville vi miste muligheden for at udsende log events, hvilket ville gøre det sværere at spore aktivitet og fejl i serveren. Vi ville ikke kunne logge, hvornår filoperationer blev udført, og det ville gøre fejlfinding mere udfordrende.

**Hvordan ville du gøre logging persistent (f.eks. til fil eller database)?**

For at gøre logging persistent kunne vi ændre vores log event handler til at skrive logbeskederne til en fil eller en database i stedet for blot at logge dem til konsollen. For eksempel kunne vi bruge Node.js' `fs` modul til at skrive logbeskeder til en tekstfil, eller vi kunne bruge et databasebibliotek som `mongoose` til at gemme logbeskeder i en MongoDB-database.

**Kan denne løsning skaleres til 1000 klienter? Hvorfor/hvorfor ikke?**

Ja, denne løsning kan skaleres til 1000 klienter, da Node.js er designet til at håndtere mange samtidige forbindelser effektivt. Den asynkrone natur af Node.js gør det muligt for serveren at håndtere mange forespørgsler uden at blive blokeret.

## Individuelt checkpoint
**Hvor anvendes async/await?**

Await anvedes i vores to endpoints /read-file & /write-file til at håndtere asynkrone filoperationer.
Async bruges i vores to endpoints /read-file og /write-file for at markere dem som asynkrone funktioner, hvilket gør der muligt at bruge await inde for disse funktioner.

**Hvad sker der ved await?**

Når serveren når en await, stopper den midlertidigt udførelsen af den aktuelle funktion, indtil den asynkrone metode er fuldføret.

**Hvor håndteres fejl?**

Fejl håndteres i to endoponts /read-file og /write-file ved brug af try/catch blokke, som fanger fejl. Men også steder hvor især de asynkrone metoder med sikkerhed kan give fejl, f.eks. i forbindelse med logging til fil i loggeren.

**Hvordan fungerer jeres EventEmitter?**

Eventemitteren udsender et log event hver gange der sker en filoprettelse eller filskrivning. Dette event kan bruges til at logge aktiviteten i serveren og spore eventuelle fejl. Fungere lidt på samme måde som en server listener i Java. Den lytter på om noget skal logges og hvis det skal, skriver den i vores tilfælde log-beskeden både til console og `log.txt`.

**Hvad sker der, når flere requests kommer tæt efter hinanden?**

De kommer på en gang men måske ikke i  rekkefølge, men serveren håndterer dem stadigt, da den asynkrone natur af Node.js gør det muligt for serveren at håndtere mange forespørgsler uden at blive blokeret.


**Hvad har AI-agenten bidraget med?**

Vi har ikke brugt Agentic Ai agenten i denne opgave, da vi har valgt at lære Node.js på egen hånd uden hjælp fra AI. 
men hvad vi har brugt af ai er:

Primært til spørgsmål, hvis der var noget vi ikke forstod, f.eks.:
- Hvorfor får jeg / hvad betyder denne fejl?
- Foklar meningen med next() - metoden

**Hvordan kontrollerede I agentens ændringer?**

Dette gjorde vi ikke, da AI ikke har været brugt i forbindelse med Agentic Coding i denne opgave.


### **Udvidelser: Timestamp til log, Logging til fil og Simpel validering af input ({ error: 'Content is required' })**

## Afslutning
Den vigtigste forskel mellem den måde, vi håndterede samtidighed på i vores Java-server, og den måde Node.js-serveren arbejder på, er 
den asynkrone natur af Node.js. I Java-serveren blev samtidige forespørgsler håndteret ved hjælp af tråde, hvilket kan føre til højere ressourceforbrug og kompleksitet. I Node.js håndteres samtidige forespørgsler ved hjælp af en event-loop og asynkrone operationer, hvilket gør det mere effektivt og skalerbart.



 