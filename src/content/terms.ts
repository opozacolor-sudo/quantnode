import type { Locale } from "@/i18n/config";
import type { LegalDoc } from "./legal-types";

const fr: LegalDoc = {
  kicker: "Documents juridiques",
  title: "Conditions générales d’utilisation",
  updated: "Dernière mise à jour : 23 septembre 2026",
  tocLabel: "Sommaire",
  intro: [
    "Les présentes conditions générales d’utilisation (les « Conditions ») régissent l’accès au site https://www.algorithmnode.site et à la plateforme AlgorithmNode (ensemble, le « Service »). En consultant le site, en envoyant un formulaire de contact, en vous connectant ou en utilisant le tableau de bord, vous acceptez ces Conditions sans réserve.",
    "Si vous n’acceptez pas ces Conditions, vous devez cesser immédiatement d’utiliser le Service. Les Conditions forment un contrat à distance au sens du droit de l’Union européenne. Elles s’appliquent à toute personne physique ou morale, professionnelle ou consommateur, sous réserve des dispositions impératives protectrices des consommateurs.",
    "AlgorithmNode se réserve le droit de modifier les Conditions. La version applicable est celle publiée à la date de votre utilisation. La poursuite de l’usage après publication vaut acceptation de la nouvelle version.",
  ],
  sections: [
    {
      title: "1. Éditeur et nature du contrat",
      paragraphs: [
        "Le Service est édité et opéré par AlgorithmNode, opérateur du nom de domaine algorithmnode.site (ci-après « AlgorithmNode », « nous »). Toute correspondance juridique, demande d’exercice de droits ou réclamation relative au Service doit être adressée via le formulaire de contact disponible sur le site.",
        "Les présentes Conditions constituent l’intégralité de l’accord relatif à l’usage du Service, sous réserve de la Politique de confidentialité, de toute condition particulière communiquée lors de l’émission d’un compte, et des règles des plateformes de marché tierces utilisées pour l’exécution.",
      ],
    },
    {
      title: "2. Définitions",
      paragraphs: ["Aux fins des présentes :"],
      list: [
        "« Utilisateur » : toute personne qui accède au site ou au Service.",
        "« Compte » : espace d’authentification émis exclusivement par l’administrateur d’AlgorithmNode.",
        "« Agents » : modules logiciels qui lisent en continu des données de marché.",
        "« Bots » : modules d’exécution qui ouvrent, ajustent ou ferment des positions selon des signaux et des limites.",
        "« Limites » : stop-loss, valeur maximale par transaction, exposition quotidienne et tout autre paramètre de risque défini par l’Utilisateur ou l’administrateur.",
        "« Places » : venues ou intermédiaires connectés, notamment Binance, XTB et Plus500, ainsi que tout autre lieu d’exécution ultérieurement intégré.",
        "« Données de marché » : cotations, indices, actualités et données de référence affichées à titre indicatif.",
      ],
    },
    {
      title: "3. Description du Service",
      paragraphs: [
        "AlgorithmNode fournit une technologie d’exécution algorithmique. Le Service permet, selon le profil du Compte, d’afficher des informations de marché, de consulter un historique d’activité, de paramétrer des Limites et, le cas échéant, de déclencher une exécution automatisée via des Agents et des Bots sur des Places connectées.",
        "AlgorithmNode n’est pas un établissement de crédit, n’est pas un prestataire de services d’investissement au sens de MiFID II, n’est pas un conseiller en investissement, n’est pas un gestionnaire de portefeuille sous mandat, et n’est pas un conservateur d’actifs. Aucune information publiée sur le site, y compris l’historique public, les variations illustratives ou les prix en direct, ne constitue un conseil, une recommandation personnalisée, une offre au public de titres financiers ou une garantie de performance.",
        "Les performances passées, y compris tout calendrier d’historique présenté sur le site, n’ont qu’une valeur illustrative et ne préjugent pas des résultats futurs. Les fourchettes de variation éventuellement indiquées ne sont pas des objectifs contractuels.",
      ],
    },
    {
      title: "4. Accès, éligibilité et ouverture de compte",
      paragraphs: [
        "Le site public est accessible sans création de compte. L’accès au tableau de bord et aux fonctions d’exécution n’est possible qu’après émission d’un Compte par l’administrateur. Il n’existe pas d’inscription libre en libre-service.",
        "Vous déclarez avoir au moins 18 ans, la capacité juridique, et n’être soumis à aucune interdiction de négocier sur les marchés concernés. Vous vous interdisez d’utiliser le Service si cela est illicite dans votre pays de résidence ou au regard des sanctions internationales applicables.",
        "Vous êtes responsable de l’exactitude des informations fournies (identité, coordonnées, identifiant, e-mail). L’identifiant et le mot de passe sont strictement personnels. Toute action réalisée depuis le Compte est réputée effectuée par vous, sauf preuve contraire d’une compromission promptement notifiée.",
      ],
    },
    {
      title: "5. Absence de conservation et rôle des Places",
      paragraphs: [
        "Sauf stipulation écrite contraire et spécifique à un Compte, AlgorithmNode n’a pas vocation à détenir vos fonds ou instruments en conservation. L’exécution peut s’opérer sur des Places tierces. Les relations avec ces Places (ouverture de compte courtier, KYC/AML, dépôts, marges, liquidations, horaires, frais de Place) relèvent de leurs conditions propres, que vous devez lire et accepter séparément.",
        "AlgorithmNode n’est pas responsable des défaillances, retards, rejets d’ordres, exigences de marge, suspensions de marché ou décisions des Places. Un ordre validé par un Bot peut être modifié, partiellement exécuté ou rejeté par la Place.",
      ],
    },
    {
      title: "6. Exécution algorithmique, Limites et décisions automatisées",
      paragraphs: [
        "Lorsque le Compte le permet, les Agents analysent des flux de marché et les Bots peuvent exécuter des ordres sans intervention humaine au moment de chaque tick. Cette automatisation constitue un traitement automatisé pouvant produire des effets juridiques ou significatifs sur votre exposition. En utilisant le Service, vous y consentez expressément, tout en conservant la faculté de définir, modifier ou durcir vos Limites dans le tableau de bord, dans la mesure où cette fonction est ouverte à votre Compte.",
        "Aucun ordre n’est censé être envoyé hors des Limites paramétrées. Vous restez seul responsable du caractère adéquat de ces Limites au regard de votre situation patrimoniale, de votre appétit pour le risque et de la réglementation qui vous est applicable. Un stop-loss n’est pas une garantie d’exécution au niveau demandé en cas de gap, d’illiquidité ou de défaillance de Place.",
        "AlgorithmNode peut, pour des raisons de sécurité, de conformité ou de stabilité, suspendre l’exécution, refuser un paramètre, ou imposer des Limites plus strictes, sans que cela n’ouvre droit à indemnité.",
      ],
    },
    {
      title: "7. Dépôts, retraits et délais",
      paragraphs: [
        "Lorsque des mouvements de fonds sont proposés dans le tableau de bord, ils s’effectuent selon les modalités communiquées pour votre Compte. Les retraits, lorsqu’ils sont disponibles, sont indiqués comme pouvant être traités dans un délai maximal de vingt-quatre (24) heures, hors jours fériés, incidents bancaires, contrôles de conformité, ou retards imputables à un prestataire de paiement ou à une Place.",
        "AlgorithmNode peut retenir, geler ou refuser un mouvement en cas de soupçon de fraude, de blanchiment, de non-concordance d’identité, d’ordre d’une autorité, ou de risque opérationnel. Aucun intérêt n’est dû sur les soldes affichés.",
      ],
    },
    {
      title: "8. Risques",
      paragraphs: [
        "Le trading sur instruments financiers, crypto-actifs, matières premières, devises et produits dérivés comporte un risque substantiel de perte, pouvant aller jusqu’à la totalité du capital engagé, et, selon le produit et la Place, au-delà en cas d’effet de levier. Vous pouvez perdre plus rapidement que vous ne gagnez. La volatilité, les corrélations, les événements macroéconomiques, les pannes et la liquidité peuvent amplifier les pertes.",
        "Vous reconnaissez comprendre ces risques, n’engager que des sommes dont la perte n’affecte pas vos besoins essentiels, et ne pas vous fonder sur le site comme sur un conseil. AlgorithmNode ne garantit ni profit, ni préservation du capital, ni continuité ininterrompue du Service.",
      ],
    },
    {
      title: "9. Obligations de l’Utilisateur",
      paragraphs: ["Vous vous engagez à :"],
      list: [
        "utiliser le Service conformément aux lois applicables, notamment en matière de marchés financiers, de sanctions, de lutte contre le blanchiment et le financement du terrorisme ;",
        "ne pas contourner les Limites, les contrôles d’accès, l’authentification ou les mesures de sécurité ;",
        "ne pas introduire de virus, bots hostiles, scraping abusif, attaques par déni de service ou ingénierie inverse non autorisée ;",
        "ne pas usurper l’identité d’un tiers ni céder le Compte sans accord écrit ;",
        "fournir des informations sincères via le formulaire de contact et le Compte ;",
        "surveiller votre exposition et vos notifications lorsque le tableau de bord est actif.",
      ],
    },
    {
      title: "10. Propriété intellectuelle",
      paragraphs: [
        "Le site, la marque AlgorithmNode, les logos, textes, graphismes, architecture logicielle, Agents, Bots, bases de données et éléments visuels sont protégés par le droit d’auteur, le droit des marques et le droit sui generis des bases de données. Toute reproduction, extraction massive, mise à disposition ou adaptation non autorisée est interdite.",
        "Les noms Binance, XTB, Plus500 et les identifiants d’instruments restent la propriété de leurs titulaires. Les données de prix de tiers restent soumises à leurs licences.",
      ],
    },
    {
      title: "11. Données de marché et contenus informatifs",
      paragraphs: [
        "Les prix en direct, le ticker et tout historique public sont fournis « en l’état », à titre indicatif, et peuvent être retardés, incomplets, erronés ou indisponibles. Ils ne doivent pas servir seuls à une décision d’investissement. AlgorithmNode n’assume aucune obligation de mise à jour en temps réel vis-à-vis du public.",
      ],
    },
    {
      title: "12. Disponibilité, maintenance et support",
      paragraphs: [
        "Le Service est fourni sans engagement de niveau de service (SLA) sauf accord écrit particulier. Des interruptions peuvent survenir pour maintenance, force majeure, défaillance d’hébergeur, d’API de marché ou de Place. AlgorithmNode s’efforce de rétablir un fonctionnement raisonnable mais n’est pas tenue à une disponibilité continue 24/7.",
        "Le support s’effectue via le formulaire de contact, pendant les heures ouvrées, sans délai de réponse garanti.",
      ],
    },
    {
      title: "13. Responsabilité",
      paragraphs: [
        "Dans les limites permises par le droit applicable, AlgorithmNode n’est pas responsable des dommages indirects, pertes de chance, manque à gagner, pertes de données, préjudices d’image, ou pertes liées à une décision d’investissement, à un glissement de cours, à une exécution partielle, à une erreur de paramétrage des Limites ou à un acte d’un tiers.",
        "La responsabilité totale d’AlgorithmNode, toutes causes confondues, est limitée, par événement et par année civile, au montant le plus élevé entre (i) les frais de Service effectivement payés par vous à AlgorithmNode au cours des douze (12) mois précédents et (ii) cent (100) euros, sauf faute lourde, dol, ou atteinte à l’intégrité physique, et sauf droit impératif du consommateur.",
        "Rien dans les présentes n’exclut la responsabilité qui ne peut légalement être limitée, notamment en cas de décès ou de dommages corporels causés par négligence, ou de manquement aux obligations essentielles dans les conditions du droit de la consommation.",
      ],
    },
    {
      title: "14. Indemnisation",
      paragraphs: [
        "Vous indemnisez AlgorithmNode contre toute réclamation de tiers résultant de votre usage illicite du Service, de la violation des présentes, de fausses informations, ou du non-respect des règles d’une Place, y compris frais raisonnables de défense.",
      ],
    },
    {
      title: "15. Suspension et résiliation",
      paragraphs: [
        "Vous pouvez cesser d’utiliser le site à tout moment. La clôture d’un Compte s’effectue sur demande via le contact, sous réserve des opérations en cours, obligations de conservation légale et contrôles de conformité.",
        "AlgorithmNode peut suspendre ou résilier l’accès, immédiatement et sans préavis, en cas de manquement, de risque de sécurité, d’inactivité prolongée, d’injonction d’une autorité, ou si le Service est discontinué. Les stipulations destinées à survivre (propriété intellectuelle, responsabilité, données, droit applicable) demeurent en vigueur.",
      ],
    },
    {
      title: "16. Protection des données",
      paragraphs: [
        "Le traitement des données personnelles est décrit dans la Politique de confidentialité, partie intégrante de la relation contractuelle. En utilisant le Service, vous reconnaissez en avoir pris connaissance.",
      ],
    },
    {
      title: "17. Force majeure",
      paragraphs: [
        "AlgorithmNode n’est pas responsable des manquements dus à un événement de force majeure ou à un cas fortuit au sens du droit applicable, y compris pannes généralisées de réseaux, cyberattaques d’ampleur, conflits, décisions d’autorités de marché, ou indisponibilité durable d’une Place ou d’un sous-traitant critique.",
      ],
    },
    {
      title: "18. Droit applicable et litiges",
      paragraphs: [
        "Les Conditions sont régies par le droit français, sous réserve des règles impératives de l’Union européenne et, si vous êtes consommateur, des dispositions plus protectrices de votre droit de résidence habituelle lorsqu’elles s’appliquent.",
        "En cas de litige, une solution amiable sera recherchée via le formulaire de contact. À défaut, et sous réserve des compétences impératives, les tribunaux français seront compétents. Le consommateur peut aussi recourir à une médiation de la consommation lorsque les conditions légales sont réunies, et saisir la plateforme européenne de règlement en ligne des litiges.",
      ],
    },
    {
      title: "19. Dispositions générales",
      paragraphs: [
        "Si une clause est déclarée nulle, les autres demeurent. Le fait de ne pas se prévaloir d’un manquement ne vaut pas renonciation. Vous ne pouvez céder les Conditions sans accord. AlgorithmNode peut céder le contrat à un successeur dans le cadre d’une réorganisation, sous réserve des droits des personnes concernées.",
        "La langue originale de référence des documents juridiques est le français. Les traductions sont fournies pour la commodité de l’Utilisateur ; en cas de divergence d’interprétation, la version française prévaut, sauf obligation contraire d’un droit local impératif.",
      ],
    },
  ],
};

