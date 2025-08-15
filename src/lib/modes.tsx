
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, Moon, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle as MessageCircleIcon, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer as ThermometerIcon, Cloud, Dumbbell, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown, Piano, MoonStar, Video as VideoIcon, CaseSensitive, Pilcrow, Type as TextIcon, Hash, Captions, ListOrdered, FileJson, MessageSquareHeart, PilcrowRight, ZoomIn, SearchSlash, WrapText, Palette as PaletteIcon, CaseUpper, List, Mailbox, Sigma, SpellCheck, Glasses, CircleOff, FilePlus2, ListTree, PenLine, WrapText as WrapTextIcon, BookHeart, Quote, Bell, Tag, ListChecks, ArrowBigDownDash, Crosshair, BarChartBig, Banknote, Calculator, PiggyBank, Receipt, DollarSign, PercentCircle, Goal, Coins, LandPlot, Ruler, Waypoints, Dices, RotateCcw, Lock, AtSign, Wifi, SquarePi, Droplet, Wrench, Gift, PartyPopper, Utensils, Martini, IceCream, Recycle, ChefHat, Dog, Cat, Rabbit, Tent, Mountain, Bird, Camera, Trash, Youtube, Table as TableIcon, Divide, SquareRadical, Superscript
} from 'lucide-react';
import { ChatInterface } from '@/components/modes/ChatInterface';
import { PhotoGenerator } from '@/components/modes/PhotoGenerator';
import { PhotoEditor } from '@/components/modes/PhotoEditor';
import { VideoGenerator } from '@/components/modes/VideoGenerator';
import { VideoEditor } from '@/components/modes/VideoEditor';
import { CodeGenerator } from '@/components/modes/CodeGenerator';
import { WebsiteMaker } from '@/components/modes/WebsiteMaker';
import { AppMaker } from '@/components/modes/AppMaker';
import { GameMaker } from '@/components/modes/GameMaker';
import { FileMaker } from '@/components/modes/FileMaker';
import { FileEditor } from '@/components/modes/FileEditor';
import { Translator } from '@/components/modes/Translator';
import { SongWriter } from '@/components/modes/SongWriter';
import { ChartMaker } from '@/components/modes/ChartMaker';
import { VoiceInterface } from '@/components/modes/VoiceInterface';
import { HomeworkPlanner } from '@/components/modes/HomeworkPlanner';
import { CodeAnalyzer } from '@/components/modes/CodeAnalyzer';
import { SoundGenerator } from '@/components/modes/SoundGenerator';
import { LogoMaker } from '@/components/modes/LogoMaker';
import { DesignAssistant } from '@/components/modes/DesignAssistant';
import { ThreeDModeler } from '@/components/modes/ThreeDModeler';
import { AnimationTool } from '@/components/modes/AnimationTool';
import { SeoTool } from '@/components/modes/SeoTool';
import { SocialMediaPostMaker } from '@/components/modes/SocialMediaPostMaker';
import { MarketResearch } from '@/components/modes/MarketResearch';
import { CreativeContentExpander } from '@/components/modes/CreativeContentExpander';
import { TechnicalDocumentGenerator } from '@/components/modes/TechnicalDocumentGenerator';
import { TitleOptimizer } from '@/components/modes/TitleOptimizer';
import { FictionalWorldBuilder } from '@/components/modes/FictionalWorldBuilder';
import { InterviewQuestionCreator } from '@/components/modes/InterviewQuestionCreator';
import { TextRewriterPro } from '@/components/modes/TextRewriterPro';
import { DigitalPersonaCreator } from '@/components/modes/DigitalPersonaCreator';
import { JobRoleAnalyzer } from '@/components/modes/JobRoleAnalyzer';
import { StudyMaterialAnalyzer } from '@/components/modes/StudyMaterialAnalyzer';
import { ProductFinder } from '@/components/modes/ProductFinder';
import { BrandFinder } from '@/components/modes/BrandFinder';
import { ConflictPlotGenerator } from '@/components/modes/ConflictPlotGenerator';
import { ConversationalFlowDesigner } from '@/components/modes/ConversationalFlowDesigner';
import { StoryboardIdeaExpander } from '@/components/modes/StoryboardIdeaExpander';
import { SmartPromptOptimizer } from '@/components/modes/SmartPromptOptimizer';
import { ContextAwareSummaryMaker } from '@/components/modes/ContextAwareSummaryMaker';
import { ReadingComprehensionAssistant } from '@/components/modes/ReadingComprehensionAssistant';
import { KnowledgeGraphBuilder } from '@/components/modes/KnowledgeGraphBuilder';
import { SmartDataCategorizer } from '@/components/modes/SmartDataCategorizer';
import { ConceptMapGenerator } from '@/components/modes/ConceptMapGenerator';
import { IndustryReportWriter } from '@/components/modes/IndustryReportWriter';
import { ProductFeatureBrainstormer } from '@/components/modes/ProductFeatureBrainstormer';
import { MeetingNotesFormatter } from '@/components/modes/MeetingNotesFormatter';
import { TextComplexityAdjuster } from '@/components/modes/TextComplexityAdjuster';
import { IdiomAndMetaphorFinder } from '@/components/modes/IdiomAndMetaphorFinder';
import { ParagraphFlowImprover } from '@/components/modes/ParagraphFlowImprover';
import { AcronymExpander } from '@/components/modes/AcronymExpander';
import { RealTimeDefinitionFinder } from '@/components/modes/RealTimeDefinitionFinder';
import { SmartKeywordHighlighter } from '@/components/modes/SmartKeywordHighlighter';
import { ToneAndMoodAdjuster } from '@/components/modes/ToneAndMoodAdjuster';
import { FormalityLevelConverter } from '@/components/modes/FormalityLevelConverter';
import { BrandVoiceEnforcer } from '@/components/modes/BrandVoiceEnforcer';
import { MultilingualSynonymFinder } from '@/components/modes/MultilingualSynonymFinder';
import { LongFormReportWriter } from '@/components/modes/LongFormReportWriter';
import { SmartQuestionAnswerEngine } from '@/components/modes/SmartQuestionAnswerEngine';
import { PolicyDraftingAssistant } from '@/components/modes/PolicyDraftingAssistant';
import { LegalClauseSuggestionTool } from '@/components/modes/LegalClauseSuggestionTool';
import { PatentAbstractGenerator } from '@/components/modes/PatentAbstractGenerator';
import { ContractSimplifier } from '@/components/modes/ContractSimplifier';
import { ComplianceDocumentChecker } from '@/components/modes/ComplianceDocumentChecker';
import { ScriptSceneExpander } from '@/components/modes/ScriptSceneExpander';
import { InterviewTranscriptFormatter } from '@/components/modes/InterviewTranscriptFormatter';
import { CharacterDialogueImprover } from '@/components/modes/CharacterDialogueImprover';
import { MultiThreadedStoryPlanner } from '@/components/modes/MultiThreadedStoryPlanner';
import { FictionOutlineMaker } from '@/components/modes/FictionOutlineMaker';
import { ComedyScriptPunchUpTool } from '@/components/modes/ComedyScriptPunchUpTool';
import { VillainBackstoryCreator } from '@/components/modes/VillainBackstoryCreator';
import { ThemeAndMotifAnalyzer } from '@/components/modes/ThemeAndMotifAnalyzer';
import { StoryArcEvaluator } from '@/components/modes/StoryArcEvaluator';
import { MythologyBasedPlotCreator } from '@/components/modes/MythologyBasedPlotCreator';
import { SciFiConceptDesigner } from '@/components/modes/SciFiConceptDesigner';
import { FantasyLoreGenerator } from '@/components/modes/FantasyLoreGenerator';
import { AlternateHistoryPlotWriter } from '@/components/modes/AlternateHistoryPlotWriter';
import { ScientificHypothesisSuggestor } from '@/components/modes/ScientificHypothesisSuggestor';
import { ExperimentDesignPlanner } from '@/components/modes/ExperimentDesignPlanner';
import { ResearchSummaryMaker } from '@/components/modes/ResearchSummaryMaker';
import { JournalAbstractCreator } from '@/components/modes/JournalAbstractCreator';
import { MethodologyDraftingTool } from '@/components/modes/MethodologyDraftingTool';
import { LabReportFormatter } from '@/components/modes/LabReportFormatter';
import { AcademicCitationBuilder } from '@/components/modes/AcademicCitationBuilder';
import { EquationSolverPro } from '@/components/modes/EquationSolverPro';
import { GraphTheoryVisualizer } from '@/components/modes/GraphTheoryVisualizer';
import { StatisticalPatternFinder } from '@/components/modes/StatisticalPatternFinder';
import { DataAnomalyDetector } from '@/components/modes/DataAnomalyDetector';
import { PredictiveModelTrainer } from '@/components/modes/PredictiveModelTrainer';
import { SimulationScenarioBuilder } from '@/components/modes/SimulationScenarioBuilder';
import { AiBehaviorModeler } from '@/components/modes/AiBehaviorModeler';
import { EthicsRiskAnalyzer } from '@/components/modes/EthicsRiskAnalyzer';
import { BiasDetectorEngine } from '@/components/modes/BiasDetectorEngine';
import { PrivacyImpactForecaster } from '@/components/modes/PrivacyImpactForecaster';
import { AlgorithmicExplainabilityTool } from '@/components/modes/AlgorithmicExplainabilityTool';
import { DatasetIntegrityChecker } from '@/components/modes/DatasetIntegrityChecker';
import { FeatureImportanceAnalyzer } from '@/components/modes/FeatureImportanceAnalyzer';
import { ForecastAccuracyEvaluator } from '@/components/modes/ForecastAccuracyEvaluator';
import { RootCauseAnalysisBot } from '@/components/modes/RootCauseAnalysisBot';
import { DataQualityScoreGenerator } from '@/components/modes/DataQualityScoreGenerator';
import { MultiVariableTrendPredictor } from '@/components/modes/MultiVariableTrendPredictor';
import { BusinessKpiForecaster } from '@/components/modes/BusinessKpiForecaster';
import { CompetitorComparisonEngine } from '@/components/modes/CompetitorComparisonEngine';
import { MarketGapIdentifier } from '@/components/modes/MarketGapIdentifier';
import { CustomerSegmentationMapper } from '@/components/modes/CustomerSegmentationMapper';
import { PriceElasticityEstimator } from '@/components/modes/PriceElasticityEstimator';
import { ChurnRiskPredictor } from '@/components/modes/ChurnRiskPredictor';
import { ProfitMarginOptimizer } from '@/components/modes/ProfitMarginOptimizer';
import { SupplyChainAiPlanner } from '@/components/modes/SupplyChainAiPlanner';
import { InventoryAutoForecaster } from '@/components/modes/InventoryAutoForecaster';
import { LogisticsRouteOptimizer } from '@/components/modes/LogisticsRouteOptimizer';
import { VendorRiskScorer } from '@/components/modes/VendorRiskScorer';
import { FraudDetectionEngine } from '@/components/modes/FraudDetectionEngine';
import { TransactionPatternFinder } from '@/components/modes/TransactionPatternFinder';
import { CreditRiskAnalyzer } from '@/components/modes/CreditRiskAnalyzer';
import { InvestmentPortfolioOptimizer } from '@/components/modes/InvestmentPortfolioOptimizer';
import { FinancialStatementSummarizer } from '@/components/modes/FinancialStatementSummarizer';
import { AdBannerMaker } from '@/components/modes/AdBannerMaker';
import { AdCopyGenerator } from '@/components/modes/AdCopyGenerator';
import { AffirmationGenerator } from '@/components/modes/AffirmationGenerator';
import { AITherapist } from '@/components/modes/AITherapist';
import { AIVirtualPetCreator } from '@/components/modes/AIVirtualPetCreator';
import { AnimatedGIFEditor } from '@/components/modes/AnimatedGIFEditor';
import { AnimatedInfographicMaker } from '@/components/modes/AnimatedInfographicMaker';
import { AnimatedLogoMaker } from '@/components/modes/AnimatedLogoMaker';
import { AppUIDesigner } from '@/components/modes/AppUIDesigner';
import { AudioEnhancer } from '@/components/modes/AudioEnhancer';
import { AudioLoopMaker } from '@/components/modes/AudioLoopMaker';
import { AudioMixer } from '@/components/modes/AudioMixer';
import { AudioSyncTool } from '@/components/modes/AudioSyncTool';
import { AudioTranscriptionTool } from '@/components/modes/AudioTranscriptionTool';
import { AIBusinessPlanWriter } from '@/components/modes/AIBusinessPlanWriter';
import { AIGameLevelDesigner } from '@/components/modes/AIGameLevelDesigner';
import { AIJokeWriter } from '@/components/modes/AIJokeWriter';
import { AITeacher } from '@/components/modes/AITeacher';
import { GamesKnowledge } from '@/components/modes/GamesKnowledge';
import { YogaFitness } from '@/components/modes/YogaFitness';
import { GrammarPracticeCreator } from '@/components/modes/GrammarPracticeCreator';
import { SportsSkillsTrainer } from '@/components/modes/SportsSkillsTrainer';
import { QuizQuestionGenerator } from '@/components/modes/QuizQuestionGenerator';
import { BookGenerator } from '@/components/modes/BookGenerator';
import { TextGenerator } from '@/components/modes/TextGenerator';
import { TextUtilities } from '@/components/modes/TextUtilities';
import { JokeFinder } from '@/components/modes/JokeFinder';
import { RhymeFinder } from '@/components/modes/RhymeFinder';
import { IdiomExplainer } from '@/components/modes/IdiomExplainer';
import { FactFinder } from '@/components/modes/FactFinder';
import { ListCreator } from '@/components/modes/ListCreator';
import { QuoteFinder } from '@/components/modes/QuoteFinder';
import { MotivationalMessageMaker } from '@/components/modes/MotivationalMessageMaker';
import { ReminderMaker } from '@/components/modes/ReminderMaker';
import { CalendarEventFiller } from '@/components/modes/CalendarEventFiller';
import { TaglineMaker } from '@/components/modes/TaglineMaker';
import { BrandNameGenerator } from '@/components/modes/BrandNameGenerator';
import { SloganMaker } from '@/components/modes/SloganMaker';
import { ProductDescriptionWriter } from '@/components/modes/ProductDescriptionWriter';
import { AdHeadlineCreator } from '@/components/modes/AdHeadlineCreator';
import { PollQuestionMaker } from '@/components/modes/PollQuestionMaker';
import { SurveyQuestionGenerator } from '@/components/modes/SurveyQuestionGenerator';
import { ResumeBulletPointMaker } from '@/components/modes/ResumeBulletPointMaker';
import { JobTitleSuggestor } from '@/components/modes/JobTitleSuggestor';
import { SkillListGenerator } from '@/components/modes/SkillListGenerator';
import { CoverLetterWriter } from '@/components/modes/CoverLetterWriter';
import { MeetingAgendaMaker } from '@/components/modes/MeetingAgendaMaker';
import { MeetingSummaryWriter } from '@/components/modes/MeetingSummaryWriter';
import { TaskPrioritySorter } from '@/components/modes/TaskPrioritySorter';
import { DecisionHelper } from '@/components/modes/DecisionHelper';
import { ProConListMaker } from '@/components/modes/ProConListMaker';
import { SWOTAnalyzer } from '@/components/modes/SWOTAnalyzer';
import { BusinessIdeaGenerator } from '@/components/modes/BusinessIdeaGenerator';
import { StartupPitchWriter } from '@/components/modes/StartupPitchWriter';
import { CostEstimateCalculator } from '@/components/modes/CostEstimateCalculator';
import { ROICalculator } from '@/components/modes/ROICalculator';
import { BudgetPlanner } from '@/components/modes/BudgetPlanner';
import { ExpenseTracker } from '@/components/modes/ExpenseTracker';
import { SavingsGoalCalculator } from '@/components/modes/SavingsGoalCalculator';
import { LoanCalculator } from '@/components/modes/LoanCalculator';
import { InterestCalculator } from '@/components/modes/InterestCalculator';
import { ProfitCalculator } from '@/components/modes/ProfitCalculator';
import { BreakEvenCalculator } from '@/components/modes/BreakEvenCalculator';
import { TaxCalculator } from '@/components/modes/TaxCalculator';
import { CurrencyConverter } from '@/components/modes/CurrencyConverter';
import { UnitConverter } from '@/components/modes/UnitConverter';
import { WeightConverter } from '@/components/modes/WeightConverter';
import { TemperatureConverter } from '@/components/modes/TemperatureConverter';
import { LengthConverter } from '@/components/modes/LengthConverter';
import { AreaConverter } from '@/components/modes/AreaConverter';
import { VolumeConverter } from '@/components/modes/VolumeConverter';
import { SpeedConverter } from '@/components/modes/SpeedConverter';
import { TimeZoneConverter } from '@/components/modes/TimeZoneConverter';
import { AgeCalculator } from '@/components/modes/AgeCalculator';
import { DateDifferenceFinder } from '@/components/modes/DateDifferenceFinder';
import { CountdownTimerMaker } from '@/components/modes/CountdownTimerMaker';
import { StopwatchTool } from '@/components/modes/StopwatchTool';
import { RandomNumberPicker } from '@/components/modes/RandomNumberPicker';
import { RandomNamePicker } from '@/components/modes/RandomNamePicker';
import { DiceRoller } from '@/components/modes/DiceRoller';
import { CoinFlip } from '@/components/modes/CoinFlip';
import { PasswordGenerator } from '@/components/modes/PasswordGenerator';
import { UsernameGenerator } from '@/components/modes/UsernameGenerator';
import { NicknameMaker } from '@/components/modes/NicknameMaker';
import { WifiNameGenerator } from '@/components/modes/WifiNameGenerator';
import { DomainNameGenerator } from '@/components/modes/DomainNameGenerator';
import { AppNameGenerator } from '@/components/modes/AppNameGenerator';
import { GameNameGenerator } from '@/components/modes/GameNameGenerator';
import { PlaylistNameGenerator } from '@/components/modes/PlaylistNameGenerator';
import { EventNameGenerator } from '@/components/modes/EventNameGenerator';
import { BookTitleGenerator } from '@/components/modes/BookTitleGenerator';
import { ChapterTitleGenerator } from '@/components/modes/ChapterTitleGenerator';
import { CourseTitleGenerator } from '@/components/modes/CourseTitleGenerator';
import { LessonPlanMaker } from '@/components/modes/LessonPlanMaker';
import { ExamQuestionGenerator } from '@/components/modes/ExamQuestionGenerator';
import { FlashcardMaker } from '@/components/modes/FlashcardMaker';
import { StudyGuideMaker } from '@/components/modes/StudyGuideMaker';
import { ConceptExplainer } from '@/components/modes/ConceptExplainer';
import { HistoricalFactFinder } from '@/components/modes/HistoricalFactFinder';
import { ScienceFactFinder } from '@/components/modes/ScienceFactFinder';
import { MathProblemSolver } from '@/components/modes/MathProblemSolver';
import { EquationGenerator } from '@/components/modes/EquationGenerator';
import { GeometryShapeDrawer } from '@/components/modes/GeometryShapeDrawer';
import { UnitConversionPracticeTool } from '@/components/modes/UnitConversionPracticeTool';
import { LanguagePracticePartner } from '@/components/modes/LanguagePracticePartner';
import { VocabularyBuilder } from '@/components/modes/VocabularyBuilder';
import { SpellingQuizMaker } from '@/components/modes/SpellingQuizMaker';
import { GrammarQuizMaker } from '@/components/modes/GrammarQuizMaker';
import { ReadingComprehensionTester } from '@/components/modes/ReadingComprehensionTester';
import { EssayTopicGenerator } from '@/components/modes/EssayTopicGenerator';
import { PoetryWriter } from '@/components/modes/PoetryWriter';
import { HaikuGenerator } from '@/components/modes/HaikuGenerator';
import { SongLyricStarter } from '@/components/modes/SongLyricStarter';
import { RapVerseMaker } from '@/components/modes/RapVerseMaker';
import { ScriptDialogueWriter } from '@/components/modes/ScriptDialogueWriter';
import { MonologueWriter } from '@/components/modes/MonologueWriter';
import { SceneDescriptionWriter } from '@/components/modes/SceneDescriptionWriter';
import { CharacterBackstoryMaker } from '@/components/modes/CharacterBackstoryMaker';
import { PlotTwistGenerator } from '@/components/modes/PlotTwistGenerator';
import { ConflictIdeaMaker } from '@/components/modes/ConflictIdeaMaker';
import { EndingSuggestor } from '@/components/modes/EndingSuggestor';
import { BookSummaryMaker } from '@/components/modes/BookSummaryMaker';
import { MovieSummaryMaker } from '@/components/modes/MovieSummaryMaker';
import { EpisodeRecapWriter } from '@/components/modes/EpisodeRecapWriter';
import { RecipeWriter } from '@/components/modes/RecipeWriter';
import { MealPlanGenerator } from '@/components/modes/MealPlanGenerator';
import { GroceryListMaker } from '@/components/modes/GroceryListMaker';
import { CalorieCounter } from '@/components/modes/CalorieCounter';
import { WorkoutPlanGenerator } from '@/components/modes/WorkoutPlanGenerator';
import { YogaRoutineGenerator } from '@/components/modes/YogaRoutineGenerator';
import { MeditationGuide } from '@/components/modes/MeditationGuide';
import { BreathingExerciseGuide } from '@/components/modes/BreathingExerciseGuide';
import { HabitTracker } from '@/components/modes/HabitTracker';
import { SleepRoutinePlanner } from '@/components/modes/SleepRoutinePlanner';
import { WaterIntakeTracker } from '@/components/modes/WaterIntakeTracker';
import { MoodJournalPrompter } from '@/components/modes/MoodJournalPrompter';
import { SelfCareChecklistMaker } from '@/components/modes/SelfCareChecklistMaker';
import { MindMapCreator } from '@/components/modes/MindMapCreator';
import { GoalTracker } from '@/components/modes/GoalTracker';
import { MotivationQuoteSender } from '@/components/modes/MotivationQuoteSender';
import { ChallengeIdeaGenerator } from '@/components/modes/ChallengeIdeaGenerator';
import { DIYProjectIdeaMaker } from '@/components/modes/DIYProjectIdeaMaker';
import { GiftIdeaGenerator } from '@/components/modes/GiftIdeaGenerator';
import { PartyThemeGenerator } from '@/components/modes/PartyThemeGenerator';
import { EventScheduleMaker } from '@/components/modes/EventScheduleMaker';
import { InvitationMessageWriter } from '@/components/modes/InvitationMessageWriter';
import { ToastSpeechWriter } from '@/components/modes/ToastSpeechWriter';
import { EulogyWriter } from '@/components/modes/EulogyWriter';
import { ThankYouNoteMaker } from '@/components/modes/ThankYouNoteMaker';
import { ApologyLetterWriter } from '@/components/modes/ApologyLetterWriter';
import { LoveLetterWriter } from '@/components/modes/LoveLetterWriter';
import { ComplimentGenerator } from '@/components/modes/ComplimentGenerator';
import { RoastJokeGenerator } from '@/components/modes/RoastJokeGenerator';
import { GreetingCardMessageMaker } from '@/components/modes/GreetingCardMessageMaker';
import { HolidayWishMaker } from '@/components/modes/HolidayWishMaker';
import { BirthdayWishMaker } from '@/components/modes/BirthdayWishMaker';
import { AnniversaryWishMaker } from '@/components/modes/AnniversaryWishMaker';
import { CondolenceMessageWriter } from '@/components/modes/CondolenceMessageWriter';
import { CongratulationsMessageWriter } from '@/components/modes/CongratulationsMessageWriter';
import { ShortStoryWriter } from '@/components/modes/ShortStoryWriter';
import { FairyTaleCreator } from '@/components/modes/FairyTaleCreator';
import { FableWriter } from '@/components/modes/FableWriter';
import { HorrorStoryMaker } from '@/components/modes/HorrorStoryMaker';
import { MysteryStoryGenerator } from '@/components/modes/MysteryStoryGenerator';
import { FantasyStoryBuilder } from '@/components/modes/FantasyStoryBuilder';
import { SciFiStoryMaker } from '@/components/modes/SciFiStoryMaker';
import { DetectiveCaseIdeaMaker } from '@/components/modes/DetectiveCaseIdeaMaker';
import { SuperheroStoryCreator } from '@/components/modes/SuperheroStoryCreator';
import { VillainProfileMaker } from '@/components/modes/VillainProfileMaker';
import { SideCharacterGenerator } from '@/components/modes/SideCharacterGenerator';
import { DialogueImprover } from '@/components/modes/DialogueImprover';
import { ScenePacingAdjuster } from '@/components/modes/ScenePacingAdjuster';
import { NarrativeStyleChanger } from '@/components/modes/NarrativeStyleChanger';
import { PerspectiveRewriter } from '@/components/modes/PerspectiveRewriter';
import { ArticleRewriter } from '@/components/modes/ArticleRewriter';
import { PlagiarismFreeRewriter } from '@/components/modes/PlagiarismFreeRewriter';
import { ProductReviewWriter } from '@/components/modes/ProductReviewWriter';
import { ServiceReviewWriter } from '@/components/modes/ServiceReviewWriter';
import { MovieReviewMaker } from '@/components/modes/MovieReviewMaker';
import { GameReviewWriter } from '@/components/modes/GameReviewWriter';
import { AppReviewGenerator } from '@/components/modes/AppReviewGenerator';
import { BookReviewWriter } from '@/components/modes/BookReviewWriter';
import { TravelItineraryMaker } from '@/components/modes/TravelItineraryMaker';
import { PackingListMaker } from '@/components/modes/PackingListMaker';
import { LocalAttractionFinder } from '@/components/modes/LocalAttractionFinder';
import { RestaurantSuggestor } from '@/components/modes/RestaurantSuggestor';
import { FoodPairingSuggestor } from '@/components/modes/FoodPairingSuggestor';
import { CocktailRecipeMaker } from '@/components/modes/CocktailRecipeMaker';
import { SmoothieRecipeGenerator } from '@/components/modes/SmoothieRecipeGenerator';
import { DessertIdeaGenerator } from '@/components/modes/DessertIdeaGenerator';
import { MealSubstituteFinder } from '@/components/modes/MealSubstituteFinder';
import { CookingTipGiver } from '@/components/modes/CookingTipGiver';
import { KitchenMeasurementConverter } from '@/components/modes/KitchenMeasurementConverter';
import { LeftoverRecipeMaker } from '@/components/modes/LeftoverRecipeMaker';
import { CleaningChecklistMaker } from '@/components/modes/CleaningChecklistMaker';
import { ChoreScheduler } from '@/components/modes/ChoreScheduler';
import { MinimalistDeclutterGuide } from '@/components/modes/MinimalistDeclutterGuide';
import { BudgetFriendlyHomeDecorIdeas } from '@/components/modes/BudgetFriendlyHomeDecorIdeas';
import { GardeningTipGiver } from '@/components/modes/GardeningTipGiver';
import { PlantWateringReminder } from '@/components/modes/PlantWateringReminder';
import { PetCareGuide } from '@/components/modes/PetCareGuide';
import { DogTrainingTipGiver } from '@/components/modes/DogTrainingTipGiver';
import { CatBehaviorExplainer } from '@/components/modes/CatBehaviorExplainer';
import { PetNameGenerator } from '@/components/modes/PetNameGenerator';
import { WildlifeFactFinder } from '@/components/modes/WildlifeFactFinder';
import { BirdWatchingGuide } from '@/components/modes/BirdWatchingGuide';
import { FishingTipGiver } from '@/components/modes/FishingTipGiver';
import { CampingChecklistMaker } from '@/components/modes/CampingChecklistMaker';
import { HikingRouteSuggestor } from '@/components/modes/HikingRouteSuggestor';
import { WorkoutTimer } from '@/components/modes/WorkoutTimer';
import { StepCounter } from '@/components/modes/StepCounter';
import { BodyMassIndexCalculator } from '@/components/modes/BodyMassIndexCalculator';
import { HeartRateZoneCalculator } from '@/components/modes/HeartRateZoneCalculator';
import { StretchingRoutineGenerator } from '@/components/modes/StretchingRoutineGenerator';
import { DanceMoveSuggestor } from '@/components/modes/DanceMoveSuggestor';
import { MusicPracticeTracker } from '@/components/modes/MusicPracticeTracker';
import { InstrumentLearningGuide } from '@/components/modes/InstrumentLearningGuide';
import { SongChordFinder } from '@/components/modes/SongChordFinder';
import { LyricRhymeImprover } from '@/components/modes/LyricRhymeImprover';
import { DJPlaylistOrganizer } from '@/components/modes/DJPlaylistOrganizer';
import { PhotographyTipGiver } from '@/components/modes/PhotographyTipGiver';
import { CameraSettingGuide } from '@/components/modes/CameraSettingGuide';
import { PhotoCaptionGenerator } from '@/components/modes/PhotoCaptionGenerator';
import { SocialMediaPostScheduler } from '@/components/modes/SocialMediaPostScheduler';
import { ContentCalendarMaker } from '@/components/modes/ContentCalendarMaker';
import { HashtagTrendFinder } from '@/components/modes/HashtagTrendFinder';
import { ViralIdeaGenerator } from '@/components/modes/ViralIdeaGenerator';
import { AdCopywriter } from '@/components/modes/AdCopywriter';
import { SalesScriptWriter } from '@/components/modes/SalesScriptWriter';
import { ColdEmailWriter } from '@/components/modes/ColdEmailWriter';
import { MarketingIdeaGenerator } from '@/components/modes/MarketingIdeaGenerator';
import { SEOKeywordSuggestor } from '@/components/modes/SEOKewordSuggestor';
import { MetaDescriptionWriter } from '@/components/modes/MetaDescriptionWriter';
import { BlogTagGenerator } from '@/components/modes/BlogTagGenerator';
import { YouTubeTitleMaker } from '@/components/modes/YouTubeTitleMaker';
import { YouTubeDescriptionWriter } from '@/components/modes/YouTubeDescriptionWriter';
import { YouTubeTagGenerator } from '@/components/modes/YouTubeTagGenerator';
import { VideoScriptWriter } from '@/components/modes/VideoScriptWriter';
import { ShortVideoIdeaGenerator } from '@/components/modes/ShortVideoIdeaGenerator';
import { LiveStreamTopicGenerator } from '@/components/modes/LiveStreamTopicGenerator';
import { WebinarOutlineMaker } from '@/components/modes/WebinarOutlineMaker';
import { OnlineCourseOutlineMaker } from '@/components/modes/OnlineCourseOutlineMaker';
import { LessonScriptWriter } from '@/components/modes/LessonScriptWriter';
import { TestAnswerKeyGenerator } from '@/components/modes/TestAnswerKeyGenerator';
import { PollResultAnalyzer } from '@/components/modes/PollResultAnalyzer';
import { DataSummarizer } from '@/components/modes/DataSummarizer';
import { CsvToTableFormatter } from '@/components/modes/CsvToTableFormatter';
import { ChartIdeaGenerator } from '@/components/modes/ChartIdeaGenerator';
import { BasicDataCalculator } from '@/components/modes/BasicDataCalculator';
import { AverageCalculator } from '@/components/modes/AverageCalculator';
import { PercentageCalculator } from '@/components/modes/PercentageCalculator';
import { RatioCalculator } from '@/components/modes/RatioCalculator';
import { FractionSimplifier } from '@/components/modes/FractionSimplifier';
import { DecimalToFractionConverter } from '@/components/modes/DecimalToFractionConverter';
import { BinaryToDecimalConverter } from '@/components/modes/BinaryToDecimalConverter';
import { HexToDecimalConverter } from '@/components/modes/HexToDecimalConverter';
import { NumberBaseConverter } from '@/components/modes/NumberBaseConverter';
import { PrimeNumberFinder } from '@/components/modes/PrimeNumberFinder';
import { FactorFinder } from '@/components/modes/FactorFinder';
import { MultiplicationTableMaker } from '@/components/modes/MultiplicationTableMaker';
import { DivisionStepSolver } from '@/components/modes/DivisionStepSolver';
import { SquareRootFinder } from '@/components/modes/SquareRootFinder';
import { ExponentCalculator } from '@/components/modes/ExponentCalculator';
import { LogarithmCalculator } from '@/components/modes/LogarithmCalculator';
import { ProbabilityCalculator } from '@/components/modes/ProbabilityCalculator';

