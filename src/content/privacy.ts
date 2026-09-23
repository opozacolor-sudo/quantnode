import type { Locale } from "@/i18n/config";
import type { LegalDoc } from "./legal-types";

const fr: LegalDoc = {
  kicker: "Protection des données",
  title: "Politique de confidentialité (RGPD)",
  updated: "Dernière mise à jour : 23 septembre 2026",
  tocLabel: "Sommaire",
  intro: [
    "La présente politique décrit la manière dont AlgorithmNode, opérateur du site https://www.algorithmnode.site (le « responsable du traitement », « nous »), collecte, utilise, conserve, partage et protège vos données à caractère personnel, conformément au règlement (UE) 2016/679 (RGPD), à la directive ePrivacy, et aux lois nationales d’adaptation applicables.",
    "Elle s’applique à la navigation sur le site, au formulaire de contact, à l’authentification, au tableau de bord, aux journaux techniques et aux cookies. Elle ne s’applique pas aux traitements autonomes des Places (Binance, XTB, Plus500, banques, prestataires de paiement) pour lesquels vous devez consulter leurs propres politiques.",
    "Les Conditions générales d’utilisation et la présente politique se complètent. En cas de question, utilisez le formulaire de contact. La langue de référence des documents juridiques est le français.",
  ],
  sections: [
    {
      title: "1. Responsable du traitement et contact",
      paragraphs: [
        "Le responsable du traitement est AlgorithmNode, pour le site algorithmnode.site et les traitements liés au Service. Aucun délégué à la protection des données (DPO) n’est désigné à ce jour au sens de l’article 37 du RGPD, le responsable n’étant pas dans un des cas de désignation obligatoire ; un point de contact « vie privée » est néanmoins assuré via le formulaire de contact, avec pour objet recommandé : « RGPD — exercice des droits ».",
        "Vous pouvez également introduire une réclamation auprès d’une autorité de contrôle, en particulier la Commission nationale de l’informatique et des libertés (CNIL, France), ou l’autorité de votre lieu de résidence habituelle, de travail ou de l’infraction alléguée (article 77 RGPD). La liste des autorités est publiée par le Comité européen de la protection des données.",
      ],
    },
    {
      title: "2. Catégories de données traitées",
      paragraphs: ["Selon votre usage, nous pouvons traiter :"],
      list: [
        "Données d’identité et de contact : nom, adresse e-mail, numéro de téléphone, contenu du message, identifiant de connexion.",
        "Données de compte : e-mail technique, identifiants internes, rôle (utilisateur / administrateur), date de création, statut.",
        "Données d’usage du Service : paramètres de trading (stop-loss, plafonds, exposition), soldes affichés, mouvements de ledger, historique d’ordres lorsqu’ils sont enregistrés pour le Compte.",
        "Données techniques : adresse IP, user-agent, horodatage, pages consultées, journaux d’erreur, identifiants de session, cookie de langue, jetons d’authentification stockés localement.",
        "Données de marché non personnelles : cotations publiques agrégées (crypto, énergie, etc.), qui ne permettent pas de vous identifier.",
      ],
    },
    {
      title: "3. Données que nous ne collectons pas intentionnellement",
      paragraphs: [
        "Nous ne demandons pas de données sensibles au sens de l’article 9 du RGPD (santé, opinions politiques, origine raciale, données biométriques à des fins d’identification, etc.). Merci de ne pas les insérer dans le champ message. Nous ne collectons pas de données de mineurs de moins de 18 ans de manière volontaire. Le Service de trading n’est pas destiné aux enfants.",
        "Nous ne vendons pas de données personnelles et n’achetons pas de fichiers de prospection.",
      ],
    },
    {
      title: "4. Finalités et bases juridiques (art. 6 RGPD)",
      paragraphs: ["Chaque traitement repose sur une base juridique :"],
      list: [
        "Fourniture du Service, authentification, tableau de bord, Limites, ledger : exécution du contrat ou mesures précontractuelles (art. 6.1.b).",
        "Formulaire de contact, émission d’un compte par l’administrateur, réponses techniques : mesures précontractuelles / contrat (art. 6.1.b) et intérêt légitime à traiter les demandes (art. 6.1.f).",
        "Sécurité, journaux, prévention de la fraude et des abus, sauvegardes : intérêt légitime (art. 6.1.f) et, le cas échéant, obligation légale (art. 6.1.c).",
        "Cookie de langue et préférences strictement nécessaires au fonctionnement : intérêt légitime et/ou nécessité technique ; ces traceurs sont essentiels au Service (directive ePrivacy).",
        "Conservation comptable, lutte contre le blanchiment lorsque la loi l’impose : obligation légale (art. 6.1.c).",
        "Preuve de l’acceptation des documents, gestion d’un litige : intérêt légitime (art. 6.1.f).",
      ],
    },
    {
      title: "5. Intérêt légitime — test de mise en balance",
      paragraphs: [
        "Lorsque nous invoquons l’intérêt légitime, nous considérons : (i) notre intérêt à exploiter un site sûr, à mémoriser la langue, à répondre aux messages et à défendre nos droits ; (ii) l’impact raisonnablement attendu pour un visiteur d’un site B2B de technologie de marché ; (iii) les garanties (minimisation, durées limitées, pas de publicité comportementale tierce sur le site à ce jour). Vous pouvez vous opposer à un traitement fondé sur l’article 6.1.f pour des raisons tenant à votre situation particulière, sauf motifs légitimes impérieux ou exercice de droits en justice.",
      ],
    },
    {
      title: "6. Destinataires et sous-traitants (art. 28 RGPD)",
      paragraphs: [
        "Les données sont accessibles, selon le besoin, à l’administrateur d’AlgorithmNode et, le cas échéant, à des conseils (avocat, expert-comptable, prestataire de sécurité) tenus à confidentialité.",
        "Nous recourons à des sous-traitants qui traitent des données pour notre compte, sur instruction, avec des clauses contractuelles appropriées :",
      ],
      list: [
        "Hébergement et diffusion du site : Vercel (infrastructure cloud, journaux techniques, déploiement).",
        "Base de données, authentification et stockage applicatif : Supabase, avec hébergement de projet indiqué en Union européenne (région eu-central-1).",
        "Fournisseurs de cotations publiques (CoinGecko, sources de type Yahoo Finance) : ils reçoivent des requêtes techniques (IP du serveur ou du client selon l’architecture) pour afficher des prix ; ils ne sont pas destinés à recevoir le contenu de votre formulaire de contact.",
        "Places d’exécution (Binance, XTB, Plus500) : responsables distincts pour leurs propres traitements KYC et d’ordre lorsque vous y détenez une relation.",
      ],
    },
    {
      title: "7. Transferts hors de l’Espace économique européen",
      paragraphs: [
        "Certains sous-traitants peuvent transférer des données vers des pays tiers, notamment les États-Unis. Le cas échéant, le transfert repose sur une décision d’adéquation (par exemple le cadre EU-US Data Privacy Framework pour les entités certifiées) et/ou les clauses contractuelles types de la Commission européenne (art. 46 RGPD), complétées si besoin de mesures additionnelles (chiffrement en transit, minimisation).",
        "Vous pouvez demander des informations supplémentaires sur ces garanties via le formulaire de contact.",
      ],
    },
    {
      title: "8. Durées de conservation",
      paragraphs: ["Nous appliquons le principe de minimisation dans le temps :"],
      list: [
        "Messages du formulaire de contact : durée nécessaire au traitement de la demande, puis archivage intermédiaire jusqu’à trois (3) ans pour la preuve des échanges, sauf litige en cours.",
        "Compte, ledger, Limites : durée de la relation contractuelle, puis conservation limitée aux obligations légales (notamment cinq à dix ans lorsque des règles comptables ou AML s’appliquent) ou à la prescription des actions.",
        "Journaux techniques et IP : en règle générale douze (12) mois au plus, sauf besoin de sécurité plus long et proportionné.",
        "Cookie de langue : jusqu’à treize (13) mois, renouvelable par votre usage.",
        "Session d’authentification : jusqu’à expiration du jeton, déconnexion ou révocation.",
      ],
    },
    {
      title: "9. Sécurité (art. 32 RGPD)",
      paragraphs: [
        "Nous mettons en œuvre des mesures techniques et organisationnelles appropriées : transport chiffré (HTTPS), contrôle d’accès, comptes émis uniquement par l’administrateur, séparation des rôles, sauvegardes gérées par l’hébergeur, principe du moindre privilège. Aucune mesure n’étant infaillible, le risque résiduel d’incident ne peut être exclu.",
        "En cas de violation de données susceptible d’engendrer un risque pour vos droits, nous notifierons l’autorité compétente dans les 72 heures si le RGPD l’exige, et vous informerons lorsque le risque est élevé (art. 33 et 34).",
      ],
    },
    {
      title: "10. Vos droits",
      paragraphs: [
        "Dans les conditions du RGPD, vous disposez des droits suivants : accès (art. 15), rectification (art. 16), effacement (art. 17), limitation (art. 18), portabilité (art. 20), opposition (art. 21), retrait du consentement lorsque le traitement y est fondé (art. 7), et directives relatives au sort des données après le décès selon le droit national applicable.",
        "Pour les exercer, utilisez le formulaire de contact en joignant les éléments permettant de vérifier votre identité. Nous répondons dans un délai d’un (1) mois, prorogeable de deux (2) mois en cas de complexité, conformément à l’article 12 du RGPD. Le droit à l’effacement peut être refusé lorsqu’une conservation est nécessaire à la constatation, à l’exercice ou à la défense de droits en justice, ou au respect d’une obligation légale.",
      ],
    },
    {
      title: "11. Décisions automatisées et profilage (art. 22 RGPD)",
      paragraphs: [
        "Le Service d’exécution repose sur des Agents et des Bots qui peuvent, sans intervention humaine à chaque tick, envoyer des ordres dans le cadre des Limites que vous (ou l’administrateur) avez définies. Cela peut produire des effets significatifs sur votre exposition de marché.",
        "Ce mécanisme est nécessaire à la fourniture du Service contractuel d’exécution algorithmique (art. 22.2.a). Vous pouvez demander une intervention humaine, exprimer votre point de vue et contester une décision d’exécution automatisée en nous contactant, et vous pouvez resserrer, suspendre ou faire clôturer les paramètres d’automatisation dans la mesure ouverte à votre Compte. Un stop-loss ou un plafond n’élimine pas le risque de marché.",
      ],
    },
    {
      title: "12. Cookies, stockage local et traceurs",
      paragraphs: [
        "Le site utilise des traceurs strictement nécessaires : cookie de langue (an_locale), stockage local de la préférence linguistique, jetons de session d’authentification (fournisseur d’auth), éventuellement un accusé de lecture de la présente information cookies. Ils permettent le fonctionnement du Service (langue, connexion) et ne requièrent pas de consentement au titre de l’ePrivacy lorsqu’ils sont strictement nécessaires.",
        "À la date de cette politique, AlgorithmNode n’installe pas de cookies publicitaires, de reciblage ou de réseaux sociaux tiers à des fins de publicité comportementale. Si des outils d’audience non essentiels étaient ajoutés, un bandeau de consentement préalable serait mis en place, avec possibilité de refuser, et cette politique serait mise à jour.",
        "Vous pouvez supprimer les cookies via les paramètres de votre navigateur ; la langue reviendra alors au français par défaut. Le blocage des cookies essentiels peut dégrader la connexion au tableau de bord.",
      ],
    },
    {
      title: "13. Sources des données",
      paragraphs: [
        "Les données proviennent de vous (formulaires, Compte), de votre terminal (journaux, cookies), et, pour les prix, de sources publiques de marché. Nous ne constituons pas de scoring de solvabilité grand public.",
      ],
    },
    {
      title: "14. Mineurs",
      paragraphs: [
        "Le Service n’est pas destiné aux personnes de moins de 18 ans. Si nous apprenons qu’un mineur nous a transmis des données, nous les supprimerons, sous réserve d’obligations légales de conservation.",
      ],
    },
    {
      title: "15. Modifications",
      paragraphs: [
        "Nous pouvons actualiser cette politique pour refléter un changement de traitement, de sous-traitant ou de loi. La date figurant en tête fait foi. En cas de changement substantiel, une information sera fournie sur le site ou, si possible, par un moyen raisonnable eu égard aux coordonnées dont nous disposons.",
      ],
    },
  ],
};