const en: LegalDoc = {
  kicker: "Legal",
  title: "Terms and conditions",
  updated: "Last updated: 23 September 2026",
  tocLabel: "Contents",
  intro: [
    "These terms and conditions (the “Terms”) govern access to https://www.algorithmnode.site and the AlgorithmNode platform (together, the “Service”). By browsing the site, submitting the contact form, signing in or using the dashboard, you accept these Terms in full.",
    "If you do not accept them, you must stop using the Service immediately. The Terms form a distance contract under European Union law. They apply to any natural or legal person, professional or consumer, without prejudice to mandatory consumer protections.",
    "AlgorithmNode may amend the Terms. The applicable version is the one published on the date of use. Continued use after publication constitutes acceptance of the new version.",
  ],
  sections: [
    {
      title: "1. Operator and contract",
      paragraphs: [
        "The Service is published and operated by AlgorithmNode, operator of the domain algorithmnode.site (“AlgorithmNode”, “we”). Legal correspondence, data-subject requests and complaints must be sent through the contact form on the site.",
        "These Terms are the entire agreement on use of the Service, subject to the Privacy Policy, any special conditions issued with an account, and the rules of third-party execution venues.",
      ],
    },
    {
      title: "2. Definitions",
      paragraphs: ["For these Terms:"],
      list: [
        "“User”: anyone who accesses the site or the Service.",
        "“Account”: an authentication space issued exclusively by AlgorithmNode’s administrator.",
        "“Agents”: software modules that continuously read market data.",
        "“Bots”: execution modules that open, adjust or close positions according to signals and Limits.",
        "“Limits”: stop-loss, maximum size per trade, daily exposure and any other risk parameter set by the User or the administrator.",
        "“Venues”: connected venues or intermediaries, including Binance, XTB and Plus500, and any later integrated execution venue.",
        "“Market data”: quotes, indices, news and reference data shown on an indicative basis.",
      ],
    },
    {
      title: "3. Description of the Service",
      paragraphs: [
        "AlgorithmNode provides algorithmic execution technology. Depending on the Account, the Service may display market information, activity history, Limit settings and, where enabled, automated execution via Agents and Bots on connected Venues.",
        "AlgorithmNode is not a credit institution, is not an investment firm under MiFID II, is not an investment adviser, is not a discretionary portfolio manager, and is not a custodian. Nothing on the site — including the public history, illustrative variations or live prices — is advice, a personal recommendation, a public offer of securities or a performance guarantee.",
        "Past performance, including any public calendar, is illustrative only and is not a guide to future results. Any stated variation ranges are not contractual targets.",
      ],
    },
    {
      title: "4. Access, eligibility and accounts",
      paragraphs: [
        "The public site does not require an account. Dashboard and execution features are available only after an Account is issued by the administrator. There is no self-service public sign-up.",
        "You represent that you are at least 18, have legal capacity, and are not prohibited from trading the relevant markets. You must not use the Service where it would be unlawful in your country of residence or under applicable sanctions.",
        "You are responsible for the accuracy of information you provide. Credentials are personal. Actions from the Account are deemed yours unless you promptly notify a compromise.",
      ],
    },
    {
      title: "5. No custody and third-party Venues",
      paragraphs: [
        "Unless a written Account-specific stipulation says otherwise, AlgorithmNode is not intended to hold your funds or instruments in custody. Execution may occur on third-party Venues. Your relationship with those Venues (broker onboarding, KYC/AML, deposits, margin, liquidations, hours, venue fees) is governed by their own terms.",
        "AlgorithmNode is not liable for Venue outages, delays, rejects, margin calls, market halts or Venue decisions. An order released by a Bot may be amended, filled in part or rejected by the Venue.",
      ],
    },
    {
      title: "6. Algorithmic execution, Limits and automated decisions",
      paragraphs: [
        "Where the Account allows it, Agents analyse market flow and Bots may send orders without a human at each tick. This is automated processing that can significantly affect your exposure. By using the Service you expressly accept that processing, while retaining the ability to set, change or tighten Limits in the dashboard where that function is enabled.",
        "Orders are not intended to be sent outside configured Limits. You alone are responsible for whether those Limits fit your wealth, risk appetite and applicable law. A stop-loss is not a guarantee of fill at the requested level in a gap, illiquidity or Venue failure.",
        "AlgorithmNode may suspend execution, refuse a parameter or impose stricter Limits for security, compliance or stability, without compensation.",
      ],
    },
    {
      title: "7. Deposits, withdrawals and timing",
      paragraphs: [
        "Where fund movements appear in the dashboard, they follow the mechanics communicated for your Account. Withdrawals, when available, are described as processed within a maximum of twenty-four (24) hours, excluding holidays, banking incidents, compliance checks, or delays of a payment provider or Venue.",
        "AlgorithmNode may hold, freeze or refuse a movement in case of suspected fraud, money laundering, identity mismatch, an authority order, or operational risk. No interest accrues on displayed balances.",
      ],
    },
    {
      title: "8. Risks",
      paragraphs: [
        "Trading financial instruments, crypto-assets, commodities, FX and derivatives involves a substantial risk of loss, up to the full capital committed and, depending on the product and Venue, beyond that if leverage applies. Losses can occur faster than gains. Volatility, correlations, macro events, outages and liquidity can amplify losses.",
        "You confirm that you understand these risks, will only commit sums whose loss would not affect essential needs, and will not treat the site as advice. AlgorithmNode does not guarantee profit, capital preservation or uninterrupted Service.",
      ],
    },
    {
      title: "9. User obligations",
      paragraphs: ["You agree to:"],
      list: [
        "use the Service in line with applicable law, including financial-market, sanctions and AML/CFT rules;",
        "not circumvent Limits, access controls, authentication or security measures;",
        "not introduce malware, hostile bots, abusive scraping, denial-of-service attacks or unauthorised reverse engineering;",
        "not impersonate a third party or assign the Account without written consent;",
        "provide truthful information via the contact form and the Account;",
        "monitor your exposure and notices when the dashboard is active.",
      ],
    },
    {
      title: "10. Intellectual property",
      paragraphs: [
        "The site, the AlgorithmNode brand, logos, copy, graphics, software architecture, Agents, Bots, databases and visual elements are protected by copyright, trade mark and database rights. Unauthorised reproduction, bulk extraction or adaptation is prohibited.",
        "Binance, XTB, Plus500 and instrument identifiers remain their owners’ property. Third-party price data remains subject to their licences.",
      ],
    },
    {
      title: "11. Market data and informational content",
      paragraphs: [
        "Live prices, the ticker and any public history are provided “as is”, on an indicative basis, and may be delayed, incomplete, wrong or unavailable. They must not be used as the sole basis for an investment decision. AlgorithmNode has no public real-time update obligation.",
      ],
    },
    {
      title: "12. Availability, maintenance and support",
      paragraphs: [
        "The Service is provided without an SLA unless a separate written agreement says otherwise. Interruptions may occur for maintenance, force majeure, host failure, market APIs or Venues. AlgorithmNode will use reasonable efforts to restore service but does not warrant 24/7 continuity.",
        "Support is via the contact form during business hours, with no guaranteed response time.",
      ],
    },
    {
      title: "13. Liability",
      paragraphs: [
        "To the extent permitted by law, AlgorithmNode is not liable for indirect loss, loss of chance, lost profits, data loss, reputational harm, or losses from an investment decision, slippage, partial fill, Limit misconfiguration or a third party’s act.",
        "AlgorithmNode’s aggregate liability, all causes combined, is limited per event and per calendar year to the greater of (i) Service fees you actually paid to AlgorithmNode in the preceding twelve (12) months and (ii) one hundred (100) euros, except for wilful misconduct, fraud, personal injury, and except for mandatory consumer rights.",
        "Nothing excludes liability that cannot legally be limited.",
      ],
    },
    {
      title: "14. Indemnity",
      paragraphs: [
        "You indemnify AlgorithmNode against third-party claims arising from unlawful use, breach of these Terms, false information, or breach of a Venue’s rules, including reasonable defence costs.",
      ],
    },
    {
      title: "15. Suspension and termination",
      paragraphs: [
        "You may stop using the site at any time. Account closure is requested via contact, subject to open operations, legal retention and compliance checks.",
        "AlgorithmNode may suspend or terminate access immediately, without notice, for breach, security risk, prolonged inactivity, an authority order, or if the Service is discontinued. Survival clauses remain in force.",
      ],
    },
    {
      title: "16. Data protection",
      paragraphs: [
        "Personal data processing is described in the Privacy Policy, which forms part of the contractual relationship. By using the Service you acknowledge that you have read it.",
      ],
    },
    {
      title: "17. Force majeure",
      paragraphs: [
        "AlgorithmNode is not liable for failures caused by force majeure, including widespread network outages, large-scale cyberattacks, conflict, market-authority decisions, or lasting unavailability of a Venue or critical processor.",
      ],
    },
    {
      title: "18. Governing law and disputes",
      paragraphs: [
        "The Terms are governed by French law, without prejudice to mandatory EU rules and, if you are a consumer, more protective rules of your habitual residence where they apply.",
        "Disputes should first be raised via the contact form. Failing an amicable solution, and subject to mandatory venues, French courts have jurisdiction. Consumers may use consumer mediation where legally available and the European ODR platform.",
      ],
    },
    {
      title: "19. General",
      paragraphs: [
        "If a clause is void, the others remain. Failure to enforce a breach is not a waiver. You may not assign the Terms without consent. AlgorithmNode may assign to a successor in a reorganisation, subject to data-protection rights.",
        "The French version of the legal documents is the reference language. Translations are for convenience; if they conflict, French prevails, unless local mandatory law requires otherwise.",
      ],
    },
  ],
};