export type ModeId = 
  // Core
  | 'chat' | 'fun_chat' | 'voice_chat'
  // Creative & Media
  | 'photo_generator' | 'logo_maker' | 'design_assistant' | 'photo_editor' | 'video_maker' | 'video_generator' | 'animation_tool' | 'three_d_modeler' | 'video_editor' | 'sound_generator' | 'story_generator' | 'song_writer' | 'poem_generator' | 'character_generator' | 'dream_interpreter'
  // Development & Tech
  | 'code_generator' | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' | 'file_editor'
  // Business & Marketing
  | 'chart_maker' | 'market_research' | 'social_media_post_maker' | 'seo_tool' | 'ad_maker' | 'email_writer' | 'speech_writer' | 'fact_checker' | 'brand_finder' | 'product_finder'
  | 'supply_chain_ai_planner' | 'inventory_auto_forecaster' | 'logistics_route_optimizer' | 'vendor_risk_scorer' | 'fraud_detection_engine' | 'transaction_pattern_finder' | 'credit_risk_analyzer' | 'investment_portfolio_optimizer' | 'financial_statement_summarizer'
  | 'text_rewriter_pro' | 'creative_content_expander' | 'conversational_flow_designer' | 'technical_document_generator' | 'storyboard_idea_expander' | 'digital_persona_creator' | 'smart_prompt_optimizer' | 'title_and_headline_optimizer'
  | 'long_form_report_writer' | 'smart_question_answer_engine' | 'policy_drafting_assistant' | 'legal_clause_suggestion_tool' | 'patent_abstract_generator' | 'contract_simplifier' | 'compliance_document_checker' | 'business_kpi_forecaster' | 'competitor_comparison_engine' | 'market_gap_identifier' | 'customer_segmentation_mapper' | 'price_elasticity_estimator' | 'churn_risk_predictor' | 'profit_margin_optimizer'
  // Education & Productivity
  | 'homework_helper' | 'study_material_analyzer' | 'ai_teacher' | 'games_knowledge' | 'yoga_fitness' | 'grammar_practice_creator' | 'sports_skills_trainer' | 'quiz_generator' | 'book_generator'
  | 'text_summarizer' | 'question_giver' | 'idea_generator' | 'recipe_creator' | 'travel_planner' | 'grammar_corrector'
  // Text Utilities
  | 'text_formatter' | 'spelling_checker' | 'word_counter' | 'hashtag_generator' | 'caption_maker' | 'daily_planner' | 'note_summarizer' | 'paragraph_expander' | 'question_generator' | 'keyword_finder' | 'text_cleaner' | 'text_tone_adjuster' | 'synonym_finder' | 'antonym_finder' | 'acronym_maker' | 'emoji_replacer' | 'headline_creator' | 'title_case_converter' | 'bullet_point_maker' | 'simple_translator' | 'text_shortener' | 'email_subject_line_maker' | 'readability_checker' | 'plagiarism_checker' | 'blog_idea_generator' | 'blog_outline_maker' | 'blog_intro_writer' | 'blog_conclusion_writer' | 'story_idea_generator'
  // Business/Productivity Utilities
  | 'joke_finder' | 'rhyme_finder' | 'idiom_explainer' | 'fact_finder' | 'list_creator' | 'quote_finder' | 'motivational_message_maker' | 'reminder_maker' | 'calendar_event_filler' | 'tagline_maker' | 'brand_name_generator' | 'slogan_maker' | 'product_description_writer' | 'ad_headline_creator' | 'poll_question_maker' | 'survey_question_generator' | 'resume_bullet_point_maker' | 'job_title_suggestor' | 'skill_list_generator' | 'cover_letter_writer' | 'meeting_agenda_maker' | 'meeting_summary_writer' | 'task_priority_sorter' | 'decision_helper' | 'pro_con_list_maker' | 'swot_analyzer' | 'business_idea_generator' | 'startup_pitch_writer' | 'cost_estimate_calculator' | 'roi_calculator'
  // Financial & Unit Conversion Utilities
  | 'budget_planner' | 'expense_tracker' | 'savings_goal_calculator' | 'loan_calculator' | 'interest_calculator' | 'profit_calculator' | 'break_even_calculator' | 'tax_calculator' | 'currency_converter' | 'unit_converter' | 'weight_converter' | 'temperature_converter' | 'length_converter' | 'area_converter' | 'volume_converter' | 'speed_converter' | 'time_zone_converter'
  // Time & Randomization Utilities
  | 'age_calculator' | 'date_difference_finder' | 'countdown_timer_maker' | 'stopwatch_tool' | 'random_number_picker' | 'random_name_picker' | 'dice_roller' | 'coin_flip'
  // Naming & Security Utilities
  | 'password_generator' | 'username_generator' | 'nickname_maker' | 'wifi_name_generator' | 'domain_name_generator'
  // Education & Creative Writing Utilities
  | 'app_name_generator' | 'game_name_generator' | 'playlist_name_generator' | 'event_name_generator' | 'book_title_generator' | 'chapter_title_generator' | 'course_title_generator'
  | 'lesson_plan_maker' | 'exam_question_generator' | 'flashcard_maker' | 'study_guide_maker' | 'concept_explainer' | 'historical_fact_finder' | 'science_fact_finder' | 'math_problem_solver' | 'equation_generator' | 'geometry_shape_drawer' | 'unit_conversion_practice_tool'
  | 'language_practice_partner' | 'vocabulary_builder' | 'spelling_quiz_maker' | 'grammar_quiz_maker' | 'reading_comprehension_tester'
  | 'essay_topic_generator' | 'poetry_writer' | 'haiku_generator' | 'song_lyric_starter' | 'rap_verse_maker' | 'script_dialogue_writer' | 'monologue_writer' | 'scene_description_writer'
  // Latest Batch
  | 'character_backstory_maker' | 'plot_twist_generator' | 'conflict_idea_maker' | 'ending_suggestor' | 'book_summary_maker' | 'movie_summary_maker' | 'episode_recap_writer'
  | 'recipe_writer' | 'meal_plan_generator' | 'grocery_list_maker' | 'calorie_counter' | 'workout_plan_generator' | 'yoga_routine_generator' | 'meditation_guide' | 'breathing_exercise_guide'
  | 'habit_tracker' | 'sleep_routine_planner' | 'water_intake_tracker' | 'mood_journal_prompter' | 'self_care_checklist_maker' | 'mind_map_creator' | 'goal_tracker'
  | 'motivation_quote_sender' | 'challenge_idea_generator' | 'diy_project_idea_maker' | 'gift_idea_generator' | 'party_theme_generator' | 'event_schedule_maker' | 'invitation_message_writer'
  // Newest Batch
  | 'toast_speech_writer' | 'eulogy_writer' | 'thank_you_note_maker' | 'apology_letter_writer' | 'love_letter_writer' | 'compliment_generator' | 'roast_joke_generator' | 'greeting_card_message_maker'
  | 'holiday_wish_maker' | 'birthday_wish_maker' | 'anniversary_wish_maker' | 'condolence_message_writer' | 'congratulations_message_writer'
  | 'short_story_writer' | 'fairy_tale_creator' | 'fable_writer' | 'horror_story_maker' | 'mystery_story_generator' | 'fantasy_story_builder' | 'sci_fi_story_maker' | 'detective_case_idea_maker' | 'superhero_story_creator'
  | 'villain_profile_maker' | 'side_character_generator' | 'dialogue_improver' | 'scene_pacing_adjuster' | 'narrative_style_changer' | 'perspective_rewriter' | 'article_rewriter'
  // Latest batch
  | 'plagiarism_free_rewriter' | 'product_review_writer' | 'service_review_writer' | 'movie_review_maker' | 'game_review_writer' | 'app_review_generator' | 'book_review_writer'
  | 'travel_itinerary_maker' | 'packing_list_maker' | 'local_attraction_finder' | 'restaurant_suggestor' | 'food_pairing_suggestor' | 'cocktail_recipe_maker' | 'smoothie_recipe_generator' | 'dessert_idea_generator' | 'meal_substitute_finder' | 'cooking_tip_giver' | 'kitchen_measurement_converter' | 'leftover_recipe_maker'
  | 'cleaning_checklist_maker' | 'chore_scheduler' | 'minimalist_declutter_guide' | 'budget_friendly_home_decor_ideas'
  | 'gardening_tip_giver' | 'plant_watering_reminder' | 'pet_care_guide' | 'dog_training_tip_giver' | 'cat_behavior_explainer' | 'pet_name_generator' | 'wildlife_fact_finder'
  // Newest batch
  | 'bird_watching_guide' | 'fishing_tip_giver' | 'camping_checklist_maker' | 'hiking_route_suggestor' | 'workout_timer' | 'step_counter' | 'body_mass_index_calculator' | 'heart_rate_zone_calculator' | 'stretching_routine_generator' | 'dance_move_suggestor'
  | 'music_practice_tracker' | 'instrument_learning_guide' | 'song_chord_finder' | 'lyric_rhyme_improver' | 'dj_playlist_organizer'
  | 'photography_tip_giver' | 'camera_setting_guide' | 'photo_caption_generator' | 'social_media_post_scheduler' | 'content_calendar_maker' | 'hashtag_trend_finder' | 'viral_idea_generator'
  | 'ad_copywriter' | 'sales_script_writer' | 'cold_email_writer' | 'marketing_idea_generator' | 'seo_keyword_suggestor' | 'meta_description_writer' | 'blog_tag_generator' | 'youtube_title_maker'
  // Final 30
  | 'youtube_description_writer' | 'youtube_tag_generator' | 'video_script_writer' | 'short_video_idea_generator' | 'live_stream_topic_generator' | 'webinar_outline_maker'
  | 'online_course_outline_maker' | 'lesson_script_writer' | 'test_answer_key_generator' | 'poll_result_analyzer' | 'data_summarizer' | 'csv_to_table_formatter'
  | 'chart_idea_generator' | 'basic_data_calculator' | 'average_calculator' | 'percentage_calculator' | 'ratio_calculator' | 'fraction_simplifier' | 'decimal_to_fraction_converter'
  | 'binary_to_decimal_converter' | 'hex_to_decimal_converter' | 'number_base_converter' | 'prime_number_finder' | 'factor_finder' | 'multiplication_table_maker'
  | 'division_step_solver' | 'square_root_finder' | 'exponent_calculator' | 'logarithm_calculator' | 'probability_calculator';