const en: LegalDoc = {
  kicker: "Data protection",
  title: "Privacy policy (GDPR)",
  updated: "Last updated: 23 September 2026",
  tocLabel: "Contents",
  intro: [
    "This policy explains how AlgorithmNode, operator of https://www.algorithmnode.site (the “controller”, “we”), collects, uses, stores, shares and protects personal data under Regulation (EU) 2016/679 (GDPR), the ePrivacy rules, and applicable national implementing laws.",
    "It covers browsing, the contact form, authentication, the dashboard, technical logs and cookies. It does not cover standalone processing by Venues (Binance, XTB, Plus500, banks, payment providers); you must read their policies.",
    "The Terms of use and this policy complement each other. Questions go through the contact form. The reference language of the legal documents is French.",
  ],
  sections: [
    {
      title: "1. Controller and contact",
      paragraphs: [
        "The controller is AlgorithmNode, for algorithmnode.site and processing linked to the Service. No Data Protection Officer is appointed under Article 37 GDPR at this time, as a mandatory appointment does not currently apply; a privacy contact is nonetheless available via the contact form, recommended subject: “GDPR — data subject request”.",
        "You may also lodge a complaint with a supervisory authority, in particular the CNIL (France), or the authority of your habitual residence, place of work or place of the alleged infringement (Article 77 GDPR). The EDPB publishes the list of authorities.",
      ],
    },
    {
      title: "2. Categories of data",
      paragraphs: ["Depending on use, we may process:"],
      list: [
        "Identity and contact data: name, email, phone number, message content, login identifier.",
        "Account data: technical email, internal IDs, role (user / administrator), creation date, status.",
        "Service-use data: trading parameters (stop-loss, caps, exposure), displayed balances, ledger movements, order history when stored for the Account.",
        "Technical data: IP address, user-agent, timestamps, pages viewed, error logs, session IDs, language cookie, locally stored auth tokens.",
        "Non-personal market data: aggregated public quotes, which do not identify you.",
      ],
    },
    {
      title: "3. Data we do not intentionally collect",
      paragraphs: [
        "We do not request special-category data under Article 9 GDPR. Please do not insert it in the message field. We do not voluntarily collect data of children under 18. The trading Service is not directed at children.",
        "We do not sell personal data and do not buy prospecting files.",
      ],
    },
    {
      title: "4. Purposes and legal bases (Art. 6 GDPR)",
      paragraphs: ["Each processing operation has a legal basis:"],
      list: [
        "Providing the Service, authentication, dashboard, Limits, ledger: contract or pre-contractual steps (Art. 6(1)(b)).",
        "Contact form, administrator-issued accounts, technical replies: pre-contractual steps / contract (Art. 6(1)(b)) and legitimate interest in handling requests (Art. 6(1)(f)).",
        "Security, logs, fraud and abuse prevention, backups: legitimate interest (Art. 6(1)(f)) and, where applicable, legal obligation (Art. 6(1)(c)).",
        "Language cookie and strictly necessary preferences: legitimate interest and/or technical necessity; these tracers are essential (ePrivacy).",
        "Accounting retention and AML where the law requires it: legal obligation (Art. 6(1)(c)).",
        "Proof of acceptance of documents, dispute management: legitimate interest (Art. 6(1)(f)).",
      ],
    },
    {
      title: "5. Legitimate interest — balancing test",
      paragraphs: [
        "Where we rely on legitimate interest, we weigh: (i) our interest in a secure site, remembering language, answering messages and defending our rights; (ii) the reasonably expected impact on a visitor of a B2B market-technology site; (iii) safeguards (minimisation, limited retention, no third-party behavioural advertising on the site today). You may object to Art. 6(1)(f) processing on grounds relating to your particular situation, unless we demonstrate compelling legitimate grounds or need the data for legal claims.",
      ],
    },
    {
      title: "6. Recipients and processors (Art. 28 GDPR)",
      paragraphs: [
        "Data is available, on a need-to-know basis, to AlgorithmNode’s administrator and, where needed, advisers (lawyer, accountant, security provider) bound by confidentiality.",
        "We use processors acting on our instructions under appropriate contracts:",
      ],
      list: [
        "Site hosting and delivery: Vercel (cloud infrastructure, technical logs, deployment).",
        "Database, authentication and application storage: Supabase, with project hosting indicated in the European Union (eu-central-1).",
        "Public quote providers (CoinGecko, Yahoo Finance-type sources): they receive technical requests (server or client IP depending on architecture) to display prices; they are not meant to receive your contact-form content.",
        "Execution Venues (Binance, XTB, Plus500): separate controllers for their own KYC and order processing when you have a relationship with them.",
      ],
    },
    {
      title: "7. Transfers outside the EEA",
      paragraphs: [
        "Some processors may transfer data to third countries, including the United States. Transfers then rest on an adequacy decision (for example the EU-US Data Privacy Framework for certified entities) and/or the European Commission’s standard contractual clauses (Art. 46 GDPR), plus additional measures where needed (in-transit encryption, minimisation).",
        "You may request more information on these safeguards via the contact form.",
      ],
    },
    {
      title: "8. Retention",
      paragraphs: ["We apply storage limitation:"],
      list: [
        "Contact-form messages: as long as needed to handle the request, then up to three (3) years in intermediate archive for proof of exchanges, unless a dispute is pending.",
        "Account, ledger, Limits: duration of the contractual relationship, then limited retention for legal duties (including five to ten years where accounting or AML rules apply) or limitation periods.",
        "Technical logs and IP: as a rule no more than twelve (12) months, unless a longer proportionate security need exists.",
        "Language cookie: up to thirteen (13) months, renewable through use.",
        "Auth session: until token expiry, sign-out or revocation.",
      ],
    },
    {
      title: "9. Security (Art. 32 GDPR)",
      paragraphs: [
        "We apply appropriate technical and organisational measures: HTTPS, access control, accounts issued only by the administrator, role separation, host-managed backups, least privilege. No measure is infallible; residual incident risk remains.",
        "If a personal-data breach is likely to result in a risk to your rights, we will notify the competent authority within 72 hours where GDPR so requires, and inform you where the risk is high (Arts. 33 and 34).",
      ],
    },
    {
      title: "10. Your rights",
      paragraphs: [
        "Subject to GDPR conditions, you have rights of access (Art. 15), rectification (Art. 16), erasure (Art. 17), restriction (Art. 18), portability (Art. 20), objection (Art. 21), withdrawal of consent where processing is consent-based (Art. 7), and post-mortem instructions where national law so provides.",
        "Exercise them via the contact form with information allowing us to verify identity. We reply within one (1) month, extendable by two (2) months for complexity (Art. 12). Erasure may be refused where retention is needed for legal claims or a legal obligation.",
      ],
    },
    {
      title: "11. Automated decisions and profiling (Art. 22 GDPR)",
      paragraphs: [
        "Execution relies on Agents and Bots that may, without a human at each tick, send orders within Limits you (or the administrator) set. This can significantly affect your market exposure.",
        "The mechanism is necessary to perform the contractual algorithmic-execution Service (Art. 22(2)(a)). You may request human intervention, express your view and contest an automated execution outcome by contacting us, and you may tighten, pause or request closure of automation settings to the extent your Account allows. A stop-loss or cap does not remove market risk.",
      ],
    },
    {
      title: "12. Cookies, local storage and tracers",
      paragraphs: [
        "The site uses strictly necessary tracers: the language cookie (an_locale), local storage of the language preference, authentication session tokens, and possibly an acknowledgement of this cookie notice. They make the Service work (language, sign-in) and do not require ePrivacy consent when strictly necessary.",
        "As of this policy, AlgorithmNode does not set advertising, retargeting or third-party social cookies for behavioural advertising. If non-essential analytics were added, a prior consent banner with a refuse option would be introduced and this policy updated.",
        "You may delete cookies in your browser; language will then default to French. Blocking essential cookies may degrade dashboard sign-in.",
      ],
    },
    {
      title: "13. Sources of data",
      paragraphs: [
        "Data comes from you (forms, Account), your device (logs, cookies), and, for prices, public market sources. We do not run a public credit-scoring file.",
      ],
    },
    {
      title: "14. Children",
      paragraphs: [
        "The Service is not intended for anyone under 18. If we learn a child sent us data, we will delete it, subject to legal retention duties.",
      ],
    },
    {
      title: "15. Changes",
      paragraphs: [
        "We may update this policy to reflect a change in processing, processors or law. The date at the top prevails. For a material change, notice will be given on the site or, where reasonably possible, using contact details we hold.",
      ],
    },
  ],
};

