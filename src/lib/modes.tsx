
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, Moon, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle as MessageCircleIcon, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer as ThermometerIcon, Cloud, Dumbbell, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown, Piano, MoonStar, Video as VideoIcon, CaseSensitive, Pilcrow, Type as TextIcon, Hash, Captions, ListOrdered, FileJson, MessageSquareHeart, PilcrowRight, ZoomIn, SearchSlash, WrapText, Palette as PaletteIcon, CaseUpper, List, Mailbox, Sigma, SpellCheck, Glasses, CircleOff, FilePlus2, ListTree, PenLine, WrapText as WrapTextIcon, BookHeart, Quote, Bell, Tag, ListChecks, ArrowBigDownDash, Crosshair, BarChartBig, Banknote, Calculator, PiggyBank, Receipt, DollarSign, PercentCircle, Goal, Coins, LandPlot, Ruler, Waypoints, Dices, RotateCcw, Lock, AtSign, Wifi, SquarePi, Droplet, Wrench, Gift, PartyPopper, Utensils, Martini, IceCream, Recycle, ChefHat, Dog, Cat, Rabbit, Tent, Mountain, Bird, Camera, Trash, Youtube, Table as TableIcon, Divide, SquareRadical, Superscript, Vote, Bike, ArrowRightLeft, Sun, Phone, Newspaper, Layout, AlertTriangle, Gem, Bed
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
import { YogaFitness } from '@/components/modes/YogaFitness';
import { GrammarPracticeCreator } from '@/components/modes/GrammarPracticeCreator';
import { SportsSkillsTrainer } from '@/components/modes/SportsSkillsTrainer';
import { QuizQuestionGenerator } from '@/components/modes/QuizQuestionGenerator';
import { BookGenerator } from '@/components/modes/BookGenerator';
import { GamesKnowledge } from '@/components/modes/GamesKnowledge';
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
import { CharacterGenerator } from '@/components/modes/CharacterGenerator';
import { DreamInterpreter } from '@/components/modes/DreamInterpreter';
import { TravelPlanner } from '@/components/modes/TravelPlanner';
import { MovieReviewMaker } from '@/components/modes/MovieReviewMaker';
import { PackingListMaker } from '@/components/modes/PackingListMaker';
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
import { NumberBaseConverter } from '@/components/modes/NumberBaseConverter';
import { PrimeNumberFinder } from '@/components/modes/PrimeNumberFinder';
import { FactorFinder } from '@/components/modes/FactorFinder';
import { MultiplicationTableMaker } from '@/components/modes/MultiplicationTableMaker';
import { DivisionStepSolver } from '@/components/modes/DivisionStepSolver';
import { SquareRootFinder } from '@/components/modes/SquareRootFinder';
import { ExponentCalculator } from '@/components/modes/ExponentCalculator';
import { LogarithmCalculator } from '@/components/modes/LogarithmCalculator';
import { ProbabilityCalculator } from '@/components/modes/ProbabilityCalculator';
import { StatisticsSummarizer } from '@/components/modes/StatisticsSummarizer';
import { TrendFinder } from '@/components/modes/TrendFinder';
import { CorrelationFinder } from '@/components/modes/CorrelationFinder';
import { BasicForecastMaker } from '@/components/modes/BasicForecastMaker';
import { BudgetChartMaker } from '@/components/modes/BudgetChartMaker';
import { PieChartGenerator } from '@/components/modes/PieChartGenerator';
import { BarGraphGenerator } from '@/components/modes/BarGraphGenerator';
import { LineChartGenerator } from '@/components/modes/LineChartGenerator';
import { TimelineMaker } from '@/components/modes/TimelineMaker';
import { FlowchartGenerator } from '@/components/modes/FlowchartGenerator';
import { ChecklistMaker } from '@/components/modes/ChecklistMaker';
import { KanbanBoardMaker } from '@/components/modes/KanbanBoardMaker';
import { MindMapOutlineMaker } from '@/components/modes/MindMapOutlineMaker';
import { ProjectDeadlineTracker } from '@/components/modes/ProjectDeadlineTracker';
import { GanttChartGenerator } from '@/components/modes/GanttChartGenerator';
import { TeamRoleAssignor } from '@/components/modes/TeamRoleAssignor';
import { TeamFeedbackCollector } from '@/components/modes/TeamFeedbackCollector';
import { IdeaVotingTool } from '@/components/modes/IdeaVotingTool';
import { BrainstormTopicGenerator } from '@/components/modes/BrainstormTopicGenerator';
import { InnovationIdeaGenerator } from '@/components/modes/InnovationIdeaGenerator';
import { ProblemStatementMaker } from '@/components/modes/ProblemStatementMaker';
import { SolutionProposalWriter } from '@/components/modes/SolutionProposalWriter';
import { HowToGuideMaker } from '@/components/modes/HowToGuideMaker';
import { TroubleshootingFlowMaker } from '@/components/modes/TroubleshootingFlowMaker';
import { FAQGenerator } from '@/components/modes/FAQGenerator';
import { GlossaryCreator } from '@/components/modes/GlossaryCreator';
import { TutorialScriptWriter } from '@/components/modes/TutorialScriptWriter';
import { StepByStepGuideMaker } from '@/components/modes/StepByStepGuideMaker';
import { QuickTipsWriter } from '@/components/modes/QuickTipsWriter';
import { ErrorMessageRewriter } from '@/components/modes/ErrorMessageRewriter';
import { AppWalkthroughWriter } from '@/components/modes/AppWalkthroughWriter';
import { FeatureListMaker } from '@/components/modes/FeatureListMaker';
import { ReleaseNoteWriter } from '@/components/modes/ReleaseNoteWriter';
import { PatchNoteFormatter } from '@/components/modes/PatchNoteFormatter';
import { BugReportTemplateMaker } from '@/components/modes/BugReportTemplateMaker';
import { UserFeedbackFormMaker } from '@/components/modes/UserFeedbackFormMaker';
import { CustomerSupportScript } from '@/components/modes/CustomerSupportScript';
import { HelpArticleWriter } from '@/components/modes/HelpArticleWriter';
import { TroubleshootingChecklist } from '@/components/modes/TroubleshootingChecklist';
import { WarrantyPolicyWriter } from '@/components/modes/WarrantyPolicyWriter';
import { TermsAndConditionsWriter } from '@/components/modes/TermsAndConditionsWriter';
import { PrivacyPolicyWriter } from '@/components/modes/PrivacyPolicyWriter';
import { RefundPolicyWriter } from '@/components/modes/RefundPolicyWriter';
import { SafetyInstructionMaker } from '@/components/modes/SafetyInstructionMaker';
import { EmergencyContactListMaker } from '@/components/modes/EmergencyContactListMaker';
import { FirstAidGuide } from '@/components/modes/FirstAidGuide';
import { DisasterPreparednessGuide } from '@/components/modes/DisasterPreparednessGuide';
import { TravelSafetyTips } from '@/components/modes/TravelSafetyTips';
import { ScamWarningGuide } from '@/components/modes/ScamWarningGuide';
import { PasswordSafetyTips } from '@/components/modes/PasswordSafetyTips';
import { SocialMediaSafetyGuide } from '@/components/modes/SocialMediaSafetyGuide';
import { CybersecurityChecklist } from '@/components/modes/CybersecurityChecklist';
import { AntivirusTipGuide } from '@/components/modes/AntivirusTipGuide';
import { PhishingEmailIdentifier } from '@/components/modes/PhishingEmailIdentifier';
import { FakeNewsChecker } from '@/components/modes/FakeNewsChecker';
import { FactVerificationTool } from '@/components/modes/FactVerificationTool';
import { CitationGenerator } from '@/components/modes/CitationGenerator';
import { ReferenceListMaker } from '@/components/modes/ReferenceListMaker';
import { BibliographyMaker } from '@/components/modes/BibliographyMaker';
import { ResearchQuestionGenerator } from '@/components/modes/ResearchQuestionGenerator';
import { HypothesisStatementMaker } from '@/components/modes/HypothesisStatementMaker';
import { ExperimentDesignGenerator } from '@/components/modes/ExperimentDesignGenerator';
import { ObservationLogMaker } from '@/components/modes/ObservationLogMaker';
import { LabReportWriter } from '@/components/modes/LabReportWriter';
import { SurveyResultSummarizer } from '@/components/modes/SurveyResultSummarizer';
import { InfographicIdeaGenerator } from '@/components/modes/InfographicIdeaGenerator';
import { PosterSloganMaker } from '@/components/modes/PosterSloganMaker';
import { BannerTextGenerator } from '@/components/modes/BannerTextGenerator';
import { BrochureOutlineMaker } from '@/components/modes/BrochureOutlineMaker';
import { PamphletContentWriter } from '@/components/modes/PamphletContentWriter';
import { FlyerTextMaker } from '@/components/modes/FlyerTextMaker';
import { AnnouncementWriter } from '@/components/modes/AnnouncementWriter';
import { PressReleaseWriter } from '@/components/modes/PressReleaseWriter';
import { PublicNoticeWriter } from '@/components/modes/PublicNoticeWriter';
import { NewsHeadlineGenerator } from '@/components/modes/NewsHeadlineGenerator';
import { NewsSummaryMaker } from '@/components/modes/NewsSummaryMaker';
import { SportsUpdateWriter } from '@/components/modes/SportsUpdateWriter';
import { WeatherReportMaker } from '@/components/modes/WeatherReportMaker';
import { TrafficUpdateWriter } from '@/components/modes/TrafficUpdateWriter';
import { StockPriceUpdateWriter } from '@/components/modes/StockPriceUpdateWriter';
import { CryptocurrencyUpdateWriter } from '@/components/modes/CryptocurrencyUpdateWriter';
import { EconomyBriefMaker } from '@/components/modes/EconomyBriefMaker';
import { PoliticalNewsSummaryMaker } from '@/components/modes/PoliticalNewsSummaryMaker';
import { HealthTipGenerator } from '@/components/modes/HealthTipGenerator';
import { MedicalTermExplainer } from '@/components/modes/MedicalTermExplainer';
import { SymptomChecker } from '@/components/modes/SymptomChecker';
import { MedicineReminder } from '@/components/modes/MedicineReminder';
import { NutritionFactFinder } from '@/components/modes/NutritionFactFinder';
import { DietPlanMaker } from '@/components/modes/DietPlanMaker';
import { FoodAllergyAlertGuide } from '@/components/modes/FoodAllergyAlertGuide';
import { SafeCookingTemperatureGuide } from '@/components/modes/SafeCookingTemperatureGuide';
import { KitchenSafetyGuide } from '@/components/modes/KitchenSafetyGuide';
import { SchoolSafetyChecklist } from '@/components/modes/SchoolSafetyChecklist';
import { OfficeSafetyChecklist } from '@/components/modes/OfficeSafetyChecklist';
import { FactorySafetyChecklist } from '@/components/modes/FactorySafetyChecklist';
import { RoadSafetyTips } from '@/components/modes/RoadSafetyTips';
import { BicycleSafetyGuide } from '@/components/modes/BicycleSafetyGuide';
import { SwimmingSafetyGuide } from '@/components/modes/SwimmingSafetyGuide';
import { HikingSafetyGuide } from '@/components/modes/HikingSafetyGuide';
import { ChildSafetyTips } from '@/components/modes/ChildSafetyTips';
import { ElderlyCareTips } from '@/components/modes/ElderlyCareTips';
import { DisabilitySupportResourceFinder } from '@/components/modes/DisabilitySupportResourceFinder';
import { CommunityEventIdeaGenerator } from '@/components/modes/CommunityEventIdeaGenerator';
import { VolunteerTaskListMaker } from '@/components/modes/VolunteerTaskListMaker';
import { FundraisingIdeaGenerator } from '@/components/modes/FundraisingIdeaGenerator';
import { DonationCampaignWriter } from '@/components/modes/DonationCampaignWriter';
import { CharityEventPlanMaker } from '@/components/modes/CharityEventPlanMaker';
import { NonprofitMissionStatementMaker } from '@/components/modes/NonprofitMissionStatementMaker';
import { SustainabilityTipGenerator } from '@/components/modes/SustainabilityTipGenerator';
import { RecyclingGuide } from '@/components/modes/RecyclingGuide';
import { CompostingGuide } from '@/components/modes/CompostingGuide';
import { EnergySavingTips } from '@/components/modes/EnergySavingTips';
import { WaterSavingTips } from '@/components/modes/WaterSavingTips';
import { PollutionAwarenessGuide } from '@/components/modes/PollutionAwarenessGuide';
import { WildlifeConservationTips } from '@/components/modes/WildlifeConservationTips';
import { TreePlantingGuide } from '@/components/modes/TreePlantingGuide';
import { GardenWildlifeAttractor } from '@/components/modes/GardenWildlifeAttractor';
import { RenewableEnergyFacts } from '@/components/modes/RenewableEnergyFacts';
import { GreenProductSuggestor } from '@/components/modes/GreenProductSuggestor';
import { AbTestResultAnalyzer } from '@/components/modes/AbTestResultAnalyzer';
import { AcademicProgressForecaster } from '@/components/modes/AcademicProgressForecaster';
import { AccessoryStyleMatcher } from '@/components/modes/AccessoryStyleMatcher';
import { AcronymMaker } from '@/components/modes/AcronymMaker';
import { AdCampaignPerformanceForecaster } from '@/components/modes/AdCampaignPerformanceForecaster';
import { AdHeadlineCreator } from '@/components/modes/AdHeadlineCreator';
import { AgeCalculator } from '@/components/modes/AgeCalculator';
import { AgentTrainingNeedsAnalyzer } from '@/components/modes/AgentTrainingNeedsAnalyzer';
import { AgriculturalMarketPriceForecaster } from '@/components/modes/AgriculturalMarketPriceForecaster';
import { AnniversaryWishMaker } from '@/components/modes/AnniversaryWishMaker';
import { AntonymFinder } from '@/components/modes/AntonymFinder';
import { ApologyLetterWriter } from '@/components/modes/ApologyLetterWriter';
import { AppNameGenerator } from '@/components/modes/AppNameGenerator';
import { AppointmentSchedulingOptimizer } from '@/components/modes/AppointmentSchedulingOptimizer';
import { AreaConverter } from '@/components/modes/AreaConverter';
import { ArticleRewriter } from '@/components/modes/ArticleRewriter';
import { AssemblyLineSpeedOptimizer } from '@/components/modes/AssemblyLineSpeedOptimizer';
import { AssignmentFeedbackGenerator } from '@/components/modes/AssignmentFeedbackGenerator';
import { AthleteTrainingOptimizer } from '@/components/modes/AthleteTrainingOptimizer';
import { AudienceEngagementPredictor } from '@/components/modes/AudienceEngagementPredictor';
import { AudienceEngagementTimer } from '@/components/modes/AudienceEngagementTimer';
import { AudienceReviewSentimentTracker } from '@/components/modes/AudienceReviewSentimentTracker';
import { AudioSceneIdentifier } from '@/components/modes/AudioSceneIdentifier';
import { BacklinkQualityAnalyzer } from '@/components/modes/BacklinkQualityAnalyzer';
import { BehaviorBasedSegmentationTool } from '@/components/modes/BehaviorBasedSegmentationTool';
import { BirthdayWishMaker } from '@/components/modes/BirthdayWishMaker';
import { BlogConclusionWriter } from '@/components/modes/BlogConclusionWriter';
import { BlogIdeaGenerator } from '@/components/modes/BlogIdeaGenerator';
import { BlogIntroWriter } from '@/components/modes/BlogIntroWriter';
import { BlogOutlineMaker } from '@/components/modes/BlogOutlineMaker';
import { BlogTopicTrendFinder } from '@/components/modes/BlogTopicTrendFinder';
import { BlueprintErrorDetector } from '@/components/modes/BlueprintErrorDetector';
import { BoardGameRuleOptimizer } from '@/components/modes/BoardGameRuleOptimizer';
import { BookSummaryMaker } from '@/components/modes/BookSummaryMaker';
import { BookTitleGenerator } from '@/components/modes/BookTitleGenerator';
import { BrandLoyaltyScorer } from '@/components/modes/BrandLoyaltyScorer';
import { BrandNameGenerator } from '@/components/modes/BrandNameGenerator';
import { BrandNameIdeaGenerator } from '@/components/modes/BrandNameIdeaGenerator';
import { BreakEvenCalculator } from '@/components/modes/BreakEvenCalculator';
import { BreathingExerciseGuide } from '@/components/modes/BreathingExerciseGuide';
import { BusinessIdeaGenerator } from '@/components/modes/BusinessIdeaGenerator';
import { CadDesignSuggestionTool } from '@/components/modes/CadDesignSuggestionTool';
import { CalendarEventFiller } from '@/components/modes/CalendarEventFiller';
import { CalorieCounter } from '@/components/modes/CalorieCounter';
import { CaptionMaker } from '@/components/modes/CaptionMaker';
import { CarbonFootprintForecaster } from '@/components/modes/CarbonFootprintForecaster';
import { CareerPathPredictor } from '@/components/modes/CareerPathPredictor';
import { CashFlowProjectionTool } from '@/components/modes/CashFlowProjectionTool';
import { CastingFitAnalyzer } from '@/components/modes/CastingFitAnalyzer';
import { ChallengeIdeaGenerator } from '@/components/modes/ChallengeIdeaGenerator';
import { ChapterTitleGenerator } from '@/components/modes/ChapterTitleGenerator';
import { CharacterBackstoryMaker } from '@/components/modes/CharacterBackstoryMaker';
import { ChatbotScriptEnhancer } from '@/components/modes/ChatbotScriptEnhancer';
import { CheckoutTimeOptimizer } from '@/components/modes/CheckoutTimeOptimizer';
import { ChordProgressionGenerator } from '@/components/modes/ChordProgressionGenerator';
import { ChurnPreventionStrategyMaker } from '@/components/modes/ChurnPreventionStrategyMaker';
import { CivicPolicySimulationTool } from '@/components/modes/CivicPolicySimulationTool';
import { ClassroomEngagementTracker } from '@/components/modes/ClassroomEngagementTracker';
import { ClinicalTrialDataAnalyzer } from '@/components/modes/ClinicalTrialDataAnalyzer';
import { CoinFlip } from '@/components/modes/CoinFlip';
import { ColorPaletteForecaster } from '@/components/modes/ColorPaletteForecaster';
import { CompanyPolicyClarityChecker } from '@/components/modes/CompanyPolicyClarityChecker';
import { CompetitorAdCopyAnalyzer } from '@/components/modes/CompetitorAdCopyAnalyzer';
import { ComplimentGenerator } from '@/components/modes/ComplimentGenerator';
import { ConceptExplainer } from '@/components/modes/ConceptExplainer';
import { ConceptReinforcementPlanner } from '@/components/modes/ConceptReinforcementPlanner';
import { CondolenceMessageWriter } from '@/components/modes/CondolenceMessageWriter';
import { CongratulationsMessageWriter } from '@/components/modes/CongratulationsMessageWriter';
import { ConstructionScheduleForecaster } from '@/components/modes/ConstructionScheduleForecaster';
import { ContentCalendarOptimizer } from '@/components/modes/ContentCalendarOptimizer';
import { ConversionFormDesignChecker } from '@/components/modes/ConversionFormDesignChecker';
import { ConversionFunnelOptimizer } from '@/components/modes/ConversionFunnelOptimizer';
import { CostEstimateCalculator } from '@/components/modes/CostEstimateCalculator';
import { CountdownTimerMaker } from '@/components/modes/CountdownTimerMaker';
import { CourseTitleGenerator } from '@/components/modes/CourseTitleGenerator';
import { CoverLetterPersonalizer } from '@/components/modes/CoverLetterPersonalizer';
import { CoverLetterWriter } from '@/components/modes/CoverLetterWriter';
import { CrisisCommunicationPlanner } from '@/components/modes/CrisisCommunicationPlanner';
import { CropYieldForecaster } from '@/components/modes/CropYieldForecaster';
import { CrossDepartmentCommunicationTracker } from '@/components/modes/CrossDepartmentCommunicationTracker';
import { CrossPlatformEngagementTracker } from '@/components/modes/CrossPlatformEngagementTracker';
import { CrossSellPatternFinder } from '@/components/modes/CrossSellPatternFinder';
import { CulturalContextAdvisor } from '@/components/modes/CulturalContextAdvisor';
import { CurrencyConverter } from '@/components/modes/CurrencyConverter';
import { CurriculumGapIdentifier } from '@/components/modes/CurriculumGapIdentifier';
import { CustomerRetentionStrategyMaker } from '@/components/modes/CustomerRetentionStrategyMaker';
import { CustomerReviewSummarizer } from '@/components/modes/CustomerReviewSummarizer';
import { CustomerServiceResponseAnalyzer } from '@/components/modes/CustomerServiceResponseAnalyzer';
import { DIYProjectIdeaMaker } from '@/components/modes/DIYProjectIdeaMaker';
import { DateDifferenceFinder } from '@/components/modes/DateDifferenceFinder';
import { DeadlineRiskDetector } from '@/components/modes/DeadlineRiskDetector';
import { DebateStrategyPlanner } from '@/components/modes/DebateStrategyPlanner';
import { DecisionHelper } from '@/components/modes/DecisionHelper';
import { DesignToManufactureConverter } from '@/components/modes/DesignToManufactureConverter';
import { DetectiveCaseIdeaMaker } from '@/components/modes/DetectiveCaseIdeaMaker';
import { DiagnosticSupportAssistant } from '@/components/modes/DiagnosticSupportAssistant';
import { DialogueImprover } from '@/components/modes/DialogueImprover';
import { DiceRoller } from '@/components/modes/DiceRoller';
import { TextUtilities } from '@/components/modes/TextUtilities';
import { InterviewCoach } from '@/components/modes/InterviewCoach';

