import { Language } from '../types/financing';

export interface Translations {
  appName: string;
  appTagline: string;
  navHome: string;
  navExplore: string;
  navCompare: string;
  navDossier: string;
  navDocScan: string;

  // Hero & Core Value Proposition
  heroBadge: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroStartBtn: string;
  heroExploreBtn: string;
  heroTrustTraceable: string;
  heroTrustVerifiedVsUncertain: string;
  heroTrustNoPromise: string;
  heroTrustBilingual: string;
  heroTrustNoInvented: string;

  // Natural Language Intake & Review
  heroAiIntakeTitle: string;
  heroAiIntakePlaceholder: string;
  heroAiIntakeSubmit: string;
  heroAiIntakeHint: string;
  intakeUnderstoodTitle: string;
  intakeEditBtn: string;
  intakeDoneBtn: string;
  intakeConfirmBtn: string;
  intakeResetBtn: string;
  intakeNotSpecified: string;
  intakeMissingNotice: string;
  intakeUnassumedTitle: string;

  // Positioning: What Mizen Is vs Is Not
  positioningTitle: string;
  positioningSub: string;
  positioningNotTitle: string;
  positioningNotItems: string[];
  positioningIsTitle: string;
  positioningIsItems: string[];

  // 3-Step Process
  howItWorksTitle: string;
  howItWorksSub: string;
  howStep1Title: string;
  howStep1Desc: string;
  howStep2Title: string;
  howStep2Desc: string;
  howStep3Title: string;
  howStep3Desc: string;

  // Financing Journeys (What are you financing?)
  journeysTitle: string;
  journeysSub: string;
  journeyCardAction: string;

  // Financing Stack Positioning
  stackTitle: string;
  stackSub: string;
  stackPillar1Title: string;
  stackPillar1Desc: string;
  stackPillar2Title: string;
  stackPillar2Desc: string;
  stackPillar3Title: string;
  stackPillar3Desc: string;
  stackPillar4Title: string;
  stackPillar4Desc: string;
  stackGuardrailNotice: string;

  // Transparency & Fact Classification
  transparencyTitle: string;
  transparencySub: string;
  factVerifiedCurrentTitle: string;
  factVerifiedCurrentDesc: string;
  factVerifiedHistoricalTitle: string;
  factVerifiedHistoricalDesc: string;
  factCalculatedTitle: string;
  factCalculatedDesc: string;
  factRequiresConfirmationTitle: string;
  factRequiresConfirmationDesc: string;
  factNotSpecifiedTitle: string;
  factNotSpecifiedDesc: string;

  // Institutional Landscape
  institutionsTitle: string;
  institutionsNotice: string;

  // Demo Scenarios
  demoScenariosTitle: string;
  demoScenariosSub: string;
  demoBadge: string;
  loadDemoScenario: string;
  activeDemoNotice: string;
  clearDemoBtn: string;

  // Trust labels
  trustUserProvided: string;
  trustVerifiedFact: string;
  trustCalculated: string;
  trustAiInterpretation: string;

  // Questionnaire
  step1Title: string;
  step1Desc: string;
  step2Title: string;
  step2Desc: string;
  step3Title: string;
  step3Desc: string;
  step4Title: string;
  step4Desc: string;

  // Labels
  totalCostLabel: string;
  userContributionLabel: string;
  financingRequestedLabel: string;
  purposeLabel: string;
  sectorLabel: string;
  locationLabel: string;
  stageLabel: string;
  legalFormLabel: string;
  incomeLabel: string;
  employmentLabel: string;
  propertyTypeLabel: string;
  firstHomeLabel: string;
  degreeLabel: string;
  degreeHelp: string;
  startupLabel: string;
  startupHelp: string;
  zdrLabel: string;
  zdrHelp: string;
  shariaLabel: string;
  collateralLabel: string;

  // Results & Intelligence Report
  resultsTitle: string;
  resultsSub: string;
  executiveSummaryTitle: string;
  executiveSummaryLead: string;
  whyThisResultTitle: string;
  matchedBecauseTitle: string;
  potentialIssuesTitle: string;
  needsVerificationTitle: string;
  whatIsMissingTitle: string;
  whatMizenDoesNotDetermineTitle: string;
  whatMizenDoesNotDetermineText: string;
  alignmentStrong: string;
  alignmentPartial: string;
  alignmentBlockers: string;
  viewDetailBtn: string;
  compareBtn: string;
  addToCompare: string;
  removeFromCompare: string;
  prepareDossierBtn: string;
  officialSourceBtn: string;
  lenderHandoffBtn: string;

  // Financial
  estMonthlyPayment: string;
  totalRepayment: string;
  financingCost: string;
  gracePeriod: string;
  durationLabel: string;
  cannotCalculateReliably: string;
  illustrativeEstimateNotice: string;