const ro: LegalDoc = {
  kicker: "Protecția datelor",
  title: "Politică de confidențialitate (GDPR)",
  updated: "Ultima actualizare: 23 septembrie 2026",
  tocLabel: "Cuprins",
  intro: [
    "Această politică descrie modul în care AlgorithmNode, operatorul site-ului https://www.algorithmnode.site (operatorul de date, „noi”), colectează, folosește, stochează, partajează și protejează datele cu caracter personal, conform Regulamentului (UE) 2016/679 (GDPR), regulilor ePrivacy și legilor naționale de punere în aplicare.",
    "Se aplică navigării, formularului de contact, autentificării, tabloului de bord, jurnalelor tehnice și cookie-urilor. Nu acoperă prelucrările autonome ale Piețelor (Binance, XTB, Plus500, bănci, prestatori de plăți); trebuie să le citiți politicile.",
    "Termenii și condițiile și prezenta politică se completează. Întrebările se trimit prin formularul de contact. Limba de referință a documentelor juridice este franceza.",
  ],
  sections: [
    {
      title: "1. Operatorul de date și contact",
      paragraphs: [
        "Operatorul este AlgorithmNode, pentru algorithmnode.site și prelucrările legate de Serviciu. Nu este desemnat un DPO în sensul art. 37 GDPR în acest moment, nefiind un caz de desemnare obligatorie; există totuși un punct de contact „confidențialitate” prin formular, subiect recomandat: „GDPR — exercitare drepturi”.",
        "Puteți depune o plângere la o autoritate de supraveghere, în special CNIL (Franța) sau autoritatea din statul de reședință obișnuită, loc de muncă ori locul presupusei încălcări (art. 77 GDPR). Lista autorităților este publicată de CEPD. În România, autoritatea competentă este ANSPDCP.",
      ],
    },
    {
      title: "2. Categorii de date",
      paragraphs: ["În funcție de utilizare, putem prelucra:"],
      list: [
        "Date de identitate și contact: nume, e-mail, telefon, conținutul mesajului, identificator de autentificare.",
        "Date de cont: e-mail tehnic, ID-uri interne, rol (utilizator / administrator), dată creare, status.",
        "Date de utilizare a Serviciului: parametri de tranzacționare (stop-loss, plafoane, expunere), solduri afișate, mișcări de ledger, istoric de ordine când este stocat pentru Cont.",
        "Date tehnice: adresă IP, user-agent, marcaje de timp, pagini vizitate, jurnale de eroare, ID-uri de sesiune, cookie de limbă, token-uri de autentificare stocate local.",
        "Date de piață nepersonale: cotații publice agregate, care nu permit identificarea dumneavoastră.",
      ],
    },
    {
      title: "3. Date pe care nu le colectăm intenționat",
      paragraphs: [
        "Nu solicităm date din categorii speciale (art. 9 GDPR). Vă rugăm să nu le introduceți în mesaj. Nu colectăm voluntar date ale minorilor sub 18 ani. Serviciul de tranzacționare nu se adresează copiilor.",
        "Nu vindem date personale și nu cumpărăm baze de prospecțiune.",
      ],
    },
    {
      title: "4. Scopuri și temeiuri juridice (art. 6 GDPR)",
      paragraphs: ["Fiecare prelucrare are un temei:"],
      list: [
        "Furnizarea Serviciului, autentificare, tablou de bord, Limite, ledger: executarea contractului sau demersuri precontractuale (art. 6.1.b).",
        "Formular de contact, conturi emise de administrator, răspunsuri tehnice: demersuri precontractuale / contract (art. 6.1.b) și interes legitim de a trata solicitările (art. 6.1.f).",
        "Securitate, jurnale, prevenirea fraudei și abuzului, backup: interes legitim (art. 6.1.f) și, după caz, obligație legală (art. 6.1.c).",
        "Cookie de limbă și preferințe strict necesare: interes legitim și/sau necesitate tehnică; acești urmaritori sunt esențiali (ePrivacy).",
        "Arhivare contabilă și AML când legea o impune: obligație legală (art. 6.1.c).",
        "Dovada acceptării documentelor, gestionarea unui litigiu: interes legitim (art. 6.1.f).",
      ],
    },
    {
      title: "5. Interes legitim — test de ponderare",
      paragraphs: [
        "Când invocăm interesul legitim, cântărim: (i) interesul de a opera un site sigur, de a memora limba, de a răspunde mesajelor și de a ne apăra drepturile; (ii) impactul rezonabil așteptat pentru un vizitator al unui site B2B de tehnologie de piață; (iii) garanțiile (minimizare, durate limitate, fără publicitate comportamentală terță pe site în prezent). Vă puteți opune unei prelucrări întemeiate pe art. 6.1.f din motive legate de situația particulară, exceptând motive legitime imperioase sau exercitarea unor drepturi în justiție.",
      ],
    },
    {
      title: "6. Destinatari și împuterniciți (art. 28 GDPR)",
      paragraphs: [
        "Datele sunt accesibile, după nevoie, administratorului AlgorithmNode și, dacă este cazul, consilierilor (avocat, contabil, prestator de securitate) ținuți la confidențialitate.",
        "Folosim împuterniciți care prelucrează date pentru noi, pe instrucțiuni, cu clauze contractuale adecvate:",
      ],
      list: [
        "Găzduire și livrare site: Vercel (infrastructură cloud, jurnale tehnice, deployment).",
        "Bază de date, autentificare și stocare aplicație: Supabase, cu găzduire de proiect indicată în Uniunea Europeană (eu-central-1).",
        "Furnizori de cotații publice (CoinGecko, surse de tip Yahoo Finance): primesc cereri tehnice (IP server sau client, după arhitectură) pentru afișarea prețurilor; nu sunt destinați să primească conținutul formularului de contact.",
        "Piețe de execuție (Binance, XTB, Plus500): operatori distincți pentru KYC și ordine atunci când aveți o relație cu ele.",
      ],
    },
    {
      title: "7. Transferuri în afara SEE",
      paragraphs: [
        "Unii împuterniciți pot transfera date către țări terțe, inclusiv Statele Unite. Transferul se bazează, după caz, pe o decizie de adecvare (de exemplu EU-US Data Privacy Framework pentru entități certificate) și/sau clauzele contractuale standard ale Comisiei Europene (art. 46 GDPR), completate dacă e nevoie cu măsuri suplimentare (criptare în tranzit, minimizare).",
        "Puteți cere informații suplimentare despre aceste garanții prin formularul de contact.",
      ],
    },
    {
      title: "8. Durate de stocare",
      paragraphs: ["Aplicăm minimizarea în timp:"],
      list: [
        "Mesaje din formular: durata necesară soluționării, apoi până la trei (3) ani în arhivă intermediară pentru dovada schimburilor, exceptând un litigiu în curs.",
        "Cont, ledger, Limite: durata relației contractuale, apoi păstrare limitată pentru obligații legale (inclusiv cinci-zece ani când se aplică reguli contabile sau AML) sau pentru prescripție.",
        "Jurnale tehnice și IP: de regulă cel mult douăsprezece (12) luni, exceptând o nevoie de securitate mai lungă și proporțională.",
        "Cookie de limbă: până la treisprezece (13) luni, reînnoibil prin utilizare.",
        "Sesiune de autentificare: până la expirarea token-ului, deconectare sau revocare.",
      ],
    },
    {
      title: "9. Securitate (art. 32 GDPR)",
      paragraphs: [
        "Aplicăm măsuri tehnice și organizatorice adecvate: HTTPS, control al accesului, conturi emise doar de administrator, separarea rolurilor, backup-uri gestionate de gazdă, privilegiu minim. Nicio măsură nu este infailibilă.",
        "În caz de încălcare a securității datelor care poate genera un risc pentru drepturile dumneavoastră, vom notifica autoritatea competentă în 72 de ore dacă GDPR o cere și vă vom informa când riscul este ridicat (art. 33 și 34).",
      ],
    },
    {
      title: "10. Drepturile dumneavoastră",
      paragraphs: [
        "În condițiile GDPR, aveți drepturile de acces (art. 15), rectificare (art. 16), ștergere (art. 17), restricționare (art. 18), portabilitate (art. 20), opoziție (art. 21), retragerea consimțământului când prelucrarea se întemeiază pe el (art. 7) și directive privind soarta datelor după deces, conform dreptului național.",
        "Le exercitați prin formularul de contact, cu elemente de verificare a identității. Răspundem în o (1) lună, prelungibilă cu două (2) luni la complexitate (art. 12). Ștergerea poate fi refuzată când păstrarea e necesară pentru constatarea, exercitarea sau apărarea unui drept în justiție ori pentru o obligație legală.",
      ],
    },
    {
      title: "11. Decizii automatizate și profilare (art. 22 GDPR)",
      paragraphs: [
        "Execuția se bazează pe Agenți și Boți care pot, fără intervenție umană la fiecare tick, trimite ordine în Limitele setate de dumneavoastră (sau de administrator). Acest lucru poate afecta semnificativ expunerea de piață.",
        "Mecanismul este necesar executării Serviciului contractual de execuție algoritmică (art. 22.2.a). Puteți cere intervenție umană, vă puteți exprima punctul de vedere și contesta un rezultat automat, și puteți strânge, suspenda sau cere închiderea automatizării în măsura deschisă Contului. Un stop-loss sau un plafon nu elimină riscul de piață.",
      ],
    },
    {
      title: "12. Cookie-uri, stocare locală și urmaritori",
      paragraphs: [
        "Site-ul folosește urmaritori strict necesari: cookie-ul de limbă (an_locale), stocarea locală a preferinței de limbă, token-uri de sesiune de autentificare și, eventual, un ack al acestei informări. Ele fac Serviciul funcțional (limbă, conectare) și nu cer consimțământ ePrivacy când sunt strict necesare.",
        "La data acestei politici, AlgorithmNode nu instalează cookie-uri publicitare, de retargeting sau de rețele sociale terțe pentru publicitate comportamentală. Dacă s-ar adăuga analitică neesențială, s-ar introduce un banner de consimțământ prealabil, cu opțiune de refuz, și s-ar actualiza politica.",
        "Puteți șterge cookie-urile din browser; limba va reveni implicit la franceză. Blocarea cookie-urilor esențiale poate degrada autentificarea în tabloul de bord.",
      ],
    },
    {
      title: "13. Sursele datelor",
      paragraphs: [
        "Datele provin de la dumneavoastră (formulare, Cont), de pe terminal (jurnale, cookie-uri) și, pentru prețuri, din surse publice de piață. Nu constituim un scoring de solvabilitate public.",
      ],
    },
    {
      title: "14. Minori",
      paragraphs: [
        "Serviciul nu se adresează persoanelor sub 18 ani. Dacă aflăm că un minor ne-a transmis date, le vom șterge, sub rezerva obligațiilor legale de păstrare.",
      ],
    },
    {
      title: "15. Modificări",
      paragraphs: [
        "Putem actualiza această politică pentru a reflecta o schimbare de prelucrare, de împuternicit sau de lege. Data din antet prevalează. La o schimbare substanțială, vom informa pe site sau, dacă este rezonabil posibil, folosind datele de contact pe care le deținem.",
      ],
    },
  ],
};