export type ModeId = 
  // Core
  | 'chat' | 'fun_chat' | 'voice_chat'
  // Creative & Media
  | 'photo_generator' | 'logo_maker' | 'design_assistant' | 'photo_editor' | 'video_generator' | 'animation_tool' | 'three_d_modeler' | 'video_editor' | 'sound_generator' | 'story_generator' | 'song_writer' | 'poem_generator' | 'character_generator' | 'dream_interpreter'
  // Development & Tech
  | 'code_generator' | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' | 'file_editor'
  // Business & Marketing
  | 'chart_maker' | 'market_research' | 'social_media_post_maker' | 'seo_tool' | 'ad_maker' | 'email_writer' | 'fact_checker' | 'brand_finder'
  | 'supply_chain_ai_planner' | 'inventory_auto_forecaster' | 'logistics_route_optimizer' | 'vendor_risk_scorer' | 'fraud_detection_engine' | 'transaction_pattern_finder' | 'credit_risk_analyzer' | 'investment_portfolio_optimizer' | 'financial_statement_summarizer'
  | 'profit_margin_optimizer' | 'shopping_assistant'
  // Education & Productivity
  | 'homework_helper' | 'study_material_analyzer' | 'ai_teacher' | 'games_knowledge' | 'yoga_fitness' | 'grammar_practice_creator' | 'sports_skills_trainer' | 'quiz_generator' | 'book_generator' | 'text_summarizer' | 'question_giver' | 'idea_generator' | 'recipe_creator' | 'travel_planner' | 'grammar_corrector'
  // Lifestyle & Hobbies
  | 'movie_review_maker' | 'packing_list_maker' | 'solo_travel_guide' | 'group_trip_planner' | 'road_trip_itinerary_maker' | 'festival_guide' | 'seasonal_activity_guide' | 'local_business_finder' | 'visual_story_mapper' | 'ai_daily_motivation_coach' | 'minimalist_living_tips' | 'zero_waste_tips' | 'upcycling_project_ideas' | 'repair_guide' | 'second_hand_shopping_tips' | 'budget_travel_tips' | 'digital_nomad_tips' | 'remote_job_board_scraper' | 'work_from_home_setup_guide' | 'productivity_timer' | 'focus_music_suggestor' | 'task_completion_tracker' | 'study_break_reminder' | 'time_blocking_planner' | 'weekly_review_template' | 'monthly_reflection_template' | 'yearly_goal_planner' | 'life_bucket_list_maker' | 'travel_bucket_list_maker' | 'skill_learning_plan' | 'language_learning_plan' | 'book_reading_plan' | 'podcast_recommendation_list' | 'movie_recommendation_list' | 'series_recommendation_list' | 'game_recommendation_list' | 'music_playlist_suggestor' | 'hobby_idea_generator' | 'weekend_activity_planner' | 'family_activity_planner' | 'travel_itinerary_maker' | 'local_attraction_finder' | 'restaurant_suggestor' | 'food_pairing_suggestor' | 'cocktail_recipe_maker' | 'smoothie_recipe_generator' | 'dessert_idea_generator' | 'meal_substitute_finder' | 'cooking_tip_giver' | 'kitchen_measurement_converter' | 'leftover_recipe_maker' | 'cleaning_checklist_maker' | 'chore_scheduler' | 'minimalist_declutter_guide' | 'budget_friendly_home_decor_ideas' | 'gardening_tip_giver' | 'plant_watering_reminder' | 'pet_care_guide' | 'dog_training_tip_giver' | 'cat_behavior_explainer' | 'pet_name_generator' | 'wildlife_fact_finder' | 'bird_watching_guide' | 'fishing_tip_giver' | 'camping_checklist_maker' | 'hiking_route_suggestor' | 'workout_timer' | 'step_counter' | 'body_mass_index_calculator' | 'heart_rate_zone_calculator' | 'stretching_routine_generator' | 'dance_move_suggestor' | 'music_practice_tracker' | 'instrument_learning_guide' | 'song_chord_finder' | 'lyric_rhyme_improver' | 'dj_playlist_organizer' | 'photography_tip_giver' | 'camera_setting_guide' | 'photo_caption_generator'
  // Social Media & Marketing Utilities
  | 'social_media_post_scheduler' | 'content_calendar_maker' | 'hashtag_trend_finder' | 'viral_idea_generator' | 'ad_copywriter' | 'sales_script_writer' | 'cold_email_writer' | 'marketing_idea_generator' | 'seo_keyword_suggestor' | 'meta_description_writer' | 'blog_tag_generator' | 'youtube_title_maker' | 'youtube_description_writer' | 'youtube_tag_generator' | 'video_script_writer' | 'short_video_idea_generator' | 'live_stream_topic_generator' | 'webinar_outline_maker' | 'online_course_outline_maker' | 'lesson_script_writer'
  // Data & Math Utilities
  | 'test_answer_key_generator' | 'poll_result_analyzer' | 'data_summarizer' | 'csv_to_table_formatter' | 'chart_idea_generator' | 'basic_data_calculator' | 'average_calculator' | 'percentage_calculator' | 'ratio_calculator' | 'fraction_simplifier' | 'decimal_to_fraction_converter' | 'binary_to_decimal_converter' | 'hex_to_decimal_converter' | 'number_base_converter' | 'prime_number_finder' | 'factor_finder' | 'multiplication_table_maker' | 'division_step_solver' | 'square_root_finder' | 'exponent_calculator' | 'logarithm_calculator' | 'probability_calculator' | 'statistics_summarizer' | 'trend_finder' | 'correlation_finder' | 'basic_forecast_maker' | 'budget_chart_maker' | 'pie_chart_generator' | 'bar_graph_generator' | 'line_chart_generator'
  // Project & Task Management Utilities
  | 'timeline_maker' | 'flowchart_generator' | 'checklist_maker' | 'kanban_board_maker' | 'mind_map_outline_maker' | 'project_deadline_tracker' | 'gantt_chart_generator' | 'team_role_assignor' | 'team_feedback_collector' | 'idea_voting_tool' | 'brainstorm_topic_generator' | 'innovation_idea_generator' | 'problem_statement_maker' | 'solution_proposal_writer'
  // Writing & Documentation Utilities
  | 'how_to_guide_maker' | 'troubleshooting_flow_maker' | 'faq_generator' | 'glossary_creator' | 'tutorial_script_writer' | 'step_by_step_guide_maker' | 'quick_tips_writer' | 'error_message_rewriter' | 'app_walkthrough_writer' | 'feature_list_maker' | 'release_note_writer' | 'patch_note_formatter' | 'bug_report_template_maker' | 'user_feedback_form_maker' | 'customer_support_script' | 'help_article_writer' | 'troubleshooting_checklist'
  // Legal & Safety Utilities
  | 'warranty_policy_writer' | 'terms_and_conditions_writer' | 'privacy_policy_writer' | 'refund_policy_writer' | 'safety_instruction_maker' | 'emergency_contact_list_maker' | 'first_aid_guide' | 'disaster_preparedness_guide' | 'travel_safety_tips' | 'scam_warning_guide' | 'password_safety_tips' | 'social_media_safety_guide' | 'cybersecurity_checklist' | 'antivirus_tip_guide' | 'phishing_email_identifier' | 'fake_news_checker' | 'fact_verification_tool'
  // Academic Utilities
  | 'citation_generator' | 'reference_list_maker' | 'bibliography_maker' | 'research_question_generator' | 'hypothesis_statement_maker' | 'experiment_design_generator' | 'observation_log_maker' | 'lab_report_writer' | 'survey_result_summarizer'
  // Design & Media Utilities
  | 'infographic_idea_generator' | 'poster_slogan_maker' | 'banner_text_generator' | 'brochure_outline_maker' | 'pamphlet_content_writer' | 'flyer_text_maker'
  // News & Information Utilities
  | 'announcement_writer' | 'press_release_writer' | 'public_notice_writer' | 'news_headline_generator' | 'news_summary_maker' | 'sports_update_writer' | 'weather_report_maker' | 'traffic_update_writer' | 'stock_price_update_writer' | 'cryptocurrency_update_writer' | 'economy_brief_maker' | 'political_news_summary_maker'
  // Health & Wellness Utilities
  | 'health_tip_generator' | 'medical_term_explainer' | 'symptom_checker' | 'medicine_reminder' | 'nutrition_fact_finder' | 'diet_plan_maker' | 'food_allergy_alert_guide' | 'safe_cooking_temperature_guide' | 'kitchen_safety_guide'
  // Safety & Community Utilities
  | 'school_safety_checklist' | 'office_safety_checklist' | 'factory_safety_checklist' | 'road_safety_tips' | 'bicycle_safety_guide' | 'swimming_safety_guide' | 'hiking_safety_guide' | 'child_safety_tips' | 'elderly_care_tips' | 'disability_support_resource_finder' | 'community_event_idea_generator' | 'volunteer_task_list_maker' | 'fundraising_idea_generator' | 'charity_event_plan_maker' | 'nonprofit_mission_statement_maker'
  // Environmental Utilities
  | 'sustainability_tip_generator' | 'recycling_guide' | 'composting_guide' | 'energy_saving_tips' | 'water_saving_tips' | 'pollution_awareness_guide' | 'wildlife_conservation_tips' | 'tree_planting_guide' | 'garden_wildlife_attractor' | 'renewable_energy_facts' | 'climate_change_explainer' | 'green_product_suggestor'
  | 'plagiarism_free_rewriter' | 'product_review_writer' | 'service_review_writer' | 'game_review_writer' | 'app_review_generator' | 'book_review_writer' | 'ab_test_result_analyzer' | 'academic_progress_forecaster' | 'accessory_style_matcher' | 'acronym_maker' | 'ad_campaign_performance_forecaster' | 'ad_headline_creator' | 'age_calculator' | 'agent_training_needs_analyzer' | 'agricultural_market_price_forecaster' | 'anniversary_wish_maker' | 'antonym_finder' | 'apology_letter_writer' | 'app_name_generator' | 'appointment_scheduling_optimizer' | 'area_converter' | 'article_rewriter' | 'assembly_line_speed_optimizer' | 'assignment_feedback_generator' | 'athlete_training_optimizer' | 'audience_engagement_predictor' | 'audience_engagement_timer' | 'audience_review_sentiment_tracker' | 'audio_scene_identifier' | 'backlink_quality_analyzer' | 'behavior_based_segmentation_tool' | 'birthday_wish_maker' | 'blog_conclusion_writer' | 'blog_idea_generator' | 'blog_intro_writer' | 'blog_outline_maker' | 'blog_topic_trend_finder' | 'blueprint_error_detector' | 'board_game_rule_optimizer' | 'book_summary_maker' | 'book_title_generator' | 'brand_loyalty_scorer' | 'brand_name_generator' | 'brand_name_idea_generator' | 'break_even_calculator' | 'breathing_exercise_guide' | 'business_idea_generator' | 'cad_design_suggestion_tool' | 'calendar_event_filler' | 'calorie_counter' | 'caption_maker' | 'carbon_footprint_forecaster' | 'career_path_predictor' | 'cash_flow_projection_tool' | 'casting_fit_analyzer' | 'challenge_idea_generator' | 'chapter_title_generator' | 'character_backstory_maker' | 'chatbot_script_enhancer' | 'checkout_time_optimizer' | 'chord_progression_generator' | 'churn_prevention_strategy_maker' | 'civic_policy_simulation_tool' | 'classroom_engagement_tracker' | 'clinical_trial_data_analyzer' | 'coin_flip' | 'color_palette_forecaster' | 'company_policy_clarity_checker' | 'competitor_ad_copy_analyzer' | 'compliment_generator' | 'concept_explainer' | 'concept_reinforcement_planner' | 'condolence_message_writer' | 'congratulations_message_writer' | 'construction_schedule_forecaster' | 'content_calendar_optimizer' | 'conversion_form_design_checker' | 'conversion_funnel_optimizer' | 'cost_estimate_calculator' | 'countdown_timer_maker' | 'course_title_generator' | 'cover_letter_personalizer' | 'cover_letter_writer' | 'crisis_communication_planner' | 'crop_yield_forecaster' | 'cross_department_communication_tracker' | 'cross_platform_engagement_tracker' | 'cross_sell_pattern_finder' | 'cultural_context_advisor' | 'currency_converter' | 'curriculum_gap_identifier' | 'customer_retention_strategy_maker' | 'customer_review_summarizer' | 'customer_service_response_analyzer' | 'diy_project_idea_maker' | 'date_difference_finder' | 'deadline_risk_detector' | 'debate_strategy_planner' | 'decision_helper' | 'design_to_manufacture_converter' | 'detective_case_idea_maker' | 'diagnostic_support_assistant' | 'dialogue_improver' | 'dice_roller' | 'ecommerce_upsell_strategy_planner' | 'editorial_consistency_checker' | 'education_syllabus_planner' | 'emergency_evacuation_planner' | 'employee_feedback_summarizer' | 'ending_suggestor' | 'enemy_behavior_modeler' | 'energy_usage_analyzer' | 'environmental_impact_calculator' | 'episode_recap_writer' | 'equation_generator' | 'error_message_clarity_checker' | 'esports_strategy_advisor' | 'essay_topic_generator' | 'eulogy_writer' | 'event_agenda_creator' | 'event_name_generator' | 'event_schedule_maker' | 'event_sponsorship_roi_calculator' | 'exam_pattern_analyzer' | 'exam_question_generator' | 'exercise_routine_optimizer' | 'expense_categorization_ai' | 'expense_tracker' | 'fable_writer' | 'fabric_quality_analyzer' | 'fact_finder' | 'fact_reference_link_generator' | 'fairy_tale_creator' | 'fan_engagement_tracker' | 'fantasy_story_builder' | 'faq_auto_generator' | 'farm_equipment_usage_tracker' | 'fashion_trend_predictor' | 'feature_adoption_forecaster' | 'feedback_sentiment_classifier' | 'film_script_coverage_ai' | 'flashcard_auto_creator' | 'flood_risk_predictor' | 'fundraising_campaign_optimizer' | 'game_lore_expansion_tool' | 'game_name_generator' | 'game_strategy_simulator' | 'genetic_pattern_detector' | 'geometry_shape_drawer' | 'gift_idea_generator' | 'grading_consistency_checker' | 'grammar_quiz_maker' | 'grant_proposal_generator' | 'greenhouse_climate_controller' | 'greeting_card_message_maker' | 'guest_speaker_finder_ai' | 'habit_tracker' | 'habitat_restoration_planner' | 'haiku_generator' | 'health_risk_assessment_ai' | 'historical_fact_finder' | 'holiday_wish_maker' | 'horror_story_maker' | 'hospital_resource_forecaster' | 'hyperlink_health_checker' | 'interview_coach' | 'invitation_message_writer' | 'irrigation_optimization_planner' | 'jewelry_design_suggestor' | 'job_interview_simulation_ai' | 'job_title_suggestor' | 'joke_finder' | 'knowledge_base_gap_finder' | 'knowledge_transfer_optimizer' | 'language_learning_path_optimizer' | 'language_practice_partner' | 'lead_scoring_ai' | 'leadership_style_analyzer' | 'learning_pace_personalizer' | 'learning_style_analyzer' | 'length_converter' | 'lesson_plan_enhancer' | 'lesson_plan_maker' | 'level_design_ai' | 'lifetime_value_forecasting_ai' | 'lighting_setup_optimizer' | 'list_creator' | 'livestock_health_monitor' | 'loan_calculator' | 'local_issue_report_generator' | 'logo_color_impact_analyzer' | 'loot_drop_probability_balancer' | 'love_letter_writer' | 'loyalty_program_impact_analyzer' | 'loyalty_reward_planner' | 'loyalty_tier_upgrade_predictor' | 'luxury_goods_market_forecaster' | 'machine_failure_predictor' | 'maintenance_cost_estimator' | 'manufacturing_workflow_optimizer' | 'market_entry_risk_forecaster' | 'match_outcome_predictor' | 'material_stress_tester_ai' | 'math_problem_solver' | 'meal_plan_generator' | 'medical_inventory_tracker' | 'medical_literature_summarizer' | 'meditation_guide' | 'meeting_agenda_maker' | 'meeting_agenda_optimizer' | 'meeting_summary_writer' | 'mental_wellness_suggestion_bot' | 'merchandise_sales_forecaster' | 'meta_tag_optimization_tool' | 'mind_map_creator' | 'mixing_mastering_advisor' | 'mobile_ui_flow_optimizer' | 'monologue_writer' | 'mood_journal_prompter' | 'motivation_quote_sender' | 'motivational_message_maker' | 'movie_summary_maker' | 'multiplayer_matchmaking_optimizer' | 'music_mood_classifier' | 'mystery_story_generator' | 'narrative_style_changer' | 'navigation_usability_analyzer' | 'nickname_maker' | 'noise_removal_optimizer' | 'nonprofit_donor_outreach_ai' | 'notification_timing_optimizer' | 'nutritional_plan_generator' | 'onboarding_experience_planner' | 'online_course_enrollment_predictor' | 'outfit_combination_recommender' | 'packaging_design_feedback_ai' | 'page_load_impact_predictor' | 'parking_demand_forecaster' | 'parts_inventory_balancer' | 'party_theme_generator' | 'password_generator' | 'patent_portfolio_analyzer' | 'pathology_report_summarizer' | 'patient_recovery_forecaster' | 'payment_fraud_probability_checker' | 'payroll_compliance_checker' | 'peer_review_summarizer' | 'personalization_rule_optimizer' | 'perspective_rewriter' | 'pest_infestation_predictor' | 'plagiarism_risk_checker' | 'player_injury_risk_detector' | 'player_motivation_analyzer' | 'playlist_name_generator' | 'plot_twist_generator' | 'podcast_topic_planner' | 'poetry_writer' | 'policy_impact_forecaster' | 'poll_question_maker' | 'post_production_workflow_planner' | 'ppc_campaign_roi_predictor' | 'presentation_flow_optimizer' | 'price_match_detector' | 'pro_con_list_maker' | 'product_description_writer' | 'product_lifecycle_forecaster' | 'product_prototype_feedback_ai' | 'product_return_risk_detector' | 'production_batch_optimizer' | 'production_scheduling_planner' | 'professional_bio_generator' | 'profit_calculator' | 'project_progress_reporter' | 'pronunciation_feedback_ai' | 'protein_structure_predictor' | 'prototype_design_optimizer' | 'public_opinion_trend_analyzer' | 'public_relations_risk_detector' | 'public_transit_route_optimizer' | 'push_notification_copy_checker' | 'puzzle_difficulty_balancer' | 'quality_control_inspector_ai' | 'question_difficulty_calibrator' | 'quote_finder' | 'roi_calculator' | 'radio_ad_effectiveness_tracker' | 'radiology_image_analyzer' | 'random_name_picker' | 'random_number_picker' | 'rap_verse_maker' | 'rd_project_feasibility_checker' | 'reading_ease_score_analyzer' | 'reminder_maker' | 'renewable_energy_yield_estimator' | 'renewable_grid_load_balancer' | 'reputation_score_tracker' | 'resume_bullet_point_maker' | 'resume_keyword_optimizer' | 'rhyme_finder' | 'road_repair_priority_planner' | 'roast_joke_generator' | 'robotics_task_planner' | 'salary_benchmarking_tool' | 'sales_forecasting_assistant' | 'savings_goal_calculator' | 'scene_description_writer' | 'scene_location_suggestor' | 'scene_pacing_adjuster' | 'sci_fi_story_maker' | 'science_fact_finder' | 'script_dialogue_writer' | 'search_intent_classifier' | 'seed_selection_optimizer' | 'self_care_checklist_maker' | 'seo_keyword_gap_finder' | 'service_level_agreement_monitor' | 'sewage_network_monitoring_ai' | 'shelf_placement_impact_predictor' | 'shelf_stocking_suggestion_tool' | 'shoe_size_fit_predictor' | 'short_story_writer' | 'shot_sequence_planner' | 'side_character_generator' | 'simple_translator' | 'skill_endorsement_analyzer' | 'skill_gap_forecaster' | 'sleep_cycle_tracker_ai' | 'sleep_routine_planner' | 'slide_deck_consistency_checker' | 'slogan_maker' | 'smart_factory_process_designer' | 'smart_lighting_planner' | 'social_sentiment_analyzer' | 'soil_nutrient_analyzer' | 'song_lyric_starter' | 'song_tempo_analyzer' | 'sound_quality_enhancer' | 'special_effects_cost_estimator' | 'speech_emotion_analyzer' | 'speech_timing_analyzer' | 'speech_writer' | 'speed_converter' | 'speedrun_path_optimizer' | 'spelling_checker' | 'spelling_quiz_maker' | 'sponsorship_roi_analyzer' | 'sports_performance_analyzer' | 'startup_pitch_writer' | 'stopwatch_tool' | 'store_layout_optimization_ai' | 'store_traffic_flow_analyzer' | 'story_idea_generator' | 'streaming_audience_predictor' | 'style_guide_compliance_checker' | 'subscription_renewal_predictor' | 'superhero_story_creator' | 'supply_shortage_forecaster' | 'support_ticket_categorizer' | 'surgical_procedure_planner' | 'survey_question_generator' | 'swot_analyzer' | 'symptom_pattern_analyzer' | 'symptom_to_specialist_recommender' | 'synonym_finder' | 'tagline_maker' | 'task_priority_planner' | 'task_priority_sorter' | 'tax_calculator' | 'teaching_method_suggestor' | 'team_dynamics_predictor' | 'temperature_converter' | 'textile_pattern_designer_ai' | 'thank_you_note_maker' | 'therapy_session_planner' | 'ticket_price_optimizer' | 'time_zone_converter' | 'toast_speech_writer' | 'tournament_schedule_optimizer' | 'trailer_impact_predictor' | 'training_needs_identifier' | 'treatment_plan_personalizer' | 'trial_conversion_rate_predictor' | 'tutoring_session_scheduler' | 'unit_conversion_practice_tool' | 'unit_converter' | 'upsell_recommendation_engine' | 'urban_traffic_flow_predictor' | 'user_retention_pattern_finder' | 'username_generator' | 'utility_consumption_tracker' | 'villain_profile_maker' | 'viral_content_predictor' | 'virtual_lab_technician' | 'visual_aid_suggestor' | 'vocabulary_builder' | 'vocabulary_expansion_tool' | 'volume_converter' | 'volunteer_scheduling_planner' | 'water_intake_tracker' | 'water_usage_efficiency_planner' | 'weather_impact_predictor' | 'website_accessibility_analyzer' | 'weight_converter' | 'wifi_name_generator' | 'wildlife_pattern_tracker' | 'worker_safety_risk_detector' | 'workload_balancer_ai' | 'workout_plan_generator' | 'workplace_culture_fit_analyzer' | 'yoga_routine_generator' | 'text_formatter' | 'word_counter' | 'title_case_converter' | 'bullet_point_maker' | 'text_shortener' | 'email_subject_line_maker' | 'readability_checker' | 'plagiarism_checker';


