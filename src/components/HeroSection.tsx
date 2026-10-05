import React, { useState } from 'react';
import { 
  Building2, 
  Wrench, 
  TrendingUp, 
  Coins, 
  Tractor, 
  Lightbulb, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  Loader2,
  Edit2, 
  RotateCcw, 
  Info, 
  Home, 
  Hammer,
  Car,
  Layers,
  Scale,
  Check,
  X,
  ShieldAlert,
  FileCheck,
  Landmark,
  Compass
} from 'lucide-react';
import { 
  Language, 
  FinancingPurpose, 
  FinancingJourney,
  ApplicantProfile,
  BusinessSector,
  BusinessStage,
  DemoScenario
} from '../types/financing';
import { TUNISIAN_GOVERNORATES } from '../data/financingData';
import { TRANSLATIONS } from '../i18n/translations';
import { TrustBadge } from './TrustBadge';
import { parseTextToProfileFallback } from '../utils/intakeParser';
import { DemoScenarioDeck } from './DemoScenarioDeck';

interface HeroSectionProps {
  language: Language;
  onSelectPurpose: (purpose: FinancingPurpose) => void;
  onSelectJourney?: (journey: FinancingJourney) => void;
  onAiParsed: (extractedProfile: Partial<ApplicantProfile>) => void;
  onSelectDemoScenario?: (scenario: DemoScenario) => void;
  onExploreAll: () => void;
  onStartFullDiagnostic: () => void;
}