export const privacyByLocale: Record<Locale, LegalDoc> = {
  fr,
  en,
  es: {
    ...en,
    kicker: "Protección de datos",
    title: "Política de privacidad (RGPD)",
    updated: "Última actualización: 23 de septiembre de 2026",
    tocLabel: "Índice",
    intro: [
      "Esta política describe cómo AlgorithmNode, operador de https://www.algorithmnode.site (el «responsable del tratamiento», «nosotros»), recoge, utiliza, conserva, comparte y protege los datos personales, conforme al Reglamento (UE) 2016/679 (RGPD), las normas ePrivacy y las leyes nacionales de adaptación.",
      "Se aplica a la navegación, el formulario de contacto, la autenticación, el panel, los registros técnicos y las cookies. No cubre los tratamientos autónomos de las plazas (Binance, XTB, Plus500, bancos, proveedores de pago).",
      "Las Condiciones de uso y esta política se complementan. Las preguntas se envían por el formulario de contacto. El idioma de referencia de los documentos jurídicos es el francés.",
    ],
  },
  it: {
    ...en,
    kicker: "Protezione dei dati",
    title: "Informativa sulla privacy (GDPR)",
    updated: "Ultimo aggiornamento: 23 settembre 2026",
    tocLabel: "Sommario",
    intro: [
      "La presente informativa descrive come AlgorithmNode, operatore di https://www.algorithmnode.site (il «titolare del trattamento», «noi»), raccoglie, utilizza, conserva, condivide e protegge i dati personali, ai sensi del regolamento (UE) 2016/679 (GDPR), delle norme ePrivacy e delle leggi nazionali di attuazione.",
      "Si applica alla navigazione, al modulo di contatto, all’autenticazione, alla dashboard, ai log tecnici e ai cookie. Non copre i trattamenti autonomi delle sedi (Binance, XTB, Plus500, banche, prestatori di pagamento).",
      "Le Condizioni d’uso e la presente informativa si completano. Le domande vanno inviate tramite il modulo di contatto. La lingua di riferimento dei documenti giuridici è il francese.",
    ],
  },
  de: {
    ...en,
    kicker: "Datenschutz",
    title: "Datenschutzerklärung (DSGVO)",
    updated: "Stand: 23. September 2026",
    tocLabel: "Inhalt",
    intro: [
      "Diese Erklärung beschreibt, wie AlgorithmNode, Betreiber von https://www.algorithmnode.site (der „Verantwortliche“, „wir“), personenbezogene Daten gemäß der Verordnung (EU) 2016/679 (DSGVO), den ePrivacy-Vorgaben und den nationalen Umsetzungsgesetzen erhebt, verwendet, speichert, teilt und schützt.",
      "Sie gilt für das Surfen, das Kontaktformular, die Authentifizierung, das Dashboard, technische Protokolle und Cookies. Sie gilt nicht für eigenständige Verarbeitungen der Handelsplätze (Binance, XTB, Plus500, Banken, Zahlungsdienstleister).",
      "Die Nutzungsbedingungen und diese Erklärung ergänzen einander. Fragen über das Kontaktformular. Die Referenzsprache der Rechtsdokumente ist Französisch.",
    ],
  },
  ro,
};