function fromEn(localeMeta: { kicker: string; title: string; updated: string; tocLabel: string }, overlay: Partial<LegalDoc> & { intro: string[]; sections: LegalDoc["sections"] }): LegalDoc {
  return { ...en, ...localeMeta, ...overlay };
}

const es: LegalDoc = fromEn(
  { kicker: "Documentos jurídicos", title: "Condiciones generales de uso", updated: "Última actualización: 23 de septiembre de 2026", tocLabel: "Índice" },
  {
    intro: [
      "Las presentes condiciones generales de uso (las «Condiciones») rigen el acceso a https://www.algorithmnode.site y a la plataforma AlgorithmNode (conjuntamente, el «Servicio»). Al consultar el sitio, enviar el formulario de contacto, iniciar sesión o usar el panel, acepta estas Condiciones sin reserva.",
      "Si no las acepta, debe dejar de usar el Servicio de inmediato. Las Condiciones forman un contrato a distancia conforme al Derecho de la Unión Europea y se aplican a cualquier persona física o jurídica, profesional o consumidor, sin perjuicio de las protecciones imperativas de los consumidores.",
      "AlgorithmNode puede modificar las Condiciones. La versión aplicable es la publicada en la fecha de uso. El uso continuado tras la publicación implica la aceptación de la nueva versión.",
    ],
    sections: en.sections.map((section, index) => {
      const titles = [
        "1. Operador y contrato",
        "2. Definiciones",
        "3. Descripción del Servicio",
        "4. Acceso, elegibilidad y cuentas",
        "5. Ausencia de custodia y plazas de terceros",
        "6. Ejecución algorítmica, límites y decisiones automatizadas",
        "7. Depósitos, retiradas y plazos",
        "8. Riesgos",
        "9. Obligaciones del Usuario",
        "10. Propiedad intelectual",
        "11. Datos de mercado y contenidos informativos",
        "12. Disponibilidad, mantenimiento y soporte",
        "13. Responsabilidad",
        "14. Indemnización",
        "15. Suspensión y resolución",
        "16. Protección de datos",
        "17. Fuerza mayor",
        "18. Derecho aplicable y litigios",
        "19. Disposiciones generales",
      ];
      return { ...section, title: titles[index] ?? section.title };
    }),
  },
);