  // Verification badges
  verifiedBadge: string;
  partiallyVerifiedBadge: string;
  outdatedBadge: string;
  unverifiedBadge: string;
  lastCheckedLabel: string;

  // Compare & Readiness
  compareTitle: string;
  compareEmpty: string;
  readinessTitle: string;
  readinessSub: string;
  readinessScoreLabel: string;
  docChecklistTitle: string;
  interviewQuestionsTitle: string;
  officialPortal: string;
  disclaimerText: string;
  persistentDisclaimer: string;
}

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    appName: 'Mizen',
    appTagline: 'Intelligence & Préparation au Financement en Tunisie',
    navHome: 'Accueil',
    navExplore: 'Tous les financements',
    navCompare: 'Comparateur',
    navDossier: 'Mon Dossier',
    navDocScan: 'Vérification Documentaire',

    // Hero & Proposition
    heroBadge: 'Mizen • Intelligence & Préparation au Financement en Tunisie',
    heroHeadline: 'Comprenez comment votre projet pourrait être financé — avant d’aller voir la banque.',
    heroSubheadline: 'Mizen est un moteur d’intelligence et de diagnostic financier pour la Tunisie. Il teste l’adéquation de votre projet aux critères réels, détecte les pièces manquantes, distingue les faits vérifiés des incertitudes et analyse les montages potentiellement compatibles.',
    heroStartBtn: 'Lancer le diagnostic financier',
    heroExploreBtn: 'Explorer les mécanismes de financement',
    heroTrustTraceable: 'Sources réglementaires traçables (JORT, BFPME, BTS, SOTUGAR)',
    heroTrustVerifiedVsUncertain: 'Distinction claire : faits vérifiés vs données à confirmer',
    heroTrustNoPromise: 'Aucune promesse infondée d’accord ou d’octroi',
    heroTrustBilingual: 'Interface intégrale en Français & Arabe',
    heroTrustNoInvented: 'Zéro information manquante inventée',

    // Natural Language Intake
    heroAiIntakeTitle: 'Décrivez votre projet simplement :',
    heroAiIntakePlaceholder: 'Ex: Je souhaite ouvrir un atelier de confection à Monastir. Le projet coûte environ 200 000 DT et je peux apporter 50 000 DT d’autofinancement...',
    heroAiIntakeSubmit: 'Analyser avec Mizen AI',
    heroAiIntakeHint: 'Mizen extrait vos paramètres sans jamais deviner ni inventer les données manquantes.',
    intakeUnderstoodTitle: 'Voici les paramètres identifiés de votre projet :',
    intakeEditBtn: 'Corriger les champs',
    intakeDoneBtn: 'Valider les modifications',
    intakeConfirmBtn: 'Confirmer et analyser l’éligibilité',
    intakeResetBtn: 'Réécrire la description',
    intakeNotSpecified: 'Non précisé',
    intakeMissingNotice: 'Les informations non mentionnées restent strictement « Non précisé ». Vous pouvez compléter chaque champ avant de lancer l’analyse.',
    intakeUnassumedTitle: 'Données non assumées (restent à vérifier) :',

    // Positioning
    positioningTitle: 'Comprendre le rôle de Mizen',
    positioningSub: 'Un moteur d’intelligence technique pour aborder l’instruction bancaire avec méthode et lucidité.',
    positioningNotTitle: 'Ce que Mizen N’EST PAS',
    positioningNotItems: [
      'Un comparateur de crédit générique ou commercial',
      'Une banque ou un établissement prêteur',
      'Un courtier promettant une approbation ou un accord garanti',
      'Un système qui invente des données ou extrapole des taux non arrêtés'
    ],
    positioningIsTitle: 'Ce que Mizen EST',
    positioningIsItems: [
      'Un moteur d’intelligence d’éligibilité basé sur les critères officiels réels',
      'Un outil de diagnostic des conditions bloquantes et des critères qualifiants',
      'Un révélateur de données manquantes à formaliser avant le dépôt de dossier',
      'Un analyseur de structures et de montages financiers potentiellement compatibles'
    ],

    // 3-Step Process
    howItWorksTitle: 'Comment fonctionne Mizen ?',
    howItWorksSub: 'Une démarche méthodique en 3 étapes pour préparer votre projet avant toute démarche bancaire.',
    howStep1Title: '01 — Comprendre le projet',
    howStep1Desc: 'Structure du besoin : coût global, apport personnel, secteur, stade d’avancement, gouvernorat, revenu et objet précis du financement.',
    howStep2Title: '02 — Tester la compatibilité',
    howStep2Desc: 'Évaluation contre les critères publics officiels, identification des conditions bloquantes, traçabilité des sources et mise en évidence des incertitudes.',
    howStep3Title: '03 — Structurer une stratégie',
    howStep3Desc: 'Si une seule source ne suffit pas, analyse de combinaisons potentiellement compatibles (crédit CMLT, garantie SOTUGAR, dotations APII, fonds propres) sans assimiler les garanties à du cash direct.',

    // Financing Journeys
    journeysTitle: 'Que souhaitez-vous financer ?',
    journeysSub: 'Choisissez votre objet de financement pour isoler les mécanismes bancaires, subventions et garanties applicables.',
    journeyCardAction: 'Lancer ce parcours',

    // Financing Stacks
    stackTitle: 'Intelligence des Montages Financiers Multi-Sources',
    stackSub: 'Parfois, une seule source de financement ne suffit pas. Mizen analyse si plusieurs mécanismes peuvent former une structure financière compatible.',
    stackPillar1Title: 'Crédit Moyen & Long Terme (CMLT)',
    stackPillar1Desc: 'Prêt bancaire ou participatif (BFPME, BTS, BH Bank, Banques de la place) encadré par des plafonds d’intervention et des seuils d’apport personnel.',
    stackPillar2Title: 'Garantie Publique (SOTUGAR / Fonds dédiés)',
    stackPillar2Desc: 'Mécanisme de couverture du risque pour le prêteur (jusqu’à 75%), ne constituant pas une injection directe de trésorerie.',
    stackPillar3Title: 'Dotations & Primes Publiques (FOPRODI / APII / ANETI)',
    stackPillar3Desc: 'Avances remboursables et primes à l’investissement pour l’industrie, l’artisanat et les nouveaux promoteurs venant compléter le plan de financement.',
    stackPillar4Title: 'Fonds Propres & Capital Risque (Startup Act / ANAVA / FCPR)',
    stackPillar4Desc: 'Fonds de capital-risque, bourses de subsistance et instruments pour startups technologiques et projets à fort potentiel.',
    stackGuardrailNotice: 'L’analyse de cumul repose strictement sur des règles de compatibilité documentées. En l’absence de certitude réglementaire, le statut reste INCONNU et nécessite confirmation auprès des comités d’engagement.',

    // Transparency
    transparencyTitle: 'Architecture de Transparence & Rigueur des Données',
    transparencySub: 'Mizen classe rigoureusement chaque information selon son niveau de preuve et sa validité réglementaire.',
    factVerifiedCurrentTitle: 'Fait Vérifié & Actuel',
    factVerifiedCurrentDesc: 'Validé sur un texte officiel ou guide produit récent en vigueur.',
    factVerifiedHistoricalTitle: 'Archive Historique',
    factVerifiedHistoricalDesc: 'Ancien barème tracé et conservé pour mémoire, non applicable aux nouveaux dossiers.',
    factCalculatedTitle: 'Estimation Calculée',
    factCalculatedDesc: 'Calcul arithmétique conforme aux formules réglementaires arrêtées.',
    factRequiresConfirmationTitle: 'À Confirmer en Agence',
    factRequiresConfirmationDesc: 'Condition dépendant de la tarification d’agence, de l’analyse du risque ou d’accords bilatéraux.',
    factNotSpecifiedTitle: 'Donnée Non Précisée',
    factNotSpecifiedDesc: 'Aucune valeur par défaut inventée. Le statut reste explicitement « Non précisé ».',

    // Institutions
    institutionsTitle: 'Principaux dispositifs et institutions analysés',
    institutionsNotice: 'La mention de ces institutions découle de l’analyse de leurs critères et barèmes publics. Elle ne constitue aucun partenariat commercial exclusif ni promesse d’accord.',

    // Demo Scenarios
    demoScenariosTitle: 'Cas de démonstration pilotes (Données synthétiques)',
    demoScenariosSub: 'Sélectionnez un scénario réaliste pour visualiser instantanément le rapport d’intelligence Mizen :',
    demoBadge: 'Cas Démo Synthétique',
    loadDemoScenario: 'Charger ce cas démo',
    activeDemoNotice: 'Vous visualisez actuellement un cas de démonstration synthétique. Les données sont purement illustratives et n’impliquent aucun accord préalable d’une banque.',
    clearDemoBtn: 'Réinitialiser / Nouveau diagnostic',

    trustUserProvided: 'Déclaré par l’utilisateur',
    trustVerifiedFact: 'Fait vérifié — Source officielle',
    trustCalculated: 'Estimation calculée (Formule vérifiée)',
    trustAiInterpretation: 'Extraction assistée par IA',

    step1Title: 'Projet & Besoin financier',
    step1Desc: 'Distinguez le coût global, votre apport personnel et le montant du financement sollicité.',
    step2Title: 'Activité, Revenu & Localisation',
    step2Desc: 'Le secteur, la tranche de revenu et le gouvernorat déterminent l’éligibilité aux dispositifs et bonifications.',
    step3Title: 'Stade d’avancement & Forme juridique',
    step3Desc: 'Les conditions diffèrent entre création, nouveau promoteur, PME établie et projet résidentiel.',
    step4Title: 'Critères qualifiants & Préférences',
    step4Desc: 'Diplôme de l’enseignement supérieur, labellisation Startup Act ou préférence éthique.',

    totalCostLabel: 'Coût global du projet ou du bien (TND)',
    userContributionLabel: 'Votre apport personnel déclaré (TND)',
    financingRequestedLabel: 'Financement bancaire / aide sollicité (TND)',
    purposeLabel: 'Objet du financement',
    sectorLabel: 'Secteur d’activité',
    locationLabel: 'Gouvernorat d’implantation / bien',
    stageLabel: 'Stade de l’entreprise / avancement',
    legalFormLabel: 'Forme juridique (ou envisagée)',
    incomeLabel: 'Tranche de revenu net mensuel du foyer',
    employmentLabel: 'Statut professionnel / Situation',
    propertyTypeLabel: 'Type de bien immobilier (Habitat)',
    firstHomeLabel: 'Premier achat immobilier (Primo-accédant non propriétaire)',
    degreeLabel: 'Titulaire d’un diplôme d’enseignement supérieur',
    degreeHelp: 'Ouvre les plafonds BTS jusqu’à 150 000 DT et bonifications ANETI.',
    startupLabel: 'Labellisé Startup Act (ou projet hautement innovant)',
    startupHelp: 'Éligibilité aux bourses de subsistance et fonds ANAVA.',
    zdrLabel: 'Implantation en Zone de Développement Régional (ZDR)',
    zdrHelp: 'Garantie SOTUGAR majorée à 75% et dotations / primes FOPRODI en région.',
    shariaLabel: 'Préférence pour la finance islamique (Mourabaha sans intérêts)',
    collateralLabel: 'Disponibilité de garanties réelles / hypothèques',

    resultsTitle: 'Rapport d’Intelligence Financière',
    resultsSub: 'Analyse transparente d’adéquation technique basée sur les critères publics officiels déclarés.',
    executiveSummaryTitle: 'Synthèse Exécutive Mizen',
    executiveSummaryLead: 'Sur la base des informations déclarées, Mizen a identifié les mécanismes de financement potentiellement pertinents suivants :',
    whyThisResultTitle: 'Pourquoi ce résultat ? (Grille de transparence)',
    matchedBecauseTitle: 'Critères déclarés en adéquation :',
    potentialIssuesTitle: 'Points d’attention ou écarts identifiés :',
    needsVerificationTitle: 'Éléments devant être confirmés avec le chargé d’affaires :',
    whatIsMissingTitle: 'Ce qui manque pour formaliser le dossier :',
    whatMizenDoesNotDetermineTitle: 'Ce que Mizen ne détermine PAS (Limites de l’outil)',
    whatMizenDoesNotDetermineText: 'Mizen est un outil d’orientation et d’aide à la décision. Il ne détermine pas l’octroi du crédit, l’accord d’éligibilité finale, la solvabilité sous les règles prudentielles du prêteur, la décision du comité d’engagement, la tarification définitive ou l’émission formelle d’une garantie.',
    alignmentStrong: 'Forte adéquation avec les critères publics',
    alignmentPartial: 'Adéquation partielle — points à valider',
    alignmentBlockers: 'Critères potentiellement bloquants',
    viewDetailBtn: 'Détails & Provenance',
    compareBtn: 'Comparer',
    addToCompare: 'Ajouter au comparateur',
    removeFromCompare: 'Retirer',
    prepareDossierBtn: 'Préparer mon dossier',
    officialSourceBtn: 'Consulter la source officielle',
    lenderHandoffBtn: 'Transmettre au prêteur (Simulation Pilote)',

    estMonthlyPayment: 'Échéance mensuelle indicative',
    totalRepayment: 'Remboursement total estimé',
    financingCost: 'Coût brut du crédit',
    gracePeriod: 'Période de grâce (différé)',
    durationLabel: 'Durée de remboursement',
    cannotCalculateReliably: 'Simulation chiffrée indisponible : le taux ou la marge commerciale doivent être arrêtés avec votre agence.',
    illustrativeEstimateNotice: 'Estimation purement illustrative basée sur les hypothèses réglementaires vérifiées. Ne constitue en aucun cas une offre commerciale ou un engagement contractuel d’un établissement de crédit.',

    verifiedBadge: 'Vérifié officiel',
    partiallyVerifiedBadge: 'Partiellement vérifié',
    outdatedBadge: 'À actualiser avant dépôt',
    unverifiedBadge: 'À confirmer en agence',
    lastCheckedLabel: 'Dernier audit de conformité',

    compareTitle: 'Comparateur de Dispositifs',
    compareEmpty: 'Sélectionnez au moins 2 mécanismes de financement pour comparer les conditions, garanties et traçabilité.',
    readinessTitle: 'Préparation du Dossier & Checklist Bancaire',
    readinessSub: 'Distinguez les informations actuellement renseignées des justificatifs et pièces que le prêteur exigera lors de l’instruction.',
    readinessScoreLabel: 'Niveau d’exhaustivité préliminaire',
    docChecklistTitle: 'Pièces requises selon les fiches officielles',
    interviewQuestionsTitle: 'Questions clés à poser à votre chargé d’affaires',
    officialPortal: 'Portail officiel de l’institution',
    disclaimerText: 'Mizen évalue l’adéquation technique avec les critères publics déclarés et ne constitue pas un accord de crédit, une promesse de financement ou une décision de comité.',
    persistentDisclaimer: 'Mizen fournit une analyse d’intelligence financière à titre informatif sur la base des critères et sources publics disponibles. Il n’approuve aucun financement, ne garantit aucune éligibilité et ne remplace pas l’instruction prudentielle des établissements bancaires et prêteurs.'
  },
  ar: {
    appName: 'ميزان',
    appTagline: 'استخبارات التمويل والجاهزية البنكية بتونس',
    navHome: 'الرئيسية',
    navExplore: 'جميع آليات التمويل',
    navCompare: 'المقارنة',
    navDossier: 'ملفي',
    navDocScan: 'فحص الوثائق',

    // Hero & Proposition
    heroBadge: 'ميزان • استخبارات التمويل والجاهزية البنكية بتونس',
    heroHeadline: 'افهم كيف يمكن تمويل مشروعك — قبل الذهاب إلى البنك.',
    heroSubheadline: 'ميزان هو محرك لاستخبارات التمويل والتشخيص المالي بتونس. يختبر مدى ملاءمة مشروعك للمعايير الفعلية، يحدد الوثائق والمعطيات الناقصة، يميز بين الحقائق المؤكدة ونقاط عدم اليقين، ويحلل إمكانية الجمع بين عدة آليات تمويل متوافقة.',
    heroStartBtn: 'بدء التشخيص المالي',
    heroExploreBtn: 'استكشاف آليات التمويل',
    heroTrustTraceable: 'مصادر تنظيمية موثقة وقابلة للتتبع (الرائد الرسمي، BFPME، BTS، سوتوغار)',
    heroTrustVerifiedVsUncertain: 'فصل صريح : معطيات مؤكدة مقابل نقاط تتطلب التأكيد',
    heroTrustNoPromise: 'دون أي وعود مسبقة بالموافقة أو منح التمويل',
    heroTrustBilingual: 'واجهة متكاملة باللغتين العربية والفرنسية',
    heroTrustNoInvented: 'عدم اختلاق أي معطيات مفقودة أو غير مصرح بها',

    // Natural Language Intake
    heroAiIntakeTitle: 'صِف مشروعك بلغة بسيطة وطبيعية :',
    heroAiIntakePlaceholder: 'مثال: أريد فتح ورشة خياطة وصناعات تقليدية في المنستير. كلفة المشروع حوالي 200 ألف دينار ويمكنني توفير 50 ألف د تمويل ذاتي...',
    heroAiIntakeSubmit: 'تحليل عبر ذكاء ميزان',
    heroAiIntakeHint: 'يستخرج ميزان معطياتك بدقة دون أي تخمين أو اختلاق للبيانات الناقصة.',
    intakeUnderstoodTitle: 'إليك المعطيات المستخلصة من وصف مشروعك :',
    intakeEditBtn: 'تعديل المعطيات',
    intakeDoneBtn: 'حفظ التعديلات',
    intakeConfirmBtn: 'تأكيد واختبار الأهلية',
    intakeResetBtn: 'إعادة كتابة الوصف',
    intakeNotSpecified: 'غير محدد',
    intakeMissingNotice: 'المعلومات غير المصرح بها تبقى صراحة « غير محددة ». يمكنك استكمال أو تصحيح كل حقل قبل إطلاق التحليل.',
    intakeUnassumedTitle: 'معطيات لم يتم افتراضها (تبقى للتثبت) :',

    // Positioning
    positioningTitle: 'فهم دور وموقع منصة ميزان',
    positioningSub: 'أداة استخبارات فنية لدخول الدراسة البنكية بمنهجية ووضوح موضوعي.',
    positioningNotTitle: 'ما لا تمثله منصة ميزان',
    positioningNotItems: [
      'ليست موقعاً تجارياً أو مقارناً تقليدياً للقروض',
      'ليست بنكاً أو مؤسسة إقراض مالي',
      'ليست وسيطاً يعد بالموافقة أو يضمن الحصول على التمويل',
      'ليست نظاماً يختلق المعطيات الناقصة أو يلفق نسب فائدة غير محددة'
    ],
    positioningIsTitle: 'ما تقدمه منصة ميزان',
    positioningIsItems: [
      'محرك لتحليل الأهلية الفنية استناداً إلى المعايير والتشريعات الرسمية',
      'أداة لتشخيص الشروط المعطلة والمحددات التأهيلية لكل برنامج',
      'كاشف للمعطيات والوثائق الناقصة الواجب إعدادها قبل إيداع الملف',
      'محلل للتركيبات والتوليفات التمويلية المتوافقة بين عدة آليات'
    ],

    // 3-Step Process
    howItWorksTitle: 'كيف يعمل ميزان ؟',
    howItWorksSub: 'مسار منهجي من 3 مراحل لهيكلة مشروعك قبل اتخاذ أي خطوة بنكية.',
    howStep1Title: '01 — فهم معطيات المشروع',
    howStep1Desc: 'هيكلة الاحتياج : الكلفة الجملية، التمويل الذاتي، قطاع النشاط، مرحلة التقدم، الولاية، الدخل العائلي، والهدف الدقيق من التمويل.',
    howStep2Title: '02 — اختبار الملاءمة والشروط',
    howStep2Desc: 'التقييم وفق المعايير الرسمية المعلنة، كشف الشروط المعطلة، توثيق المصادر، وتحديد نقاط عدم اليقين بوضوح.',
    howStep3Title: '03 — بناء استراتيجية التمويل',
    howStep3Desc: 'إذا لم تكن آلية واحدة كافية، يستكشف ميزان التوليفات التمويلية المتوافقة (قرض CMLT، ضمان سوتوغار، منح فبرودي، تمويل ذاتي) دون احتساب الضمان كتمويل نقدي مباشر.',

    // Financing Journeys
    journeysTitle: 'ما الذي ترغب في تمويله بالتحديد ؟',
    journeysSub: 'اختر موضوع التمويل لعرض الآليات البنكية وصناديق الضمان والمنح المخصصة.',
    journeyCardAction: 'بدء هذا المسار',

    // Financing Stacks
    stackTitle: 'استخبارات التراكيب التمويلية المتكاملة',
    stackSub: 'في بعض الأحيان، لا تكفي آلية تمويل واحدة لتغطية كامل الاحتياج. يحلل ميزان إمكانية الجمع بين مصادر متوافقة.',
    stackPillar1Title: 'قروض متوسطة وطويلة المدى (CMLT)',
    stackPillar1Desc: 'تمويل بنكي أو تشاركي (BFPME، BTS، بنك الإسكان، البنوك التجارية) مؤطر بسقوف استثمار ونسب تمويل ذاتي ملزمة.',
    stackPillar2Title: 'الضمان العمومي (سوتوغار / الصناديق المتخصصة)',
    stackPillar2Desc: 'آلية لتغطية مخاطر القرض لفائدة البنك (حتى 75%)، ولا تشكل ضخاً نقدياً مباشراً في سيولة المشروع.',
    stackPillar3Title: 'المنح والمساهمات القابلة للاسترجاع (FOPRODI / APII / ANETI)',
    stackPillar3Desc: 'مساهمات عمومية لتشجيع الصناعة والصناعات التقليدية وأصحاب الشهادات لتعزيز المخطط التمويلي.',
    stackPillar4Title: 'التمويل الذاتي ورأس المال المخاطر (Startup Act / ANAVA / FCPR)',
    stackPillar4Desc: 'صناديق الاستثمار المشترك والمنح المخصصة للمؤسسات الناشئة والمشاريع ذات القدرة العالية على النمو.',
    stackGuardrailNotice: 'يعتمد تحليل الجمع بين التمويلات حصراً على القواعد الموثقة رسمياً. وفي غياب نص تنظيمي صريح، تبقى النتيجة غير محددة وتتطلب التأكيد لدى لجان التمويل.',

    // Transparency
    transparencyTitle: 'معايير الشفافية ودقة المعطيات',
    transparencySub: 'يصنف ميزان بدقة كل معلومة حسب مصدرها الرسمي ودرجة سريانها القانوني.',
    factVerifiedCurrentTitle: 'معطى موثّق وحالي',
    factVerifiedCurrentDesc: 'مؤكد استناداً لنص تنظيمي رسمي أو دليل بنكي ساري المفعول.',
    factVerifiedHistoricalTitle: 'أرشيف تاريخي',
    factVerifiedHistoricalDesc: 'شروط وسقوف قديمة محفوظة لأغراض التوثيق ولا تطبق على الملفات الجديدة.',
    factCalculatedTitle: 'تقدير مالي محسوب',
    factCalculatedDesc: 'حساب دقيق وفق الصيغ المعتمدة دون اختلاق أي هوامش تسعير.',
    factRequiresConfirmationTitle: 'يخضع للتأكيد بالفرع',
    factRequiresConfirmationDesc: 'شروط ترتبط بالهامش التجاري للبنك أو تقييم المخاطر أو الاتفاقيات الثنائية.',
    factNotSpecifiedTitle: 'معلومة غير محددة',
    factNotSpecifiedDesc: 'لا يتم افتراض أي قيم افتراضية مسبقة، وتبقى المعلومة صراحة « غير محددة ».',

    // Institutions
    institutionsTitle: 'أبرز الآليات والمؤسسات المالية التي يغطيها ميزان',
    institutionsNotice: 'إدراج هذه المؤسسات يستند لتحليل معاييرها المنشورة للعموم، ولا يمثل شراكة تجارية حصرية أو وعداً بالموافقة.',

    // Demo Scenarios
    demoScenariosTitle: 'حالات تجريبية نموذجية للشركاء والبنوك (معطيات اصطناعية)',
    demoScenariosSub: 'اختر حالة واقعية للاطلاع الفوري على تقرير استخبارات التمويل لميزان :',
    demoBadge: 'حالة تجريبية نموذجية',
    loadDemoScenario: 'تحميل هذه الحالة التجريبية',
    activeDemoNotice: 'أنتم تتصفحون حالياً معطيات حالة تجريبية نموذجية. البيانات لأغراض العرض والتوضيح ولا تعني أي موافقة مسبقة من أي بنك.',
    clearDemoBtn: 'إعادة ضبط / تشخيص جديد',

    trustUserProvided: 'معلومة مصرّح بها من الباعث',
    trustVerifiedFact: 'معطى موثّق — مصدر رسمي',
    trustCalculated: 'تقدير مالي محسوب وفق صيغة موثقة',
    trustAiInterpretation: 'استخراج ذكي للمعطيات',

    step1Title: 'المشروع والاحتياج المالي',
    step1Desc: 'الفصل الصارم بين كلفة المشروع، تمويلك الذاتي، ومبلغ التمويل المطلوب.',
    step2Title: 'النشاط والدخل والموقع الجغرافي',
    step2Desc: 'القطاع وشريحة الدخل والولاية تحدد الأهلية والحوافز الجهوية.',
    step3Title: 'مرحلة التقدم والصيغة القانونية',
    step3Desc: 'الشروط تختلف بين الإحداث الجديد، الباعث الشاب، المؤسسة القائمة، والمشاريع السكنية.',
    step4Title: 'الشروط التفاضلية الخاصة والأولويات',
    step4Desc: 'شهادة التعليم العالي، علامة ستارت آب آكت، أو المعاملات المتوافقة مع الشريعة.',

    totalCostLabel: 'الكلفة الجملية للمشروع أو العقار (د.ت)',
    userContributionLabel: 'تمويلك الذاتي / المساهمة الشخصية (د.ت)',
    financingRequestedLabel: 'مبلغ التمويل البنكي المطلوب (د.ت)',
    purposeLabel: 'موضوع التمويل',
    sectorLabel: 'قطاع النشاط',
    locationLabel: 'ولاية الانتصاب / العقار',
    stageLabel: 'مرحلة تقدم المشروع',
    legalFormLabel: 'الصيغة القانونية (الحالية أو المستهدفة)',
    incomeLabel: 'شريحة الدخل الشهري الصافي للأسرة',
    employmentLabel: 'الوضعية المهنية للمترشح',
    propertyTypeLabel: 'نوع العقار المستهدف (التمويل السكني)',
    firstHomeLabel: 'اقتناء مسكن لأول مرة (غير مالك لمسكن سابق)',
    degreeLabel: 'حامل لشهادة من التعليم العالي',
    degreeHelp: 'تفتح سقف قروض بنك التضامن حتى 150 ألف دينار ومرافقة مكاتب التشغيل.',
    startupLabel: 'متحصل على علامة مؤسسة ناشئة (Startup Act)',
    startupHelp: 'التمتع بمنحة شهرية وتدخل صناديق الاستثمار التكنولوجية.',
    zdrLabel: 'الانتصاب بمنطقة تشجيع التنمية الجهوية (ZDR)',
    zdrHelp: 'رفع نسبة ضمان سوتوغار إلى 75% والتمتع بمنح صندوق فبرودي.',
    shariaLabel: 'أفضلية التمويل الإسلامي (صيغة المرابحة)',
    collateralLabel: 'توفر رهون وضمانات عينية',

    resultsTitle: 'تقرير استخبارات التمويل',
    resultsSub: 'تحليل دقيق وشفاف للأهلية الفنية استناداً إلى المعايير العامة المنشورة رسمياً.',
    executiveSummaryTitle: 'الملخص التنفيذي لميزان',
    executiveSummaryLead: 'بناءً على المعطيات المصرح بها، حدد ميزان آليات التمويل التالية التي قد تتلاءم مع وضعيتكم :',
    whyThisResultTitle: 'لماذا هذه النتيجة ؟ (شبكة الشفافية والتعليل)',
    matchedBecauseTitle: 'المعايير المتطابقة مع ملفكم :',
    potentialIssuesTitle: 'نقاط الانتباه أو الفوارق الفنية المحددة :',
    needsVerificationTitle: 'معطيات تستوجب التأكيد المباشر مع مسؤول التمويل بالفرع :',
    whatIsMissingTitle: 'المعطيات الناقصة لاستكمال الملف :',
    whatMizenDoesNotDetermineTitle: 'ما لا يحدده ميزان (حدود نطاق المنصة)',
    whatMizenDoesNotDetermineText: 'ميزان منصة استخباراتية لمساندة القرار. لا يقرر ميزان منح القرض، أو الموافقة النهائية على الأهلية، أو الملاءة المالية وفق القواعد الاحترازية للبنك، أو قرار لجنة التمويل، أو التسعير النهائي، أو إصدار شهادة الضمان.',
    alignmentStrong: 'تطابق قوي مع المعايير العامة',
    alignmentPartial: 'تطابق جزئي — نقاط تتطلب التثبت',
    alignmentBlockers: 'معايير قد تعيق القبول الفني',
    viewDetailBtn: 'التفاصيل والتوثيق',
    compareBtn: 'مقارنة',
    addToCompare: 'إضافة للمقارنة',
    removeFromCompare: 'إلغاء',
    prepareDossierBtn: 'تجهيز ملف التمويل',
    officialSourceBtn: 'زيارة المصدر الرسمي',
    lenderHandoffBtn: 'إحالة الملف للمؤسسة المالية (محاكاة نموذجية)',

    estMonthlyPayment: 'القسط الشهري التقديري',
    totalRepayment: 'إجمالي الخلاص التقديري',
    financingCost: 'كلفة التمويل الإجمالية',
    gracePeriod: 'مدة الإمهال (فترة السماح)',
    durationLabel: 'مدة السداد',
    cannotCalculateReliably: 'المحاكاة الرقمية معلقة : يجب تأكيد النسبة أو الهامش التجاري لدى فرع البنك.',
    illustrativeEstimateNotice: 'تقدير استئناسي محض مبني على المعطيات القانونية الموثقة. لا يشكل بأي حال عرضاً بنكياً ملزماً أو التزاماً تعاقدياً من أي مؤسسة مالية.',

    verifiedBadge: 'موثّق رسمياً',
    partiallyVerifiedBadge: 'موثّق جزئياً',
    outdatedBadge: 'يستوجب التحيين قبل التقديم',
    unverifiedBadge: 'يخضع للتأكيد بالفرع',
    lastCheckedLabel: 'تاريخ آخر تدقيق رسمي',

    compareTitle: 'مقارنة آليات التمويل',
    compareEmpty: 'اختر على الأقل آليتين لمقارنة المبالغ، نسب الفائدة، والضمانات المطلوبة.',
    readinessTitle: 'جاهزية الملف والقائمة التدقيقية للبنك',
    readinessSub: 'فصل واضح بين المعطيات المتوفرة حالياً والوثائق الرسمية التي ستطلبها المؤسسة المالية أثناء دراسة الملف.',
    readinessScoreLabel: 'نسبة اكتمال الملف الأولية',
    docChecklistTitle: 'الوثائق الرسمية المطلوبة حسب الدليل',
    interviewQuestionsTitle: 'أسئلة رئيسية لموعدكم مع مسؤول الفرع',
    officialPortal: 'رابط البوابة الرسمية للمؤسسة',
    disclaimerText: 'يحلل ميزان الملاءمة الفنية مع المعايير الرسمية ولا يشكل موافقة بنكية أو ضماناً لمنح التمويل.',
    persistentDisclaimer: 'يقدم ميزان تحليلاً استخباراتياً للتمويل لأغراض إعلامية استناداً للمعايير والمصادر الرسمية المتاحة. ولا يوافق على التمويل أو يضمن الأهلية أو يعوض الدراسة الائتمانية للمؤسسات البنكية.'
  }
};
