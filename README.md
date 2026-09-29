# Ninja Mestre

## Før I begynder at kode
| Spørgsmål                         | Gruppens Beslutning |
|-----------------------------------|---------------------|
| Hvilke filer skal projektet have? | `server.js`, `logger.js`, `klient - et eller andet?` |
| Hvor håndteres routes?            |   `server.js`             |
| Hvor anvendes async/await?        | Anvendes til filhåndtering i forbindelse med /read-file & /write-file endpoints                    |
| Hvor håndteres fejl?              | Asynkron kode (vores to endpoints /read-file & /write-file)       |
| Hvilket event skal udsendes?      | log event         |
| Hvad skal loggen indeholde?       | GET /read file, POST /write-file              |
| Hvordan vil i teste fejlforløbet? | Manuel test, brug af Postman / Browser               |

## Hvad laver programmet?
Beskriv kort serveren.

## Endpoints
| Metode | Endpoint    | Funktion           |
|--------|-------------|--------------------|
| GET    | /read-file  | Læser en fil       |
| POST   | /write-file | Skriver til en fil |

## Asykronitet
Forklar med egne ord:

Hvad sker der i Node.js, mens serveren venter på en filoperation?

## EventEmitter
Forklar:

Hvilket event bruger I, og hvornår bliver det udsendt? 

## Test
Beskriv kort:

- Hvordan I testede succes

- Hvordan I fremkaldte en fejl
- Hvordan I testede flere requests  

## Refleksionsspørgsmål

**Hvorfor bruges async/await i stedet for callbacks?**

**Hvad ville der ske, hvis du fjernede eventEmitteren?**

**Hvordan ville du gøre logging persistent (f.eks. til fil eller database)?**

**Kan denne løsning skaleres til 1000 klienter? Hvorfor/hvorfor ikke?**

## Afslutning
Den vigtigste forskel mellem den måde, vi håndterede samtidighed på i vores Java-server, og den måde Node.js-serveren arbejder på, er … 