const it: LegalDoc = fromEn(
  { kicker: "Documenti giuridici", title: "Condizioni generali d’uso", updated: "Ultimo aggiornamento: 23 settembre 2026", tocLabel: "Sommario" },
  {
    intro: [
      "Le presenti condizioni generali d’uso (le «Condizioni») disciplinano l’accesso a https://www.algorithmnode.site e alla piattaforma AlgorithmNode (insieme, il «Servizio»). Consultando il sito, inviando il modulo di contatto, accedendo o usando la dashboard, accettate le Condizioni senza riserva.",
      "Se non le accettate, dovete cessare immediatamente l’uso del Servizio. Le Condizioni costituiscono un contratto a distanza ai sensi del diritto dell’Unione europea e si applicano a qualsiasi persona fisica o giuridica, professionista o consumatore, fatte salve le tutele imperative dei consumatori.",
      "AlgorithmNode può modificare le Condizioni. La versione applicabile è quella pubblicata alla data d’uso. La prosecuzione dell’uso dopo la pubblicazione vale accettazione della nuova versione.",
    ],
    sections: en.sections.map((section, index) => {
      const titles = [
        "1. Operatore e contratto",
        "2. Definizioni",
        "3. Descrizione del Servizio",
        "4. Accesso, idoneità e conti",
        "5. Assenza di custodia e sedi terze",
        "6. Esecuzione algoritmica, limiti e decisioni automatizzate",
        "7. Depositi, prelievi e tempi",
        "8. Rischi",
        "9. Obblighi dell’Utente",
        "10. Proprietà intellettuale",
        "11. Dati di mercato e contenuti informativi",
        "12. Disponibilità, manutenzione e supporto",
        "13. Responsabilità",
        "14. Manleva",
        "15. Sospensione e risoluzione",
        "16. Protezione dei dati",
        "17. Forza maggiore",
        "18. Diritto applicabile e controversie",
        "19. Disposizioni generali",
      ];
      return { ...section, title: titles[index] ?? section.title };
    }),
  },
);