export interface Mode {
    id: ModeId;
    name: string;
    icon: React.ElementType;
    description: string;
    component: React.ElementType;
    componentProps?: Record<string, any>;
}

const textGeneratorProps = (id: ModeId, name: string, icon: React.ElementType, description: string, promptPrefix: string) => ({
    id,
    name,
    icon,
    description,
    component: TextGenerator,
    componentProps: {
        promptPlaceholder: description,
        buttonText: `Generate ${name}`,
        generatePrompt: (p: string) => `${promptPrefix}: "${p}"`,
        resultTitle: `Generated ${name}`,
    },
});

const textUtilitiesProps = (id: ModeId, name: string, icon: React.ElementType, description: string, promptPrefix: string) => ({
    id,
    name,
    icon,
    description,
    component: TextGenerator, // Re-using for simplicity, ideally a more specialized component
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
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, description: 'Plan and optimize supply chain logistics.', component: SupplyChainAiPlanner },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Package, description: 'Forecast inventory needs based on historical data.', component: InventoryAutoForecaster },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, description: 'Find the most efficient logistics routes.', component: LogisticsRouteOptimizer },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, description: 'Score vendors based on risk factors.', component: VendorRiskScorer },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Bug, description: 'Detect fraudulent transactions and patterns.', component: FraudDetectionEngine },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: LineChart, description: 'Find patterns in transaction data.', component: TransactionPatternFinder },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: Scale, description: 'Analyze credit risk for individuals or businesses.', component: CreditRiskAnalyzer },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, description: 'Suggest optimizations for an investment portfolio.', component: InvestmentPortfolioOptimizer },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileText, description: 'Summarize complex financial statements.', component: FinancialStatementSummarizer },
    { id: 'profit_margin_optimizer', name: 'Profit Margin Optimizer', icon: BadgePercent, description: 'Suggest strategies to optimize a product\'s profit margin.', component: ProfitMarginOptimizer },

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

    // Lifestyle & Hobbies
    {...textGeneratorProps('movie_review_maker', 'Movie Review Maker', Film, 'Writes detailed movie reviews.', 'Write a review for the movie')},
    {...textGeneratorProps('packing_list_maker', 'Packing List Maker', List, 'Generates packing lists for trips.', 'Create a packing list for')},
    {...textGeneratorProps('solo_travel_guide', 'Solo Travel Guide', User, 'Shares solo travel tips.', 'Provide solo travel tips for')},
    {...textGeneratorProps('group_trip_planner', 'Group Trip Planner', Users, 'Plans group trips.', 'Plan a group trip for')},
    {...textGeneratorProps('road_trip_itinerary_maker', 'Road Trip Itinerary Maker', Car, 'Suggests road trip routes.', 'Create a road trip itinerary for')},
    {...textGeneratorProps('festival_guide', 'Festival Guide', PartyPopper, 'Shares festival information.', 'Provide a guide for the festival')},
    {...textGeneratorProps('seasonal_activity_guide', 'Seasonal Activity Guide', Sun, 'Suggests seasonal activities.', 'Suggest seasonal activities for')},
    {...textGeneratorProps('local_business_finder', 'Local Business Finder', Building2, 'Suggests nearby services.', 'Find local businesses for')},
    {...textGeneratorProps('visual_story_mapper', 'Visual Story Mapper', GitBranch, 'Visually maps out stories.', 'Map a visual story for')},
    {...textGeneratorProps('ai_daily_motivation_coach', 'AI Daily Motivation Coach', Heart, 'Sends daily motivational messages.', 'Give me daily motivation for')},
    {...textGeneratorProps('minimalist_living_tips', 'Minimalist Living Tips', Home, 'Shares simple living advice.', 'Provide minimalist living tips for')},
    {...textGeneratorProps('zero_waste_tips', 'Zero Waste Tips', Trash, 'Shares waste-free lifestyle ideas.', 'Share zero-waste tips for')},
    {...textGeneratorProps('upcycling_project_ideas', 'Upcycling Project Ideas', Recycle, 'Suggests reuse projects.', 'Suggest upcycling projects for')},
    {...textGeneratorProps('repair_guide', 'Repair Guide', Wrench, 'Suggests repair steps for items.', 'Create a repair guide for')},
    {...textGeneratorProps('second_hand_shopping_tips', 'Second-Hand Shopping Tips', Shirt, 'Shares thrift buying advice.', 'Provide second-hand shopping tips for')},
    {...textGeneratorProps('budget_travel_tips', 'Budget Travel Tips', PiggyBank, 'Shares cheap travel ideas.', 'Give budget travel tips for')},
    {...textGeneratorProps('digital_nomad_tips', 'Digital Nomad Tips', Briefcase, 'Shares remote work travel advice.', 'Share digital nomad tips for')},
    {...textGeneratorProps('remote_job_board_scraper', 'Remote Job Board Scraper', Search, 'Lists remote work ideas.', 'Scrape remote job boards for')},
    {...textGeneratorProps('work_from_home_setup_guide', 'Work From Home Setup Guide', Home, 'Suggests home office tips.', 'Create a WFH setup guide for')},
    {...textGeneratorProps('productivity_timer', 'Productivity Timer', Clock, 'Alternates work and break times.', 'Set a productivity timer for')},
    {...textGeneratorProps('focus_music_suggestor', 'Focus Music Suggestor', Music, 'Suggests focus-boosting music.', 'Suggest focus music for')},
    {...textGeneratorProps('task_completion_tracker', 'Task Completion Tracker', CheckSquare, 'Tracks finished tasks.', 'Track task completion for')},
    {...textGeneratorProps('study_break_reminder', 'Study Break Reminder', Clock, 'Reminds to take breaks.', 'Set a study break reminder for')},
    {...textGeneratorProps('time_blocking_planner', 'Time Blocking Planner', Calendar, 'Divides day into time blocks.', 'Plan a time-blocked schedule for')},
    {...textGeneratorProps('weekly_review_template', 'Weekly Review Template', ListChecks, 'Creates review checklists.', 'Create a weekly review template for')},
    {...textGeneratorProps('monthly_reflection_template', 'Monthly Reflection Template', BookOpen, 'Creates reflection questions.', 'Create a monthly reflection template for')},
    {...textGeneratorProps('yearly_goal_planner', 'Yearly Goal Planner', Goal, 'Suggests yearly goal structure.', 'Plan yearly goals for')},
    {...textGeneratorProps('life_bucket_list_maker', 'Life Bucket List Maker', List, 'Lists long-term goals.', 'Create a life bucket list for')},
    {...textGeneratorProps('travel_bucket_list_maker', 'Travel Bucket List Maker', Plane, 'Lists dream destinations.', 'Create a travel bucket list for')},
    {...textGeneratorProps('skill_learning_plan', 'Skill Learning Plan', GraduationCap, 'Creates skill acquisition steps.', 'Create a learning plan for the skill')},
    {...textGeneratorProps('language_learning_plan', 'Language Learning Plan', Languages, 'Suggests study schedules for languages.', 'Create a learning plan for')},
    {...textGeneratorProps('book_reading_plan', 'Book Reading Plan', BookOpen, 'Creates reading timelines.', 'Create a reading plan for')},
    {...textGeneratorProps('podcast_recommendation_list', 'Podcast Recommendation List', Mic, 'Suggests podcasts.', 'Recommend podcasts about')},
    {...textGeneratorProps('movie_recommendation_list', 'Movie Recommendation List', Film, 'Suggests films.', 'Recommend movies like')},
    {...textGeneratorProps('series_recommendation_list', 'Series Recommendation List', Clapperboard, 'Suggests TV shows.', 'Recommend TV series like')},
    {...textGeneratorProps('game_recommendation_list', 'Game Recommendation List', Gamepad2, 'Suggests video games.', 'Recommend games like')},
    {...textGeneratorProps('music_playlist_suggestor', 'Music Playlist Suggestor', Music, 'Suggests songs.', 'Suggest a playlist for')},
    {...textGeneratorProps('hobby_idea_generator', 'Hobby Idea Generator', Puzzle, 'Suggests hobbies to try.', 'Suggest hobbies for')},
    {...textGeneratorProps('weekend_activity_planner', 'Weekend Activity Planner', Calendar, 'Suggests weekend activities.', 'Plan weekend activities for')},
    {...textGeneratorProps('family_activity_planner', 'Family Activity Planner', Users, 'Suggests family-friendly ideas.', 'Plan family activities for')},
    {...textGeneratorProps('travel_itinerary_maker', 'Travel Itinerary Maker', Plane, 'Creates detailed travel itineraries.', 'Create an itinerary for a trip to')},
    {...textGeneratorProps('local_attraction_finder', 'Local Attraction Finder', Map, 'Finds interesting local spots.', 'Find local attractions in')},
    {...textGeneratorProps('restaurant_suggestor', 'Restaurant Suggestor', Utensils, 'Recommends places to eat.', 'Suggest restaurants in')},
    {...textGeneratorProps('food_pairing_suggestor', 'Food Pairing Suggestor', Martini, 'Suggests food and drink pairings.', 'Suggest food pairings for')},
    {...textGeneratorProps('cocktail_recipe_maker', 'Cocktail Recipe Maker', Martini, 'Creates cocktail recipes.', 'Create a recipe for a cocktail')},
    {...textGeneratorProps('smoothie_recipe_generator', 'Smoothie Recipe Generator', IceCream, 'Generates smoothie recipes.', 'Generate a recipe for a smoothie')},
    {...textGeneratorProps('dessert_idea_generator', 'Dessert Idea Generator', IceCream, 'Suggests dessert ideas.', 'Suggest dessert ideas for')},
    {...textGeneratorProps('meal_substitute_finder', 'Meal Substitute Finder', ChefHat, 'Finds ingredient substitutes.', 'Find a substitute for the ingredient')},
    {...textGeneratorProps('cooking_tip_giver', 'Cooking Tip Giver', ChefHat, 'Gives helpful cooking tips.', 'Give cooking tips for')},
    {...textGeneratorProps('kitchen_measurement_converter', 'Kitchen Measurement Converter', Ruler, 'Converts cooking measurements.', 'Convert kitchen measurements for')},
    {...textGeneratorProps('leftover_recipe_maker', 'Leftover Recipe Maker', Recycle, 'Creates recipes from leftovers.', 'Create a recipe from the leftovers')},
    {...textGeneratorProps('cleaning_checklist_maker', 'Cleaning Checklist Maker', ListChecks, 'Generates cleaning checklists.', 'Create a cleaning checklist for')},
    {...textGeneratorProps('chore_scheduler', 'Chore Scheduler', Calendar, 'Schedules household chores.', 'Schedule chores for')},
    {...textGeneratorProps('minimalist_declutter_guide', 'Minimalist Declutter Guide', Trash, 'Guides on decluttering.', 'Provide a minimalist declutter guide for')},
    {...textGeneratorProps('budget_friendly_home_decor_ideas', 'Budget Home Decor Ideas', Home, 'Suggests affordable decor ideas.', 'Suggest budget home decor ideas for')},
    {...textGeneratorProps('gardening_tip_giver', 'Gardening Tip Giver', Leaf, 'Gives gardening advice.', 'Give gardening tips for')},
    {...textGeneratorProps('plant_watering_reminder', 'Plant Watering Reminder', Droplet, 'Reminds to water plants.', 'Set a watering reminder for')},
    {...textGeneratorProps('pet_care_guide', 'Pet Care Guide', PawPrint, 'Provides pet care information.', 'Create a care guide for a')},
    {...textGeneratorProps('dog_training_tip_giver', 'Dog Training Tip Giver', Dog, 'Gives dog training advice.', 'Give dog training tips for')},
    {...textGeneratorProps('cat_behavior_explainer', 'Cat Behavior Explainer', Cat, 'Explains cat behaviors.', 'Explain the behavior of a cat')},
    {...textGeneratorProps('pet_name_generator', 'Pet Name Generator', Rabbit, 'Suggests names for pets.', 'Suggest names for a pet')},
    {...textGeneratorProps('wildlife_fact_finder', 'Wildlife Fact Finder', Bird, 'Finds facts about wildlife.', 'Find facts about')},
    {...textGeneratorProps('bird_watching_guide', 'Bird Watching Guide', Bird, 'Provides bird watching tips.', 'Create a bird watching guide for')},
    {...textGeneratorProps('fishing_tip_giver', 'Fishing Tip Giver', Anchor, 'Gives fishing advice.', 'Give fishing tips for')},
    {...textGeneratorProps('camping_checklist_maker', 'Camping Checklist Maker', Tent, 'Generates camping checklists.', 'Create a camping checklist for')},
    {...textGeneratorProps('hiking_route_suggestor', 'Hiking Route Suggestor', Mountain, 'Suggests hiking trails.', 'Suggest a hiking route for')},
    {...textGeneratorProps('workout_timer', 'Workout Timer', Clock, 'Times workout sessions.', 'Set a workout timer for')},
    {...textGeneratorProps('step_counter', 'Step Counter', Footprints, 'Tracks daily steps.', 'Count steps for')},
    {...textGeneratorProps('body_mass_index_calculator', 'BMI Calculator', Scale, 'Calculates Body Mass Index.', 'Calculate BMI for')},
    {...textGeneratorProps('heart_rate_zone_calculator', 'Heart Rate Zone Calculator', Heart, 'Calculates heart rate zones.', 'Calculate heart rate zones for')},
    {...textGeneratorProps('stretching_routine_generator', 'Stretching Routine Generator', ArrowUp, 'Generates stretching exercises.', 'Generate a stretching routine for')},
    {...textGeneratorProps('dance_move_suggestor', 'Dance Move Suggestor', Dices, 'Suggests dance moves.', 'Suggest dance moves for')},
    {...textGeneratorProps('music_practice_tracker', 'Music Practice Tracker', Piano, 'Tracks music practice sessions.', 'Track music practice for')},
    {...textGeneratorProps('instrument_learning_guide', 'Instrument Learning Guide', Piano, 'Guides on learning instruments.', 'Create a learning guide for the')},
    {...textGeneratorProps('song_chord_finder', 'Song Chord Finder', Music, 'Finds chords for songs.', 'Find chords for the song')},
    {...textGeneratorProps('lyric_rhyme_improver', 'Lyric Rhyme Improver', PenLine, 'Improves song lyric rhymes.', 'Improve rhymes for the lyric')},
    {...textGeneratorProps('dj_playlist_organizer', 'DJ Playlist Organizer', SlidersHorizontal, 'Organizes playlists for DJs.', 'Organize a DJ playlist for')},
    {...textGeneratorProps('photography_tip_giver', 'Photography Tip Giver', Camera, 'Gives photography advice.', 'Give photography tips for')},
    {...textGeneratorProps('camera_setting_guide', 'Camera Setting Guide', Settings, 'Guides on camera settings.', 'Create a camera setting guide for')},
    {...textGeneratorProps('photo_caption_generator', 'Photo Caption Generator', Captions, 'Generates captions for photos.', 'Generate a caption for a photo of')},

    // Social Media & Marketing Utilities
    {...textUtilitiesProps('social_media_post_scheduler', 'Social Media Post Scheduler', Calendar, 'Schedules social media posts.', 'Schedule a social media post for')},
    {...textUtilitiesProps('content_calendar_maker', 'Content Calendar Maker', Calendar, 'Creates content calendars.', 'Create a content calendar for')},
    {...textUtilitiesProps('hashtag_trend_finder', 'Hashtag Trend Finder', Hash, 'Finds trending hashtags.', 'Find trending hashtags for')},
    {...textUtilitiesProps('viral_idea_generator', 'Viral Idea Generator', TrendingUp, 'Generates viral content ideas.', 'Generate a viral idea for')},
    {...textGeneratorProps('ad_copywriter', 'Ad Copywriter', Feather, 'Writes compelling ad copy.', 'Write ad copy for')},
    {...textGeneratorProps('sales_script_writer', 'Sales Script Writer', Mic, 'Writes effective sales scripts.', 'Write a sales script for')},
    {...textGeneratorProps('cold_email_writer', 'Cold Email Writer', Mail, 'Writes professional cold emails.', 'Write a cold email to')},
    {...textGeneratorProps('marketing_idea_generator', 'Marketing Idea Generator', Lightbulb, 'Generates marketing ideas.', 'Generate marketing ideas for')},
    {...textGeneratorProps('seo_keyword_suggestor', 'SEO Keyword Suggestor', Search, 'Suggests SEO-friendly keywords.', 'Suggest SEO keywords for')},
    {...textGeneratorProps('meta_description_writer', 'Meta Description Writer', FileText, 'Writes SEO meta descriptions.', 'Write a meta description for')},
    {...textGeneratorProps('blog_tag_generator', 'Blog Tag Generator', Tag, 'Generates tags for blog posts.', 'Generate blog tags for')},
    {...textGeneratorProps('youtube_title_maker', 'YouTube Title Maker', Youtube, 'Creates catchy YouTube titles.', 'Create a YouTube title for')},
    {...textGeneratorProps('youtube_description_writer', 'YouTube Description Writer', FileText, 'Writes YouTube video descriptions.', 'Write a YouTube description for')},
    {...textGeneratorProps('youtube_tag_generator', 'YouTube Tag Generator', Tag, 'Generates tags for YouTube videos.', 'Generate YouTube tags for')},
    {...textGeneratorProps('video_script_writer', 'Video Script Writer', Clapperboard, 'Writes scripts for videos.', 'Write a video script for')},
    {...textGeneratorProps('short_video_idea_generator', 'Short Video Idea Generator', Video, 'Generates short video ideas.', 'Generate short video ideas for')},
    {...textGeneratorProps('live_stream_topic_generator', 'Live Stream Topic Generator', Mic, 'Generates topics for live streams.', 'Generate live stream topics for')},
    {...textGeneratorProps('webinar_outline_maker', 'Webinar Outline Maker', Presentation, 'Creates outlines for webinars.', 'Create a webinar outline for')},
    {...textGeneratorProps('online_course_outline_maker', 'Online Course Outline Maker', GraduationCap, 'Creates outlines for online courses.', 'Create an online course outline for')},
    {...textGeneratorProps('lesson_script_writer', 'Lesson Script Writer', PenLine, 'Writes scripts for lessons.', 'Write a lesson script for')},
    // Data & Math Utilities
    {...textUtilitiesProps('test_answer_key_generator', 'Test Answer Key Generator', Key, 'Generates answer keys for tests.', 'Generate an answer key for')},
    {...textUtilitiesProps('poll_result_analyzer', 'Poll Result Analyzer', BarChart3, 'Analyzes results from polls.', 'Analyze the poll results for')},
    {...textUtilitiesProps('data_summarizer', 'Data Summarizer', FileSearch, 'Summarizes complex data sets.', 'Summarize the data for')},
    {...textUtilitiesProps('csv_to_table_formatter', 'CSV to Table Formatter', TableIcon, 'Formats CSV data into tables.', 'Format the CSV data into a table')},
    {...textUtilitiesProps('chart_idea_generator', 'Chart Idea Generator', Lightbulb, 'Suggests chart types for data.', 'Suggest a chart for')},
    {...textUtilitiesProps('basic_data_calculator', 'Basic Data Calculator', Sigma, 'Performs basic data calculations.', 'Calculate the data for')},
    {...textUtilitiesProps('average_calculator', 'Average Calculator', Sigma, 'Calculates the average of numbers.', 'Calculate the average of')},
    {...textUtilitiesProps('percentage_calculator', 'Percentage Calculator', PercentCircle, 'Calculates percentages.', 'Calculate the percentage of')},
    {...textUtilitiesProps('ratio_calculator', 'Ratio Calculator', Divide, 'Calculates ratios.', 'Calculate the ratio of')},
    {...textUtilitiesProps('fraction_simplifier', 'Fraction Simplifier', Superscript, 'Simplifies fractions.', 'Simplify the fraction')},
    {...textUtilitiesProps('decimal_to_fraction_converter', 'Decimal to Fraction Converter', Superscript, 'Converts decimals to fractions.', 'Convert the decimal to a fraction')},
    {...textUtilitiesProps('binary_to_decimal_converter', 'Binary to Decimal Converter', Binary, 'Converts binary to decimal.', 'Convert the binary number to decimal')},
    {...textUtilitiesProps('hex_to_decimal_converter', 'Hex to Decimal Converter', Hash, 'Converts hexadecimal to decimal.', 'Convert the hexadecimal number to decimal')},
    {...textUtilitiesProps('number_base_converter', 'Number Base Converter', Shuffle, 'Converts between number bases.', 'Convert the number')},
    {...textUtilitiesProps('prime_number_finder', 'Prime Number Finder', Search, 'Finds prime numbers in a range.', 'Find prime numbers up to')},
    {...textUtilitiesProps('factor_finder', 'Factor Finder', Sigma, 'Finds factors of a number.', 'Find factors of')},
    {...textUtilitiesProps('multiplication_table_maker', 'Multiplication Table Maker', TableIcon, 'Generates multiplication tables.', 'Create a multiplication table for')},
    {...textUtilitiesProps('division_step_solver', 'Division Step Solver', Divide, 'Solves division problems step-by-step.', 'Solve the division problem')},
    {...textUtilitiesProps('square_root_finder', 'Square Root Finder', SquareRadical, 'Finds the square root of a number.', 'Find the square root of')},
    {...textUtilitiesProps('exponent_calculator', 'Exponent Calculator', ArrowUp, 'Calculates exponents.', 'Calculate the exponent')},
    {...textUtilitiesProps('logarithm_calculator', 'Logarithm Calculator', Sigma, 'Calculates logarithms.', 'Calculate the logarithm of')},
    {...textUtilitiesProps('probability_calculator', 'Probability Calculator', Dices, 'Calculates probabilities.', 'Calculate the probability of')},
    {...textUtilitiesProps('statistics_summarizer', 'Statistics Summarizer', BarChart3, 'Summarizes statistical data.', 'Summarize the statistics for')},
    {...textUtilitiesProps('trend_finder', 'Trend Finder', TrendingUp, 'Finds trends in data sets.', 'Find trends in')},
    {...textUtilitiesProps('correlation_finder', 'Correlation Finder', Link, 'Finds correlations in data.', 'Find correlations in')},
    {...textUtilitiesProps('basic_forecast_maker', 'Basic Forecast Maker', TrendingUp, 'Makes basic data forecasts.', 'Make a forecast for')},
    {...textGeneratorProps('budget_chart_maker', 'Budget Chart Maker', PieChart, 'Creates charts for budgets.', 'Create a budget chart for')},
    {...textGeneratorProps('pie_chart_generator', 'Pie Chart Generator', PieChart, 'Generates pie charts.', 'Generate a pie chart for')},
    {...textGeneratorProps('bar_graph_generator', 'Bar Graph Generator', BarChartBig, 'Generates bar graphs.', 'Generate a bar graph for')},
    {...textGeneratorProps('line_chart_generator', 'Line Chart Generator', LineChart, 'Generates line charts.', 'Generate a line chart for')},
    // Project & Task Management Utilities
    {...textGeneratorProps('timeline_maker', 'Timeline Maker', GanttChart, 'Creates timelines for events.', 'Create a timeline for')},
    {...textGeneratorProps('flowchart_generator', 'Flowchart Generator', GitBranch, 'Generates flowcharts for processes.', 'Generate a flowchart for')},
    {...textGeneratorProps('checklist_maker', 'Checklist Maker', ListChecks, 'Generates checklists for tasks.', 'Create a checklist for')},
    {...textGeneratorProps('kanban_board_maker', 'Kanban Board Maker', GanttChart, 'Creates Kanban boards.', 'Create a Kanban board for')},
    {...textGeneratorProps('mind_map_outline_maker', 'Mind Map Outline Maker', GitBranch, 'Creates outlines for mind maps.', 'Create a mind map outline for')},
    {...textGeneratorProps('project_deadline_tracker', 'Project Deadline Tracker', Calendar, 'Tracks project deadlines.', 'Track deadlines for the project')},
    {...textGeneratorProps('gantt_chart_generator', 'Gantt Chart Generator', GanttChart, 'Generates Gantt charts.', 'Generate a Gantt chart for')},
    {...textGeneratorProps('team_role_assignor', 'Team Role Assignor', Users, 'Assigns roles to team members.', 'Assign roles for the team')},
    {...textGeneratorProps('team_feedback_collector', 'Team Feedback Collector', MessageSquareHeart, 'Collects feedback from team members.', 'Collect feedback for the team')},
    {...textGeneratorProps('idea_voting_tool', 'Idea Voting Tool', Vote, 'Facilitates voting on ideas.', 'Create a voting poll for')},
    {...textGeneratorProps('brainstorm_topic_generator', 'Brainstorm Topic Generator', Lightbulb, 'Generates topics for brainstorming.', 'Generate brainstorm topics for')},
    {...textGeneratorProps('innovation_idea_generator', 'Innovation Idea Generator', Wand2, 'Generates innovative ideas.', 'Generate innovation ideas for')},
    {...textGeneratorProps('problem_statement_maker', 'Problem Statement Maker', HelpCircle, 'Frames clear problem statements.', 'Create a problem statement for')},
    {...textGeneratorProps('solution_proposal_writer', 'Solution Proposal Writer', PenLine, 'Writes proposals for solutions.', 'Write a solution proposal for')},
    // Writing & Documentation Utilities
    {...textGeneratorProps('how_to_guide_maker', 'How-To Guide Maker', BookOpen, 'Creates step-by-step guides.', 'Create a how-to guide for')},
    {...textGeneratorProps('troubleshooting_flow_maker', 'Troubleshooting Flow Maker', Workflow, 'Creates troubleshooting flows.', 'Create a troubleshooting flow for')},
    {...textGeneratorProps('faq_generator', 'FAQ Generator', HelpCircle, 'Generates Frequently Asked Questions.', 'Generate FAQs for')},
    {...textGeneratorProps('glossary_creator', 'Glossary Creator', BookCopy, 'Creates glossaries of terms.', 'Create a glossary for')},
    {...textGeneratorProps('tutorial_script_writer', 'Tutorial Script Writer', PenLine, 'Writes scripts for tutorials.', 'Write a tutorial script for')},
    {...textGeneratorProps('step_by_step_guide_maker', 'Step-by-Step Guide Maker', ListOrdered, 'Creates detailed step-by-step guides.', 'Create a step-by-step guide for')},
    {...textGeneratorProps('quick_tips_writer', 'Quick Tips Writer', Lightbulb, 'Writes concise quick tips.', 'Write quick tips for')},
    {...textGeneratorProps('error_message_rewriter', 'Error Message Rewriter', MessageSquare, 'Rewrites error messages for clarity.', 'Rewrite the error message')},
    {...textGeneratorProps('app_walkthrough_writer', 'App Walkthrough Writer', AppWindow, 'Writes walkthroughs for apps.', 'Write a walkthrough for the app')},
    {...textGeneratorProps('feature_list_maker', 'Feature List Maker', List, 'Generates lists of product features.', 'Create a feature list for')},
    {...textGeneratorProps('release_note_writer', 'Release Note Writer', FileText, 'Writes release notes for updates.', 'Write release notes for')},
    {...textGeneratorProps('patch_note_formatter', 'Patch Note Formatter', FileText, 'Formats patch notes for games.', 'Format the patch notes for')},
    {...textGeneratorProps('bug_report_template_maker', 'Bug Report Template Maker', Bug, 'Creates templates for bug reports.', 'Create a bug report template for')},
    {...textGeneratorProps('user_feedback_form_maker', 'User Feedback Form Maker', FileText, 'Creates user feedback forms.', 'Create a user feedback form for')},
    {...textGeneratorProps('customer_support_script', 'Customer Support Script', MessageSquareHeart, 'Writes scripts for customer support.', 'Write a customer support script for')},
    {...textGeneratorProps('help_article_writer', 'Help Article Writer', BookOpen, 'Writes articles for help centers.', 'Write a help article for')},
    {...textGeneratorProps('troubleshooting_checklist', 'Troubleshooting Checklist', ListChecks, 'Creates troubleshooting checklists.', 'Create a troubleshooting checklist for')},
    // Legal & Safety Utilities
    {...textGeneratorProps('warranty_policy_writer', 'Warranty Policy Writer', ShieldCheck, 'Writes warranty policies.', 'Write a warranty policy for')},
    {...textGeneratorProps('terms_and_conditions_writer', 'Terms and Conditions Writer', Landmark, 'Writes terms and conditions.', 'Write terms and conditions for')},
    {...textGeneratorProps('privacy_policy_writer', 'Privacy Policy Writer', ShieldCheck, 'Writes privacy policies.', 'Write a privacy policy for')},
    {...textGeneratorProps('refund_policy_writer', 'Refund Policy Writer', CircleDollarSign, 'Writes refund policies.', 'Write a refund policy for')},
    {...textGeneratorProps('safety_instruction_maker', 'Safety Instruction Maker', AlertTriangle, 'Creates safety instructions.', 'Create safety instructions for')},
    {...textGeneratorProps('emergency_contact_list_maker', 'Emergency Contact List Maker', Phone, 'Creates emergency contact lists.', 'Create an emergency contact list for')},
    {...textGeneratorProps('first_aid_guide', 'First-Aid Guide', HeartPulse, 'Provides first-aid instructions.', 'Create a first-aid guide for')},
    {...textGeneratorProps('disaster_preparedness_guide', 'Disaster Preparedness Guide', Cloud, 'Guides on disaster preparedness.', 'Create a disaster preparedness guide for')},
    {...textGeneratorProps('travel_safety_tips', 'Travel Safety Tips', Plane, 'Provides safety tips for travelers.', 'Provide travel safety tips for')},
    {...textGeneratorProps('scam_warning_guide', 'Scam Warning Guide', AlertTriangle, 'Guides on avoiding scams.', 'Create a scam warning guide for')},
    {...textGeneratorProps('password_safety_tips', 'Password Safety Tips', Lock, 'Provides tips for password security.', 'Provide password safety tips')},
    {...textGeneratorProps('social_media_safety_guide', 'Social Media Safety Guide', Users, 'Guides on social media safety.', 'Create a social media safety guide for')},
    {...textGeneratorProps('cybersecurity_checklist', 'Cybersecurity Checklist', ShieldCheck, 'Creates cybersecurity checklists.', 'Create a cybersecurity checklist')},
    {...textGeneratorProps('antivirus_tip_guide', 'Antivirus Tip Guide', ShieldCheck, 'Provides tips for using antivirus.', 'Create an antivirus tip guide')},
    {...textGeneratorProps('phishing_email_identifier', 'Phishing Email Identifier', Mail, 'Identifies phishing emails.', 'Identify the phishing email')},
    {...textGeneratorProps('fake_news_checker', 'Fake News Checker', Search, 'Checks for fake news.', 'Check for fake news in')},
    {...textGeneratorProps('fact_verification_tool', 'Fact Verification Tool', CheckSquare, 'Verifies facts and claims.', 'Verify the fact')},
    // Academic Utilities
    {...textGeneratorProps('citation_generator', 'Citation Generator', Quote, 'Generates academic citations.', 'Generate a citation for')},
    {...textGeneratorProps('reference_list_maker', 'Reference List Maker', ListOrdered, 'Creates lists of references.', 'Create a reference list for')},
    {...textGeneratorProps('bibliography_maker', 'Bibliography Maker', Library, 'Creates bibliographies.', 'Create a bibliography for')},
    {...textGeneratorProps('research_question_generator', 'Research Question Generator', HelpCircle, 'Generates research questions.', 'Generate a research question for')},
    {...textGeneratorProps('hypothesis_statement_maker', 'Hypothesis Statement Maker', Beaker, 'Creates hypothesis statements.', 'Create a hypothesis for')},
    {...textGeneratorProps('experiment_design_generator', 'Experiment Design Generator', FlaskConical, 'Generates experimental designs.', 'Design an experiment for')},
    {...textGeneratorProps('observation_log_maker', 'Observation Log Maker', BookOpen, 'Creates logs for observations.', 'Create an observation log for')},
    {...textGeneratorProps('lab_report_writer', 'Lab Report Writer', TestTube, 'Writes formal lab reports.', 'Write a lab report for')},
    {...textGeneratorProps('survey_result_summarizer', 'Survey Result Summarizer', FileSearch, 'Summarizes survey results.', 'Summarize the survey results for')},
    // Design & Media Utilities
    {...textGeneratorProps('infographic_idea_generator', 'Infographic Idea Generator', BarChart3, 'Generates ideas for infographics.', 'Generate infographic ideas for')},
    {...textGeneratorProps('poster_slogan_maker', 'Poster Slogan Maker', Megaphone, 'Creates slogans for posters.', 'Create a slogan for a poster about')},
    {...textGeneratorProps('banner_text_generator', 'Banner Text Generator', Megaphone, 'Generates text for banners.', 'Generate text for a banner about')},
    {...textGeneratorProps('brochure_outline_maker', 'Brochure Outline Maker', Layout, 'Creates outlines for brochures.', 'Create a brochure outline for')},
    {...textGeneratorProps('pamphlet_content_writer', 'Pamphlet Content Writer', FileText, 'Writes content for pamphlets.', 'Write content for a pamphlet about')},
    {...textGeneratorProps('flyer_text_maker', 'Flyer Text Maker', FileText, 'Generates text for flyers.', 'Generate text for a flyer about')},
    // News & Information Utilities
    {...textGeneratorProps('announcement_writer', 'Announcement Writer', Bell, 'Writes official announcements.', 'Write an announcement about')},
    {...textGeneratorProps('press_release_writer', 'Press Release Writer', Newspaper, 'Writes press releases.', 'Write a press release about')},
    {...textGeneratorProps('public_notice_writer', 'Public Notice Writer', AlertTriangle, 'Writes public notices.', 'Write a public notice about')},
    {...textGeneratorProps('news_headline_generator', 'News Headline Generator', Newspaper, 'Generates headlines for news.', 'Generate a news headline for')},
    {...textGeneratorProps('news_summary_maker', 'News Summary Maker', FileText, 'Summarizes news articles.', 'Summarize the news article')},
    {...textGeneratorProps('sports_update_writer', 'Sports Update Writer', Trophy, 'Writes updates on sports events.', 'Write a sports update on')},
    {...textGeneratorProps('weather_report_maker', 'Weather Report Maker', Cloud, 'Creates weather reports.', 'Create a weather report for')},
    {...textGeneratorProps('traffic_update_writer', 'Traffic Update Writer', Car, 'Writes updates on traffic.', 'Write a traffic update for')},
    {...textGeneratorProps('stock_price_update_writer', 'Stock Price Update Writer', LineChart, 'Writes updates on stock prices.', 'Write a stock price update for')},
    {...textGeneratorProps('cryptocurrency_update_writer', 'Cryptocurrency Update Writer', CircleDollarSign, 'Writes updates on cryptocurrencies.', 'Write a cryptocurrency update for')},
    {...textGeneratorProps('economy_brief_maker', 'Economy Brief Maker', Landmark, 'Creates briefs on the economy.', 'Create an economy brief on')},
    {...textGeneratorProps('political_news_summary_maker', 'Political News Summary Maker', Landmark, 'Summarizes political news.', 'Summarize the political news')},
    // Health & Wellness Utilities
    {...textGeneratorProps('health_tip_generator', 'Health Tip Generator', HeartPulse, 'Generates health and wellness tips.', 'Generate a health tip for')},
    {...textGeneratorProps('medical_term_explainer', 'Medical Term Explainer', Stethoscope, 'Explains medical terminology.', 'Explain the medical term')},
    {...textGeneratorProps('symptom_checker', 'Symptom Checker', Stethoscope, 'Checks symptoms for possible conditions.', 'Check the symptoms')},
    {...textGeneratorProps('medicine_reminder', 'Medicine Reminder', Bell, 'Sets reminders for medication.', 'Set a medicine reminder for')},
    {...textGeneratorProps('nutrition_fact_finder', 'Nutrition Fact Finder', Leaf, 'Finds nutritional information.', 'Find nutrition facts for')},
    {...textGeneratorProps('diet_plan_maker', 'Diet Plan Maker', Utensils, 'Creates personalized diet plans.', 'Create a diet plan for')},
    {...textGeneratorProps('food_allergy_alert_guide', 'Food Allergy Alert Guide', AlertTriangle, 'Guides on food allergies.', 'Create a food allergy guide for')},
    {...textGeneratorProps('safe_cooking_temperature_guide', 'Safe Cooking Temperature Guide', ThermometerIcon, 'Guides on safe cooking temperatures.', 'Create a safe cooking temperature guide for')},
    {...textGeneratorProps('kitchen_safety_guide', 'Kitchen Safety Guide', AlertTriangle, 'Guides on kitchen safety.', 'Create a kitchen safety guide')},
    // Safety & Community Utilities
    {...textGeneratorProps('school_safety_checklist', 'School Safety Checklist', School, 'Checklists for school safety.', 'Create a school safety checklist')},
    {...textGeneratorProps('office_safety_checklist', 'Office Safety Checklist', Building2, 'Checklists for office safety.', 'Create an office safety checklist')},
    {...textGeneratorProps('factory_safety_checklist', 'Factory Safety Checklist', Factory, 'Checklists for factory safety.', 'Create a factory safety checklist')},
    {...textGeneratorProps('road_safety_tips', 'Road Safety Tips', Car, 'Provides road safety tips.', 'Provide road safety tips for')},
    {...textGeneratorProps('bicycle_safety_guide', 'Bicycle Safety Guide', Bike, 'Guides on bicycle safety.', 'Create a bicycle safety guide')},
    {...textGeneratorProps('swimming_safety_guide', 'Swimming Safety Guide', Droplet, 'Guides on swimming safety.', 'Create a swimming safety guide')},
    {...textGeneratorProps('hiking_safety_guide', 'Hiking Safety Guide', Mountain, 'Guides on hiking safety.', 'Create a hiking safety guide')},
    {...textGeneratorProps('child_safety_tips', 'Child Safety Tips', User, 'Provides safety tips for children.', 'Provide child safety tips for')},
    {...textGeneratorProps('elderly_care_tips', 'Elderly Care Tips', User, 'Provides tips for elderly care.', 'Provide elderly care tips for')},
    {...textGeneratorProps('disability_support_resource_finder', 'Disability Support Resource Finder', HelpCircle, 'Finds resources for disability support.', 'Find disability support resources for')},
    {...textGeneratorProps('community_event_idea_generator', 'Community Event Idea Generator', Users, 'Generates ideas for community events.', 'Generate community event ideas for')},
    {...textGeneratorProps('volunteer_task_list_maker', 'Volunteer Task List Maker', ListChecks, 'Creates task lists for volunteers.', 'Create a volunteer task list for')},
    {...textGeneratorProps('fundraising_idea_generator', 'Fundraising Idea Generator', Lightbulb, 'Generates fundraising ideas.', 'Generate fundraising ideas for')},
    {...textGeneratorProps('donation_campaign_writer', 'Donation Campaign Writer', PenLine, 'Writes for donation campaigns.', 'Write a donation campaign for')},
    {...textGeneratorProps('charity_event_plan_maker', 'Charity Event Plan Maker', Calendar, 'Plans charity events.', 'Create a charity event plan for')},
    {...textGeneratorProps('nonprofit_mission_statement_maker', 'Nonprofit Mission Statement Maker', FileText, 'Creates mission statements for nonprofits.', 'Create a nonprofit mission statement for')},
    // Environmental Utilities
    {...textGeneratorProps('sustainability_tip_generator', 'Sustainability Tip Generator', Leaf, 'Generates sustainability tips.', 'Generate sustainability tips for')},
    {...textGeneratorProps('recycling_guide', 'Recycling Guide', Recycle, 'Guides on proper recycling.', 'Create a recycling guide')},
    {...textGeneratorProps('composting_guide', 'Composting Guide', Recycle, 'Guides on composting.', 'Create a composting guide')},
    {...textGeneratorProps('energy_saving_tips', 'Energy Saving Tips', Lightbulb, 'Provides tips for saving energy.', 'Provide energy saving tips')},
    {...textGeneratorProps('water_saving_tips', 'Water Saving Tips', Droplet, 'Provides tips for saving water.', 'Provide water saving tips')},
    {...textGeneratorProps('pollution_awareness_guide', 'Pollution Awareness Guide', Wind, 'Guides on pollution awareness.', 'Create a pollution awareness guide for')},
    {...textGeneratorProps('wildlife_conservation_tips', 'Wildlife Conservation Tips', PawPrint, 'Provides tips for wildlife conservation.', 'Provide wildlife conservation tips')},
    {...textGeneratorProps('tree_planting_guide', 'Tree Planting Guide', Leaf, 'Guides on planting trees.', 'Create a tree planting guide')},
    {...textGeneratorProps('garden_wildlife_attractor', 'Garden Wildlife Attractor', Bird, 'Attracts wildlife to gardens.', 'Attract wildlife to your garden')},
    {...textGeneratorProps('renewable_energy_facts', 'Renewable Energy Facts', Sun, 'Provides facts on renewable energy.', 'Provide facts on renewable energy')},
    {...textGeneratorProps('green_product_suggestor', 'Green Product Suggestor', Leaf, 'Suggests eco-friendly products.', 'Suggest green products for')},
    {...textGeneratorProps('ab_test_result_analyzer', 'A/B Test Result Analyzer', TestTube, 'Analyzes A/B test results.', 'Analyze A/B test results')},
    {...textGeneratorProps('academic_progress_forecaster', 'Academic Progress Forecaster', GraduationCap, 'Forecasts academic progress.', 'Forecast academic progress for')},
    {...textGeneratorProps('accessory_style_matcher', 'Accessory Style Matcher', Glasses, 'Matches accessories to styles.', 'Match accessories to style')},
    {...textGeneratorProps('acronym_maker', 'Acronym Maker', CaseUpper, 'Creates acronyms from phrases.', 'Create an acronym for')},
    {...textGeneratorProps('ad_campaign_performance_forecaster', 'Ad Campaign Forecaster', TrendingUp, 'Forecasts ad campaign performance.', 'Forecast the ad campaign')},
    {...textGeneratorProps('ad_headline_creator', 'Ad Headline Creator', Megaphone, 'Creates ad headlines.', 'Create an ad headline for')},
    {...textGeneratorProps('age_calculator', 'Age Calculator', Calculator, 'Calculates age from birthdate.', 'Calculate age for')},
    {...textGeneratorProps('agent_training_needs_analyzer', 'Agent Training Needs Analyzer', User, 'Analyzes agent training needs.', 'Analyze training needs for')},
    {...textGeneratorProps('agricultural_market_price_forecaster', 'Agri-Market Forecaster', Tractor, 'Forecasts agricultural prices.', 'Forecast agricultural prices for')},
    {...textGeneratorProps('anniversary_wish_maker', 'Anniversary Wish Maker', Gift, 'Creates anniversary wishes.', 'Create an anniversary wish for')},
    {...textGeneratorProps('antonym_finder', 'Antonym Finder', PilcrowRight, 'Finds antonyms for words.', 'Find antonyms for')},
    {...textGeneratorProps('apology_letter_writer', 'Apology Letter Writer', Mail, 'Writes apology letters.', 'Write an apology letter for')},
    {...textGeneratorProps('app_name_generator', 'App Name Generator', AppWindow, 'Generates mobile app names.', 'Generate a name for an app')},
    {...textGeneratorProps('appointment_scheduling_optimizer', 'Appointment Optimizer', Calendar, 'Optimizes appointment schedules.', 'Optimize the schedule for')},
    {...textGeneratorProps('area_converter', 'Area Converter', Ruler, 'Converts area units.', 'Convert the area')},
    {...textGeneratorProps('article_rewriter', 'Article Rewriter', RefreshCw, 'Rewrites articles.', 'Rewrite the article')},
    {...textGeneratorProps('assembly_line_speed_optimizer', 'Assembly Line Optimizer', Factory, 'Optimizes assembly line speeds.', 'Optimize the assembly line')},
    {...textGeneratorProps('assignment_feedback_generator', 'Assignment Feedback Generator', GraduationCap, 'Generates feedback for assignments.', 'Generate feedback for the assignment')},
    {...textGeneratorProps('athlete_training_optimizer', 'Athlete Training Optimizer', Trophy, 'Optimizes athlete training plans.', 'Optimize the training for')},
    {...textGeneratorProps('audience_engagement_predictor', 'Audience Engagement Predictor', Users, 'Predicts audience engagement.', 'Predict engagement for')},
    {...textGeneratorProps('audience_engagement_timer', 'Audience Engagement Timer', Clock, 'Times audience engagement.', 'Time engagement for')},
    {...textGeneratorProps('audience_review_sentiment_tracker', 'Audience Sentiment Tracker', Smile, 'Tracks audience review sentiment.', 'Track sentiment for')},
    {...textGeneratorProps('audio_scene_identifier', 'Audio Scene Identifier', AudioLines, 'Identifies scenes from audio.', 'Identify the scene from the audio')},
    {...textGeneratorProps('backlink_quality_analyzer', 'Backlink Quality Analyzer', Link, 'Analyzes backlink quality.', 'Analyze backlinks for')},
    {...textGeneratorProps('behavior_based_segmentation_tool', 'Behavior Segmentation Tool', Users, 'Segments users by behavior.', 'Segment users by behavior')},
    {...textGeneratorProps('birthday_wish_maker', 'Birthday Wish Maker', Gift, 'Creates birthday wishes.', 'Create a birthday wish for')},
    {...textGeneratorProps('blog_conclusion_writer', 'Blog Conclusion Writer', Pilcrow, 'Writes blog post conclusions.', 'Write a conclusion for')},
    {...textGeneratorProps('blog_idea_generator', 'Blog Idea Generator', Lightbulb, 'Generates blog post ideas.', 'Generate blog ideas for')},
    {...textGeneratorProps('blog_intro_writer', 'Blog Intro Writer', Pilcrow, 'Writes blog post intros.', 'Write an intro for')},
    {...textGeneratorProps('blog_outline_maker', 'Blog Outline Maker', ListOrdered, 'Creates blog post outlines.', 'Create an outline for')},
    {...textGeneratorProps('blog_topic_trend_finder', 'Blog Topic Trend Finder', TrendingUp, 'Finds trending blog topics.', 'Find trending topics for')},
    {...textGeneratorProps('blueprint_error_detector', 'Blueprint Error Detector', Ruler, 'Detects errors in blueprints.', 'Detect errors in the blueprint')},
    {...textGeneratorProps('board_game_rule_optimizer', 'Board Game Rule Optimizer', Gamepad2, 'Optimizes board game rules.', 'Optimize rules for')},
    {...textGeneratorProps('book_summary_maker', 'Book Summary Maker', BookOpen, 'Summarizes books.', 'Summarize the book')},
    {...textGeneratorProps('book_title_generator', 'Book Title Generator', BookOpen, 'Generates book titles.', 'Generate a title for a book')},
    {...textGeneratorProps('brand_loyalty_scorer', 'Brand Loyalty Scorer', Star, 'Scores brand loyalty.', 'Score loyalty for the brand')},
    {...textGeneratorProps('brand_name_generator', 'Brand Name Generator', Megaphone, 'Generates brand names.', 'Generate a name for a brand')},
    {...textGeneratorProps('brand_name_idea_generator', 'Brand Name Idea Generator', Lightbulb, 'Generates brand name ideas.', 'Generate ideas for a brand name')},
    {...textGeneratorProps('break_even_calculator', 'Break-Even Calculator', Calculator, 'Calculates break-even points.', 'Calculate the break-even point for')},
    {...textGeneratorProps('breathing_exercise_guide', 'Breathing Exercise Guide', Wind, 'Guides breathing exercises.', 'Create a breathing exercise for')},
    {...textGeneratorProps('business_idea_generator', 'Business Idea Generator', Lightbulb, 'Generates business ideas.', 'Generate business ideas for')},
    {...textGeneratorProps('cad_design_suggestion_tool', 'CAD Design Suggestion Tool', Component, 'Suggests CAD designs.', 'Suggest a CAD design for')},
    {...textGeneratorProps('calendar_event_filler', 'Calendar Event Filler', Calendar, 'Fills in calendar events.', 'Fill in a calendar event for')},
    {...textGeneratorProps('calorie_counter', 'Calorie Counter', Utensils, 'Counts calories in meals.', 'Count calories for')},
    {...textGeneratorProps('caption_maker', 'Caption Maker', Captions, 'Creates captions for images.', 'Create a caption for')},
    {...textGeneratorProps('carbon_footprint_forecaster', 'Carbon Footprint Forecaster', Footprints, 'Forecasts carbon footprints.', 'Forecast the carbon footprint of')},
    {...textGeneratorProps('career_path_predictor', 'Career Path Predictor', Briefcase, 'Predicts career paths.', 'Predict a career path for')},
    {...textGeneratorProps('cash_flow_projection_tool', 'Cash Flow Projection Tool', DollarSign, 'Projects cash flow.', 'Project cash flow for')},
    {...textGeneratorProps('casting_fit_analyzer', 'Casting Fit Analyzer', User, 'Analyzes casting fit for roles.', 'Analyze casting fit for')},
    {...textGeneratorProps('challenge_idea_generator', 'Challenge Idea Generator', Lightbulb, 'Generates challenge ideas.', 'Generate challenge ideas for')},
    {...textGeneratorProps('chapter_title_generator', 'Chapter Title Generator', BookOpen, 'Generates chapter titles.', 'Generate a chapter title for')},
    {...textGeneratorProps('character_backstory_maker', 'Character Backstory Maker', UserSquare, 'Creates character backstories.', 'Create a backstory for')},
    {...textGeneratorProps('chatbot_script_enhancer', 'Chatbot Script Enhancer', MessageSquare, 'Enhances chatbot scripts.', 'Enhance the chatbot script')},
    {...textGeneratorProps('checkout_time_optimizer', 'Checkout Time Optimizer', Clock, 'Optimizes checkout times.', 'Optimize checkout time for')},
    {...textGeneratorProps('chord_progression_generator', 'Chord Progression Generator', Music, 'Generates chord progressions.', 'Generate a chord progression for')},
    {...textGeneratorProps('churn_prevention_strategy_maker', 'Churn Prevention Strategy Maker', ShieldCheck, 'Creates churn prevention strategies.', 'Create a churn prevention strategy for')},
    {...textGeneratorProps('civic_policy_simulation_tool', 'Civic Policy Simulation Tool', Landmark, 'Simulates civic policies.', 'Simulate the policy')},
    {...textGeneratorProps('classroom_engagement_tracker', 'Classroom Engagement Tracker', School, 'Tracks classroom engagement.', 'Track engagement in the classroom')},
    {...textGeneratorProps('clinical_trial_data_analyzer', 'Clinical Trial Data Analyzer', Stethoscope, 'Analyzes clinical trial data.', 'Analyze clinical trial data for')},
    {...textGeneratorProps('coin_flip', 'Coin Flip', Coins, 'Simulates a coin flip.', 'Flip a coin')},
    {...textGeneratorProps('color_palette_forecaster', 'Color Palette Forecaster', PaletteIcon, 'Forecasts color palette trends.', 'Forecast color palettes for')},
    {...textGeneratorProps('company_policy_clarity_checker', 'Company Policy Clarity Checker', Landmark, 'Checks company policy clarity.', 'Check the clarity of the policy')},
    {...textGeneratorProps('competitor_ad_copy_analyzer', 'Competitor Ad Copy Analyzer', Search, 'Analyzes competitor ad copy.', 'Analyze ad copy for')},
    {...textGeneratorProps('compliment_generator', 'Compliment Generator', Smile, 'Generates compliments.', 'Generate a compliment for')},
    {...textGeneratorProps('concept_explainer', 'Concept Explainer', Lightbulb, 'Explains complex concepts.', 'Explain the concept of')},
    {...textGeneratorProps('concept_reinforcement_planner', 'Concept Reinforcement Planner', School, 'Plans concept reinforcement.', 'Plan reinforcement for the concept')},
    {...textGeneratorProps('condolence_message_writer', 'Condolence Message Writer', Mail, 'Writes condolence messages.', 'Write a condolence message for')},
    {...textGeneratorProps('congratulations_message_writer', 'Congratulations Message Writer', Gift, 'Writes congratulations messages.', 'Write a congratulations message for')},
    {...textGeneratorProps('construction_schedule_forecaster', 'Construction Schedule Forecaster', Building2, 'Forecasts construction schedules.', 'Forecast the construction schedule for')},
    {...textGeneratorProps('content_calendar_optimizer', 'Content Calendar Optimizer', Calendar, 'Optimizes content calendars.', 'Optimize the content calendar for')},
    {...textGeneratorProps('conversion_form_design_checker', 'Conversion Form Design Checker', CheckSquare, 'Checks conversion form designs.', 'Check the design of the form')},
    {...textGeneratorProps('conversion_funnel_optimizer', 'Conversion Funnel Optimizer', Filter, 'Optimizes conversion funnels.', 'Optimize the conversion funnel for')},
    {...textGeneratorProps('cost_estimate_calculator', 'Cost Estimate Calculator', Calculator, 'Calculates cost estimates.', 'Calculate the cost estimate for')},
    {...textGeneratorProps('countdown_timer_maker', 'Countdown Timer Maker', Clock, 'Creates countdown timers.', 'Create a countdown timer for')},
    {...textGeneratorProps('course_title_generator', 'Course Title Generator', GraduationCap, 'Generates course titles.', 'Generate a title for a course on')},
    {...textGeneratorProps('cover_letter_personalizer', 'Cover Letter Personalizer', Mail, 'Personalizes cover letters.', 'Personalize a cover letter for')},
    {...textGeneratorProps('cover_letter_writer', 'Cover Letter Writer', Mail, 'Writes professional cover letters.', 'Write a cover letter for')},
    {...textGeneratorProps('crisis_communication_planner', 'Crisis Communication Planner', Megaphone, 'Plans crisis communications.', 'Plan crisis communications for')},
    {...textGeneratorProps('crop_yield_forecaster', 'Crop Yield Forecaster', Tractor, 'Forecasts crop yields.', 'Forecast the crop yield for')},
    {...textGeneratorProps('cross_department_communication_tracker', 'Cross-Dept Comm. Tracker', Users, 'Tracks cross-department comms.', 'Track communication for')},
    {...textGeneratorProps('cross_platform_engagement_tracker', 'Cross-Platform Engagement Tracker', TrendingUp, 'Tracks cross-platform engagement.', 'Track engagement across platforms')},
    {...textGeneratorProps('cross_sell_pattern_finder', 'Cross-Sell Pattern Finder', ShoppingCart, 'Finds cross-sell patterns.', 'Find cross-sell patterns for')},
    {...textGeneratorProps('cultural_context_advisor', 'Cultural Context Advisor', Globe, 'Advises on cultural context.', 'Advise on cultural context for')},
    {...textGeneratorProps('currency_converter', 'Currency Converter', CircleDollarSign, 'Converts currencies.', 'Convert currency for')},
    {...textGeneratorProps('curriculum_gap_identifier', 'Curriculum Gap Identifier', Search, 'Identifies curriculum gaps.', 'Identify gaps in the curriculum')},
    {...textGeneratorProps('customer_retention_strategy_maker', 'Customer Retention Strategy Maker', Heart, 'Creates customer retention strategies.', 'Create a retention strategy for')},
    {...textGeneratorProps('customer_review_summarizer', 'Customer Review Summarizer', FileSearch, 'Summarizes customer reviews.', 'Summarize reviews for')},
    {...textGeneratorProps('customer_service_response_analyzer', 'Customer Service Response Analyzer', MessageSquareHeart, 'Analyzes customer service responses.', 'Analyze the response for')},
    {...textGeneratorProps('diy_project_idea_maker', 'DIY Project Idea Maker', Wrench, 'Generates DIY project ideas.', 'Generate DIY project ideas for')},
    {...textGeneratorProps('date_difference_finder', 'Date Difference Finder', Calendar, 'Finds the difference between dates.', 'Find the difference between dates')},
    {...textGeneratorProps('deadline_risk_detector', 'Deadline Risk Detector', Clock, 'Detects risks to deadlines.', 'Detect deadline risks for')},
    {...textGeneratorProps('debate_strategy_planner', 'Debate Strategy Planner', MicVocal, 'Plans debate strategies.', 'Plan a debate strategy for')},
    {...textGeneratorProps('decision_helper', 'Decision Helper', Crosshair, 'Helps in making decisions.', 'Help me decide on')},
    {...textGeneratorProps('design_to_manufacture_converter', 'Design to Manufacture Converter', Factory, 'Converts designs for manufacturing.', 'Convert the design for manufacturing')},
    {...textGeneratorProps('detective_case_idea_maker', 'Detective Case Idea Maker', Search, 'Creates detective case ideas.', 'Create a detective case for')},
    {...textGeneratorProps('diagnostic_support_assistant', 'Diagnostic Support Assistant', Stethoscope, 'Assists with diagnostics.', 'Provide diagnostic support for')},
    {...textGeneratorProps('dialogue_improver', 'Dialogue Improver', MessageSquare, 'Improves written dialogue.', 'Improve the dialogue')},
    {...textGeneratorProps('dice_roller', 'Dice Roller', Dices, 'Simulates rolling dice.', 'Roll the dice')},
    {...textGeneratorProps('ecommerce_upsell_strategy_planner', 'eCommerce Upsell Strategy Planner', ShoppingCart, 'Plans eCommerce upsell strategies.', 'Plan an upsell strategy for')},
    {...textGeneratorProps('editorial_consistency_checker', 'Editorial Consistency Checker', BookCheck, 'Checks for editorial consistency.', 'Check consistency for')},
    {...textGeneratorProps('education_syllabus_planner', 'Education Syllabus Planner', GraduationCap, 'Plans education syllabi.', 'Plan a syllabus for')},
    {...textGeneratorProps('emergency_evacuation_planner', 'Emergency Evacuation Planner', Bus, 'Plans emergency evacuations.', 'Plan an evacuation for')},
    {...textGeneratorProps('employee_feedback_summarizer', 'Employee Feedback Summarizer', FileSearch, 'Summarizes employee feedback.', 'Summarize feedback from')},
    {...textGeneratorProps('ending_suggestor', 'Ending Suggestor', Lightbulb, 'Suggests story endings.', 'Suggest an ending for')},
    {...textGeneratorProps('enemy_behavior_modeler', 'Enemy Behavior Modeler', Bot, 'Models enemy AI behavior.', 'Model behavior for an enemy')},
    {...textGeneratorProps('energy_usage_analyzer', 'Energy Usage Analyzer', FileSearch, 'Analyzes energy usage.', 'Analyze energy usage for')},
    {...textGeneratorProps('environmental_impact_calculator', 'Environmental Impact Calculator', Leaf, 'Calculates environmental impact.', 'Calculate the environmental impact of')},
    {...textGeneratorProps('episode_recap_writer', 'Episode Recap Writer', Clapperboard, 'Writes episode recaps.', 'Write a recap for')},
    {...textGeneratorProps('equation_generator', 'Equation Generator', Sigma, 'Generates mathematical equations.', 'Generate an equation for')},
    {...textGeneratorProps('error_message_clarity_checker', 'Error Message Clarity Checker', AlertTriangle, 'Checks clarity of error messages.', 'Check the clarity of the error message')},
    {...textGeneratorProps('esports_strategy_advisor', 'eSports Strategy Advisor', Gamepad2, 'Advises on eSports strategies.', 'Advise on strategy for')},
    {...textGeneratorProps('essay_topic_generator', 'Essay Topic Generator', BookOpen, 'Generates essay topics.', 'Generate an essay topic for')},
    {...textGeneratorProps('eulogy_writer', 'Eulogy Writer', Feather, 'Writes eulogies.', 'Write a eulogy for')},
    {...textGeneratorProps('event_agenda_creator', 'Event Agenda Creator', Calendar, 'Creates event agendas.', 'Create an agenda for')},
    {...textGeneratorProps('event_name_generator', 'Event Name Generator', Megaphone, 'Generates names for events.', 'Generate a name for an event')},
    {...textGeneratorProps('event_schedule_maker', 'Event Schedule Maker', Calendar, 'Creates event schedules.', 'Create a schedule for')},
    {...textGeneratorProps('event_sponsorship_roi_calculator', 'Event Sponsorship ROI Calculator', CircleDollarSign, 'Calculates ROI for event sponsorships.', 'Calculate sponsorship ROI for')},
    {...textGeneratorProps('exam_pattern_analyzer', 'Exam Pattern Analyzer', FileSearch, 'Analyzes exam patterns.', 'Analyze the pattern of the exam')},
    {...textGeneratorProps('exam_question_generator', 'Exam Question Generator', HelpCircle, 'Generates exam questions.', 'Generate exam questions for')},
    {...textGeneratorProps('exercise_routine_optimizer', 'Exercise Routine Optimizer', Dumbbell, 'Optimizes exercise routines.', 'Optimize the exercise routine for')},
    {...textGeneratorProps('expense_categorization_ai', 'Expense Categorization AI', Tags, 'Categorizes expenses using AI.', 'Categorize the expenses')},
    {...textGeneratorProps('expense_tracker', 'Expense Tracker', Receipt, 'Tracks personal expenses.', 'Track expenses for')},
    {...textGeneratorProps('fable_writer', 'Fable Writer', Feather, 'Writes fables.', 'Write a fable about')},
    {...textGeneratorProps('fabric_quality_analyzer', 'Fabric Quality Analyzer', Shirt, 'Analyzes fabric quality.', 'Analyze the quality of the fabric')},
    {...textGeneratorProps('fact_finder', 'Fact Finder', Search, 'Finds interesting facts.', 'Find a fact about')},
    {...textGeneratorProps('fact_reference_link_generator', 'Fact Reference Link Generator', Link, 'Generates reference links for facts.', 'Generate a reference for the fact')},
    {...textGeneratorProps('fairy_tale_creator', 'Fairy Tale Creator', Crown, 'Creates original fairy tales.', 'Create a fairy tale about')},
    {...textGeneratorProps('fan_engagement_tracker', 'Fan Engagement Tracker', Users, 'Tracks fan engagement.', 'Track fan engagement for')},
    {...textGeneratorProps('fantasy_story_builder', 'Fantasy Story Builder', VenetianMask, 'Builds fantasy stories.', 'Build a fantasy story about')},
    {...textGeneratorProps('faq_auto_generator', 'FAQ Auto-Generator', HelpCircle, 'Auto-generates FAQs.', 'Generate FAQs for')},
    {...textGeneratorProps('farm_equipment_usage_tracker', 'Farm Equipment Usage Tracker', Tractor, 'Tracks farm equipment usage.', 'Track usage of')},
    {...textGeneratorProps('fashion_trend_predictor', 'Fashion Trend Predictor', Shirt, 'Predicts fashion trends.', 'Predict fashion trends for')},
    {...textGeneratorProps('feature_adoption_forecaster', 'Feature Adoption Forecaster', TrendingUp, 'Forecasts feature adoption rates.', 'Forecast adoption of the feature')},
    {...textGeneratorProps('feedback_sentiment_classifier', 'Feedback Sentiment Classifier', Smile, 'Classifies feedback sentiment.', 'Classify the sentiment of the feedback')},
    {...textGeneratorProps('film_script_coverage_ai', 'Film Script Coverage AI', Film, 'Provides film script coverage.', 'Provide coverage for the script')},
    {...textGeneratorProps('flashcard_auto_creator', 'Flashcard Auto-Creator', BookCopy, 'Auto-creates flashcards.', 'Create flashcards for')},
    {...textGeneratorProps('flood_risk_predictor', 'Flood Risk Predictor', Cloud, 'Predicts flood risks.', 'Predict flood risk for')},
    {...textGeneratorProps('fundraising_campaign_optimizer', 'Fundraising Campaign Optimizer', CircleDollarSign, 'Optimizes fundraising campaigns.', 'Optimize the fundraising campaign for')},
    {...textGeneratorProps('game_lore_expansion_tool', 'Game Lore Expansion Tool', BookOpen, 'Expands game lore.', 'Expand the lore for the game')},
    {...textGeneratorProps('game_name_generator', 'Game Name Generator', Gamepad2, 'Generates video game names.', 'Generate a name for a game')},
    {...textGeneratorProps('game_strategy_simulator', 'Game Strategy Simulator', Dices, 'Simulates game strategies.', 'Simulate a strategy for')},
    {...textGeneratorProps('genetic_pattern_detector', 'Genetic Pattern Detector', GitBranch, 'Detects genetic patterns.', 'Detect genetic patterns in')},
    {...textGeneratorProps('geometry_shape_drawer', 'Geometry Shape Drawer', SquarePi, 'Draws geometric shapes.', 'Draw the shape')},
    {...textGeneratorProps('gift_idea_generator', 'Gift Idea Generator', Gift, 'Generates gift ideas.', 'Generate gift ideas for')},
    {...textGeneratorProps('grading_consistency_checker', 'Grading Consistency Checker', CheckSquare, 'Checks grading consistency.', 'Check consistency in grading for')},
    {...textGeneratorProps('grammar_quiz_maker', 'Grammar Quiz Maker', HelpCircle, 'Creates grammar quizzes.', 'Create a grammar quiz on')},
    {...textGeneratorProps('grant_proposal_generator', 'Grant Proposal Generator', FileText, 'Generates grant proposals.', 'Generate a grant proposal for')},
    {...textGeneratorProps('greenhouse_climate_controller', 'Greenhouse Climate Controller', Cloud, 'Controls greenhouse climates.', 'Control the climate for')},
    {...textGeneratorProps('greeting_card_message_maker', 'Greeting Card Message Maker', Mail, 'Creates greeting card messages.', 'Create a message for a greeting card')},
    {...textGeneratorProps('guest_speaker_finder_ai', 'Guest Speaker Finder AI', User, 'Finds guest speakers.', 'Find a guest speaker for')},
    {...textGeneratorProps('habit_tracker', 'Habit Tracker', CheckSquare, 'Tracks personal habits.', 'Track the habit of')},
    {...textGeneratorProps('habitat_restoration_planner', 'Habitat Restoration Planner', Leaf, 'Plans habitat restoration.', 'Plan restoration for the habitat')},
    {...textGeneratorProps('haiku_generator', 'Haiku Generator', Feather, 'Generates haikus.', 'Generate a haiku about')},
    {...textGeneratorProps('health_risk_assessment_ai', 'Health Risk Assessment AI', Stethoscope, 'Assesses health risks.', 'Assess health risks for')},
    {...textGeneratorProps('hiking_safety_guide', 'Hiking Safety Guide', Mountain, 'Guides on hiking safety.', 'Create a hiking safety guide for')},
    {...textGeneratorProps('historical_fact_finder', 'Historical Fact Finder', Landmark, 'Finds historical facts.', 'Find a historical fact about')},
    {...textGeneratorProps('holiday_wish_maker', 'Holiday Wish Maker', Gift, 'Creates holiday wishes.', 'Create a holiday wish for')},
    {...textGeneratorProps('horror_story_maker', 'Horror Story Maker', VenetianMask, 'Creates horror stories.', 'Create a horror story about')},
    {...textGeneratorProps('hospital_resource_forecaster', 'Hospital Resource Forecaster', Stethoscope, 'Forecasts hospital resources.', 'Forecast resources for the hospital')},
    {...textGeneratorProps('hyperlink_health_checker', 'Hyperlink Health Checker', Link, 'Checks hyperlink health.', 'Check the links in')},
    {...textGeneratorProps('interview_coach', 'Interview Coach', UserSquare, 'Coaches for job interviews.', 'Coach me for an interview for')},
    {...textGeneratorProps('invitation_message_writer', 'Invitation Message Writer', Mail, 'Writes invitation messages.', 'Write an invitation for')},
    {...textGeneratorProps('irrigation_optimization_planner', 'Irrigation Optimization Planner', Droplet, 'Plans irrigation optimization.', 'Plan irrigation optimization for')},
    {...textGeneratorProps('jewelry_design_suggestor', 'Jewelry Design Suggestor', Gem, 'Suggests jewelry designs.', 'Suggest a jewelry design for')},
    {...textGeneratorProps('job_interview_simulation_ai', 'Job Interview Simulation AI', User, 'Simulates job interviews.', 'Simulate an interview for')},
    {...textGeneratorProps('job_title_suggestor', 'Job Title Suggestor', Briefcase, 'Suggests job titles.', 'Suggest a job title for')},
    {...textGeneratorProps('joke_finder', 'Joke Finder', Smile, 'Finds jokes.', 'Find a joke about')},
    {...textGeneratorProps('knowledge_base_gap_finder', 'Knowledge Base Gap Finder', Search, 'Finds gaps in knowledge bases.', 'Find gaps in the knowledge base')},
    {...textGeneratorProps('knowledge_transfer_optimizer', 'Knowledge Transfer Optimizer', BrainCog, 'Optimizes knowledge transfer.', 'Optimize knowledge transfer for')},
    {...textGeneratorProps('language_learning_path_optimizer', 'Language Learning Path Optimizer', Languages, 'Optimizes language learning paths.', 'Optimize a learning path for')},
    {...textGeneratorProps('language_practice_partner', 'Language Practice Partner', MessageSquare, 'Partners for language practice.', 'Practice language with me')},
    {...textGeneratorProps('lead_scoring_ai', 'Lead Scoring AI', Star, 'Scores leads using AI.', 'Score the lead')},
    {...textGeneratorProps('leadership_style_analyzer', 'Leadership Style Analyzer', UserSquare, 'Analyzes leadership styles.', 'Analyze the leadership style')},
    {...textGeneratorProps('learning_pace_personalizer', 'Learning Pace Personalizer', GraduationCap, 'Personalizes learning pace.', 'Personalize the learning pace for')},
    {...textGeneratorProps('learning_style_analyzer', 'Learning Style Analyzer', User, 'Analyzes learning styles.', 'Analyze the learning style')},
    {...textGeneratorProps('length_converter', 'Length Converter', Ruler, 'Converts length units.', 'Convert the length')},
    {...textGeneratorProps('lesson_plan_enhancer', 'Lesson Plan Enhancer', GraduationCap, 'Enhances lesson plans.', 'Enhance the lesson plan for')},
    {...textGeneratorProps('lesson_plan_maker', 'Lesson Plan Maker', BookOpen, 'Creates lesson plans.', 'Create a lesson plan for')},
    {...textGeneratorProps('level_design_ai', 'Level Design AI', Gamepad2, 'Assists with game level design.', 'Design a level for')},
    {...textGeneratorProps('lifetime_value_forecasting_ai', 'Lifetime Value Forecasting AI', CircleDollarSign, 'Forecasts customer lifetime value.', 'Forecast LTV for')},
    {...textGeneratorProps('lighting_setup_optimizer', 'Lighting Setup Optimizer', Lightbulb, 'Optimizes lighting setups.', 'Optimize the lighting for')},
    {...textGeneratorProps('list_creator', 'List Creator', ListOrdered, 'Creates organized lists.', 'Create a list of')},
    {...textGeneratorProps('livestock_health_monitor', 'Livestock Health Monitor', HeartPulse, 'Monitors livestock health.', 'Monitor the health of')},
    {...textGeneratorProps('loan_calculator', 'Loan Calculator', Banknote, 'Calculates loan payments.', 'Calculate the loan for')},
    {...textGeneratorProps('local_issue_report_generator', 'Local Issue Report Generator', FileText, 'Generates reports on local issues.', 'Generate a report on')},
    {...textGeneratorProps('logo_color_impact_analyzer', 'Logo Color Impact Analyzer', PaletteIcon, 'Analyzes logo color impact.', 'Analyze the color impact of the logo')},
    {...textGeneratorProps('loot_drop_probability_balancer', 'Loot Drop Probability Balancer', Dices, 'Balances loot drop probabilities.', 'Balance loot drops for')},
    {...textGeneratorProps('love_letter_writer', 'Love Letter Writer', BookHeart, 'Writes love letters.', 'Write a love letter to')},
    {...textGeneratorProps('loyalty_program_impact_analyzer', 'Loyalty Program Impact Analyzer', Star, 'Analyzes loyalty program impact.', 'Analyze the impact of the loyalty program')},
    {...textGeneratorProps('loyalty_reward_planner', 'Loyalty Reward Planner', Gift, 'Plans loyalty rewards.', 'Plan rewards for')},
    {...textGeneratorProps('loyalty_tier_upgrade_predictor', 'Loyalty Tier Upgrade Predictor', Star, 'Predicts loyalty tier upgrades.', 'Predict tier upgrades for')},
    {...textGeneratorProps('luxury_goods_market_forecaster', 'Luxury Goods Market Forecaster', Gem, 'Forecasts the luxury goods market.', 'Forecast the luxury market for')},
    {...textGeneratorProps('machine_failure_predictor', 'Machine Failure Predictor', Bug, 'Predicts machine failures.', 'Predict failures for the machine')},
    {...textGeneratorProps('maintenance_cost_estimator', 'Maintenance Cost Estimator', Wrench, 'Estimates maintenance costs.', 'Estimate maintenance cost for')},
    {...textGeneratorProps('manufacturing_workflow_optimizer', 'Manufacturing Workflow Optimizer', Factory, 'Optimizes manufacturing workflows.', 'Optimize the workflow for')},
    {...textGeneratorProps('market_entry_risk_forecaster', 'Market Entry Risk Forecaster', AlertTriangle, 'Forecasts market entry risks.', 'Forecast market entry risk for')},
    {...textGeneratorProps('match_outcome_predictor', 'Match Outcome Predictor', Trophy, 'Predicts match outcomes.', 'Predict the outcome of the match')},
    {...textGeneratorProps('material_stress_tester_ai', 'Material Stress Tester AI', TestTube, 'Simulates material stress tests.', 'Stress test the material')},
    {...textGeneratorProps('math_problem_solver', 'Math Problem Solver', Sigma, 'Solves math problems.', 'Solve the math problem')},
    {...textGeneratorProps('meal_plan_generator', 'Meal Plan Generator', Utensils, 'Generates weekly meal plans.', 'Generate a meal plan for')},
    {...textGeneratorProps('medical_inventory_tracker', 'Medical Inventory Tracker', Package, 'Tracks medical inventory.', 'Track inventory for')},
    {...textGeneratorProps('medical_literature_summarizer', 'Medical Literature Summarizer', BookOpen, 'Summarizes medical literature.', 'Summarize the medical literature')},
    {...textGeneratorProps('meditation_guide', 'Meditation Guide', Smile, 'Guides meditation sessions.', 'Guide a meditation for')},
    {...textGeneratorProps('meeting_agenda_maker', 'Meeting Agenda Maker', Calendar, 'Creates meeting agendas.', 'Create an agenda for')},
    {...textGeneratorProps('meeting_agenda_optimizer', 'Meeting Agenda Optimizer', Calendar, 'Optimizes meeting agendas.', 'Optimize the agenda for')},
    {...textGeneratorProps('meeting_summary_writer', 'Meeting Summary Writer', FileText, 'Writes meeting summaries.', 'Write a summary for the meeting')},
    {...textGeneratorProps('mental_wellness_suggestion_bot', 'Mental Wellness Suggestion Bot', HeartPulse, 'Suggests mental wellness activities.', 'Suggest a wellness activity for')},
    {...textGeneratorProps('merchandise_sales_forecaster', 'Merchandise Sales Forecaster', Shirt, 'Forecasts merchandise sales.', 'Forecast sales for')},
    {...textGeneratorProps('meta_tag_optimization_tool', 'Meta Tag Optimization Tool', Tags, 'Optimizes meta tags.', 'Optimize meta tags for')},
    {...textGeneratorProps('mind_map_creator', 'Mind Map Creator', GitBranch, 'Creates mind maps.', 'Create a mind map for')},
    {...textGeneratorProps('mixing_mastering_advisor', 'Mixing/Mastering Advisor', SlidersHorizontal, 'Advises on audio mixing/mastering.', 'Advise on mixing for')},
    {...textGeneratorProps('mobile_ui_flow_optimizer', 'Mobile UI Flow Optimizer', AppWindow, 'Optimizes mobile UI flows.', 'Optimize the UI flow for')},
    {...textGeneratorProps('monologue_writer', 'Monologue Writer', MicVocal, 'Writes monologues.', 'Write a monologue for')},
    {...textGeneratorProps('mood_journal_prompter', 'Mood Journal Prompter', BookHeart, 'Prompts for mood journaling.', 'Give me a journal prompt for')},
    {...textGeneratorProps('motivation_quote_sender', 'Motivation Quote Sender', Quote, 'Sends motivational quotes.', 'Send a motivational quote for')},
    {...textGeneratorProps('motivational_message_maker', 'Motivational Message Maker', MessageSquareHeart, 'Creates motivational messages.', 'Create a motivational message for')},
    {...textGeneratorProps('movie_summary_maker', 'Movie Summary Maker', Film, 'Summarizes movies.', 'Summarize the movie')},
    {...textGeneratorProps('multiplayer_matchmaking_optimizer', 'Multiplayer Matchmaking Optimizer', Users, 'Optimizes multiplayer matchmaking.', 'Optimize matchmaking for')},
    {...textGeneratorProps('music_mood_classifier', 'Music Mood Classifier', Smile, 'Classifies music mood.', 'Classify the mood of the song')},
    {...textGeneratorProps('mystery_story_generator', 'Mystery Story Generator', Search, 'Generates mystery stories.', 'Generate a mystery story about')},
    {...textGeneratorProps('narrative_style_changer', 'Narrative Style Changer', RefreshCw, 'Changes narrative style.', 'Change the narrative style of')},
    {...textGeneratorProps('navigation_usability_analyzer', 'Navigation Usability Analyzer', Waypoints, 'Analyzes navigation usability.', 'Analyze the usability of the navigation')},
    {...textGeneratorProps('nickname_maker', 'Nickname Maker', User, 'Creates nicknames.', 'Create a nickname for')},
    {...textGeneratorProps('noise_removal_optimizer', 'Noise Removal Optimizer', AudioLines, 'Optimizes audio noise removal.', 'Remove noise from the audio')},
    {...textGeneratorProps('nonprofit_donor_outreach_ai', 'Nonprofit Donor Outreach AI', Mail, 'Assists with nonprofit donor outreach.', 'Draft an outreach for')},
    {...textGeneratorProps('notification_timing_optimizer', 'Notification Timing Optimizer', Clock, 'Optimizes notification timing.', 'Optimize notification timing for')},
    {...textGeneratorProps('nutritional_plan_generator', 'Nutritional Plan Generator', Leaf, 'Generates nutritional plans.', 'Generate a nutritional plan for')},
    {...textGeneratorProps('onboarding_experience_planner', 'Onboarding Experience Planner', Users, 'Plans onboarding experiences.', 'Plan the onboarding for')},
    {...textGeneratorProps('online_course_enrollment_predictor', 'Online Course Enrollment Predictor', GraduationCap, 'Predicts online course enrollment.', 'Predict enrollment for the course')},
    {...textGeneratorProps('outfit_combination_recommender', 'Outfit Combination Recommender', Shirt, 'Recommends outfit combinations.', 'Recommend an outfit for')},
    {...textGeneratorProps('packaging_design_feedback_ai', 'Packaging Design Feedback AI', Package, 'Provides feedback on packaging designs.', 'Give feedback on the packaging design')},
    {...textGeneratorProps('page_load_impact_predictor', 'Page Load Impact Predictor', Clock, 'Predicts page load impact.', 'Predict the page load impact of')},
    {...textGeneratorProps('parking_demand_forecaster', 'Parking Demand Forecaster', Car, 'Forecasts parking demand.', 'Forecast parking demand for')},
    {...textGeneratorProps('parts_inventory_balancer', 'Parts Inventory Balancer', Wrench, 'Balances parts inventory.', 'Balance the inventory for')},
    {...textGeneratorProps('party_theme_generator', 'Party Theme Generator', PartyPopper, 'Generates party themes.', 'Generate a theme for a party')},
    {...textGeneratorProps('password_generator', 'Password Generator', Lock, 'Generates secure passwords.', 'Generate a password')},
    {...textGeneratorProps('patent_portfolio_analyzer', 'Patent Portfolio Analyzer', BookCopy, 'Analyzes patent portfolios.', 'Analyze the patent portfolio')},
    {...textGeneratorProps('pathology_report_summarizer', 'Pathology Report Summarizer', FileSearch, 'Summarizes pathology reports.', 'Summarize the pathology report')},
    {...textGeneratorProps('patient_recovery_forecaster', 'Patient Recovery Forecaster', HeartPulse, 'Forecasts patient recovery.', 'Forecast recovery for the patient')},
    {...textGeneratorProps('payment_fraud_probability_checker', 'Payment Fraud Probability Checker', AlertTriangle, 'Checks payment fraud probability.', 'Check fraud probability for the payment')},
    {...textGeneratorProps('payroll_compliance_checker', 'Payroll Compliance Checker', Landmark, 'Checks payroll compliance.', 'Check compliance for payroll')},
    {...textGeneratorProps('peer_review_summarizer', 'Peer Review Summarizer', FileSearch, 'Summarizes peer reviews.', 'Summarize the peer review')},
    {...textGeneratorProps('personalization_rule_optimizer', 'Personalization Rule Optimizer', User, 'Optimizes personalization rules.', 'Optimize personalization rules for')},
    {...textGeneratorProps('perspective_rewriter', 'Perspective Rewriter', RefreshCw, 'Rewrites text from a different perspective.', 'Rewrite from the perspective of')},
    {...textGeneratorProps('pest_infestation_predictor', 'Pest Infestation Predictor', Bug, 'Predicts pest infestations.', 'Predict pest infestation for')},
    {...textGeneratorProps('plagiarism_risk_checker', 'Plagiarism Risk Checker', Search, 'Checks for plagiarism risks.', 'Check plagiarism risk for')},
    {...textGeneratorProps('player_injury_risk_detector', 'Player Injury Risk Detector', HeartPulse, 'Detects player injury risks.', 'Detect injury risk for the player')},
    {...textGeneratorProps('player_motivation_analyzer', 'Player Motivation Analyzer', Trophy, 'Analyzes player motivations.', 'Analyze motivation for the player')},
    {...textGeneratorProps('playlist_name_generator', 'Playlist Name Generator', Music, 'Generates playlist names.', 'Generate a name for a playlist')},
    {...textGeneratorProps('plot_twist_generator', 'Plot Twist Generator', Drama, 'Generates plot twists.', 'Generate a plot twist for')},
    {...textGeneratorProps('podcast_topic_planner', 'Podcast Topic Planner', Mic, 'Plans podcast topics.', 'Plan topics for the podcast')},
    {...textGeneratorProps('poetry_writer', 'Poetry Writer', Feather, 'Writes original poetry.', 'Write a poem about')},
    {...textGeneratorProps('policy_impact_forecaster', 'Policy Impact Forecaster', Landmark, 'Forecasts policy impacts.', 'Forecast the impact of the policy')},
    {...textGeneratorProps('poll_question_maker', 'Poll Question Maker', HelpCircle, 'Creates poll questions.', 'Create a poll question about')},
    {...textGeneratorProps('post_production_workflow_planner', 'Post-Production Workflow Planner', Film, 'Plans post-production workflows.', 'Plan the post-production workflow for')},
    {...textGeneratorProps('ppc_campaign_roi_predictor', 'PPC Campaign ROI Predictor', CircleDollarSign, 'Predicts PPC campaign ROI.', 'Predict ROI for the PPC campaign')},
    {...textGeneratorProps('presentation_flow_optimizer', 'Presentation Flow Optimizer', Presentation, 'Optimizes presentation flows.', 'Optimize the flow of the presentation')},
    {...textGeneratorProps('price_match_detector', 'Price Match Detector', Tags, 'Detects price matching opportunities.', 'Detect a price match for')},
    {...textGeneratorProps('pro_con_list_maker', 'Pro/Con List Maker', List, 'Creates pro/con lists.', 'Create a pro/con list for')},
    {...textGeneratorProps('product_description_writer', 'Product Description Writer', PenLine, 'Writes product descriptions.', 'Write a description for the product')},
    {...textGeneratorProps('product_lifecycle_forecaster', 'Product Lifecycle Forecaster', TrendingUp, 'Forecasts product lifecycles.', 'Forecast the lifecycle for the product')},
    {...textGeneratorProps('product_prototype_feedback_ai', 'Product Prototype Feedback AI', Lightbulb, 'Provides feedback on product prototypes.', 'Give feedback on the prototype')},
    {...textGeneratorProps('product_return_risk_detector', 'Product Return Risk Detector', AlertTriangle, 'Detects product return risks.', 'Detect return risk for the product')},
    {...textGeneratorProps('production_batch_optimizer', 'Production Batch Optimizer', Factory, 'Optimizes production batch sizes.', 'Optimize the production batch for')},
    {...textGeneratorProps('production_scheduling_planner', 'Production Scheduling Planner', Calendar, 'Plans production schedules.', 'Plan the production schedule for')},
    {...textGeneratorProps('professional_bio_generator', 'Professional Bio Generator', UserSquare, 'Generates professional bios.', 'Generate a bio for')},
    {...textGeneratorProps('profit_calculator', 'Profit Calculator', Calculator, 'Calculates profit.', 'Calculate the profit for')},
    {...textGeneratorProps('project_progress_reporter', 'Project Progress Reporter', GanttChart, 'Reports on project progress.', 'Report progress for the project')},
    {...textGeneratorProps('pronunciation_feedback_ai', 'Pronunciation Feedback AI', MicVocal, 'Provides pronunciation feedback.', 'Give feedback on my pronunciation of')},
    {...textGeneratorProps('protein_structure_predictor', 'Protein Structure Predictor', GitBranch, 'Predicts protein structures.', 'Predict the structure of the protein')},
    {...textGeneratorProps('prototype_design_optimizer', 'Prototype Design Optimizer', Component, 'Optimizes prototype designs.', 'Optimize the design of the prototype')},
    {...textGeneratorProps('public_opinion_trend_analyzer', 'Public Opinion Trend Analyzer', Users, 'Analyzes public opinion trends.', 'Analyze trends in public opinion on')},
    {...textGeneratorProps('public_relations_risk_detector', 'Public Relations Risk Detector', AlertTriangle, 'Detects public relations risks.', 'Detect PR risks for')},
    {...textGeneratorProps('public_transit_route_optimizer', 'Public Transit Route Optimizer', Bus, 'Optimizes public transit routes.', 'Optimize the transit route for')},
    {...textGeneratorProps('push_notification_copy_checker', 'Push Notification Copy Checker', Bell, 'Checks push notification copy.', 'Check the copy for the push notification')},
    {...textGeneratorProps('puzzle_difficulty_balancer', 'Puzzle Difficulty Balancer', Puzzle, 'Balances puzzle difficulty.', 'Balance the difficulty of the puzzle')},
    {...textGeneratorProps('quality_control_inspector_ai', 'Quality Control Inspector AI', CheckSquare, 'Inspects quality control.', 'Inspect quality for')},
    {...textGeneratorProps('question_difficulty_calibrator', 'Question Difficulty Calibrator', SlidersHorizontal, 'Calibrates question difficulty.', 'Calibrate the difficulty of the question')},
    {...textGeneratorProps('quote_finder', 'Quote Finder', Quote, 'Finds famous quotes.', 'Find a quote about')},
    {...textGeneratorProps('roi_calculator', 'ROI Calculator', CircleDollarSign, 'Calculates Return on Investment.', 'Calculate ROI for')},
    {...textGeneratorProps('radio_ad_effectiveness_tracker', 'Radio Ad Effectiveness Tracker', AudioLines, 'Tracks radio ad effectiveness.', 'Track the effectiveness of the radio ad')},
    {...textGeneratorProps('radiology_image_analyzer', 'Radiology Image Analyzer', FileSearch, 'Analyzes radiology images.', 'Analyze the radiology image')},
    {...textGeneratorProps('random_name_picker', 'Random Name Picker', Dices, 'Picks a random name from a list.', 'Pick a random name from')},
    {...textGeneratorProps('random_number_picker', 'Random Number Picker', Dices, 'Picks a random number.', 'Pick a random number between')},
    {...textGeneratorProps('rap_verse_maker', 'Rap Verse Maker', MicVocal, 'Creates rap verses.', 'Make a rap verse about')},
    {...textGeneratorProps('rd_project_feasibility_checker', 'R&D Project Feasibility Checker', Beaker, 'Checks R&D project feasibility.', 'Check the feasibility of the R&D project')},
    {...textGeneratorProps('reading_ease_score_analyzer', 'Reading Ease Score Analyzer', BookOpen, 'Analyzes reading ease scores.', 'Analyze the reading ease of')},
    {...textGeneratorProps('reminder_maker', 'Reminder Maker', Bell, 'Creates reminders.', 'Create a reminder for')},
    {...textGeneratorProps('renewable_energy_yield_estimator', 'Renewable Energy Yield Estimator', Sun, 'Estimates renewable energy yield.', 'Estimate the yield for')},
    {...textGeneratorProps('renewable_grid_load_balancer', 'Renewable Grid Load Balancer', Sun, 'Balances renewable grid loads.', 'Balance the load for the grid')},
    {...textGeneratorProps('reputation_score_tracker', 'Reputation Score Tracker', Star, 'Tracks reputation scores.', 'Track the reputation score of')},
    {...textGeneratorProps('resume_bullet_point_maker', 'Resume Bullet Point Maker', ListOrdered, 'Creates resume bullet points.', 'Create bullet points for my resume')},
    {...textGeneratorProps('resume_keyword_optimizer', 'Resume Keyword Optimizer', Search, 'Optimizes resume keywords.', 'Optimize keywords for my resume')},
    {...textGeneratorProps('rhyme_finder', 'Rhyme Finder', Music, 'Finds rhyming words.', 'Find rhymes for')},
    {...textGeneratorProps('road_repair_priority_planner', 'Road Repair Priority Planner', Car, 'Plans road repair priorities.', 'Plan repair priorities for')},
    {...textGeneratorProps('roast_joke_generator', 'Roast Joke Generator', Smile, 'Generates roast jokes.', 'Generate a roast joke about')},
    {...textGeneratorProps('robotics_task_planner', 'Robotics Task Planner', Bot, 'Plans tasks for robots.', 'Plan tasks for the robot')},
    {...textGeneratorProps('salary_benchmarking_tool', 'Salary Benchmarking Tool', CircleDollarSign, 'Benchmarks salaries.', 'Benchmark the salary for')},
    {...textGeneratorProps('sales_forecasting_assistant', 'Sales Forecasting Assistant', TrendingUp, 'Assists with sales forecasting.', 'Forecast sales for')},
    {...textGeneratorProps('savings_goal_calculator', 'Savings Goal Calculator', PiggyBank, 'Calculates savings goals.', 'Calculate my savings goal for')},
    {...textGeneratorProps('scene_description_writer', 'Scene Description Writer', Clapperboard, 'Writes scene descriptions.', 'Write a description for the scene')},
    {...textGeneratorProps('scene_location_suggestor', 'Scene Location Suggestor', Map, 'Suggests scene locations.', 'Suggest a location for the scene')},
    {...textGeneratorProps('scene_pacing_adjuster', 'Scene Pacing Adjuster', Clock, 'Adjusts scene pacing.', 'Adjust the pacing of the scene')},
    {...textGeneratorProps('sci_fi_story_maker', 'Sci-Fi Story Maker', Telescope, 'Creates sci-fi stories.', 'Create a sci-fi story about')},
    {...textGeneratorProps('science_fact_finder', 'Science Fact Finder', Beaker, 'Finds science facts.', 'Find a science fact about')},
    {...textGeneratorProps('script_dialogue_writer', 'Script Dialogue Writer', MessageSquare, 'Writes script dialogue.', 'Write dialogue for')},
    {...textGeneratorProps('search_intent_classifier', 'Search Intent Classifier', Search, 'Classifies search intent.', 'Classify the intent of the search')},
    {...textGeneratorProps('seed_selection_optimizer', 'Seed Selection Optimizer', Leaf, 'Optimizes seed selections.', 'Optimize seed selection for')},
    {...textGeneratorProps('self_care_checklist_maker', 'Self-Care Checklist Maker', Heart, 'Creates self-care checklists.', 'Create a self-care checklist for')},
    {...textGeneratorProps('seo_keyword_gap_finder', 'SEO Keyword Gap Finder', Search, 'Finds SEO keyword gaps.', 'Find keyword gaps for')},
    {...textGeneratorProps('service_level_agreement_monitor', 'SLA Monitor', FileText, 'Monitors Service Level Agreements.', 'Monitor the SLA for')},
    {...textGeneratorProps('sewage_network_monitoring_ai', 'Sewage Network Monitoring AI', Waypoints, 'Monitors sewage networks.', 'Monitor the sewage network')},
    {...textGeneratorProps('shelf_placement_impact_predictor', 'Shelf Placement Impact Predictor', Package, 'Predicts shelf placement impact.', 'Predict the impact of shelf placement for')},
    {...textGeneratorProps('shelf_stocking_suggestion_tool', 'Shelf Stocking Suggestion Tool', Package, 'Suggests shelf stocking strategies.', 'Suggest a stocking strategy for')},
    {...textGeneratorProps('shoe_size_fit_predictor', 'Shoe Size Fit Predictor', Footprints, 'Predicts shoe size fit.', 'Predict shoe size for')},
    {...textGeneratorProps('short_story_writer', 'Short Story Writer', BookOpen, 'Writes short stories.', 'Write a short story about')},
    {...textGeneratorProps('shot_sequence_planner', 'Shot Sequence Planner', Film, 'Plans shot sequences.', 'Plan the shot sequence for')},
    {...textGeneratorProps('side_character_generator', 'Side Character Generator', User, 'Generates side characters.', 'Generate a side character for')},
    {...textGeneratorProps('simple_translator', 'Simple Translator', Languages, 'Provides simple translations.', 'Translate')},
    {...textGeneratorProps('skill_endorsement_analyzer', 'Skill Endorsement Analyzer', Star, 'Analyzes skill endorsements.', 'Analyze skill endorsements for')},
    {...textGeneratorProps('skill_gap_forecaster', 'Skill Gap Forecaster', Users, 'Forecasts skill gaps.', 'Forecast skill gaps for')},
    {...textGeneratorProps('sleep_cycle_tracker_ai', 'Sleep Cycle Tracker AI', Moon, 'Tracks sleep cycles.', 'Track my sleep cycle')},
    {...textGeneratorProps('sleep_routine_planner', 'Sleep Routine Planner', Bed, 'Plans sleep routines.', 'Plan a sleep routine for')},
    {...textGeneratorProps('slide_deck_consistency_checker', 'Slide Deck Consistency Checker', Presentation, 'Checks slide deck consistency.', 'Check consistency for the slide deck')},
    {...textGeneratorProps('slogan_maker', 'Slogan Maker', Megaphone, 'Creates slogans.', 'Create a slogan for')},
    {...textGeneratorProps('smart_factory_process_designer', 'Smart Factory Process Designer', Factory, 'Designs smart factory processes.', 'Design a process for the smart factory')},
    {...textGeneratorProps('smart_lighting_planner', 'Smart Lighting Planner', Lightbulb, 'Plans smart lighting systems.', 'Plan a smart lighting system for')},
    {...textGeneratorProps('social_sentiment_analyzer', 'Social Sentiment Analyzer', Smile, 'Analyzes social media sentiment.', 'Analyze sentiment for')},
    {...textGeneratorProps('soil_nutrient_analyzer', 'Soil Nutrient Analyzer', Leaf, 'Analyzes soil nutrients.', 'Analyze nutrients in the soil')},
    {...textGeneratorProps('song_lyric_starter', 'Song Lyric Starter', Music, 'Creates starting song lyrics.', 'Start a song lyric about')},
    {...textGeneratorProps('song_tempo_analyzer', 'Song Tempo Analyzer', Music, 'Analyzes song tempo.', 'Analyze the tempo of the song')},
    {...textGeneratorProps('sound_quality_enhancer', 'Sound Quality Enhancer', AudioLines, 'Enhances sound quality.', 'Enhance the sound quality of')},
    {...textGeneratorProps('special_effects_cost_estimator', 'SFX Cost Estimator', CircleDollarSign, 'Estimates special effects costs.', 'Estimate the cost of SFX for')},
    {...textGeneratorProps('speech_emotion_analyzer', 'Speech Emotion Analyzer', MicVocal, 'Analyzes emotion in speech.', 'Analyze the emotion in the speech')},
    {...textGeneratorProps('speech_timing_analyzer', 'Speech Timing Analyzer', Clock, 'Analyzes speech timing.', 'Analyze the timing of the speech')},
    {...textGeneratorProps('speech_writer', 'Speech Writer', Presentation, 'Writes speeches.', 'Write a speech about')},
    {...textGeneratorProps('speed_converter', 'Speed Converter', Car, 'Converts speed units.', 'Convert the speed')},
    {...textGeneratorProps('speedrun_path_optimizer', 'Speedrun Path Optimizer', Gamepad2, 'Optimizes speedrun paths.', 'Optimize the speedrun path for')},
    {...textGeneratorProps('spelling_checker', 'Spelling Checker', SpellCheck, 'Checks spelling.', 'Check spelling for')},
    {...textGeneratorProps('spelling_quiz_maker', 'Spelling Quiz Maker', HelpCircle, 'Creates spelling quizzes.', 'Create a spelling quiz')},
    {...textGeneratorProps('sponsorship_roi_analyzer', 'Sponsorship ROI Analyzer', CircleDollarSign, 'Analyzes sponsorship ROI.', 'Analyze ROI for the sponsorship')},
    {...textGeneratorProps('sports_performance_analyzer', 'Sports Performance Analyzer', Trophy, 'Analyzes sports performance.', 'Analyze the performance of')},
    {...textGeneratorProps('startup_pitch_writer', 'Startup Pitch Writer', Lightbulb, 'Writes startup pitches.', 'Write a startup pitch for')},
    {...textGeneratorProps('stopwatch_tool', 'Stopwatch Tool', Clock, 'Functions as a stopwatch.', 'Start a stopwatch')},
    {...textGeneratorProps('store_layout_optimization_ai', 'Store Layout Optimization AI', Waypoints, 'Optimizes store layouts.', 'Optimize the store layout')},
    {...textGeneratorProps('store_traffic_flow_analyzer', 'Store Traffic Flow Analyzer', Waypoints, 'Analyzes store traffic flow.', 'Analyze traffic flow for the store')},
    {...textGeneratorProps('story_idea_generator', 'Story Idea Generator', Lightbulb, 'Generates story ideas.', 'Generate a story idea about')},
    {...textGeneratorProps('streaming_audience_predictor', 'Streaming Audience Predictor', Users, 'Predicts streaming audience sizes.', 'Predict the audience for the stream')},
    {...textGeneratorProps('style_guide_compliance_checker', 'Style Guide Compliance Checker', BookCheck, 'Checks style guide compliance.', 'Check compliance with the style guide')},
    {...textGeneratorProps('subscription_renewal_predictor', 'Subscription Renewal Predictor', RefreshCw, 'Predicts subscription renewals.', 'Predict renewals for')},
    {...textGeneratorProps('superhero_story_creator', 'Superhero Story Creator', ShieldCheck, 'Creates superhero stories.', 'Create a superhero story about')},
    {...textGeneratorProps('supply_shortage_forecaster', 'Supply Shortage Forecaster', AlertTriangle, 'Forecasts supply shortages.', 'Forecast supply shortages for')},
    {...textGeneratorProps('support_ticket_categorizer', 'Support Ticket Categorizer', Tags, 'Categorizes support tickets.', 'Categorize the support ticket')},
    {...textGeneratorProps('surgical_procedure_planner', 'Surgical Procedure Planner', Stethoscope, 'Plans surgical procedures.', 'Plan the surgical procedure for')},
    {...textGeneratorProps('survey_question_generator', 'Survey Question Generator', HelpCircle, 'Generates survey questions.', 'Generate survey questions for')},
    {...textGeneratorProps('swot_analyzer', 'SWOT Analyzer', Search, 'Performs SWOT analysis.', 'Perform a SWOT analysis for')},
    {...textGeneratorProps('symptom_pattern_analyzer', 'Symptom Pattern Analyzer', FileSearch, 'Analyzes symptom patterns.', 'Analyze patterns in the symptoms')},
    {...textGeneratorProps('symptom_to_specialist_recommender', 'Symptom to Specialist Recommender', Stethoscope, 'Recommends specialists based on symptoms.', 'Recommend a specialist for the symptoms')},
    {...textGeneratorProps('synonym_finder', 'Synonym Finder', Pilcrow, 'Finds synonyms for words.', 'Find synonyms for')},
    {...textGeneratorProps('tagline_maker', 'Tagline Maker', Megaphone, 'Creates taglines.', 'Create a tagline for')},
    {...textGeneratorProps('task_priority_planner', 'Task Priority Planner', ListChecks, 'Plans task priorities.', 'Plan priorities for the tasks')},
    {...textGeneratorProps('task_priority_sorter', 'Task Priority Sorter', ArrowDownUp, 'Sorts tasks by priority.', 'Sort the tasks by priority')},
    {...textGeneratorProps('tax_calculator', 'Tax Calculator', CircleDollarSign, 'Calculates taxes.', 'Calculate tax for')},
    {...textGeneratorProps('teaching_method_suggestor', 'Teaching Method Suggestor', School, 'Suggests teaching methods.', 'Suggest a teaching method for')},
    {...textGeneratorProps('team_dynamics_predictor', 'Team Dynamics Predictor', Users, 'Predicts team dynamics.', 'Predict the dynamics for the team')},
    {...textGeneratorProps('temperature_converter', 'Temperature Converter', ThermometerIcon, 'Converts temperatures.', 'Convert the temperature')},
    {...textGeneratorProps('textile_pattern_designer_ai', 'Textile Pattern Designer AI', PaletteIcon, 'Designs textile patterns.', 'Design a textile pattern for')},
    {...textGeneratorProps('thank_you_note_maker', 'Thank-You Note Maker', Mail, 'Creates thank-you notes.', 'Create a thank-you note for')},
    {...textGeneratorProps('therapy_session_planner', 'Therapy Session Planner', HeartPulse, 'Plans therapy sessions.', 'Plan a therapy session for')},
    {...textGeneratorProps('ticket_price_optimizer', 'Ticket Price Optimizer', CircleDollarSign, 'Optimizes ticket prices.', 'Optimize the ticket price for')},
    {...textGeneratorProps('time_zone_converter', 'Time Zone Converter', Globe, 'Converts time zones.', 'Convert the time zone')},
    {...textGeneratorProps('toast_speech_writer', 'Toast Speech Writer', Martini, 'Writes toasts for speeches.', 'Write a toast for')},
    {...textGeneratorProps('tournament_schedule_optimizer', 'Tournament Schedule Optimizer', Trophy, 'Optimizes tournament schedules.', 'Optimize the tournament schedule for')},
    {...textGeneratorProps('trailer_impact_predictor', 'Trailer Impact Predictor', Film, 'Predicts movie trailer impact.', 'Predict the impact of the trailer')},
    {...textGeneratorProps('training_needs_identifier', 'Training Needs Identifier', GraduationCap, 'Identifies training needs.', 'Identify training needs for')},
    {...textGeneratorProps('treatment_plan_personalizer', 'Treatment Plan Personalizer', Stethoscope, 'Personalizes treatment plans.', 'Personalize the treatment plan for')},
    {...textGeneratorProps('trial_conversion_rate_predictor', 'Trial Conversion Rate Predictor', PercentCircle, 'Predicts trial conversion rates.', 'Predict the conversion rate for')},
    {...textGeneratorProps('tutoring_session_scheduler', 'Tutoring Session Scheduler', Calendar, 'Schedules tutoring sessions.', 'Schedule a tutoring session for')},
    {...textGeneratorProps('unit_conversion_practice_tool', 'Unit Conversion Practice Tool', Ruler, 'Creates unit conversion practice problems.', 'Create unit conversion problems for')},
    {...textGeneratorProps('unit_converter', 'Unit Converter', Ruler, 'Converts various units.', 'Convert')},
    {...textGeneratorProps('upsell_recommendation_engine', 'Upsell Recommendation Engine', ArrowUp, 'Recommends upsells.', 'Recommend an upsell for')},
    {...textGeneratorProps('urban_traffic_flow_predictor', 'Urban Traffic Flow Predictor', Car, 'Predicts urban traffic flow.', 'Predict traffic flow for')},
    {...textGeneratorProps('user_retention_pattern_finder', 'User Retention Pattern Finder', Users, 'Finds user retention patterns.', 'Find retention patterns for')},
    {...textGeneratorProps('username_generator', 'Username Generator', AtSign, 'Generates usernames.', 'Generate a username for')},
    {...textGeneratorProps('utility_consumption_tracker', 'Utility Consumption Tracker', FileSearch, 'Tracks utility consumption.', 'Track utility consumption for')},
    {...textGeneratorProps('villain_profile_maker', 'Villain Profile Maker', UserSquare, 'Creates villain profiles.', 'Create a profile for the villain')},
    {...textGeneratorProps('viral_content_predictor', 'Viral Content Predictor', TrendingUp, 'Predicts viral content.', 'Predict if the content will go viral')},
    {...textGeneratorProps('virtual_lab_technician', 'Virtual Lab Technician', Beaker, 'Acts as a virtual lab technician.', 'Act as a virtual lab tech for')},
    {...textGeneratorProps('visual_aid_suggestor', 'Visual Aid Suggestor', Image, 'Suggests visual aids.', 'Suggest a visual aid for')},
    {...textGeneratorProps('vocabulary_builder', 'Vocabulary Builder', BookOpen, 'Helps build vocabulary.', 'Help me build my vocabulary for')},
    {...textGeneratorProps('vocabulary_expansion_tool', 'Vocabulary Expansion Tool', ZoomIn, 'Expands vocabulary on topics.', 'Expand my vocabulary on')},
    {...textGeneratorProps('volume_converter', 'Volume Converter', Beaker, 'Converts volume units.', 'Convert the volume')},
    {...textGeneratorProps('volunteer_scheduling_planner', 'Volunteer Scheduling Planner', Calendar, 'Plans volunteer schedules.', 'Plan the schedule for volunteers')},
    {...textGeneratorProps('water_intake_tracker', 'Water Intake Tracker', Droplet, 'Tracks water intake.', 'Track my water intake')},
    {...textGeneratorProps('water_usage_efficiency_planner', 'Water Usage Efficiency Planner', Droplet, 'Plans water usage efficiency.', 'Plan water efficiency for')},
    {...textGeneratorProps('weather_impact_predictor', 'Weather Impact Predictor', Cloud, 'Predicts weather impact.', 'Predict the impact of the weather on')},
    {...textGeneratorProps('website_accessibility_analyzer', 'Website Accessibility Analyzer', Search, 'Analyzes website accessibility.', 'Analyze accessibility for the website')},
    {...textGeneratorProps('weight_converter', 'Weight Converter', Scale, 'Converts weight units.', 'Convert the weight')},
    {...textGeneratorProps('wifi_name_generator', 'WiFi Name Generator', Wifi, 'Generates WiFi names.', 'Generate a WiFi name')},
    {...textGeneratorProps('wildlife_pattern_tracker', 'Wildlife Pattern Tracker', PawPrint, 'Tracks wildlife patterns.', 'Track patterns for')},
    {...textGeneratorProps('worker_safety_risk_detector', 'Worker Safety Risk Detector', AlertTriangle, 'Detects worker safety risks.', 'Detect safety risks for workers')},
    {...textGeneratorProps('workload_balancer_ai', 'Workload Balancer AI', Users, 'Balances workloads.', 'Balance the workload for')},
    {...textGeneratorProps('workout_plan_generator', 'Workout Plan Generator', Dumbbell, 'Generates workout plans.', 'Generate a workout plan for')},
    {...textGeneratorProps('workplace_culture_fit_analyzer', 'Workplace Culture Fit Analyzer', Building2, 'Analyzes workplace culture fit.', 'Analyze culture fit for')},
    {...textGeneratorProps('yoga_routine_generator', 'Yoga Routine Generator', Dumbbell, 'Generates yoga routines.', 'Generate a yoga routine for')},
    
    // Text Utilities
    {...textUtilitiesProps('text_formatter', 'Text Formatter', TextIcon, 'Formats text.', 'Format the text')},
    {...textUtilitiesProps('word_counter', 'Word Counter', CaseSensitive, 'Counts words in text.', 'Count the words in')},
    {...textUtilitiesProps('title_case_converter', 'Title Case Converter', CaseUpper, 'Converts text to title case.', 'Convert to title case')},
    {...textUtilitiesProps('bullet_point_maker', 'Bullet Point Maker', ListOrdered, 'Converts text to bullet points.', 'Create bullet points from')},
    {...textUtilitiesProps('text_shortener', 'Text Shortener', WrapTextIcon, 'Shortens text.', 'Shorten the text')},
    {...textUtilitiesProps('email_subject_line_maker', 'Email Subject Line Maker', Mail, 'Creates email subject lines.', 'Create a subject line for')},
    {...textUtilitiesProps('readability_checker', 'Readability Checker', BookOpen, 'Checks text readability.', 'Check the readability of')},
    {...textUtilitiesProps('plagiarism_checker', 'Plagiarism Checker', Search, 'Checks for plagiarism.', 'Check for plagiarism in')},
    {...textGeneratorProps('translator', 'Translator', Languages, 'Translate text between multiple languages.', 'Translate the following:')},

];
