
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, Moon, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle as MessageCircleIcon, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer as ThermometerIcon, Cloud, Dumbbell, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown, Piano, MoonStar, Video as VideoIcon, CaseSensitive, Pilcrow, Type as TextIcon, Hash, Captions, ListOrdered, FileJson, MessageSquareHeart, PilcrowRight, ZoomIn, SearchSlash, WrapText, Palette as PaletteIcon, CaseUpper, List, Mailbox, Sigma, SpellCheck, Glasses, CircleOff, FilePlus2, ListTree, PenLine, WrapText as WrapTextIcon, BookHeart, Quote, Bell, Tag, ListChecks, ArrowBigDownDash, Crosshair, BarChartBig, Banknote, Calculator, PiggyBank, Receipt, DollarSign, PercentCircle, Goal, Coins, LandPlot, Ruler, Waypoints, Dices, RotateCcw, Lock, AtSign, Wifi, SquarePi, Droplet, Wrench, Gift, PartyPopper, Utensils, Martini, IceCream, Recycle, ChefHat, Dog, Cat, Rabbit, Tent, Mountain, Bird, Camera, Trash, Youtube, Table as TableIcon, Divide, SquareRadical, Superscript, Vote, Bike, ArrowRightLeft
} from 'lucide-react';
import { ChatInterface } from '@/components/modes/ChatInterface';
import { PhotoGenerator } from '@/components/modes/PhotoGenerator';
import { PhotoEditor } from '@/components/modes/PhotoEditor';
import { VideoGenerator } from '@/components/modes/VideoGenerator';
import { VideoEditor } from '@/components/modes/VideoEditor';
import { CodeGenerator } from '@/components/modes/CodeGenerator';
import { TextGenerator } from '@/components/modes/TextGenerator';
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
import { MovieReviewMaker } from '@/components/modes/MovieReviewMaker';
import { PackingListMaker } from '@/components/modes/PackingListMaker';
import { VideoMaker } from '@/components/modes/VideoMaker';
import { SoloTravelGuide } from '@/components/modes/SoloTravelGuide';
import { GroupTripPlanner } from '@/components/modes/GroupTripPlanner';
import { RoadTripItineraryMaker } from '@/components/modes/RoadTripItineraryMaker';
import { FestivalGuide } from '@/components/modes/FestivalGuide';
import { SeasonalActivityGuide } from '@/components/modes/SeasonalActivityGuide';
import { LocalBusinessFinder } from '@/components/modes/LocalBusinessFinder';
import { VisualStoryMapper } from '@/components/modes/VisualStoryMapper';
import { AIDailyMotivationCoach } from '@/components/modes/AIDailyMotivationCoach';
import { MinimalistLivingTips } from '@/components/modes/MinimalistLivingTips';
import { ZeroWasteTips } from '@/components/modes/ZeroWasteTips';
import { UpcyclingProjectIdeas } from '@/components/modes/UpcyclingProjectIdeas';
import { RepairGuide } from '@/components/modes/RepairGuide';
import { SecondHandShoppingTips } from '@/components/modes/SecondHandShoppingTips';
import { BudgetTravelTips } from '@/components/modes/BudgetTravelTips';
import { DigitalNomadTips } from '@/components/modes/DigitalNomadTips';
import { RemoteJobBoardScraper } from '@/components/modes/RemoteJobBoardScraper';
import { WorkFromHomeSetupGuide } from '@/components/modes/WorkFromHomeSetupGuide';
import { ProductivityTimer } from '@/components/modes/ProductivityTimer';
import { FocusMusicSuggestor } from '@/components/modes/FocusMusicSuggestor';
import { TaskCompletionTracker } from '@/components/modes/TaskCompletionTracker';
import { StudyBreakReminder } from '@/components/modes/StudyBreakReminder';
import { TimeBlockingPlanner } from '@/components/modes/TimeBlockingPlanner';
import { WeeklyReviewTemplate } from '@/components/modes/WeeklyReviewTemplate';
import { MonthlyReflectionTemplate } from '@/components/modes/MonthlyReflectionTemplate';
import { YearlyGoalPlanner } from '@/components/modes/YearlyGoalPlanner';
import { LifeBucketListMaker } from '@/components/modes/LifeBucketListMaker';
import { TravelBucketListMaker } from '@/components/modes/TravelBucketListMaker';
import { SkillLearningPlan } from '@/components/modes/SkillLearningPlan';
import { LanguageLearningPlan } from '@/components/modes/LanguageLearningPlan';
import { BookReadingPlan } from '@/components/modes/BookReadingPlan';
import { PodcastRecommendationList } from '@/components/modes/PodcastRecommendationList';
import { MovieRecommendationList } from '@/components/modes/MovieRecommendationList';
import { SeriesRecommendationList } from '@/components/modes/SeriesRecommendationList';
import { GameRecommendationList } from '@/components/modes/GameRecommendationList';
import { MusicPlaylistSuggestor } from '@/components/modes/MusicPlaylistSuggestor';
import { HobbyIdeaGenerator } from '@/components/modes/HobbyIdeaGenerator';
import { WeekendActivityPlanner } from '@/components/modes/WeekendActivityPlanner';
import { FamilyActivityPlanner } from '@/components/modes/FamilyActivityPlanner';
import { PlagiarismFreeRewriter } from '@/components/modes/PlagiarismFreeRewriter';
import { ProductReviewWriter } from '@/components/modes/ProductReviewWriter';
import { ServiceReviewWriter } from '@/components/modes/ServiceReviewWriter';
import { GameReviewWriter } from '@/components/modes/GameReviewWriter';
import { AppReviewGenerator } from '@/components/modes/AppReviewGenerator';
import { BookReviewWriter } from '@/components/modes/BookReviewWriter';
import { TravelItineraryMaker } from '@/components/modes/TravelItineraryMaker';
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