export interface Mode {
    id: ModeId;
    name: string;
    icon: React.ElementType;
    description: string;
    component: React.ElementType;
    componentProps?: Record<string, any>;
}

const textUtilitiesProps = (id: ModeId, name: string, icon: React.ElementType, description: string, promptPrefix: string) => ({
    id,
    name,
    icon,
    description,
    component: TextUtilities,
    componentProps: {
        promptPlaceholder: "Enter text here...",
        buttonText: `Generate ${name}`,
        generatePrompt: (p: string) => `${promptPrefix}: "${p}"`,
        resultTitle: `Result`,
    },
});

export const modes: Mode[] = [
    // Core & Creative
    { id: 'chat', name: 'AI Chat', icon: BrainCircuit, description: 'Your AI command center for text and files.', component: ChatInterface },
    { id: 'fun_chat', name: 'Fun Chat', icon: Bot, description: 'Chat with a more creative and playful AI.', component: ChatInterface, componentProps: { isFunChat: true } },
    { id: 'voice_chat', name: 'Voice Chat', icon: Mic, description: 'Talk directly with the AI in a voice conversation.', component: VoiceInterface },
    { id: 'photo_generator', name: 'Photo Generator', icon: Image, description: 'Create stunning images from text prompts.', component: PhotoGenerator },
    { id: 'logo_maker', name: 'Logo Maker', icon: Paintbrush, description: 'Generate creative logos for your business or brand.', component: LogoMaker },
    { id: 'design_assistant', name: 'Design Assistant', icon: Star, description: 'Get design suggestions and guidance.', component: DesignAssistant },
    { id: 'photo_editor', name: 'Photo Editor', icon: Palette, description: 'Upload a photo and edit it with an AI prompt.', component: PhotoEditor },
    { id: 'video_maker', name: 'Video Maker', icon: Video, description: 'Generate a video from a text prompt or animate an image.', component: VideoMaker },
    { id: 'video_generator', name: 'Video Storyboard', icon: VideoIcon, description: 'Generate a video storyboard with narration.', component: VideoGenerator },
    { id: 'animation_tool', name: 'Animation Planner', icon: GanttChart, description: 'Plan animations and motion graphics.', component: AnimationTool },
    { id: 'three_d_modeler', name: '3D Model Planner', icon: PieChart, description: 'Create plans for 3D models.', component: ThreeDModeler },
    { id: 'video_editor', name: 'Video Analyzer', icon: Film, description: 'Upload a video and get AI analysis.', component: VideoEditor },
    { id: 'sound_generator', name: 'Sound Generator', icon: AudioLines, description: 'Generate audio by speaking any text.', component: SoundGenerator },
    { id: 'story_generator', name: 'Story Generator', icon: BookOpen, description: 'Write creative stories and scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A lost robot searching for the last human on a deserted Earth...",
        buttonText: "Generate Story",
        generatePrompt: (p: string) => `Write a creative story based on the following prompt. The story should be in the same language as the prompt. Prompt: ${p}`,
        resultTitle: "Your Story"
    }},
    { id: 'song_writer', name: 'Song Writer', icon: Music, description: 'Generate lyrics and a matching melody.', component: SongWriter },
    { id: 'poem_generator', name: 'Poem Generator', icon: Feather, description: 'Create beautiful poems in various styles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A haiku about the ocean' or 'A sonnet about love and loss'...",
        buttonText: "Generate Poem",
        generatePrompt: (p: string) => `Write a poem based on the following request. The poem should be in the same language as the prompt. Request: ${p}`,
        resultTitle: "Generated Poem"
    }},
    { id: 'character_generator', name: 'Character Generator', icon: UserSquare, description: 'Create detailed characters for stories.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A grizzled detective with a troubled past' or 'A cheerful elf from a hidden forest'...",
        buttonText: "Create Character",
        generatePrompt: (p: string) => `Create a detailed character profile based on the following description: ${p}. Include their name, appearance, personality, backstory, and motivations. The profile should be in the same language as the prompt.`,
        resultTitle: "Character Profile"
    }},
    { id: 'dream_interpreter', name: 'Dream Interpreter', icon: MoonStar, description: 'Analyze and find the meaning of your dreams.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Describe your dream in as much detail as possible...",
        buttonText: "Interpret Dream",
        generatePrompt: (p: string) => `Provide a thoughtful and psychological interpretation of the following dream, considering common symbols and themes. The interpretation should be in the same language as the dream description. Dream: ${p}`,
        resultTitle: "Dream Interpretation"
    }},

    // Development & Tech
    { id: 'code_generator', name: 'Code Generator', icon: Code, description: 'Generate, manage, and import code.', component: CodeGenerator },
    { id: 'code_analyzer', name: 'Code Analyzer', icon: Search, description: 'Analyze code for errors, performance, and best practices.', component: CodeAnalyzer },
    { id: 'website_maker', name: 'Website Maker', icon: Globe, description: 'Generate, preview, and import websites.', component: WebsiteMaker },
    { id: 'app_maker', name: 'App Maker', icon: AppWindow, description: 'Scaffold, import, and plan mobile applications.', component: AppMaker },
    { id: 'game_maker', name: 'Game Maker', icon: Gamepad2, description: 'Design, import, and create plans for your game.', component: GameMaker },
    { id: 'file_maker', name: 'File Maker', icon: FilePlus, description: 'Create downloadable files from a prompt.', component: FileMaker },
    { id: 'file_editor', name: 'File Editor', icon: FileEdit, description: 'Edit uploaded files with AI instructions.', component: FileEditor },
    
    // Business & Marketing
    { id: 'chart_maker', name: 'Chart & Graph Maker', icon: BarChart3, description: 'Create charts and graphs from data.', component: ChartMaker },
    { id: 'market_research', name: 'Market Research', icon: Briefcase, description: 'Gather and analyze market data.', component: MarketResearch },
    { id: 'social_media_post_maker', name: 'Social Media Post Maker', icon: Megaphone, description: 'Generate engaging posts for social media.', component: SocialMediaPostMaker },
    { id: 'seo_tool', name: 'SEO Tool', icon: TrendingUp, description: 'Optimize your content for search engines.', component: SeoTool },
    { id: 'ad_maker', name: 'Video Ad Script Maker', icon: Megaphone, description: 'Create compelling video ad scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A new brand of sparkling water with natural fruit flavors...",
        buttonText: "Generate Ad Script",
        generatePrompt: (p: string) => `Write a compelling and descriptive video ad script for the following product/service, including scene descriptions, dialogue, and camera shots. The script should be in the same language as the prompt. Prompt: ${p}`,
        resultTitle: "Video Ad Script"
    }},
    { id: 'email_writer', name: 'Email Writer', icon: Mail, description: 'Draft professional and personal emails.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An email to my boss requesting time off' or 'A follow-up email after a job interview'...",
        buttonText: "Write Email",
        generatePrompt: (p: string) => `Write a well-formatted and professional email for the following purpose. The email should be in the same language as the prompt. Purpose: ${p}`,
        resultTitle: "Generated Email"
    }},
    { id: 'fact_checker', name: 'Fact Checker', icon: CheckSquare, description: 'Check the accuracy of a statement.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter a statement to fact-check, e.g., 'The sky is green.'",
        buttonText: "Fact-Check",
        generatePrompt: (p: string) => `Please fact-check the following statement, provide a determination (e.g., True, False, Misleading), and a brief explanation with sources if possible. The response should be in the same language as the statement. Statement: ${p}`,
        resultTitle: "Fact-Check Result"
    }},
    { id: 'brand_finder', name: 'Brand Finder', icon: Crown, description: 'Find top brands for any product.', component: BrandFinder },
    { id: 'product_finder', name: 'Product Finder', icon: ShoppingCart, description: 'Find where to buy products online.', component: ProductFinder },
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, description: 'Plan and optimize supply chain logistics.', component: SupplyChainAiPlanner },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Package, description: 'Forecast inventory needs based on historical data.', component: InventoryAutoForecaster },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, description: 'Find the most efficient logistics routes.', component: LogisticsRouteOptimizer },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, description: 'Score vendors based on risk factors.', component: VendorRiskScorer },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Bug, description: 'Detect fraudulent transactions and patterns.', component: FraudDetectionEngine },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: LineChart, description: 'Find patterns in transaction data.', component: TransactionPatternFinder },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: Scale, description: 'Analyze credit risk for individuals or businesses.', component: CreditRiskAnalyzer },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, description: 'Suggest optimizations for an investment portfolio.', component: InvestmentPortfolioOptimizer },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileText, description: 'Summarize complex financial statements.', component: FinancialStatementSummarizer },

    // Education & Productivity
    { id: 'homework_helper', name: 'Homework Planner', icon: School, description: 'Plan assignments and get AI help.', component: HomeworkPlanner },
    { id: 'study_material_analyzer', name: 'Study Material Analyzer', icon: GraduationCap, description: 'Analyze study material and get a quiz.', component: StudyMaterialAnalyzer },
    { id: 'ai_teacher', name: 'AI Teacher', icon: School, description: 'Teaches concepts for education.', component: AITeacher },
    { id: 'games_knowledge', name: 'Games Knowledge', icon: Gamepad2, description: 'Get information and tips about any video game.', component: GamesKnowledge},
    { id: 'yoga_fitness', name: 'Yoga & Fitness', icon: Dumbbell, description: 'Get guidance on yoga poses, fitness exercises, and general wellness tips.', component: YogaFitness},
    { id: 'grammar_practice_creator', name: 'Grammar Practice Creator', icon: BookCheck, description: 'Generate grammar exercises for any language.', component: GrammarPracticeCreator},
    { id: 'sports_skills_trainer', name: 'Sports Skills Trainer', icon: Trophy, description: 'Learn how to improve your skills in any sport.', component: SportsSkillsTrainer},
    { id: 'quiz_generator', name: 'Quiz Generator', icon: HelpCircle, description: 'Generate quizzes on any topic.', component: QuizQuestionGenerator },
    { id: 'book_generator', name: 'Book Generator', icon: BookOpen, description: 'Write a book on any topic.', component: BookGenerator },
    { id: 'text_summarizer', name: 'Text Summarizer', icon: FileQuestion, description: 'Summarize long texts, articles, or documents.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a long article, report, or any text here to get a summary...",
        buttonText: "Summarize Text",
        generatePrompt: (p: string) => `Summarize the following text, providing the summary in the same language as the original text:\n\n${p}`,
        resultTitle: "Summary"
    }},
    { id: 'question_giver', name: 'Question Giver', icon: HelpCircle, description: 'Get questions for any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The history of the Roman Empire' or 'La physique quantique'...",
        buttonText: "Generate Questions",
        generatePrompt: (p: string) => `Generate a list of 10 insightful questions about the following topic. The questions should be in the same language as the topic provided. Topic: ${p}`,
        resultTitle: "Generated Questions"
    }},
    { id: 'idea_generator', name: 'Idea Generator', icon: Lightbulb, description: 'Brainstorm creative ideas on any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Business ideas for a small town' or 'Plot ideas for a sci-fi novel'...",
        buttonText: "Generate Ideas",
        generatePrompt: (p: string) => `Generate a list of creative and unique ideas for the following topic. The ideas should be in the same language as the prompt. Topic: ${p}`,
        resultTitle: "Creative Ideas"
    }},
    { id: 'recipe_creator', name: 'Recipe Creator', icon: CookingPot, description: 'Create recipes from a list of ingredients.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'chicken, rice, broccoli, soy sauce'...",
        buttonText: "Create Recipe",
        generatePrompt: (p: string) => `Create a delicious recipe using the following ingredients: ${p}. Provide a name for the dish, a list of ingredients, and step-by-step instructions. The recipe should be in the same language as the prompt.`,
        resultTitle: "Your Custom Recipe"
    }},
    { id: 'travel_planner', name: 'Travel Planner', icon: Plane, description: 'Plan your next trip with a custom itinerary.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 5-day trip to Paris for a couple on a budget'...",
        buttonText: "Plan Trip",
        generatePrompt: (p: string) => `Create a detailed travel itinerary for the following trip: ${p}. Include suggestions for accommodations, activities for each day, and dining options. The itinerary should be in the same language as the prompt.`,
        resultTitle: "Travel Itinerary"
    }},
    { id: 'grammar_corrector', name: 'Grammar Corrector', icon: BookCheck, description: 'Correct grammar and spelling mistakes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste your text here to correct grammar and spelling...",
        buttonText: "Correct Grammar",
        generatePrompt: (p: string) => `Correct the grammar and spelling of the following text, and provide the corrected version in the same language:\n\n${p}`,
        resultTitle: "Corrected Text"
    }},

    // Text Utilities
    textUtilitiesProps('text_formatter', 'Text Formatter', Pilcrow, 'Cleans and formats messy text into a neat layout.', 'Format the following text into a clean, readable layout'),
    textUtilitiesProps('spelling_checker', 'Spelling Checker', SpellCheck, 'Finds and fixes spelling mistakes instantly.', 'Correct all spelling mistakes in the following text and provide only the corrected version'),
    textUtilitiesProps('word_counter', 'Word Counter', Sigma, 'Counts words, characters, and sentences in text.', 'Count the words, characters, and sentences in the following text and provide only the counts in a simple format'),
    textUtilitiesProps('hashtag_generator', 'Hashtag Generator', Hash, 'Suggests hashtags based on your content.', 'Generate a list of 10 relevant social media hashtags for the following content'),
    textUtilitiesProps('caption_maker', 'Caption Maker', Captions, 'Creates short captions for images or posts.', 'Write 3 short, engaging captions for a social media post about the following topic'),
    textUtilitiesProps('daily_planner', 'Daily Planner', ListOrdered, 'Organizes daily tasks into a clear schedule.', 'Create a simple daily schedule from the following list of tasks'),
    textUtilitiesProps('note_summarizer', 'Note Summarizer', FileJson, 'Summarizes long notes into key points.', 'Summarize the following notes into the main key points'),
    textUtilitiesProps('paragraph_expander', 'Paragraph Expander', PilcrowRight, 'Expands short text into longer, detailed form.', 'Expand the following short text into a more detailed paragraph'),
    textUtilitiesProps('question_generator', 'Question Generator', MessageSquareHeart, 'Creates quiz or interview questions.', 'Generate 5 insightful questions based on the following topic'),
    textUtilitiesProps('keyword_finder', 'Keyword Finder', Search, 'Extracts main keywords from any text.', 'Extract the top 5 most important keywords from the following text'),
    textUtilitiesProps('text_cleaner', 'Text Cleaner', ZoomIn, 'Removes unwanted symbols or formatting from text.', 'Clean the following text by removing all special characters, extra spaces, and formatting, leaving only the plain text'),
    textUtilitiesProps('text_tone_adjuster', 'Text Tone Adjuster', PaletteIcon, 'Changes text tone to formal, casual, or friendly.', 'Rewrite the following text in a more formal tone'),
    textUtilitiesProps('synonym_finder', 'Synonym Finder', SearchSlash, 'Suggests alternative words with similar meaning.', 'Provide a list of 5 synonyms for the main subject of the following text'),
    textUtilitiesProps('antonym_finder', 'Antonym Finder', SearchSlash, 'Finds words with opposite meanings.', 'Provide a list of 5 antonyms for the main subject of the following text'),
    textUtilitiesProps('acronym_maker', 'Acronym Maker', WrapText, 'Creates acronyms from given phrases.', 'Create a memorable acronym from the following phrase'),
    textUtilitiesProps('emoji_replacer', 'Emoji Replacer', Smile, 'Adds matching emojis to sentences.', 'Add relevant emojis to the end of each sentence in the following text'),
    textUtilitiesProps('headline_creator', 'Headline Creator', TextIcon, 'Generates catchy headlines for articles.', 'Generate 5 catchy headlines for an article about the following topic'),
    textUtilitiesProps('title_case_converter', 'Title Case Converter', CaseUpper, 'Converts text to proper title case format.', 'Convert the following text to Title Case'),
    textUtilitiesProps('bullet_point_maker', 'Bullet Point Maker', List, 'Turns paragraphs into bullet points.', 'Convert the following paragraph into a concise list of bullet points'),
    textUtilitiesProps('simple_translator', 'Text Translator (Simple)', Languages, 'Translates text into chosen languages.', 'Translate the following text to Spanish'),
    textUtilitiesProps('text_shortener', 'Text Shortener', TextIcon, 'Makes text concise without losing meaning.', 'Shorten the following text to its most concise form while keeping the core meaning'),
    textUtilitiesProps('email_subject_line_maker', 'Email Subject Line Maker', Mailbox, 'Suggests attractive subject lines.', 'Suggest 5 attractive email subject lines for an email about the following topic'),
    {...textUtilitiesProps('readability_checker', 'Readability Checker', Glasses, 'Analyzes and scores text reading level.', 'Analyze the readability of the following text and provide a score (e.g., Flesch-Kincaid Grade Level)'), component: TextUtilities},
    {...textUtilitiesProps('plagiarism_checker', 'Plagiarism Checker', CircleOff, 'Detects copied or duplicate content.', 'Check the following text for potential plagiarism by searching for similar phrases online and report your findings.'), component: TextUtilities},
    textUtilitiesProps('blog_idea_generator', 'Blog Idea Generator', FilePlus2, 'Suggests topics for blogs.', 'Generate 5 blog post ideas based on the following topic'),
    textUtilitiesProps('blog_outline_maker', 'Blog Outline Maker', ListTree, 'Creates a structured outline for blogs.', 'Create a structured outline with sections and sub-points for a blog post about the following topic'),
    textUtilitiesProps('blog_intro_writer', 'Blog Intro Writer', PenLine, 'Writes engaging introductions for blogs.', 'Write an engaging introductory paragraph for a blog post about the following topic'),
    textUtilitiesProps('blog_conclusion_writer', 'Blog Conclusion Writer', WrapTextIcon, 'Generates a closing paragraph.', 'Write a strong concluding paragraph for a blog post about the following topic'),
    textUtilitiesProps('story_idea_generator', 'Story Idea Generator', BookHeart, 'Suggests ideas for short stories.', 'Generate 3 unique story ideas based on the following genre or theme'),

    // Business/Productivity Utilities
    { id: 'joke_finder', name: 'Joke Finder', icon: Smile, description: 'Finds or creates short jokes.', component: JokeFinder },
    { id: 'rhyme_finder', name: 'Rhyme Finder', icon: Music, description: 'Finds rhyming words for poetry or songs.', component: RhymeFinder },
    { id: 'idiom_explainer', name: 'Idiom Explainer', icon: BookOpen, description: 'Explains the meaning of idioms.', component: IdiomExplainer },
    { id: 'fact_finder', name: 'Fact Finder', icon: Lightbulb, description: 'Finds quick factual answers from knowledge.', component: FactFinder },
    { id: 'list_creator', name: 'List Creator', icon: ListOrdered, description: 'Turns ideas into organized numbered lists.', component: ListCreator },
    { id: 'quote_finder', name: 'Quote Finder', icon: Quote, description: 'Suggests quotes for a given topic.', component: QuoteFinder },
    { id: 'motivational_message_maker', name: 'Motivational Message Maker', icon: Heart, description: 'Creates uplifting short messages.', component: MotivationalMessageMaker },
    { id: 'reminder_maker', name: 'Reminder Maker', icon: Bell, description: 'Sets reminders for tasks.', component: ReminderMaker },
    { id: 'calendar_event_filler', name: 'Calendar Event Filler', icon: Calendar, description: 'Generates event details for calendars.', component: CalendarEventFiller },
    { id: 'tagline_maker', name: 'Tagline Maker', icon: Tag, description: 'Creates catchy brand taglines.', component: TaglineMaker },
    { id: 'brand_name_generator', name: 'Brand Name Generator', icon: Wand2, description: 'Suggests unique brand names.', component: BrandNameGenerator },
    { id: 'slogan_maker', name: 'Slogan Maker', icon: Megaphone, description: 'Makes short marketing slogans.', component: SloganMaker },
    { id: 'product_description_writer', name: 'Product Description Writer', icon: FileText, description: 'Writes sales descriptions.', component: ProductDescriptionWriter },
    { id: 'ad_headline_creator', name: 'Ad Headline Creator', icon: TextIcon, description: 'Creates short ad headlines.', component: AdHeadlineCreator },
    { id: 'poll_question_maker', name: 'Poll Question Maker', icon: ListChecks, description: 'Suggests questions for polls.', component: PollQuestionMaker },
    { id: 'survey_question_generator', name: 'Survey Question Generator', icon: FileQuestion, description: 'Creates structured survey questions.', component: SurveyQuestionGenerator },
    { id: 'resume_bullet_point_maker', name: 'Resume Bullet Point Maker', icon: ArrowBigDownDash, description: 'Generates professional CV bullet points.', component: ResumeBulletPointMaker },
    { id: 'job_title_suggestor', name: 'Job Title Suggestor', icon: Briefcase, description: 'Suggests suitable job titles.', component: JobTitleSuggestor },
    { id: 'skill_list_generator', name: 'Skill List Generator', icon: List, description: 'Lists skills for specific roles.', component: SkillListGenerator },
    { id: 'cover_letter_writer', name: 'Cover Letter Writer', icon: Mail, description: 'Generates job cover letters.', component: CoverLetterWriter },
    { id: 'meeting_agenda_maker', name: 'Meeting Agenda Maker', icon: ListOrdered, description: 'Creates meeting agendas.', component: MeetingAgendaMaker },
    { id: 'meeting_summary_writer', name: 'Meeting Summary Writer', icon: FileJson, description: 'Summarizes meeting notes.', component: MeetingSummaryWriter },
    { id: 'task_priority_sorter', name: 'Task Priority Sorter', icon: Filter, description: 'Organizes tasks by priority.', component: TaskPrioritySorter },
    { id: 'decision_helper', name: 'Decision Helper', icon: Crosshair, description: 'Suggests best choices based on criteria.', component: DecisionHelper },
    { id: 'pro_con_list_maker', name: 'Pro/Con List Maker', icon: List, description: 'Lists pros and cons for a decision.', component: ProConListMaker },
    { id: 'swot_analyzer', name: 'SWOT Analyzer', icon: BarChartBig, description: 'Creates Strengths, Weaknesses, Opportunities, Threats.', component: SWOTAnalyzer },
    { id: 'business_idea_generator', name: 'Business Idea Generator', icon: Lightbulb, description: 'Suggests startup ideas.', component: BusinessIdeaGenerator },
    { id: 'startup_pitch_writer', name: 'Startup Pitch Writer', icon: Presentation, description: 'Writes short pitch presentations.', component: StartupPitchWriter },
    { id: 'cost_estimate_calculator', name: 'Cost Estimate Calculator', icon: Sigma, description: 'Estimates costs for projects.', component: CostEstimateCalculator },
    { id: 'roi_calculator', name: 'ROI Calculator', icon: BadgePercent, description: 'Calculates return on investment.', component: ROICalculator },

    // Financial & Unit Conversion Utilities
    { id: 'budget_planner', name: 'Budget Planner', icon: Banknote, description: 'Plans budgets for personal or business use.', component: BudgetPlanner },
    { id: 'expense_tracker', name: 'Expense Tracker', icon: Receipt, description: 'Tracks daily expenses.', component: ExpenseTracker },
    { id: 'savings_goal_calculator', name: 'Savings Goal Calculator', icon: PiggyBank, description: 'Calculates savings targets.', component: SavingsGoalCalculator },
    { id: 'loan_calculator', name: 'Loan Calculator', icon: Landmark, description: 'Calculates loan payments.', component: LoanCalculator },
    { id: 'interest_calculator', name: 'Interest Calculator', icon: PercentCircle, description: 'Computes interest on investments.', component: InterestCalculator },
    { id: 'profit_calculator', name: 'Profit Calculator', icon: DollarSign, description: 'Calculates business profit.', component: ProfitCalculator },
    { id: 'break_even_calculator', name: 'Break-even Calculator', icon: Goal, description: 'Finds break-even point for sales.', component: BreakEvenCalculator },
    { id: 'tax_calculator', name: 'Tax Calculator', icon: Calculator, description: 'Estimates taxes owed.', component: TaxCalculator },
    { id: 'currency_converter', name: 'Currency Converter', icon: Coins, description: 'Converts between currencies.', component: CurrencyConverter },
    { id: 'unit_converter', name: 'Unit Converter', icon: Ruler, description: 'Converts measurement units.', component: UnitConverter },
    { id: 'weight_converter', name: 'Weight Converter', icon: Scale, description: 'Converts weight units.', component: WeightConverter },
    { id: 'temperature_converter', name: 'Temperature Converter', icon: ThermometerIcon, description: 'Converts Celsius, Fahrenheit, Kelvin.', component: TemperatureConverter },
    { id: 'length_converter', name: 'Length Converter', icon: Milestone, description: 'Converts length measurements.', component: LengthConverter },
    { id: 'area_converter', name: 'Area Converter', icon: LandPlot, description: 'Converts area measurements.', component: AreaConverter },
    { id: 'volume_converter', name: 'Volume Converter', icon: Beaker, description: 'Converts volume measurements.', component: VolumeConverter },
    { id: 'speed_converter', name: 'Speed Converter', icon: Car, description: 'Converts between speed units.', component: SpeedConverter },
    { id: 'time_zone_converter', name: 'Time Zone Converter', icon: Globe, description: 'Converts time between locations.', component: TimeZoneConverter },
    
    // Time & Randomization Utilities
    { id: 'age_calculator', name: 'Age Calculator', icon: User, description: 'Calculates age from date of birth.', component: AgeCalculator },
    { id: 'date_difference_finder', name: 'Date Difference Finder', icon: Calendar, description: 'Finds days between two dates.', component: DateDifferenceFinder },
    { id: 'countdown_timer_maker', name: 'Countdown Timer Maker', icon: Clock, description: 'Creates countdown timers.', component: CountdownTimerMaker },
    { id: 'stopwatch_tool', name: 'Stopwatch Tool', icon: Clock, description: 'Digital stopwatch.', component: StopwatchTool },
    { id: 'random_number_picker', name: 'Random Number Picker', icon: Hash, description: 'Picks a random number.', component: RandomNumberPicker },
    { id: 'random_name_picker', name: 'Random Name Picker', icon: Users, description: 'Picks random names from a list.', component: RandomNamePicker },
    { id: 'dice_roller', name: 'Dice Roller', icon: Dices, description: 'Simulates dice rolling.', component: DiceRoller },
    { id: 'coin_flip', name: 'Coin Flip', icon: CircleDollarSign, description: 'Flips a virtual coin.', component: CoinFlip },
    
    // Naming & Security Utilities
    { id: 'password_generator', name: 'Password Generator', icon: Lock, description: 'Creates secure passwords.', component: PasswordGenerator },
    { id: 'username_generator', name: 'Username Generator', icon: AtSign, description: 'Suggests usernames.', component: UsernameGenerator },
    { id: 'nickname_maker', name: 'Nickname Maker', icon: Smile, description: 'Generates fun nicknames.', component: NicknameMaker },
    { id: 'wifi_name_generator', name: 'Wi-Fi Name Generator', icon: Wifi, description: 'Suggests Wi-Fi SSIDs.', component: WifiNameGenerator },
    { id: 'domain_name_generator', name: 'Domain Name Generator', icon: Globe, description: 'Suggests website domains.', component: DomainNameGenerator },
    
    // Education & Creative Writing Utilities
    { id: 'app_name_generator', name: 'App Name Generator', icon: AppWindow, description: 'Suggests mobile app names.', component: AppNameGenerator },
    { id: 'game_name_generator', name: 'Game Name Generator', icon: Gamepad2, description: 'Suggests game titles.', component: GameNameGenerator },
    { id: 'playlist_name_generator', name: 'Playlist Name Generator', icon: Music, description: 'Suggests music playlist names.', component: PlaylistNameGenerator },
    { id: 'event_name_generator', name: 'Event Name Generator', icon: Calendar, description: 'Suggests names for events.', component: EventNameGenerator },
    { id: 'book_title_generator', name: 'Book Title Generator', icon: BookOpen, description: 'Suggests book titles.', component: BookTitleGenerator },
    { id: 'chapter_title_generator', name: 'Chapter Title Generator', icon: ListOrdered, description: 'Suggests chapter names.', component: ChapterTitleGenerator },
    { id: 'course_title_generator', name: 'Course Title Generator', icon: GraduationCap, description: 'Suggests online course titles.', component: CourseTitleGenerator },
    { id: 'lesson_plan_maker', name: 'Lesson Plan Maker', icon: ListChecks, description: 'Creates teaching lesson plans.', component: LessonPlanMaker },
    { id: 'exam_question_generator', name: 'Exam Question Generator', icon: FileQuestion, description: 'Creates test questions.', component: ExamQuestionGenerator },
    { id: 'flashcard_maker', name: 'Flashcard Maker', icon: BookCopy, description: 'Generates flashcards for study.', component: FlashcardMaker },
    { id: 'study_guide_maker', name: 'Study Guide Maker', icon: BookHeart, description: 'Creates condensed study notes.', component: StudyGuideMaker },
    { id: 'concept_explainer', name: 'Concept Explainer', icon: Lightbulb, description: 'Explains difficult concepts simply.', component: ConceptExplainer },
    { id: 'historical_fact_finder', name: 'Historical Fact Finder', icon: Landmark, description: 'Gives quick historical facts.', component: HistoricalFactFinder },
    { id: 'science_fact_finder', name: 'Science Fact Finder', icon: Beaker, description: 'Shares quick science facts.', component: ScienceFactFinder },
    { id: 'math_problem_solver', name: 'Math Problem Solver', icon: Sigma, description: 'Solves math problems step-by-step.', component: MathProblemSolver },
    { id: 'equation_generator', name: 'Equation Generator', icon: SquarePi, description: 'Creates math practice equations.', component: EquationGenerator },
    { id: 'geometry_shape_drawer', name: 'Geometry Shape Drawer', icon: Ruler, description: 'Generates diagrams for shapes.', component: GeometryShapeDrawer },
    { id: 'unit_conversion_practice_tool', name: 'Unit Conversion Practice Tool', icon: Ruler, description: 'Makes unit conversion exercises.', component: UnitConversionPracticeTool },
    { id: 'language_practice_partner', name: 'Language Practice Partner', icon: Languages, description: 'Simulates basic conversation practice.', component: LanguagePracticePartner },
    { id: 'vocabulary_builder', name: 'Vocabulary Builder', icon: BookCheck, description: 'Suggests new words to learn.', component: VocabularyBuilder },
    { id: 'spelling_quiz_maker', name: 'Spelling Quiz Maker', icon: SpellCheck, description: 'Generates spelling quizzes.', component: SpellingQuizMaker },
    { id: 'grammar_quiz_maker', name: 'Grammar Quiz Maker', icon: BookCheck, description: 'Creates grammar practice questions.', component: GrammarQuizMaker },
    { id: 'reading_comprehension_tester', name: 'Reading Comprehension Tester', icon: BookOpen, description: 'Generates comprehension passages.', component: ReadingComprehensionTester },
    { id: 'essay_topic_generator', name: 'Essay Topic Generator', icon: Feather, description: 'Suggests essay writing topics.', component: EssayTopicGenerator },
    { id: 'poetry_writer', name: 'Poetry Writer', icon: Feather, description: 'Writes short poems.', component: PoetryWriter },
    { id: 'haiku_generator', name: 'Haiku Generator', icon: Feather, description: 'Creates haiku poems.', component: HaikuGenerator },
    { id: 'song_lyric_starter', name: 'Song Lyric Starter', icon: Music, description: 'Suggests opening lines for songs.', component: SongLyricStarter },
    { id: 'rap_verse_maker', name: 'Rap Verse Maker', icon: MicVocal, description: 'Generates rap-style lyrics.', component: RapVerseMaker },
    { id: 'script_dialogue_writer', name: 'Script Dialogue Writer', icon: MessageSquare, description: 'Creates short dialogues.', component: ScriptDialogueWriter },
    { id: 'monologue_writer', name: 'Monologue Writer', icon: UserSquare, description: 'Generates monologues for scripts.', component: MonologueWriter },
    { id: 'scene_description_writer', name: 'Scene Description Writer', icon: Clapperboard, description: 'Writes scene details for stories.', component: SceneDescriptionWriter },
    
    // Latest Batch
    { id: 'character_backstory_maker', name: 'Character Backstory Maker', icon: UserSquare, description: 'Creates fictional backstories.', component: CharacterBackstoryMaker },
    { id: 'plot_twist_generator', name: 'Plot Twist Generator', icon: GitBranch, description: 'Suggests plot twists.', component: PlotTwistGenerator },
    { id: 'conflict_idea_maker', name: 'Conflict Idea Maker', icon: Swords, description: 'Suggests story conflicts.', component: ConflictIdeaMaker },
    { id: 'ending_suggestor', name: 'Ending Suggestor', icon: Milestone, description: 'Suggests story endings.', component: EndingSuggestor },
    { id: 'book_summary_maker', name: 'Book Summary Maker', icon: BookOpen, description: 'Summarizes books.', component: BookSummaryMaker },
    { id: 'movie_summary_maker', name: 'Movie Summary Maker', icon: Film, description: 'Summarizes films.', component: MovieSummaryMaker },
    { id: 'episode_recap_writer', name: 'Episode Recap Writer', icon: Clapperboard, description: 'Creates TV show recaps.', component: EpisodeRecapWriter },
    { id: 'recipe_writer', name: 'Recipe Writer', icon: CookingPot, description: 'Writes cooking recipes.', component: RecipeWriter },
    { id: 'meal_plan_generator', name: 'Meal Plan Generator', icon: Calendar, description: 'Creates weekly meal plans.', component: MealPlanGenerator },
    { id: 'grocery_list_maker', name: 'Grocery List Maker', icon: ListChecks, description: 'Generates shopping lists.', component: GroceryListMaker },
    { id: 'calorie_counter', name: 'Calorie Counter', icon: Sigma, description: 'Estimates calories in meals.', component: CalorieCounter },
    { id: 'workout_plan_generator', name: 'Workout Plan Generator', icon: Dumbbell, description: 'Creates fitness workout plans.', component: WorkoutPlanGenerator },
    { id: 'yoga_routine_generator', name: 'Yoga Routine Generator', icon: Leaf, description: 'Suggests yoga sequences.', component: YogaRoutineGenerator },
    { id: 'meditation_guide', name: 'Meditation Guide', icon: BrainCog, description: 'Gives meditation instructions.', component: MeditationGuide },
    { id: 'breathing_exercise_guide', name: 'Breathing Exercise Guide', icon: Wind, description: 'Creates breathing patterns.', component: BreathingExerciseGuide },
    { id: 'habit_tracker', name: 'Habit Tracker', icon: CheckSquare, description: 'Helps track daily habits.', component: HabitTracker },
    { id: 'sleep_routine_planner', name: 'Sleep Routine Planner', icon: Moon, description: 'Suggests sleep improvement plans.', component: SleepRoutinePlanner },
    { id: 'water_intake_tracker', name: 'Water Intake Tracker', icon: Droplet, description: 'Monitors water consumption.', component: WaterIntakeTracker },
    { id: 'mood_journal_prompter', name: 'Mood Journal Prompter', icon: BookHeart, description: 'Suggests prompts for mood tracking.', component: MoodJournalPrompter },
    { id: 'self_care_checklist_maker', name: 'Self-Care Checklist Maker', icon: ListChecks, description: 'Lists self-care activities.', component: SelfCareChecklistMaker },
    { id: 'mind_map_creator', name: 'Mind Map Creator', icon: GitBranch, description: 'Generates simple mind maps.', component: MindMapCreator },
    { id: 'goal_tracker', name: 'Goal Tracker', icon: Goal, description: 'Tracks progress toward goals.', component: GoalTracker },
    { id: 'motivation_quote_sender', name: 'Motivation Quote Sender', icon: Quote, description: 'Sends daily motivational quotes.', component: MotivationQuoteSender },
    { id: 'challenge_idea_generator', name: 'Challenge Idea Generator', icon: Trophy, description: 'Suggests 7-day or 30-day challenges.', component: ChallengeIdeaGenerator },
    { id: 'diy_project_idea_maker', name: 'DIY Project Idea Maker', icon: Wrench, description: 'Suggests craft or home projects.', component: DIYProjectIdeaMaker },
    { id: 'gift_idea_generator', name: 'Gift Idea Generator', icon: Gift, description: 'Suggests gifts for occasions.', component: GiftIdeaGenerator },
    { id: 'party_theme_generator', name: 'Party Theme Generator', icon: PartyPopper, description: 'Suggests party themes.', component: PartyThemeGenerator },
    { id: 'event_schedule_maker', name: 'Event Schedule Maker', icon: Calendar, description: 'Creates event timelines.', component: EventScheduleMaker },
    { id: 'invitation_message_writer', name: 'Invitation Message Writer', icon: Mail, description: 'Writes short invites.', component: InvitationMessageWriter },

    // Newest Batch
    { id: 'toast_speech_writer', name: 'Toast Speech Writer', icon: Presentation, description: 'Creates event toast speeches.', component: ToastSpeechWriter },
    { id: 'eulogy_writer', name: 'Eulogy Writer', icon: BookHeart, description: 'Writes memorial speeches.', component: EulogyWriter },
    { id: 'thank_you_note_maker', name: 'Thank-You Note Maker', icon: Mail, description: 'Creates thank-you messages.', component: ThankYouNoteMaker },
    { id: 'apology_letter_writer', name: 'Apology Letter Writer', icon: Mailbox, description: 'Writes polite apologies.', component: ApologyLetterWriter },
    { id: 'love_letter_writer', name: 'Love Letter Writer', icon: Heart, description: 'Writes romantic letters.', component: LoveLetterWriter },
    { id: 'compliment_generator', name: 'Compliment Generator', icon: Smile, description: 'Creates nice compliments.', component: ComplimentGenerator },
    { id: 'roast_joke_generator', name: 'Roast Joke Generator', icon: MicVocal, description: 'Creates light-hearted roast jokes.', component: RoastJokeGenerator },
    { id: 'greeting_card_message_maker', name: 'Greeting Card Message Maker', icon: Gift, description: 'Suggests card messages.', component: GreetingCardMessageMaker },
    { id: 'holiday_wish_maker', name: 'Holiday Wish Maker', icon: PartyPopper, description: 'Creates festive wishes.', component: HolidayWishMaker },
    { id: 'birthday_wish_maker', name: 'Birthday Wish Maker', icon: Gift, description: 'Writes birthday messages.', component: BirthdayWishMaker },
    { id: 'anniversary_wish_maker', name: 'Anniversary Wish Maker', icon: Heart, description: 'Suggests anniversary greetings.', component: AnniversaryWishMaker },
    { id: 'condolence_message_writer', name: 'Condolence Message Writer', icon: BookHeart, description: 'Writes sympathy messages.', component: CondolenceMessageWriter },
    { id: 'congratulations_message_writer', name: 'Congratulations Message Writer', icon: Trophy, description: 'Suggests congratulatory messages.', component: CongratulationsMessageWriter },
    { id: 'short_story_writer', name: 'Short Story Writer', icon: BookOpen, description: 'Writes short fiction.', component: ShortStoryWriter },
    { id: 'fairy_tale_creator', name: 'Fairy Tale Creator', icon: Crown, description: 'Writes fairy tale-style stories.', component: FairyTaleCreator },
    { id: 'fable_writer', name: 'Fable Writer', icon: PawPrint, description: 'Creates moral stories.', component: FableWriter },
    { id: 'horror_story_maker', name: 'Horror Story Maker', icon: VenetianMask, description: 'Writes short horror tales.', component: HorrorStoryMaker },
    { id: 'mystery_story_generator', name: 'Mystery Story Generator', icon: Search, description: 'Creates mystery plot ideas.', component: MysteryStoryGenerator },
    { id: 'fantasy_story_builder', name: 'Fantasy Story Builder', icon: Telescope, description: 'Suggests fantasy story elements.', component: FantasyStoryBuilder },
    { id: 'sci_fi_story_maker', name: 'Sci-Fi Story Maker', icon: Telescope, description: 'Creates science fiction plots.', component: SciFiStoryMaker },
    { id: 'detective_case_idea_maker', name: 'Detective Case Idea Maker', icon: Search, description: 'Suggests crime investigation plots.', component: DetectiveCaseIdeaMaker },
    { id: 'superhero_story_creator', name: 'Superhero Story Creator', icon: ShieldCheck, description: 'Builds superhero story ideas.', component: SuperheroStoryCreator },
    { id: 'villain_profile_maker', name: 'Villain Profile Maker', icon: UserSquare, description: 'Creates fictional villain profiles.', component: VillainProfileMaker },
    { id: 'side_character_generator', name: 'Side Character Generator', icon: Users, description: 'Suggests minor character ideas.', component: SideCharacterGenerator },
    { id: 'dialogue_improver', name: 'Dialogue Improver', icon: MessageSquareHeart, description: 'Enhances existing dialogues.', component: DialogueImprover },
    { id: 'scene_pacing_adjuster', name: 'Scene Pacing Adjuster', icon: Clock, description: 'Speeds up or slows down story pacing.', component: ScenePacingAdjuster },
    { id: 'narrative_style_changer', name: 'Narrative Style Changer', icon: PenLine, description: 'Changes writing style.', component: NarrativeStyleChanger },
    { id: 'perspective_rewriter', name: 'Perspective Rewriter', icon: Users, description: 'Changes text from 1st to 3rd person.', component: PerspectiveRewriter },
    { id: 'article_rewriter', name: 'Article Rewriter', icon: RefreshCw, description: 'Rephrases articles.', component: ArticleRewriter },

    // Latest batch
    { id: 'plagiarism_free_rewriter', name: 'Plagiarism-Free Rewriter', icon: RefreshCw, description: 'Ensures unique wording.', component: PlagiarismFreeRewriter },
    { id: 'product_review_writer', name: 'Product Review Writer', icon: Star, description: 'Writes product reviews.', component: ProductReviewWriter },
    { id: 'service_review_writer', name: 'Service Review Writer', icon: Star, description: 'Writes service feedback.', component: ServiceReviewWriter },
    { id: 'movie_review_maker', name: 'Movie Review Maker', icon: Film, description: 'Creates short movie reviews.', component: MovieReviewMaker },
    { id: 'game_review_writer', name: 'Game Review Writer', icon: Gamepad2, description: 'Writes game reviews.', component: GameReviewWriter },
    { id: 'app_review_generator', name: 'App Review Generator', icon: AppWindow, description: 'Writes app feedback.', component: AppReviewGenerator },
    { id: 'book_review_writer', name: 'Book Review Writer', icon: BookOpen, description: 'Writes book reviews.', component: BookReviewWriter },
    { id: 'travel_itinerary_maker', name: 'Travel Itinerary Maker', icon: Plane, description: 'Creates travel plans.', component: TravelItineraryMaker },
    { id: 'packing_list_maker', name: 'Packing List Maker', icon: Package, description: 'Suggests packing essentials.', component: PackingListMaker },
    { id: 'local_attraction_finder', name: 'Local Attraction Finder', icon: Map, description: 'Suggests nearby places to visit.', component: LocalAttractionFinder },
    { id: 'restaurant_suggestor', name: 'Restaurant Suggestor', icon: CookingPot, description: 'Recommends restaurants.', component: RestaurantSuggestor },
    { id: 'food_pairing_suggestor', name: 'Food Pairing Suggestor', icon: Utensils, description: 'Suggests food & drink combinations.', component: FoodPairingSuggestor },
    { id: 'cocktail_recipe_maker', name: 'Cocktail Recipe Maker', icon: Martini, description: 'Creates drink recipes.', component: CocktailRecipeMaker },
    { id: 'smoothie_recipe_generator', name: 'Smoothie Recipe Generator', icon: TestTube, description: 'Suggests smoothie blends.', component: SmoothieRecipeGenerator },
    { id: 'dessert_idea_generator', name: 'Dessert Idea Generator', icon: IceCream, description: 'Suggests dessert recipes.', component: DessertIdeaGenerator },
    { id: 'meal_substitute_finder', name: 'Meal Substitute Finder', icon: Shuffle, description: 'Suggests ingredient replacements.', component: MealSubstituteFinder },
    { id: 'cooking_tip_giver', name: 'Cooking Tip Giver', icon: ChefHat, description: 'Shares cooking advice.', component: CookingTipGiver },
    { id: 'kitchen_measurement_converter', name: 'Kitchen Measurement Converter', icon: Ruler, description: 'Converts cooking measurements.', component: KitchenMeasurementConverter },
    { id: 'leftover_recipe_maker', name: 'Leftover Recipe Maker', icon: Recycle, description: 'Suggests recipes using leftovers.', component: LeftoverRecipeMaker },
    { id: 'cleaning_checklist_maker', name: 'Cleaning Checklist Maker', icon: ListChecks, description: 'Creates cleaning routines.', component: CleaningChecklistMaker },
    { id: 'chore_scheduler', name: 'Chore Scheduler', icon: Calendar, description: 'Assigns chores to people/days.', component: ChoreScheduler },
    { id: 'minimalist_declutter_guide', name: 'Minimalist Declutter Guide', icon: Trash, description: 'Suggests decluttering steps.', component: MinimalistDeclutterGuide },
    { id: 'budget_friendly_home_decor_ideas', name: 'Budget Home Decor Ideas', icon: Home, description: 'Suggests cheap decor tips.', component: BudgetFriendlyHomeDecorIdeas },
    { id: 'gardening_tip_giver', name: 'Gardening Tip Giver', icon: Leaf, description: 'Shares plant care tips.', component: GardeningTipGiver },
    { id: 'plant_watering_reminder', name: 'Plant Watering Reminder', icon: Droplet, description: 'Sends plant watering alerts.', component: PlantWateringReminder },
    { id: 'pet_care_guide', name: 'Pet Care Guide', icon: PawPrint, description: 'Shares pet care instructions.', component: PetCareGuide },
    { id: 'dog_training_tip_giver', name: 'Dog Training Tip Giver', icon: Dog, description: 'Suggests dog training advice.', component: DogTrainingTipGiver },
    { id: 'cat_behavior_explainer', name: 'Cat Behavior Explainer', icon: Cat, description: 'Explains cat behavior.', component: CatBehaviorExplainer },
    { id: 'pet_name_generator', name: 'Pet Name Generator', icon: Tag, description: 'Suggests pet names.', component: PetNameGenerator },
    { id: 'wildlife_fact_finder', name: 'Wildlife Fact Finder', icon: Rabbit, description: 'Shares animal facts.', component: WildlifeFactFinder },

    // Newest batch
    { id: 'bird_watching_guide', name: 'Bird Watching Guide', icon: Bird, description: 'Suggests bird identification tips.', component: BirdWatchingGuide },
    { id: 'fishing_tip_giver', name: 'Fishing Tip Giver', icon: Anchor, description: 'Shares fishing advice.', component: FishingTipGiver },
    { id: 'camping_checklist_maker', name: 'Camping Checklist Maker', icon: Tent, description: 'Lists camping essentials.', component: CampingChecklistMaker },
    { id: 'hiking_route_suggestor', name: 'Hiking Route Suggestor', icon: Mountain, description: 'Suggests hiking trails.', component: HikingRouteSuggestor },
    { id: 'workout_timer', name: 'Workout Timer', icon: Clock, description: 'Sets exercise timers.', component: WorkoutTimer },
    { id: 'step_counter', name: 'Step Counter (Manual)', icon: Footprints, description: 'Logs walking steps.', component: StepCounter },
    { id: 'body_mass_index_calculator', name: 'Body Mass Index Calculator', icon: User, description: 'Calculates BMI.', component: BodyMassIndexCalculator },
    { id: 'heart_rate_zone_calculator', name: 'Heart Rate Zone Calculator', icon: HeartPulse, description: 'Finds workout heart rate zones.', component: HeartRateZoneCalculator },
    { id: 'stretching_routine_generator', name: 'Stretching Routine Generator', icon: ArrowUp, description: 'Suggests stretching exercises.', component: StretchingRoutineGenerator },
    { id: 'dance_move_suggestor', name: 'Dance Move Suggestor', icon: Music, description: 'Suggests dance moves.', component: DanceMoveSuggestor },
    { id: 'music_practice_tracker', name: 'Music Practice Tracker', icon: Piano, description: 'Logs music practice sessions.', component: MusicPracticeTracker },
    { id: 'instrument_learning_guide', name: 'Instrument Learning Guide', icon: Music, description: 'Gives basic instrument tips.', component: InstrumentLearningGuide },
    { id: 'song_chord_finder', name: 'Song Chord Finder', icon: Music, description: 'Finds chords for songs.', component: SongChordFinder },
    { id: 'lyric_rhyme_improver', name: 'Lyric Rhyme Improver', icon: Music, description: 'Suggests better rhymes.', component: LyricRhymeImprover },
    { id: 'dj_playlist_organizer', name: 'DJ Playlist Organizer', icon: Music, description: 'Sorts music playlists.', component: DJPlaylistOrganizer },
    { id: 'photography_tip_giver', name: 'Photography Tip Giver', icon: Camera, description: 'Shares photo tips.', component: PhotographyTipGiver },
    { id: 'camera_setting_guide', name: 'Camera Setting Guide', icon: Settings, description: 'Suggests camera settings.', component: CameraSettingGuide },
    { id: 'photo_caption_generator', name: 'Photo Caption Generator', icon: Captions, description: 'Suggests captions for images.', component: PhotoCaptionGenerator },
    { id: 'social_media_post_scheduler', name: 'Social Media Post Scheduler', icon: Calendar, description: 'Plans post timings.', component: SocialMediaPostScheduler },
    { id: 'content_calendar_maker', name: 'Content Calendar Maker', icon: Calendar, description: 'Creates monthly content calendars.', component: ContentCalendarMaker },
    { id: 'hashtag_trend_finder', name: 'Hashtag Trend Finder', icon: Hash, description: 'Finds trending hashtags.', component: HashtagTrendFinder },
    { id: 'viral_idea_generator', name: 'Viral Idea Generator', icon: Lightbulb, description: 'Suggests viral content ideas.', component: ViralIdeaGenerator },
    { id: 'ad_copywriter', name: 'Ad Copywriter', icon: Megaphone, description: 'Writes short ads.', component: AdCopywriter },
    { id: 'sales_script_writer', name: 'Sales Script Writer', icon: MessageSquare, description: 'Creates sales conversation scripts.', component: SalesScriptWriter },
    { id: 'cold_email_writer', name: 'Cold Email Writer', icon: Mail, description: 'Writes outreach emails.', component: ColdEmailWriter },
    { id: 'marketing_idea_generator', name: 'Marketing Idea Generator', icon: Lightbulb, description: 'Suggests marketing strategies.', component: MarketingIdeaGenerator },
    { id: 'seo_keyword_suggestor', name: 'SEO Keyword Suggestor', icon: Key, description: 'Suggests keywords for SEO.', component: SEOKeywordSuggestor },
    { id: 'meta_description_writer', name: 'Meta Description Writer', icon: FileText, description: 'Writes SEO meta descriptions.', component: MetaDescriptionWriter },
    { id: 'blog_tag_generator', name: 'Blog Tag Generator', icon: Tag, description: 'Suggests blog post tags.', component: BlogTagGenerator },
    { id: 'youtube_title_maker', name: 'YouTube Title Maker', icon: Video, description: 'Suggests video titles.', component: YouTubeTitleMaker },

    // Final 30
    { id: 'youtube_description_writer', name: 'YouTube Description Writer', icon: Youtube, description: 'Writes video descriptions.', component: YouTubeDescriptionWriter },
    { id: 'youtube_tag_generator', name: 'YouTube Tag Generator', icon: Tag, description: 'Suggests video tags.', component: YouTubeTagGenerator },
    { id: 'video_script_writer', name: 'Video Script Writer', icon: FileText, description: 'Writes short video scripts.', component: VideoScriptWriter },
    { id: 'short_video_idea_generator', name: 'Short Video Idea Generator', icon: Lightbulb, description: 'Suggests video content ideas.', component: ShortVideoIdeaGenerator },
    { id: 'live_stream_topic_generator', name: 'Live Stream Topic Generator', icon: Mic, description: 'Suggests live topics.', component: LiveStreamTopicGenerator },
    { id: 'webinar_outline_maker', name: 'Webinar Outline Maker', icon: ListOrdered, description: 'Creates webinar structures.', component: WebinarOutlineMaker },
    { id: 'online_course_outline_maker', name: 'Online Course Outline Maker', icon: ListOrdered, description: 'Designs course content lists.', component: OnlineCourseOutlineMaker },
    { id: 'lesson_script_writer', name: 'Lesson Script Writer', icon: Feather, description: 'Writes educational lesson scripts.', component: LessonScriptWriter },
    { id: 'test_answer_key_generator', name: 'Test Answer Key Generator', icon: Key, description: 'Creates answer keys.', component: TestAnswerKeyGenerator },
    { id: 'poll_result_analyzer', name: 'Poll Result Analyzer', icon: BarChart3, description: 'Analyzes poll results.', component: PollResultAnalyzer },
    { id: 'data_summarizer', name: 'Data Summarizer', icon: FileJson, description: 'Summarizes raw data.', component: DataSummarizer },
    { id: 'csv_to_table_formatter', name: 'CSV to Table Formatter', icon: TableIcon, description: 'Formats CSV into clean tables.', component: CsvToTableFormatter },
    { id: 'chart_idea_generator', name: 'Chart Idea Generator', icon: PieChart, description: 'Suggests chart types for data.', component: ChartIdeaGenerator },
    { id: 'basic_data_calculator', name: 'Basic Data Calculator', icon: Calculator, description: 'Performs simple data calculations.', component: BasicDataCalculator },
    { id: 'average_calculator', name: 'Average Calculator', icon: Sigma, description: 'Calculates averages.', component: AverageCalculator },
    { id: 'percentage_calculator', name: 'Percentage Calculator', icon: PercentCircle, description: 'Finds percentages.', component: PercentageCalculator },
    { id: 'ratio_calculator', name: 'Ratio Calculator', icon: Scale, description: 'Calculates ratios.', component: RatioCalculator },
    { id: 'fraction_simplifier', name: 'Fraction Simplifier', icon: Minus, description: 'Simplifies fractions.', component: FractionSimplifier },
    { id: 'decimal_to_fraction_converter', name: 'Decimal to Fraction Converter', icon: ArrowRightLeft, description: 'Converts decimal to fraction.', component: DecimalToFractionConverter },
    { id: 'binary_to_decimal_converter', name: 'Binary to Decimal Converter', icon: Binary, description: 'Converts binary numbers.', component: BinaryToDecimalConverter },
    { id: 'hex_to_decimal_converter', name: 'Hex to Decimal Converter', icon: Hash, description: 'Converts hexadecimal numbers.', component: HexToDecimalConverter },
    { id: 'number_base_converter', name: 'Number Base Converter', icon: Sigma, description: 'Converts between number systems.', component: NumberBaseConverter },
    { id: 'prime_number_finder', name: 'Prime Number Finder', icon: Search, description: 'Finds prime numbers.', component: PrimeNumberFinder },
    { id: 'factor_finder', name: 'Factor Finder', icon: List, description: 'Finds factors of a number.', component: FactorFinder },
    { id: 'multiplication_table_maker', name: 'Multiplication Table Maker', icon: X, description: 'Generates tables for a number.', component: MultiplicationTableMaker },
    { id: 'division_step_solver', name: 'Division Step Solver', icon: Divide, description: 'Shows division steps.', component: DivisionStepSolver },
    { id: 'square_root_finder', name: 'Square Root Finder', icon: SquareRadical, description: 'Calculates square roots.', component: SquareRootFinder },
    { id: 'exponent_calculator', name: 'Exponent Calculator', icon: Superscript, description: 'Calculates exponents.', component: ExponentCalculator },
    { id: 'logarithm_calculator', name: 'Logarithm Calculator', icon: Sigma, description: 'Calculates logs.', component: LogarithmCalculator },
    { id: 'probability_calculator', name: 'Probability Calculator', icon: Dices, description: 'Finds probability values.', component: ProbabilityCalculator },
];