interface ExtractedDraft {
  financingRequested?: number;
  totalProjectCost?: number;
  userContribution?: number;
  purpose?: FinancingPurpose;
  sector?: BusinessSector;
  location?: string;
  businessStage?: BusinessStage;
  hasHigherEducationDegree?: boolean;
  missingCriticalFields?: string[];
  unassumedFields?: string[];
  summaryText?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  language,
  onSelectPurpose,
  onSelectJourney,
  onAiParsed,
  onSelectDemoScenario,
  onExploreAll,
  onStartFullDiagnostic
}) => {
  const t = TRANSLATIONS[language];
  const [naturalQuery, setNaturalQuery] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [parseError, setParseError] = useState<string | null>(null);

  // AI Intake & Confirmation State
  const [extractedDraft, setExtractedDraft] = useState<ExtractedDraft | null>(null);
  const [isEditingDraft, setIsEditingDraft] = useState(false);

  const sectorLabels: Record<BusinessSector, { fr: string; ar: string }> = {
    industry: { fr: 'Industrie manufacturière', ar: 'الصناعات المعملية' },
    services: { fr: 'Services & Conseil', ar: 'الخدمات والاستشارات' },
    ict_tech: { fr: 'Technologies & Logiciels', ar: 'تكنولوجيا المعلومات' },
    agriculture_agribusiness: { fr: 'Agriculture & Agroalimentaire', ar: 'الفلاحة والصناعات الغذائية' },
    crafts_trades: { fr: 'Artisanat & Métiers', ar: 'الصناعات التقليدية' },
    commerce: { fr: 'Commerce & Distribution', ar: 'التجارة والتوزيع' },
    renewable_energy: { fr: 'Énergies renouvelables', ar: 'الطاقات المتجددة' },
    tourism: { fr: 'Tourisme & Restauration', ar: 'السياحة والإطعام' },
    real_estate: { fr: 'Immobilier & Promotion', ar: 'العقارات والبعث العقاري' },
    residential_real_estate_promotion: { fr: 'Promotion immobilière résidentielle', ar: 'البعث العقاري السكني' },
    other: { fr: 'Autre secteur', ar: 'قطاع آخر' }
  };

  const stageLabels: Record<BusinessStage, { fr: string; ar: string }> = {
    idea_project: { fr: 'Idée ou étude en cours', ar: 'فكرة أو دراسة في طور الإعداد' },
    creation_underway: { fr: 'Création en cours', ar: 'في طور التأسيس' },
    established_under_2y: { fr: 'Moins de 2 ans d’activité', ar: 'أقل من سنتين نشاط' },
    established_over_2y: { fr: 'Plus de 2 ans d’activité', ar: 'أكثر من سنتين نشاط' }
  };

  const purposeLabels: Record<FinancingPurpose, { fr: string; ar: string }> = {
    creation: { fr: 'Création d’entreprise', ar: 'بعث وتأسيس مشروع' },
    equipment: { fr: 'Achat d’équipements / Matériel', ar: 'اقتناء معدات وآلات' },
    expansion: { fr: 'Extension / Modernisation', ar: 'توسعة النشاط وتحديثه' },
    working_capital: { fr: 'Fonds de roulement & Trésorerie', ar: 'رأس مال عامل وسيولة' },
    agriculture: { fr: 'Projet agricole ou agroalimentaire', ar: 'مشروع فلاحي أو تحويلي' },
    innovation_rd: { fr: 'Innovation, Tech & Startup', ar: 'تجديد، تكنولوجيا وستارت آب' },
    export: { fr: 'Développement à l’export', ar: 'تصدير وأسواق خارجية' },
    first_home: { fr: 'Premier Logement (Achat)', ar: 'المسكن الأول (شراء)' },
    home_construction: { fr: 'Construction / Rénovation Logement', ar: 'بناء أو تهيئة مسكن' },
    vehicle: { fr: 'Financement Véhicule / Leasing', ar: 'تمويل سيارة / إيجار مالي' }
  };

  const handleAiIntake = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!naturalQuery.trim()) return;

    setIsParsing(true);
    setParseError(null);

    try {
      const res = await fetch('/api/gemini/parse-intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: naturalQuery, language })
      });

      if (!res.ok) {
        throw new Error('Erreur lors du traitement de la requête');
      }

      const data = await res.json();
      if (data.extracted) {
        setExtractedDraft({
          financingRequested: data.extracted.financingRequested ?? undefined,
          totalProjectCost: data.extracted.totalProjectCost ?? undefined,
          userContribution: data.extracted.userContribution ?? undefined,
          purpose: data.extracted.purpose ?? undefined,
          sector: data.extracted.sector ?? undefined,
          location: data.extracted.location ?? undefined,
          businessStage: data.extracted.businessStage ?? undefined,
          hasHigherEducationDegree: data.extracted.hasHigherEducationDegree ?? undefined,
          missingCriticalFields: data.extracted.missingCriticalFields || [],
          unassumedFields: data.extracted.unassumedFields || [],
          summaryText: data.extracted.summaryText
        });
      }
    } catch (err: any) {
      console.warn('AI intake fallback or network error:', err);
      // Deterministic heuristic fallback without fabricating missing data
      const parsed = parseTextToProfileFallback(naturalQuery, language);
      const missing: string[] = [];
      if (!parsed.financingRequested) missing.push(language === 'ar' ? 'مبلغ التمويل المطلوب' : 'Montant du financement souhaité');
      if (!parsed.totalProjectCost) missing.push(language === 'ar' ? 'الكلفة الجملية للمشروع' : 'Coût global du projet');
      if (!parsed.userContribution) missing.push(language === 'ar' ? 'المساهمة الذاتية' : 'Apport personnel');
      if (!parsed.purpose) missing.push(language === 'ar' ? 'موضوع التمويل' : 'Objet du financement');
      if (!parsed.location) missing.push(language === 'ar' ? 'الولاية' : 'Gouvernorat');

      setExtractedDraft({
        purpose: parsed.purpose,
        financingRequested: parsed.financingRequested,
        totalProjectCost: parsed.totalProjectCost,
        userContribution: parsed.userContribution,
        location: parsed.location,
        sector: parsed.sector,
        businessStage: parsed.businessStage,
        missingCriticalFields: missing,
        unassumedFields: [
          language === 'ar' ? 'لم يتم افتراض أي نسبة فائدة أو هامش' : 'Aucun taux ou marge commerciale inventé',
          language === 'ar' ? 'الشكل القانوني والضمانات غير مفترضة' : 'Forme juridique et garanties non assumées'
        ]
      });
    } finally {
      setIsParsing(false);
    }
  };

  const handleConfirmDraft = () => {
    if (!extractedDraft) return;
    onAiParsed({
      financingRequested: extractedDraft.financingRequested,
      totalProjectCost: extractedDraft.totalProjectCost,
      userContribution: extractedDraft.userContribution,
      purpose: extractedDraft.purpose,
      sector: extractedDraft.sector,
      location: extractedDraft.location,
      businessStage: extractedDraft.businessStage,
      hasHigherEducationDegree: extractedDraft.hasHigherEducationDegree
    });
  };

  const setExamplePrompt = (exampleText: string) => {
    setNaturalQuery(exampleText);
    setExtractedDraft(null);
  };

  return (
    <div className="w-full">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION & CORE VALUE PROPOSITION */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-10 pb-14 lg:pt-16 lg:pb-20 border-b border-slate-200/80 bg-linear-to-b from-slate-100/60 via-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Badge */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold tracking-wide mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Proposition Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-display leading-[1.18] mb-5">
              {t.heroHeadline}
            </h1>

            {/* Subheadline explaining Mizen's role */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              {t.heroSubheadline}
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <button
                id="hero-cta-start"
                onClick={onStartFullDiagnostic}
                className="min-h-[46px] px-6 py-3.5 rounded-xl bg-blue-700 hover:bg-blue-800 focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>{t.heroStartBtn}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>

              <button
                id="hero-cta-explore"
                onClick={onExploreAll}
                className="min-h-[46px] px-5 py-3.5 rounded-xl bg-white hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 text-slate-800 font-semibold text-sm sm:text-base border border-slate-300/80 shadow-2xs transition-all flex items-center gap-2 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-slate-600" />
                <span>{t.heroExploreBtn}</span>
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4 text-left rtl:text-right">
              <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/60 flex items-start gap-2">
                <FileCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-tight">
                  {t.heroTrustTraceable}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/60 flex items-start gap-2">
                <Scale className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-tight">
                  {t.heroTrustVerifiedVsUncertain}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/60 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-tight">
                  {t.heroTrustNoPromise}
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-white/70 border border-slate-200/60 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span className="text-[11px] sm:text-xs font-medium text-slate-700 leading-tight">
                  {t.heroTrustNoInvented}
                </span>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. NATURAL-LANGUAGE PROJECT INTAKE & CONFIRMATION UX */}
          {/* ========================================================================= */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-5 sm:p-7 border border-slate-300/80 shadow-sm relative">
              <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 tracking-tight">
                    {t.heroAiIntakeTitle}
                  </h2>
                </div>
                <TrustBadge type="ai_interpretation" language={language} subtle />
              </div>

              {/* State A: Textarea Input Form */}
              {!extractedDraft ? (
                <form onSubmit={handleAiIntake} className="space-y-3.5">
                  <div className="relative">
                    <label htmlFor="hero-ai-input" className="sr-only">
                      {t.heroAiIntakeTitle}
                    </label>
                    <textarea
                      id="hero-ai-input"
                      value={naturalQuery}
                      onChange={(e) => setNaturalQuery(e.target.value)}
                      placeholder={t.heroAiIntakePlaceholder}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 hover:bg-white focus:bg-white border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 text-slate-800 text-sm placeholder-slate-400 transition-all outline-hidden resize-none leading-relaxed"
                    />
                  </div>

                  {/* Quick Test Chips */}
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-500 font-medium">
                      {language === 'ar' ? 'أمثلة سريعة :' : 'Exemples types :'}
                    </span>
                    <button
                      type="button"
                      onClick={() => setExamplePrompt(
                        language === 'ar'
                          ? 'أريد فتح ورشة خياطة وصناعات تقليدية في المنستير. كلفة المشروع حوالي 200 ألف دينار ويمكنني توفير 50 ألف د تمويل ذاتي.'
                          : 'Je souhaite ouvrir un atelier de confection à Monastir. Le projet coûte environ 200 000 DT et je peux apporter 50 000 DT d’autofinancement.'
                      )}
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {language === 'ar' ? 'ورشة بالمنستير (200k د)' : 'Atelier Monastir (200k DT)'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setExamplePrompt(
                        language === 'ar'
                          ? 'شراء شقة جديدة بأريانة بقيمة 180 ألف دينار كمسكن أول مع تمويل ذاتي 36 ألف دينار ودخل شهري 2200 د.'
                          : 'Achat d’un appartement neuf à Ariana de 180 000 DT comme premier logement avec 36 000 DT d’apport et 2 200 DT de salaire.'
                      )}
                      className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {language === 'ar' ? 'مسكن أول بأريانة (180k د)' : 'Premier Logement Ariana (180k DT)'}
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    <span className="text-[11px] sm:text-xs text-slate-500 leading-snug max-w-xs">
                      {t.heroAiIntakeHint}
                    </span>

                    <button
                      id="hero-ai-submit-btn"
                      type="submit"
                      disabled={isParsing || !naturalQuery.trim()}
                      className="min-h-[42px] px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ml-auto shadow-xs cursor-pointer"
                    >
                      {isParsing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{language === 'ar' ? 'جارٍ الفحص والاستخراج...' : 'Analyse structurée en cours...'}</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4 text-amber-300" />
                          <span>{t.heroAiIntakeSubmit}</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                /* State B: Extracted Project Confirmation & Review */
                <div id="ai-confirmation-review-card" className="space-y-4 pt-1">
                  <div className="p-3.5 rounded-xl bg-indigo-50/80 border border-indigo-200">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-indigo-700" />
                        {t.intakeUnderstoodTitle}
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsEditingDraft(!isEditingDraft)}
                        className="text-xs text-indigo-800 hover:text-indigo-950 font-bold flex items-center gap-1 cursor-pointer"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        <span>{isEditingDraft ? t.intakeDoneBtn : t.intakeEditBtn}</span>
                      </button>
                    </div>
                    {extractedDraft.summaryText && (
                      <p className="text-xs text-indigo-900 leading-relaxed font-normal">
                        {extractedDraft.summaryText}
                      </p>
                    )}
                  </div>

                  {/* Extracted Fields Matrix */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                    {/* Secteur */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'القطاع :' : 'Secteur d’activité :'}
                      </span>
                      {isEditingDraft ? (
                        <select
                          value={extractedDraft.sector || ''}
                          onChange={(e) => setExtractedDraft({ ...extractedDraft, sector: (e.target.value as BusinessSector) || undefined })}
                          className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                        >
                          <option value="">{`-- ${t.intakeNotSpecified} --`}</option>
                          {Object.entries(sectorLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label[language]}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.sector ? 'text-slate-900' : 'text-amber-700'}`}>
                          {extractedDraft.sector ? sectorLabels[extractedDraft.sector][language] : t.intakeNotSpecified}
                        </span>
                      )}
                    </div>

                    {/* Financement demandé */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'التمويل المطلوب :' : 'Financement souhaité :'}
                      </span>
                      {isEditingDraft ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={extractedDraft.financingRequested || ''}
                            onChange={(e) => setExtractedDraft({
                              ...extractedDraft,
                              financingRequested: parseFloat(e.target.value) || undefined
                            })}
                            placeholder="Ex: 150000"
                            className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                          />
                          <span className="font-bold text-slate-500">DT</span>
                        </div>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.financingRequested ? 'text-blue-900' : 'text-amber-700'}`}>
                          {extractedDraft.financingRequested ? `${extractedDraft.financingRequested.toLocaleString('fr-FR')} DT` : t.intakeNotSpecified}
                        </span>
                      )}
                    </div>

                    {/* Coût global */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'الكلفة الجملية للمشروع :' : 'Coût global du projet :'}
                      </span>
                      {isEditingDraft ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={extractedDraft.totalProjectCost || ''}
                            onChange={(e) => setExtractedDraft({
                              ...extractedDraft,
                              totalProjectCost: parseFloat(e.target.value) || undefined
                            })}
                            placeholder="Ex: 200000"
                            className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                          />
                          <span className="font-bold text-slate-500">DT</span>
                        </div>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.totalProjectCost ? 'text-slate-900' : 'text-amber-700'}`}>
                          {extractedDraft.totalProjectCost ? `${extractedDraft.totalProjectCost.toLocaleString('fr-FR')} DT` : t.intakeNotSpecified}
                        </span>
                      )}
                    </div>

                    {/* Apport personnel */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'المساهمة الذاتية :' : 'Apport personnel :'}
                      </span>
                      {isEditingDraft ? (
                        <div className="flex items-center gap-1">
                          <input
                            type="number"
                            value={extractedDraft.userContribution || ''}
                            onChange={(e) => setExtractedDraft({
                              ...extractedDraft,
                              userContribution: parseFloat(e.target.value) || undefined
                            })}
                            placeholder="Ex: 50000"
                            className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                          />
                          <span className="font-bold text-slate-500">DT</span>
                        </div>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.userContribution ? 'text-slate-900' : 'text-amber-700'}`}>
                          {extractedDraft.userContribution ? `${extractedDraft.userContribution.toLocaleString('fr-FR')} DT` : t.intakeNotSpecified}
                        </span>
                      )}
                    </div>

                    {/* Région / Gouvernorat */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'الولاية :' : 'Région / Gouvernorat :'}
                      </span>
                      {isEditingDraft ? (
                        <select
                          value={extractedDraft.location || ''}
                          onChange={(e) => setExtractedDraft({ ...extractedDraft, location: e.target.value || undefined })}
                          className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                        >
                          <option value="">{`-- ${t.intakeNotSpecified} --`}</option>
                          {TUNISIAN_GOVERNORATES.map(gov => (
                            <option key={gov} value={gov}>{gov}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.location ? 'text-slate-900' : 'text-amber-700'}`}>
                          {extractedDraft.location || t.intakeNotSpecified}
                        </span>
                      )}
                    </div>

                    {/* Stade du projet */}
                    <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/60">
                      <span className="text-slate-500 block mb-1 font-medium">
                        {language === 'ar' ? 'مرحلة المشروع :' : 'Stade d’avancement :'}
                      </span>
                      {isEditingDraft ? (
                        <select
                          value={extractedDraft.businessStage || ''}
                          onChange={(e) => setExtractedDraft({ ...extractedDraft, businessStage: (e.target.value as BusinessStage) || undefined })}
                          className="w-full p-1.5 rounded-md border border-slate-300 bg-white font-medium text-slate-800"
                        >
                          <option value="">{`-- ${t.intakeNotSpecified} --`}</option>
                          {Object.entries(stageLabels).map(([key, label]) => (
                            <option key={key} value={key}>{label[language]}</option>
                          ))}
                        </select>
                      ) : (
                        <span className={`font-semibold ${extractedDraft.businessStage ? 'text-slate-900' : 'text-slate-600'}`}>
                          {extractedDraft.businessStage ? stageLabels[extractedDraft.businessStage][language] : t.intakeNotSpecified}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Missing / Unassumed items notice */}
                  <div className="p-3 rounded-lg bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-900 leading-relaxed flex items-start gap-2">
                    <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">
                        {t.intakeMissingNotice}
                      </span>
                      {((extractedDraft.unassumedFields && extractedDraft.unassumedFields.length > 0) ||
                        (extractedDraft.missingCriticalFields && extractedDraft.missingCriticalFields.length > 0)) && (
                        <div className="mt-1 flex flex-wrap gap-1">
                          {[...(extractedDraft.unassumedFields || []), ...(extractedDraft.missingCriticalFields || [])].map((item, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded-md bg-white border border-amber-200 text-amber-900 font-medium">
                              {item}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Confirmation Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => {
                        setExtractedDraft(null);
                        setIsEditingDraft(false);
                      }}
                      className="min-h-[40px] px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>{t.intakeResetBtn}</span>
                    </button>

                    <button
                      id="ai-confirm-submit-btn"
                      type="button"
                      onClick={handleConfirmDraft}
                      className="min-h-[42px] px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                    >
                      <span>{t.intakeConfirmBtn}</span>
                      <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                    </button>
                  </div>
                </div>
              )}

              {parseError && (
                <div className="mt-2 text-xs text-rose-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{parseError}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. POSITIONING: WHAT MIZEN IS VS WHAT MIZEN IS NOT */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-18 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              {t.positioningTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.positioningSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* What Mizen is NOT */}
            <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-rose-800 font-bold text-base">
                  <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <X className="w-4 h-4" />
                  </div>
                  <span>{t.positioningNotTitle}</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {t.positioningNotItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* What Mizen IS */}
            <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-4 text-blue-900 font-bold text-base">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <span>{t.positioningIsTitle}</span>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                  {t.positioningIsItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0 mt-2" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. 3-STEP EXPLANATION: HOW MIZEN WORKS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              {t.howItWorksTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.howItWorksSub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 font-extrabold flex items-center justify-center text-sm mb-4">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.howStep1Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.howStep1Desc}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 font-extrabold flex items-center justify-center text-sm mb-4">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.howStep2Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.howStep2Desc}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 font-extrabold flex items-center justify-center text-sm mb-4">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {t.howStep3Title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {t.howStep3Desc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FINANCING JOURNEYS (WHAT ARE YOU FINANCING?) */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              {t.journeysTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.journeysSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                journey: 'home_purchase' as FinancingJourney,
                purpose: 'first_home' as FinancingPurpose,
                title: { fr: 'Acheter un logement', ar: 'شراء مسكن' },
                icon: <Home className="w-5 h-5 text-blue-600" />,
                desc: { fr: 'Premier Logement (MEHAT/BH), crédit bancaire acquéreur', ar: 'المسكن الأول، قروض عقارية مدعمة وبنك الإسكان' }
              },
              {
                journey: 'home_construction' as FinancingJourney,
                purpose: 'home_construction' as FinancingPurpose,
                title: { fr: 'Construire / Rénover', ar: 'بناء أو تهيئة مسكن' },
                icon: <Hammer className="w-5 h-5 text-emerald-600" />,
                desc: { fr: 'FOPROLOS, travaux sur terrain propre, surélévation', ar: 'فوبرولوس، بناء على أرض خاصة، أشغال وتوسعة' }
              },
              {
                journey: 'car' as FinancingJourney,
                purpose: 'vehicle' as FinancingPurpose,
                title: { fr: 'Acheter un véhicule', ar: 'شراء سيارة / وسيلة نقل' },
                icon: <Car className="w-5 h-5 text-amber-600" />,
                desc: { fr: 'Véhicule neuf ou occasion, leasing utilitaire, crédit auto', ar: 'سيارة جديدة أو مستعملة، ليزينغ نفعي، قرض سيارة' }
              },
              {
                journey: 'startup' as FinancingJourney,
                purpose: 'creation' as FinancingPurpose,
                title: { fr: 'Créer une entreprise', ar: 'بعث وتأسيس مشروع' },
                icon: <Building2 className="w-5 h-5 text-indigo-600" />,
                desc: { fr: 'BFPME, Startup Act, dotations APII, diplômés', ar: 'BFPME، ستارت آب آكت، منح APII، باعثون جدد' }
              },
              {
                journey: 'business_expansion' as FinancingJourney,
                purpose: 'expansion' as FinancingPurpose,
                title: { fr: 'Développer une PME', ar: 'توسعة وتحديث مؤسسة' },
                icon: <TrendingUp className="w-5 h-5 text-teal-600" />,
                desc: { fr: 'Augmentation de capacité, fonds de roulement, SOTUGAR', ar: 'زيادة طاقة الإنتاج، سيولة الاستغلال، كفالة سوتوغار' }
              },
              {
                journey: 'equipment' as FinancingJourney,
                purpose: 'equipment' as FinancingPurpose,
                title: { fr: 'Équipements & Machines', ar: 'اقتناء معدات وآلات' },
                icon: <Wrench className="w-5 h-5 text-purple-600" />,
                desc: { fr: 'Machines de production, outillage, matériel technique', ar: 'آلات إنتاج، أدوات صناعية، معدات تقنية' }
              },
              {
                journey: 'agriculture' as FinancingJourney,
                purpose: 'agriculture' as FinancingPurpose,
                title: { fr: 'Projet agricole', ar: 'مشروع فلاحي' },
                icon: <Tractor className="w-5 h-5 text-lime-600" />,
                desc: { fr: 'Arboriculture, élevage, serres, irrigation moderne', ar: 'غراسات، تربية ماشية، ري قطرة قطرة، بيوت مكيفة' }
              },
              {
                journey: 'other_professional' as FinancingJourney,
                purpose: 'working_capital' as FinancingPurpose,
                title: { fr: 'Autre financement pro', ar: 'تمويل مهني آخر' },
                icon: <Coins className="w-5 h-5 text-slate-600" />,
                desc: { fr: 'Commerces, services généraux, professions libérales', ar: 'تجارة، خدمات عامة، مهن حرة، حاجيات متنوعة' }
              }
            ].map((item) => (
              <div
                key={item.journey}
                id={`journey-card-${item.journey}`}
                onClick={() => {
                  if (onSelectJourney) {
                    onSelectJourney(item.journey);
                  } else {
                    onSelectPurpose(item.purpose);
                  }
                }}
                className="group p-4 sm:p-5 rounded-xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-white group-hover:bg-blue-100/70 border border-slate-200/80 flex items-center justify-center mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.title[language]}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.desc[language]}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs font-semibold text-blue-700 group-hover:translate-x-0.5 transition-transform">
                  <span>{t.journeyCardAction}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. FINANCING STACK CAPABILITY POSITIONING */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-400/30">
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Source Intelligence</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
              {t.stackTitle}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              {t.stackSub}
            </p>
          </div>

          {/* 4 Pillars of a Tunisian Financing Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-wider block mb-1.5">Pilier 1</span>
              <h3 className="text-sm font-bold text-white mb-2">{t.stackPillar1Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.stackPillar1Desc}</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1.5">Pilier 2</span>
              <h3 className="text-sm font-bold text-white mb-2">{t.stackPillar2Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.stackPillar2Desc}</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1.5">Pilier 3</span>
              <h3 className="text-sm font-bold text-white mb-2">{t.stackPillar3Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.stackPillar3Desc}</p>
            </div>
            <div className="p-5 rounded-xl bg-slate-800/80 border border-slate-700/80">
              <span className="text-xs font-bold text-purple-400 uppercase tracking-wider block mb-1.5">Pilier 4</span>
              <h3 className="text-sm font-bold text-white mb-2">{t.stackPillar4Title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{t.stackPillar4Desc}</p>
            </div>
          </div>

          {/* Guardrail Box */}
          <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              {t.stackGuardrailNotice}
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. TRANSPARENCY & KNOWLEDGE RIGOR */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              {t.transparencyTitle}
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              {t.transparencySub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" />
                <h3 className="text-sm font-bold text-emerald-950">{t.factVerifiedCurrentTitle}</h3>
              </div>
              <p className="text-xs text-emerald-900 leading-relaxed">{t.factVerifiedCurrentDesc}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-300/80">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                <h3 className="text-sm font-bold text-slate-900">{t.factVerifiedHistoricalTitle}</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">{t.factVerifiedHistoricalDesc}</p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
                <h3 className="text-sm font-bold text-blue-950">{t.factCalculatedTitle}</h3>
              </div>
              <p className="text-xs text-blue-900 leading-relaxed">{t.factCalculatedDesc}</p>
            </div>

            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <h3 className="text-sm font-bold text-amber-950">{t.factRequiresConfirmationTitle}</h3>
              </div>
              <p className="text-xs text-amber-900 leading-relaxed">{t.factRequiresConfirmationDesc}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 sm:col-span-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400" />
                <h3 className="text-sm font-bold text-slate-900">{t.factNotSpecifiedTitle}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{t.factNotSpecifiedDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. DEMO SCENARIOS DECK (SUPPORTING PRODUCT STORY) */}
      {/* ========================================================================= */}
      {onSelectDemoScenario && (
        <section className="py-12 bg-slate-50 border-b border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <DemoScenarioDeck
              language={language}
              onSelectScenario={onSelectDemoScenario}
            />
          </div>
        </section>
      )}

      {/* ========================================================================= */}
      {/* 9. INSTITUTIONAL LANDSCAPE & COVERAGE */}
      {/* ========================================================================= */}
      <section className="py-10 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-3">
            {t.institutionsTitle}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-semibold text-slate-700 mb-4">
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">BFPME (CMLT PME)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">BTS Bank (Diplômés & TPE)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">BH Bank (Habitat & Crédits)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">SOTUGAR (Garanties d’État)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">FOPRODI / APII (Dotations & Primes)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">Smart Capital / Startup Act</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">Enda Tamweel (Microfinance)</span>
            <span className="px-3.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg">Banque Zitouna (Finance Islamique)</span>
          </div>
          <p className="text-[11px] text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.institutionsNotice}
          </p>
        </div>
      </section>
    </div>
  );
};