export type ModeId = 
  // Core
  | 'chat' | 'fun_chat' | 'voice_chat'
  // Creative & Media
  | 'photo_generator' | 'logo_maker' | 'design_assistant' | 'photo_editor' | 'video_maker' | 'video_generator' | 'animation_tool' | 'three_d_modeler' | 'video_editor' | 'sound_generator' | 'story_generator' | 'song_writer' | 'poem_generator' | 'character_generator' | 'dream_interpreter'
  // Development & Tech
  | 'code_generator' | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
  | 'file_editor' | 'story_generator' | 'text_summarizer' | 'translator' | 'song_writer' 
  | 'sound_generator' | 'document_maker' | 'ad_maker' | 'grammar_corrector' | 'homework_helper' | 'yoga_fitness' 
  | 'games_knowledge' | 'question_giver' | 'idea_generator' | 'email_writer' | 'recipe_creator'
  | 'travel_planner' | 'dream_interpreter' | 'speech_writer' | 'poem_generator'
  | 'character_generator' | 'fact_checker' | 'chart_maker' | 'fact_giver' | 'fun_chat'
  | 'logo_maker' | 'design_assistant' | 'three_d_modeler' | 'animation_tool' | 'seo_tool'
  | 'social_media_post_maker' | 'market_research' | 'video_maker'
  | 'text_rewriter_pro' | 'creative_content_expander' | 'conversational_flow_designer' | 'technical_document_generator'
  | 'storyboard_idea_expander' | 'digital_persona_creator' | 'smart_prompt_optimizer' | 'context_aware_summary_maker'
  | 'reading_comprehension_assistant' | 'knowledge_graph_builder' | 'smart_data_categorizer' | 'concept_map_generator'
  | 'interview_question_creator' | 'job_role_analyzer' | 'industry_report_writer' | 'product_feature_brainstormer'
  | 'meeting_notes_formatter' | 'text_complexity_adjuster' | 'idiom_and_metaphor_finder' | 'paragraph_flow_improver'
  | 'acronym_expander' | 'real_time_definition_finder' | 'smart_keyword_highlighter' | 'tone_and_mood_adjuster'
  | 'formality_level_converter' | 'brand_voice_enforcer' | 'multilingual_synonym_finder' | 'title_and_headline_optimizer'
  | 'long_form_report_writer' | 'smart_question_answer_engine' | 'policy_drafting_assistant' | 'legal_clause_suggestion_tool'
  | 'patent_abstract_generator' | 'contract_simplifier' | 'compliance_document_checker' | 'script_scene_expander'
  | 'interview_transcript_formatter' | 'fictional_world_builder' | 'conflict_plot_generator' | 'character_dialogue_improver'
  | 'multi_threaded_story_planner' | 'fiction_outline_maker' | 'comedy_script_punch_up_tool' | 'villain_backstory_creator'
  | 'theme_and_motif_analyzer' | 'story_arc_evaluator' | 'mythology_based_plot_creator' | 'sci_fi_concept_designer'
  | 'fantasy_lore_generator' | 'alternate_history_plot_writer' | 'scientific_hypothesis_suggestor' | 'experiment_design_planner'
  | 'research_summary_maker' | 'journal_abstract_creator' | 'methodology_drafting_tool' | 'lab_report_formatter'
  | 'academic_citation_builder' | 'equation_solver_pro' | 'graph_theory_visualizer' | 'statistical_pattern_finder'
  | 'data_anomaly_detector' | 'predictive_model_trainer' | 'simulation_scenario_builder' | 'ai_behavior_modeler'
  | 'ethics_risk_analyzer' | 'bias_detector_engine' | 'privacy_impact_forecaster' | 'algorithmic_explainability_tool'
  | 'dataset_integrity_checker' | 'feature_importance_analyzer' | 'forecast_accuracy_evaluator' | 'root_cause_analysis_bot'
  | 'data_quality_score_generator' | 'multi_variable_trend_predictor' | 'business_kpi_forecaster' | 'competitor_comparison_engine'
  | 'market_gap_identifier' | 'customer_segmentation_mapper' | 'price_elasticity_estimator' | 'churn_risk_predictor'
  | 'profit_margin_optimizer'
  | 'supply_chain_ai_planner'
  | 'inventory_auto_forecaster'
  | 'logistics_route_optimizer'
  | 'vendor_risk_scorer'
  | 'fraud_detection_engine'
  | 'transaction_pattern_finder'
  | 'credit_risk_analyzer'
  | 'investment_portfolio_optimizer'
  | 'financial_statement_summarizer'
  | 'brand_finder'
  | 'product_finder'
  | 'study_material_analyzer'
  | 'ai_teacher'
  | 'video_script_generator'
  | 'event_planner'
  | 'mind_map_maker'
  | 'data_visualizer'
  | 'song_lyrics_writer'
  | 'ai_therapist'
  | 'voice_changer'
  | 'job_description_writer'
  | 'legal_document_writer'
  | 'real_estate_listing_writer'
  | 'price_estimator'
  | 'interview_coach'
  | 'resume_analyzer'
  | 'cover_letter_writer'
  | 'survey_maker'
  | 'poll_creator'
  | 'customer_support_bot'
  | 'faq_generator'
  | 'ai_librarian'
  | 'movie_recommendation_bot'
  | 'playlist_creator'
  | 'music_recommendation_engine'
  | 'game_idea_generator'
  | 'game_level_designer'
  | 'puzzle_maker'
  | 'riddle_generator'
  | 'jokes_generator'
  | 'horoscope_writer'
  | 'tarot_reader_bot'
  | 'meditation_guide'
  | 'affirmation_generator'
  | 'habit_tracker'
  | 'study_planner'
  | 'flashcard_maker'
  | 'note_summarizer'
  | 'research_assistant'
  | 'citation_generator'
  | 'plagiarism_checker'
  | 'proofreader'
  | 'tone_changer'
  | 'script_formatter'
  | 'blog_post_generator'
  | 'newsletter_writer'
  | 'product_review_writer'
  | 'ad_banner_maker'
  | 'brochure_designer'
  | 'poster_maker'
  | 'flyer_generator'
  | 'infographic_maker'
  | 'social_post_designer'
  | 'thumbnail_creator'
  | 'app_ui_designer'
  | 'website_mockup_generator'
  | 'landing_page_builder'
  | 'ebook_creator'
  | 'magazine_layout_designer'
  | 'resume_template_maker'
  | 'presentation_template_maker'
  | 'banner_animation_tool'
  | 'icon_maker'
  | 'button_generator'
  | 'emoji_creator'
  | 'sticker_maker'
  | 'wallpaper_generator'
  | 'pattern_designer'
  | 'font_designer'
  | 'typeface_identifier'
  | 'color_matcher'
  | 'photo_collage_maker'
  | 'panorama_stitcher'
  | 'time_lapse_creator'
  | 'slow_motion_editor'
  | 'stop_motion_creator'
  | 'animated_gif_editor'
  | 'cinemagraph_maker'
  | 'slideshow_creator'
  | 'video_montage_maker'
  | 'music_video_creator'
  | 'lyric_video_generator'
  | 'video_intro_maker'
  | 'outro_creator'
  | 'screen_recorder'
  | 'live_stream_overlay_designer'
  | 'face_cam_frame_maker'
  | 'reaction_video_maker'
  | 'green_screen_editor'
  | 'chroma_key_tool'
  | 'voice_over_recorder'
  | 'dubbing_tool'
  | 'audio_sync_tool'
  | 'noise_remover'
  | 'equalizer_tool'
  | 'auto_tune_tool'
  | 'audio_mixer'
  | 'ai_math_solver'
  | 'interior_design_planner'
  | 'clothing_design_generator'
  | 'social_media_scheduler'
  | 'voice_over_script_generator'
  | 'animated_infographic_maker'
  | 'digital_art_generator'
  | 'photo_slideshow_creator'
  | 'web_banner_maker'
  | 'book_cover_designer'
  | 'ai_customer_support_bot'
  | 'game_character_creator'
  | 'song_lyric_writer'
  | 'audio_transcription_tool'
  | 'mood_board_creator'
  | 'event_invitation_maker'
  | 'digital_planner'
  | 'whiteboard_animation_tool'
  | 'classroom_quiz_generator'
  | 'ai_debate_partner'
  | 'learning_path_builder'
  | 'cooking_timer_app'
  | 'diet_meal_planner'
  | 'photography_shot_list_tool'
  | 'animated_logo_maker'
  | 'interactive_story_builder'
  | 'voice_emotion_analyzer'
  | 'local_event_finder'
  | 'music_remix_tool'
  | 'digital_calendar_maker'
  | 'file_compression_tool'
  | 'auto_caption_tool'
  | 'document_scanner_app'
  | 'writing_style_converter'
  | 'script_breakdown_tool'
  | 'ai_rap_lyric_generator'
  | 'comic_strip_maker'
  | 'mind_map_creator'
  | 'logo_font_matcher'
  | '3d_animation_generator'
  | 'classroom_attendance_tracker'
  | 'ai_horoscope_generator'
  | 'resume_formatter'
  | 'podcast_name_generator'
  | 'business_card_maker'
  | 'ai_detective_bot'
  | 'ebook_formatter'
  | 'recipe_calorie_calculator'
  | 'photo_lighting_adjuster'
  | 'infographic_designer'
  | 'audio_loop_maker'
  | 'online_form_builder'
  | 'ai_puzzle_generator'
  | 'virtual_pet_creator'
  | 'resume_proofreader'
  | 'blog_seo_optimizer'
  | 'travel_budget_calculator'
  | 'greeting_card_designer'
  | 'voice_dubbing_tool'
  | 'storyboarding_tool'
  | 'file_encryption_tool'
  | 'image_to_pdf_converter'
  | 'music_mood_classifier'
  | 'slide_deck_optimizer'
  | 'logo_shape_generator'
  | 'classroom_resource_planner'
  | 'song_key_detector'
  | 'audio_speed_changer'
  | 'text_to_emoji_converter'
  | 'ai_novel_writer'
  | 'photo_watermark_remover'
  | 'online_poster_maker'
  | 'ai_dream_interpreter'
  | 'budget_expense_tracker'
  | 'furniture_ar_viewer'
  | 'ai_slogan_generator'
  | 'interactive_map_builder'
  | 'document_translator'
  | 'virtual_lab_simulator'
  | 'digital_comic_lettering_tool'
  | 'ai_email_sorter'
  | 'podcast_editing_tool'
  | 'online_resume_hosting'
  | 'ai_voice_narrator'
  | 'content_plagiarism_checker'
  | '3d_avatar_creator'
  | 'ai_business_plan_writer'
  | 'video_meme_generator'
  | 'ai_legal_document_drafter'
  | 'blog_post_formatter'
  | 'ai_presentation_coach'
  | 'ai_resume_analyzer'
  | 'smart_invoice_generator'
  | 'ai_tagline_generator'
  | 'language_pronunciation_coach'
  | 'online_signature_creator'
  | 'podcast_episode_planner'
  | 'ai_brand_name_finder'
  | 'custom_calendar_generator'
  | 'digital_scrapbook_maker'
  | 'ai_business_email_writer'
  | 'qr_code_designer'
  | 'ai_greeting_generator'
  | 'website_accessibility_checker'
  | 'digital_invitation_maker'
  | 'mood_based_playlist_maker'
  | 'product_description_generator'
  | 'ai_personal_shopper'
  | 'resume_gap_filler'
  | 'smart_to_do_list'
  | 'ai_grammar_coach'
  | 'content_tone_analyzer'
  | 'voice_cloning_tool'
  | 'ai_workshop_planner'
  | 'audio_book_creator'
  | 'travel_safety_checker'
  | 'meme_text_overlay_tool'
  | 'ai_comedy_script_writer'
  | 'interactive_learning_game_maker'
  | 'recipe_ingredient_converter'
  | 'virtual_makeup_try_on'
  | 'online_brochure_maker'
  | 'ai_gift_recommendation_tool'
  | 'custom_map_designer'
  | 'ai_product_idea_generator'
  | 'virtual_travel_guide'
  | 'music_tempo_changer'
  | 'ai_poem_writer'
  | 'ai_tattoo_design_maker'
  | 'interactive_quiz_maker'
  | 'digital_flipbook_creator'
  | 'speech_to_text_tool'
  | 'ai_résumé_tailor'
  | 'event_budget_planner'
  | 'digital_greeting_animator'
  | 'ai_marketing_strategy_builder'
  | 'social_media_comment_responder'
  | 'ai_puzzle_solver'
  | 'photo_collage_maker'
  | 'ai_writing_prompt_generator'
  | 'ai_video_game_storyline_writer'
  | 'ai_meme_idea_generator'
  | 'live_poll_creator'
  | 'ai_book_summary_tool'
  | 'virtual_stage_designer'
  | 'ai_resume_scanner'
  | 'ai_conflict_mediator'
  | 'ai_home_cleaning_planner'
  | 'virtual_fitness_trainer'
  | 'ai_speech_writer'
  | 'ai_fact_checker'
  | 'ai_book_title_generator'
  | 'digital_business_proposal_maker'
  | 'ai_flashcard_creator'
  | 'audio_noise_reducer'
  | 'digital_mood_tracker'
  | 'ai_fundraising_campaign_planner'
  | 'virtual_garden_planner'
  | 'ai_story_ending_generator'
  | 'ai_product_packaging_designer'
  | 'ai_resume_bullet_point_writer'
  | 'interactive_flowchart_maker'
  | 'ai_public_speaking_coach'
  | 'ai_debate_topic_generator'
  | 'ai_scene_description_writer'
  | 'digital_recipe_book_maker'
  | 'ai_daily_planner'
  | 'virtual_dance_choreographer'
  | 'ai_legal_contract_analyzer'
  | 'ai_career_path_planner'
  | 'digital_checklists_app'
  | 'ai_fantasy_map_maker'
  | 'ai_ad_copy_generator'
  | 'ai_character_personality_builder'
  | 'ai_voiceover_localizer'
  | 'ai_academic_citation_tool'
  | 'ai_startup_idea_validator'
  | 'ai_time_zone_converter'
  | 'ai_email_tone_adjuster'
  | 'ai_audience_targeting_tool'
  | 'digital_story_template_library'
  | 'ai_playlist_transition_tool'
  | 'ai_gift_card_designer'
  | 'ai_weather_event_predictor'
  | 'ai_employee_feedback_tool'
  | 'ai_speech_emotion_enhancer'
  | 'ai_photo_style_transfer_tool'
  | 'ai_dream_vacation_planner'
  | 'ai_podcast_topic_generator'
  | 'ai_digital_bill_splitter'
  | 'ai_document_summarizer'
  | 'ai_voice_command_creator'
  | 'ai_music_genre_converter'
  | 'ai_influencer_finder'
  | 'ai_recipe_flavor_enhancer'
  | 'ai_class_notes_organizer'
  | 'ai_ad_headline_split_tester'
  | 'ai_custom_font_designer'
  | 'ai_online_community_builder'
  | 'ai_background_noise_generator'
  | 'ai_pet_care_planner'
  | 'ai_grammar_quiz_maker'
  | 'ai_digital_stamp_creator'
  | 'ai_home_renovation_planner'
  | 'ai_academic_paper_grader'
  | 'ai_logo_animation_tool'
  | 'ai_book_plot_outline_creator'
  | 'ai_social_media_analytics_tool'
  | 'ai_blog_comment_moderator'
  | 'ai_image_upscaler'
  | 'ai_conference_agenda_builder'
  | 'ai_newsletter_content_generator'
  | 'ai_story_character_name_generator'
  | 'ai_music_mood_mixer'
  | 'ai_political_speech_analyzer'
  | 'ai_resume_infographic_maker'
  | 'ai_voice_acting_coach'
  | 'ai_game_mechanics_designer'
  | 'ai_social_post_rewriter'
  | 'ai_mood_board_organizer'
  | 'ai_digital_comic_creator'
  | 'ai_training_schedule_planner'
  | 'ai_short_story_generator'
  | 'ai_ad_campaign_tracker'
  | 'ai_social_caption_shortener'
  | 'ai_fictional_language_creator'
  | 'ai_user_interface_designer'
  | 'ai_live_chat_responder'
  | 'ai_document_redaction_tool'
  | 'ai_blog_image_finder'
  | 'ai_skill_assessment_tool'
  | 'ai_scene_transition_maker'
  | 'ai_language_idiom_finder'
  | 'ai_company_slogan_tester'
  | 'ai_group_discussion_simulator'
  | 'ai_video_highlight_reel_maker'
  | 'ai_tag_suggestion_tool'
  | 'ai_brand_color_finder'
  | 'ai_music_sheet_creator'
  | 'ai_virtual_interview_simulator'
  | 'ai_social_media_story_maker'
  | 'ai_content_repurposing_tool'
  | 'ai_pet_training_assistant'
  | 'ai_virtual_study_buddy'
  | 'ai_song_title_generator'
  | 'ai_custom_illustration_tool'
  | 'ai_handwriting_font_converter'
  | 'ai_brand_mood_analyzer'
  | 'ai_business_risk_assessor'
  | 'ai_social_media_hashtag_tester'
  | 'ai_digital_greeting_card_maker'
  | 'ai_customer_loyalty_program_builder'
  | 'ai_classroom_seating_planner'
  | 'ai_stock_market_trend_analyzer'
  | 'ai_resume_design_templates'
  | 'ai_podcast_episode_summarizer'
  | 'ai_story_conflict_generator'
  | 'ai_business_kpi_tracker'
  | 'ai_slide_deck_storyboard_tool'
  | 'ai_music_sampling_tool'
  | 'ai_content_length_optimizer'
  | 'ai_fashion_mood_forecaster'
  | 'ai_study_notes_summarizer'
  | 'ai_voice_activated_to_do_list'
  | 'ai_livestream_script_writer'
  | 'ai_business_slogan_shortener'
  | 'ai_webpage_speed_tester'
  | 'ai_song_genre_identifier'
  | 'ai_video_script_breakdown_tool'
  | 'ai_language_dialect_converter'
  | 'ai_food_pairing_suggestion_tool'
  | 'ai_brand_tagline_shortener'
  | 'ai_youtube_title_optimizer'
  | 'ai_job_role_description_writer'
  | 'ai_health_symptom_checker'
  | 'ai_hobby_suggestion_tool'
  | 'ai_social_media_post_scheduler'
  | 'ai_personality_quiz_creator'
  | 'ai_resume_summary_generator'
  | 'ai_content_calendar_planner'
  | 'ai_ecommerce_product_tagger'
  | 'ai_story_arc_builder'
  | 'ai_news_headline_analyzer'
  | 'ai_blog_outline_generator'
  | 'ai_podcast_guest_finder'
  | 'ai_corporate_training_planner'
  | 'ai_language_translation_game'
  | 'ai_team_collaboration_board'
  | 'ai_resume_ats_checker'
  | 'ai_art_style_identifier'
  | 'ai_digital_mood_journal'
  | 'ai_fiction_story_starter'
  | 'ai_brand_value_analyzer'
  | 'ai_interactive_resume_builder'
  | 'ai_scene_lighting_planner'
  | 'ai_brand_name_shortener'
  | 'ai_video_scene_tagger'
  | 'ai_creative_writing_coach'
  | 'ai_virtual_museum_tour_creator'
  | 'ai_music_chord_progression_generator'
  | 'ai_book_genre_classifier'
  | 'ai_social_listening_tool'
  | 'ai_virtual_classroom_builder'
  | 'ai_brand_personality_quiz'
  | 'ai_website_color_scheme_tester'
  | 'ai_marketing_budget_calculator'
  | 'ai_digital_handwriting_analyzer'
  | 'ai_event_ticket_designer'
  | 'ai_voice_gender_switcher'
  | 'ai_cooking_recipe_improver'
  | 'ai_website_wireframe_creator'
  | 'ai_story_dialogue_improver'
  | 'ai_image_captioning_tool'
  | 'ai_product_price_optimizer'
  | 'ai_sports_match_predictor'
  | 'ai_fashion_accessory_designer'
  | 'ai_remote_team_icebreaker_tool'
  | 'ai_livestream_overlay_creator'
  | 'ai_story_villain_creator'
  | 'ai_song_lyric_rhyme_finder'
  | 'ai_virtual_fashion_show_creator'
  | 'ai_resume_skill_gap_analyzer'
  | 'ai_employee_recognition_tool'
  | 'ai_brand_storytelling_tool'
  | 'ai_recipe_step_visualizer'
  | 'ai_music_vocal_remover'
  | 'ai_blog_readability_checker'
  | 'ai_book_character_tracker'
  | 'ai_online_course_outline_maker'
  | 'ai_interview_question_generator'
  | 'ai_video_background_remover'
  | 'ai_story_time_estimator'
  | 'ai_business_email_formatter'
  | 'ai_music_key_changer'
  | 'ai_social_media_poll_maker'
  | 'ai_conference_speaker_finder'
  | 'ai_gaming_strategy_advisor'
  | 'ai_character_voice_generator'
  | 'ai_blog_post_expansion_tool'
  | 'ai_virtual_pet_creator'
  | 'sports_skills_trainer'
  | 'grammar_practice_creator'
  | 'quiz_generator' | 'book_generator'
  // My additions
  | 'minimalist_living_tips' | 'zero_waste_tips' | 'upcycling_project_ideas' | 'repair_guide' | 'second_hand_shopping_tips' | 'budget_travel_tips' | 'digital_nomad_tips' | 'remote_job_board_scraper' | 'work_from_home_setup_guide' | 'productivity_timer' | 'focus_music_suggestor' | 'task_completion_tracker' | 'study_break_reminder' | 'time_blocking_planner' | 'weekly_review_template' | 'monthly_reflection_template' | 'yearly_goal_planner' | 'life_bucket_list_maker' | 'travel_bucket_list_maker' | 'skill_learning_plan' | 'language_learning_plan' | 'book_reading_plan' | 'podcast_recommendation_list' | 'movie_recommendation_list' | 'series_recommendation_list' | 'game_recommendation_list' | 'music_playlist_suggestor' | 'hobby_idea_generator' | 'weekend_activity_planner' | 'family_activity_planner'
  | 'solo_travel_guide' | 'group_trip_planner' | 'road_trip_itinerary_maker' | 'festival_guide' | 'seasonal_activity_guide' | 'local_business_finder' | 'visual_story_mapper' | 'ai_daily_motivation_coach'
  ;


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
    { id: 'character_generator', name: 'Character Generator', icon: UserSquare, description: 'Create detailed characters for stories.', component: CharacterGenerator },
    { id: 'dream_interpreter', name: 'Dream Interpreter', icon: MoonStar, description: 'Analyze and find the meaning of your dreams.', component: DreamInterpreter },

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
    { id: 'email_writer', name: 'Email Writer', icon: Mail, description: 'Draft professional and personal emails.', component: EmailWriter },
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
    { id: 'travel_planner', name: 'Travel Planner', icon: Plane, description: 'Plan your next trip with a custom itinerary.', component: TravelPlanner },
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
    { id: 'game_review_writer', name: 'Game Review Writer', icon: Gamepad2, description: 'Writes game reviews.', component: GameReviewWriter },
    { id: 'app_review_generator', name: 'App Review Generator', icon: AppWindow, description: 'Writes app feedback.', component: AppReviewGenerator },
    { id: 'book_review_writer', name: 'Book Review Writer', icon: BookOpen, description: 'Writes book reviews.', component: BookReviewWriter },
    { id: 'travel_itinerary_maker', name: 'Travel Itinerary Maker', icon: Plane, description: 'Creates travel plans.', component: TravelItineraryMaker },
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

    // New 30 modes
    { id: 'statistics_summarizer', name: 'Statistics Summarizer', icon: BarChart3, description: 'Summarizes data stats.', component: StatisticsSummarizer },
    { id: 'trend_finder', name: 'Trend Finder', icon: TrendingUp, description: 'Finds trends in data.', component: TrendFinder },
    { id: 'correlation_finder', name: 'Correlation Finder', icon: Link, description: 'Finds relationships between data.', component: CorrelationFinder },
    { id: 'basic_forecast_maker', name: 'Basic Forecast Maker', icon: LineChart, description: 'Predicts simple future values.', component: BasicForecastMaker },
    { id: 'budget_chart_maker', name: 'Budget Chart Maker', icon: PieChart, description: 'Creates spending charts.', component: BudgetChartMaker },
    { id: 'pie_chart_generator', name: 'Pie Chart Generator', icon: PieChart, description: 'Makes pie charts.', component: PieChartGenerator },
    { id: 'bar_graph_generator', name: 'Bar Graph Generator', icon: BarChart3, description: 'Creates bar graphs.', component: BarGraphGenerator },
    { id: 'line_chart_generator', name: 'Line Chart Generator', icon: LineChart, description: 'Creates line charts.', component: LineChartGenerator },
    { id: 'timeline_maker', name: 'Timeline Maker', icon: GanttChart, description: 'Creates timelines.', component: TimelineMaker },
    { id: 'flowchart_generator', name: 'Flowchart Generator', icon: Workflow, description: 'Creates flowcharts.', component: FlowchartGenerator },
    { id: 'checklist_maker', name: 'Checklist Maker', icon: ListChecks, description: 'Creates interactive checklists.', component: ChecklistMaker },
    { id: 'kanban_board_maker', name: 'Kanban Board Maker', icon: GanttChart, description: 'Creates task boards.', component: KanbanBoardMaker },
    { id: 'mind_map_outline_maker', name: 'Mind Map Outline Maker', icon: GitBranch, description: 'Suggests mind map outlines.', component: MindMapOutlineMaker },
    { id: 'project_deadline_tracker', name: 'Project Deadline Tracker', icon: Calendar, description: 'Tracks due dates.', component: ProjectDeadlineTracker },
    { id: 'gantt_chart_generator', name: 'Gantt Chart Generator', icon: GanttChart, description: 'Creates project timelines.', component: GanttChartGenerator },
    { id: 'team_role_assignor', name: 'Team Role Assignor', icon: Users, description: 'Assigns team roles.', component: TeamRoleAssignor },
    { id: 'team_feedback_collector', name: 'Team Feedback Collector', icon: MessageSquare, description: 'Creates feedback forms.', component: TeamFeedbackCollector },
    { id: 'idea_voting_tool', name: 'Idea Voting Tool', icon: Vote, description: 'Lets users vote on ideas.', component: IdeaVotingTool },
    { id: 'brainstorm_topic_generator', name: 'Brainstorm Topic Generator', icon: Lightbulb, description: 'Suggests brainstorming prompts.', component: BrainstormTopicGenerator },
    { id: 'innovation_idea_generator', name: 'Innovation Idea Generator', icon: Wand2, description: 'Suggests creative solutions.', component: InnovationIdeaGenerator },
    { id: 'problem_statement_maker', name: 'Problem Statement Maker', icon: FileText, description: 'Frames problem statements.', component: ProblemStatementMaker },
    { id: 'solution_proposal_writer', name: 'Solution Proposal Writer', icon: FileText, description: 'Writes problem solutions.', component: SolutionProposalWriter },
    { id: 'how_to_guide_maker', name: 'How-To Guide Maker', icon: BookOpen, description: 'Writes instructional guides.', component: HowToGuideMaker },
    { id: 'troubleshooting_flow_maker', name: 'Troubleshooting Flow Maker', icon: Workflow, description: 'Creates troubleshooting steps.', component: TroubleshootingFlowMaker },
    { id: 'faq_generator', name: 'FAQ Generator', icon: HelpCircle, description: 'Makes question-answer lists.', component: FAQGenerator },
    { id: 'glossary_creator', name: 'Glossary Creator', icon: BookOpen, description: 'Makes term definitions.', component: GlossaryCreator },
    { id: 'tutorial_script_writer', name: 'Tutorial Script Writer', icon: Feather, description: 'Writes tutorial scripts.', component: TutorialScriptWriter },
    { id: 'step_by_step_guide_maker', name: 'Step-by-Step Guide Maker', icon: ListOrdered, description: 'Breaks tasks into steps.', component: StepByStepGuideMaker },
    { id: 'quick_tips_writer', name: 'Quick Tips Writer', icon: Lightbulb, description: 'Shares short helpful tips.', component: QuickTipsWriter },
    { id: 'error_message_rewriter', name: 'Error Message Rewriter', icon: MessageSquare, description: 'Makes friendly error messages.', component: ErrorMessageRewriter },
    
    // Latest addition
    { id: 'app_walkthrough_writer', name: 'App Walkthrough Writer', icon: AppWindow, description: 'Creates onboarding guides.', component: AppWalkthroughWriter },
    { id: 'feature_list_maker', name: 'Feature List Maker', icon: ListChecks, description: 'Lists app or product features.', component: FeatureListMaker },
    { id: 'release_note_writer', name: 'Release Note Writer', icon: FileText, description: 'Writes update notes.', component: ReleaseNoteWriter },
    { id: 'patch_note_formatter', name: 'Patch Note Formatter', icon: FileText, description: 'Formats patch updates.', component: PatchNoteFormatter },
    { id: 'bug_report_template_maker', name: 'Bug Report Template Maker', icon: Bug, description: 'Creates bug report templates.', component: BugReportTemplateMaker },
    { id: 'user_feedback_form_maker', name: 'User Feedback Form Maker', icon: MessageSquare, description: 'Creates user feedback forms.', component: UserFeedbackFormMaker },
    { id: 'customer_support_script', name: 'Customer Support Script', icon: MessageSquare, description: 'Suggests support responses.', component: CustomerSupportScript },
    { id: 'help_article_writer', name: 'Help Article Writer', icon: BookOpen, description: 'Writes help documentation.', component: HelpArticleWriter },
    { id: 'troubleshooting_checklist', name: 'Troubleshooting Checklist', icon: ListChecks, description: 'Creates repair checklists.', component: TroubleshootingChecklist },
    { id: 'warranty_policy_writer', name: 'Warranty Policy Writer', icon: FileText, description: 'Writes simple warranty texts.', component: WarrantyPolicyWriter },
    { id: 'terms_and_conditions_writer', name: 'Terms & Conditions Writer', icon: Landmark, description: 'Creates legal disclaimers.', component: TermsAndConditionsWriter },
    { id: 'privacy_policy_writer', name: 'Privacy Policy Writer', icon: ShieldCheck, description: 'Writes privacy policies.', component: PrivacyPolicyWriter },
    { id: 'refund_policy_writer', name: 'Refund Policy Writer', icon: DollarSign, description: 'Creates refund policies.', component: RefundPolicyWriter },
    { id: 'safety_instruction_maker', name: 'Safety Instruction Maker', icon: AlertTriangle, description: 'Writes safety guidelines.', component: SafetyInstructionMaker },
    { id: 'emergency_contact_list_maker', name: 'Emergency Contact List Maker', icon: List, description: 'Lists emergency numbers.', component: EmergencyContactListMaker },
    { id: 'first_aid_guide', name: 'First Aid Guide', icon: HeartPulse, description: 'Shares basic first aid steps.', component: FirstAidGuide },
    { id: 'disaster_preparedness_guide', name: 'Disaster Preparedness Guide', icon: Home, description: 'Suggests safety steps.', component: DisasterPreparednessGuide },
    { id: 'travel_safety_tips', name: 'Travel Safety Tips', icon: Plane, description: 'Shares safety advice for travelers.', component: TravelSafetyTips },
    { id: 'scam_warning_guide', name: 'Scam Warning Guide', icon: AlertTriangle, description: 'Educates on common scams.', component: ScamWarningGuide },
    { id: 'password_safety_tips', name: 'Password Safety Tips', icon: Lock, description: 'Suggests password security rules.', component: PasswordSafetyTips },
    { id: 'social_media_safety_guide', name: 'Social Media Safety Guide', icon: Users, description: 'Shares online safety tips.', component: SocialMediaSafetyGuide },
    { id: 'cybersecurity_checklist', name: 'Cybersecurity Checklist', icon: ShieldCheck, description: 'Lists online security steps.', component: CybersecurityChecklist },
    { id: 'antivirus_tip_guide', name: 'Antivirus Tip Guide', icon: ShieldCheck, description: 'Suggests antivirus best practices.', component: AntivirusTipGuide },
    { id: 'phishing_email_identifier', name: 'Phishing Email Identifier', icon: Mail, description: 'Detects suspicious emails.', component: PhishingEmailIdentifier },
    { id: 'fake_news_checker', name: 'Fake News Checker', icon: Search, description: 'Identifies false news.', component: FakeNewsChecker },
    { id: 'fact_verification_tool', name: 'Fact Verification Tool', icon: CheckSquare, description: 'Verifies statements.', component: FactVerificationTool },
    { id: 'citation_generator', name: 'Citation Generator', icon: Quote, description: 'Creates citations in various formats.', component: CitationGenerator },
    { id: 'reference_list_maker', name: 'Reference List Maker', icon: ListOrdered, description: 'Generates reference lists.', component: ReferenceListMaker },
    { id: 'bibliography_maker', name: 'Bibliography Maker', icon: BookOpen, description: 'Creates bibliographies.', component: BibliographyMaker },
    { id: 'research_question_generator', name: 'Research Question Generator', icon: HelpCircle, description: 'Suggests research topics.', component: ResearchQuestionGenerator },
    
    // New 30 modes batch
    { id: 'hypothesis_statement_maker', name: 'Hypothesis Statement Maker', icon: Beaker, description: 'Writes hypotheses.', component: HypothesisStatementMaker },
    { id: 'experiment_design_generator', name: 'Experiment Design Generator', icon: FlaskConical, description: 'Creates science experiment steps.', component: ExperimentDesignGenerator },
    { id: 'observation_log_maker', name: 'Observation Log Maker', icon: FileSearch, description: 'Creates observation sheets.', component: ObservationLogMaker },
    { id: 'lab_report_writer', name: 'Lab Report Writer', icon: TestTube, description: 'Writes lab reports.', component: LabReportWriter },
    { id: 'survey_result_summarizer', name: 'Survey Result Summarizer', icon: BarChart3, description: 'Summarizes survey data.', component: SurveyResultSummarizer },
    { id: 'infographic_idea_generator', name: 'Infographic Idea Generator', icon: GanttChart, description: 'Suggests infographic designs.', component: InfographicIdeaGenerator },
    { id: 'poster_slogan_maker', name: 'Poster Slogan Maker', icon: Megaphone, description: 'Suggests slogans for posters.', component: PosterSloganMaker },
    { id: 'banner_text_generator', name: 'Banner Text Generator', icon: TextIcon, description: 'Suggests banner headlines.', component: BannerTextGenerator },
    { id: 'brochure_outline_maker', name: 'Brochure Outline Maker', icon: ListOrdered, description: 'Creates brochure layouts.', component: BrochureOutlineMaker },
    { id: 'pamphlet_content_writer', name: 'Pamphlet Content Writer', icon: FileText, description: 'Writes pamphlet text.', component: PamphletContentWriter },
    { id: 'flyer_text_maker', name: 'Flyer Text Maker', icon: FileText, description: 'Creates short flyer messages.', component: FlyerTextMaker },
    { id: 'announcement_writer', name: 'Announcement Writer', icon: Megaphone, description: 'Writes public announcements.', component: AnnouncementWriter },
    { id: 'press_release_writer', name: 'Press Release Writer', icon: MessageSquare, description: 'Creates press releases.', component: PressReleaseWriter },
    { id: 'public_notice_writer', name: 'Public Notice Writer', icon: AlertTriangle, description: 'Writes formal notices.', component: PublicNoticeWriter },
    { id: 'news_headline_generator', name: 'News Headline Generator', icon: TextIcon, description: 'Suggests news headlines.', component: NewsHeadlineGenerator },
    { id: 'news_summary_maker', name: 'News Summary Maker', icon: FileJson, description: 'Summarizes news articles.', component: NewsSummaryMaker },
    { id: 'sports_update_writer', name: 'Sports Update Writer', icon: Trophy, description: 'Writes sports news updates.', component: SportsUpdateWriter },
    { id: 'weather_report_maker', name: 'Weather Report Maker', icon: Cloud, description: 'Writes weather summaries.', component: WeatherReportMaker },
    { id: 'traffic_update_writer', name: 'Traffic Update Writer', icon: Car, description: 'Writes traffic reports.', component: TrafficUpdateWriter },
    { id: 'stock_price_update_writer', name: 'Stock Price Update Writer', icon: LineChart, description: 'Writes stock summaries.', component: StockPriceUpdateWriter },
    { id: 'cryptocurrency_update_writer', name: 'Cryptocurrency Update Writer', icon: Coins, description: 'Writes crypto market updates.', component: CryptocurrencyUpdateWriter },
    { id: 'economy_brief_maker', name: 'Economy Brief Maker', icon: Landmark, description: 'Summarizes economic trends.', component: EconomyBriefMaker },
    { id: 'political_news_summary_maker', name: 'Political News Summary Maker', icon: Landmark, description: 'Summarizes politics news.', component: PoliticalNewsSummaryMaker },
    { id: 'health_tip_generator', name: 'Health Tip Generator', icon: HeartPulse, description: 'Shares short health tips.', component: HealthTipGenerator },
    { id: 'medical_term_explainer', name: 'Medical Term Explainer', icon: BookOpen, description: 'Explains medical terms.', component: MedicalTermExplainer },
    { id: 'symptom_checker', name: 'Symptom Checker', icon: Stethoscope, description: 'Suggests possible causes for symptoms.', component: SymptomChecker },
    { id: 'medicine_reminder', name: 'Medicine Reminder', icon: Bell, description: 'Sends medicine timing alerts.', component: MedicineReminder },
    { id: 'nutrition_fact_finder', name: 'Nutrition Fact Finder', icon: FileSearch, description: 'Shares nutrition facts.', component: NutritionFactFinder },
    { id: 'diet_plan_maker', name: 'Diet Plan Maker', icon: Calendar, description: 'Creates diet schedules.', component: DietPlanMaker },
    { id: 'food_allergy_alert_guide', name: 'Food Allergy Alert Guide', icon: AlertTriangle, description: 'Lists allergy precautions.', component: FoodAllergyAlertGuide },

    // Newest Batch
    { id: 'safe_cooking_temperature_guide', name: 'Safe Cooking Temperature Guide', icon: ThermometerIcon, description: 'Suggests cooking temps.', component: SafeCookingTemperatureGuide },
    { id: 'kitchen_safety_guide', name: 'Kitchen Safety Guide', icon: AlertTriangle, description: 'Shares kitchen safety rules.', component: KitchenSafetyGuide },
    { id: 'school_safety_checklist', name: 'School Safety Checklist', icon: School, description: 'Lists safety steps for schools.', component: SchoolSafetyChecklist },
    { id: 'office_safety_checklist', name: 'Office Safety Checklist', icon: Building2, description: 'Lists safety measures for offices.', component: OfficeSafetyChecklist },
    { id: 'factory_safety_checklist', name: 'Factory Safety Checklist', icon: Factory, description: 'Lists safety rules for factories.', component: FactorySafetyChecklist },
    { id: 'road_safety_tips', name: 'Road Safety Tips', icon: Car, description: 'Shares driving safety advice.', component: RoadSafetyTips },
    { id: 'bicycle_safety_guide', name: 'Bicycle Safety Guide', icon: Bike, description: 'Shares cycling safety tips.', component: BicycleSafetyGuide },
    { id: 'swimming_safety_guide', name: 'Swimming Safety Guide', icon: Droplet, description: 'Shares water safety tips.', component: SwimmingSafetyGuide },
    { id: 'hiking_safety_guide', name: 'Hiking Safety Guide', icon: Mountain, description: 'Shares mountain safety tips.', component: HikingSafetyGuide },
    { id: 'child_safety_tips', name: 'Child Safety Tips', icon: User, description: 'Shares child safety advice.', component: ChildSafetyTips },
    { id: 'elderly_care_tips', name: 'Elderly Care Tips', icon: User, description: 'Shares senior care advice.', component: ElderlyCareTips },
    { id: 'disability_support_resource_finder', name: 'Disability Support Resource Finder', icon: Search, description: 'Suggests helpful resources.', component: DisabilitySupportResourceFinder },
    { id: 'community_event_idea_generator', name: 'Community Event Idea Generator', icon: PartyPopper, description: 'Suggests local event ideas.', component: CommunityEventIdeaGenerator },
    { id: 'volunteer_task_list_maker', name: 'Volunteer Task List Maker', icon: ListChecks, description: 'Lists volunteer duties.', component: VolunteerTaskListMaker },
    { id: 'fundraising_idea_generator', name: 'Fundraising Idea Generator', icon: DollarSign, description: 'Suggests fundraising methods.', component: FundraisingIdeaGenerator },
    { id: 'donation_campaign_writer', name: 'Donation Campaign Writer', icon: PenLine, description: 'Writes donation appeals.', component: DonationCampaignWriter },
    { id: 'charity_event_plan_maker', name: 'Charity Event Plan Maker', icon: Calendar, description: 'Creates charity event plans.', component: CharityEventPlanMaker },
    { id: 'nonprofit_mission_statement_maker', name: 'Nonprofit Mission Statement Maker', icon: FileText, description: 'Writes mission statements.', component: NonprofitMissionStatementMaker },
    { id: 'sustainability_tip_generator', name: 'Sustainability Tip Generator', icon: Leaf, description: 'Shares eco-friendly tips.', component: SustainabilityTipGenerator },
    { id: 'recycling_guide', name: 'Recycling Guide', icon: Recycle, description: 'Shares recycling rules.', component: RecyclingGuide },
    { id: 'composting_guide', name: 'Composting Guide', icon: Recycle, description: 'Explains composting steps.', component: CompostingGuide },
    { id: 'energy_saving_tips', name: 'Energy Saving Tips', icon: Lightbulb, description: 'Shares energy reduction advice.', component: EnergySavingTips },
    { id: 'water_saving_tips', name: 'Water Saving Tips', icon: Droplet, description: 'Shares water conservation tips.', component: WaterSavingTips },
    { id: 'pollution_awareness_guide', name: 'Pollution Awareness Guide', icon: Wind, description: 'Educates on pollution reduction.', component: PollutionAwarenessGuide },
    { id: 'wildlife_conservation_tips', name: 'Wildlife Conservation Tips', icon: Rabbit, description: 'Suggests wildlife protection steps.', component: WildlifeConservationTips },
    { id: 'tree_planting_guide', name: 'Tree Planting Guide', icon: Leaf, description: 'Shares planting steps.', component: TreePlantingGuide },
    { id: 'garden_wildlife_attractor', name: 'Garden Wildlife Attractor', icon: Bird, description: 'Suggests ways to attract animals.', component: GardenWildlifeAttractor },
    { id: 'renewable_energy_facts', name: 'Renewable Energy Facts', icon: Wind, description: 'Shares facts on clean energy.', component: RenewableEnergyFacts },
    { id: 'climate_change_explainer', name: 'Climate Change Explainer', icon: Globe, description: 'Explains climate science simply.', component: ClimateChangeExplainer },
    { id: 'green_product_suggestor', name: 'Green Product Suggestor', icon: Leaf, description: 'Suggests eco-friendly items.', component: GreenProductSuggestor },

    // My additions
    { id: 'minimalist_living_tips', name: 'Minimalist Living Tips', icon: Home, description: 'Shares simple living advice.', component: MinimalistLivingTips },
    { id: 'zero_waste_tips', name: 'Zero Waste Tips', icon: Trash, description: 'Shares waste-free lifestyle ideas.', component: ZeroWasteTips },
    { id: 'upcycling_project_ideas', name: 'Upcycling Project Ideas', icon: Recycle, description: 'Suggests reuse projects.', component: UpcyclingProjectIdeas },
    { id: 'repair_guide', name: 'Repair Guide', icon: Wrench, description: 'Suggests repair steps for items.', component: RepairGuide },
    { id: 'second_hand_shopping_tips', name: 'Second-Hand Shopping Tips', icon: Shirt, description: 'Shares thrift buying advice.', component: SecondHandShoppingTips },
    { id: 'budget_travel_tips', name: 'Budget Travel Tips', icon: PiggyBank, description: 'Shares cheap travel ideas.', component: BudgetTravelTips },
    { id: 'digital_nomad_tips', name: 'Digital Nomad Tips', icon: Briefcase, description: 'Shares remote work travel advice.', component: DigitalNomadTips },
    { id: 'remote_job_board_scraper', name: 'Remote Job Board Scraper', icon: Search, description: 'Lists remote work ideas.', component: RemoteJobBoardScraper },
    { id: 'work_from_home_setup_guide', name: 'Work From Home Setup Guide', icon: Home, description: 'Suggests home office tips.', component: WorkFromHomeSetupGuide },
    { id: 'productivity_timer', name: 'Productivity Timer', icon: Clock, description: 'Alternates work and break times.', component: ProductivityTimer },
    { id: 'focus_music_suggestor', name: 'Focus Music Suggestor', icon: Music, description: 'Suggests focus-boosting music.', component: FocusMusicSuggestor },
    { id: 'task_completion_tracker', name: 'Task Completion Tracker', icon: CheckSquare, description: 'Tracks finished tasks.', component: TaskCompletionTracker },
    { id: 'study_break_reminder', name: 'Study Break Reminder', icon: Clock, description: 'Reminds to take breaks.', component: StudyBreakReminder },
    { id: 'time_blocking_planner', name: 'Time Blocking Planner', icon: Calendar, description: 'Divides day into time blocks.', component: TimeBlockingPlanner },
    { id: 'weekly_review_template', name: 'Weekly Review Template', icon: ListChecks, description: 'Creates review checklists.', component: WeeklyReviewTemplate },
    { id: 'monthly_reflection_template', name: 'Monthly Reflection Template', icon: BookOpen, description: 'Creates reflection questions.', component: MonthlyReflectionTemplate },
    { id: 'yearly_goal_planner', name: 'Yearly Goal Planner', icon: Goal, description: 'Suggests yearly goal structure.', component: YearlyGoalPlanner },
    { id: 'life_bucket_list_maker', name: 'Life Bucket List Maker', icon: List, description: 'Lists long-term goals.', component: LifeBucketListMaker },
    { id: 'travel_bucket_list_maker', name: 'Travel Bucket List Maker', icon: Plane, description: 'Lists dream destinations.', component: TravelBucketListMaker },
    { id: 'skill_learning_plan', name: 'Skill Learning Plan', icon: GraduationCap, description: 'Creates skill acquisition steps.', component: SkillLearningPlan },
    { id: 'language_learning_plan', name: 'Language Learning Plan', icon: Languages, description: 'Suggests study schedules for languages.', component: LanguageLearningPlan },
    { id: 'book_reading_plan', name: 'Book Reading Plan', icon: BookOpen, description: 'Creates reading timelines.', component: BookReadingPlan },
    { id: 'podcast_recommendation_list', name: 'Podcast Recommendation List', icon: Mic, description: 'Suggests podcasts.', component: PodcastRecommendationList },
    { id: 'movie_recommendation_list', name: 'Movie Recommendation List', icon: Film, description: 'Suggests films.', component: MovieRecommendationList },
    { id: 'series_recommendation_list', name: 'Series Recommendation List', icon: Clapperboard, description: 'Suggests TV shows.', component: SeriesRecommendationList },
    { id: 'game_recommendation_list', name: 'Game Recommendation List', icon: Gamepad2, description: 'Suggests video games.', component: GameRecommendationList },
    { id: 'music_playlist_suggestor', name: 'Music Playlist Suggestor', icon: Music, description: 'Suggests songs.', component: MusicPlaylistSuggestor },
    { id: 'hobby_idea_generator', name: 'Hobby Idea Generator', icon: Puzzle, description: 'Suggests hobbies to try.', component: HobbyIdeaGenerator },
    { id: 'weekend_activity_planner', name: 'Weekend Activity Planner', icon: Calendar, description: 'Suggests weekend activities.', component: WeekendActivityPlanner },
    { id: 'family_activity_planner', name: 'Family Activity Planner', icon: Users, description: 'Suggests family-friendly ideas.', component: FamilyActivityPlanner },
    { id: 'solo_travel_guide', name: 'Solo Travel Guide', icon: User, description: 'Shares solo travel tips.', component: SoloTravelGuide },
    { id: 'group_trip_planner', name: 'Group Trip Planner', icon: Users, description: 'Plans group trips.', component: GroupTripPlanner },
    { id: 'road_trip_itinerary_maker', name: 'Road Trip Itinerary Maker', icon: Car, description: 'Suggests road trip routes.', component: RoadTripItineraryMaker },
    { id: 'festival_guide', name: 'Festival Guide', icon: PartyPopper, description: 'Shares festival information.', component: FestivalGuide },
    { id: 'seasonal_activity_guide', name: 'Seasonal Activity Guide', icon: Sun, description: 'Suggests seasonal activities.', component: SeasonalActivityGuide },
    { id: 'local_business_finder', name: 'Local Business Finder', icon: Building2, description: 'Suggests nearby services.', component: LocalBusinessFinder },
    { id: 'visual_story_mapper', name: 'Visual Story Mapper', icon: GitBranch, description: 'Visually maps out stories and plotlines.', component: VisualStoryMapper },
    { id: 'ai_daily_motivation_coach', name: 'AI Daily Motivation Coach', icon: Heart, description: 'Sends daily motivational messages.', component: AIDailyMotivationCoach },
];