const de: LegalDoc = fromEn(
  { kicker: "Rechtliche Hinweise", title: "Allgemeine Nutzungsbedingungen", updated: "Stand: 23. September 2026", tocLabel: "Inhalt" },
  {
    intro: [
      "Diese allgemeinen Nutzungsbedingungen (die „Bedingungen“) gelten für den Zugang zu https://www.algorithmnode.site und zur AlgorithmNode-Plattform (zusammen der „Dienst“). Durch den Besuch der Website, das Absenden des Kontaktformulars, die Anmeldung oder die Nutzung des Dashboards akzeptieren Sie diese Bedingungen vollständig.",
      "Wenn Sie nicht einverstanden sind, müssen Sie die Nutzung sofort einstellen. Die Bedingungen bilden einen Fernabsatzvertrag im Sinne des Unionsrechts und gelten für natürliche und juristische Personen, Unternehmer und Verbraucher, unbeschadet zwingender Verbraucherschutzvorschriften.",
      "AlgorithmNode kann die Bedingungen ändern. Maßgeblich ist die zum Zeitpunkt der Nutzung veröffentlichte Fassung. Die weitere Nutzung nach Veröffentlichung gilt als Annahme der neuen Fassung.",
    ],
    sections: en.sections.map((section, index) => {
      const titles = [
        "1. Betreiber und Vertrag",
        "2. Begriffsbestimmungen",
        "3. Beschreibung des Dienstes",
        "4. Zugang, Berechtigung und Konten",
        "5. Keine Verwahrung und Drittplätze",
        "6. Algorithmische Ausführung, Limits und automatisierte Entscheidungen",
        "7. Einzahlungen, Auszahlungen und Fristen",
        "8. Risiken",
        "9. Pflichten des Nutzers",
        "10. Geistiges Eigentum",
        "11. Marktdaten und informative Inhalte",
        "12. Verfügbarkeit, Wartung und Support",
        "13. Haftung",
        "14. Freistellung",
        "15. Aussetzung und Beendigung",
        "16. Datenschutz",
        "17. Höhere Gewalt",
        "18. Anwendbares Recht und Streitigkeiten",
        "19. Schlussbestimmungen",
      ];
      return { ...section, title: titles[index] ?? section.title };
    }),
  },
);

export const termsByLocale: Record<Locale, LegalDoc> = { fr, en, es, it, de };
