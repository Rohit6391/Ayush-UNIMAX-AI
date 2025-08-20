
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, Moon, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle as MessageCircleIcon, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer as ThermometerIcon, Cloud, Dumbbell, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown, Piano, MoonStar, Video as VideoIcon, CaseSensitive, Pilcrow, Type as TextIcon, Hash, Captions, ListOrdered, FileJson, MessageSquareHeart, PilcrowRight, ZoomIn, SearchSlash, WrapText, Palette as PaletteIcon, CaseUpper, List, Mailbox, Sigma, SpellCheck, Glasses, CircleOff, FilePlus2, ListTree, PenLine, WrapText as WrapTextIcon, BookHeart, Quote, Bell, Tag, ListChecks, ArrowBigDownDash, Crosshair, BarChartBig, Banknote, Calculator, PiggyBank, Receipt, DollarSign, PercentCircle, Goal, Coins, LandPlot, Ruler, Waypoints, Dices, RotateCcw, Lock, AtSign, Wifi, SquarePi, Droplet, Wrench, Gift, PartyPopper, Utensils, Martini, IceCream, Recycle, ChefHat, Dog, Cat, Rabbit, Tent, Mountain, Bird, Camera, Trash, Youtube, Table as TableIcon, Divide, SquareRadical, Superscript, Vote, Bike, ArrowRightLeft
} from 'lucide-react';
import { ChatInterface } from '@/components/modes/ChatInterface';
import { PhotoGenerator } from '@/components/modes/PhotoGenerator';
import { PhotoEditor } from '@/components/modes/PhotoEditor';
import { VideoMaker } from '@/components/modes/VideoMaker';
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
import { ClimateChangeExplainer } from '@/components/modes/ClimateChangeExplainer';
import { GreenProductSuggestor } from '@/components/modes/GreenProductSuggestor';

export type ModeId = 
  // Core
  | 'chat' | 'fun_chat' | 'voice_chat'
  // Creative & Media
  | 'photo_generator' | 'logo_maker' | 'design_assistant' | 'photo_editor' | 'video_maker' | 'video_generator' | 'animation_tool' | 'three_d_modeler' | 'video_editor' | 'sound_generator' | 'story_generator' | 'song_writer' | 'poem_generator' | 'character_generator' | 'dream_interpreter'
  // Development & Tech
  | 'code_generator' | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' | 'file_editor'
  // Business & Marketing
  | 'chart_maker' | 'market_research' | 'social_media_post_maker' | 'seo_tool' | 'ad_maker' | 'email_writer' | 'fact_checker' | 'brand_finder' | 'product_finder'
  | 'supply_chain_ai_planner' | 'inventory_auto_forecaster' | 'logistics_route_optimizer' | 'vendor_risk_scorer' | 'fraud_detection_engine' | 'transaction_pattern_finder' | 'credit_risk_analyzer' | 'investment_portfolio_optimizer' | 'financial_statement_summarizer'
  | 'text_rewriter_pro' | 'creative_content_expander' | 'conversational_flow_designer' | 'technical_document_generator' | 'storyboard_idea_expander' | 'digital_persona_creator' | 'smart_prompt_optimizer' | 'context_aware_summary_maker'
  | 'reading_comprehension_assistant' | 'knowledge_graph_builder' | 'smart_data_categorizer' | 'concept_map_generator' | 'interview_question_creator' | 'job_role_analyzer' | 'industry_report_writer' | 'product_feature_brainstormer'
  | 'meeting_notes_formatter' | 'text_complexity_adjuster' | 'idiom_and_metaphor_finder' | 'paragraph_flow_improver' | 'acronym_expander' | 'real_time_definition_finder' | 'smart_keyword_highlighter' | 'tone_and_mood_adjuster'
  | 'formality_level_converter' | 'brand_voice_enforcer' | 'multilingual_synonym_finder' | 'title_and_headline_optimizer' | 'long_form_report_writer' | 'smart_question_answer_engine' | 'policy_drafting_assistant' | 'legal_clause_suggestion_tool'
  | 'patent_abstract_generator' | 'contract_simplifier' | 'compliance_document_checker' | 'script_scene_expander' | 'interview_transcript_formatter' | 'fictional_world_builder' | 'conflict_plot_generator' | 'character_dialogue_improver'
  | 'multi_threaded_story_planner' | 'fiction_outline_maker' | 'comedy_script_punch_up_tool' | 'villain_backstory_creator' | 'theme_and_motif_analyzer' | 'story_arc_evaluator' | 'mythology_based_plot_creator' | 'sci_fi_concept_designer'
  | 'fantasy_lore_generator' | 'alternate_history_plot_writer' | 'scientific_hypothesis_suggestor' | 'experiment_design_planner' | 'research_summary_maker' | 'journal_abstract_creator' | 'methodology_drafting_tool' | 'lab_report_formatter'
  | 'academic_citation_builder' | 'equation_solver_pro' | 'graph_theory_visualizer' | 'statistical_pattern_finder' | 'data_anomaly_detector' | 'predictive_model_trainer' | 'simulation_scenario_builder' | 'ai_behavior_modeler'
  | 'ethics_risk_analyzer' | 'bias_detector_engine' | 'privacy_impact_forecaster' | 'algorithmic_explainability_tool' | 'dataset_integrity_checker' | 'feature_importance_analyzer' | 'forecast_accuracy_evaluator' | 'root_cause_analysis_bot'
  | 'data_quality_score_generator' | 'multi_variable_trend_predictor' | 'business_kpi_forecaster' | 'competitor_comparison_engine' | 'market_gap_identifier' | 'customer_segmentation_mapper' | 'price_elasticity_estimator' | 'churn_risk_predictor'
  | 'profit_margin_optimizer'
  // Education & Productivity
  | 'homework_helper' | 'study_material_analyzer' | 'ai_teacher' | 'games_knowledge' | 'yoga_fitness' | 'grammar_practice_creator' | 'sports_skills_trainer' | 'quiz_generator' | 'book_generator' | 'text_summarizer' | 'question_giver' | 'idea_generator' | 'recipe_creator' | 'travel_planner' | 'grammar_corrector'
  // Text Utilities
  | 'text_formatter' | 'spelling_checker' | 'word_counter' | 'hashtag_generator' | 'caption_maker' | 'daily_planner' | 'note_summarizer' | 'paragraph_expander' | 'question_generator' | 'keyword_finder' | 'text_cleaner' | 'text_tone_adjuster' | 'synonym_finder' | 'antonym_finder' | 'acronym_maker' | 'emoji_replacer' | 'headline_creator' | 'title_case_converter' | 'bullet_point_maker' | 'simple_translator' | 'text_shortener' | 'email_subject_line_maker' | 'readability_checker' | 'plagiarism_checker' | 'blog_idea_generator' | 'blog_outline_maker' | 'blog_intro_writer' | 'blog_conclusion_writer' | 'story_idea_generator'
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
    component: TextGenerator,
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
    {...textUtilitiesProps('readability_checker', 'Readability Checker', Glasses, 'Analyzes and scores text reading level.', 'Analyze the readability of the following text and provide a score (e.g., Flesch-Kincaid Grade Level)'), component: TextGenerator},
    {...textUtilitiesProps('plagiarism_checker', 'Plagiarism Checker', CircleOff, 'Detects copied or duplicate content.', 'Check the following text for potential plagiarism by searching for similar phrases online and report your findings.'), component: TextGenerator},
    textUtilitiesProps('blog_idea_generator', 'Blog Idea Generator', FilePlus2, 'Suggests topics for blogs.', 'Generate 5 blog post ideas based on the following topic'),
    textUtilitiesProps('blog_outline_maker', 'Blog Outline Maker', ListTree, 'Creates a structured outline for blogs.', 'Create a structured outline with sections and sub-points for a blog post about the following topic'),
    textUtilitiesProps('blog_intro_writer', 'Blog Intro Writer', PenLine, 'Writes engaging introductions for blogs.', 'Write an engaging introductory paragraph for a blog post about the following topic'),
    textUtilitiesProps('blog_conclusion_writer', 'Blog Conclusion Writer', WrapTextIcon, 'Generates a closing paragraph.', 'Write a strong concluding paragraph for a blog post about the following topic'),
    textUtilitiesProps('story_idea_generator', 'Story Idea Generator', BookHeart, 'Suggests ideas for short stories.', 'Generate 3 unique story ideas based on the following genre or theme'),

    // Business/Productivity Utilities
    { id: 'joke_finder', name: 'Joke Finder', icon: Smile, description: 'Finds or creates short jokes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A joke about computers' or 'A funny one-liner'",
        buttonText: "Find Joke",
        generatePrompt: (p: string) => `You are a comedian. Tell me a short, family-friendly joke based on the following topic. Topic: "${p}"`,
        resultTitle: "Joke"
    }},
    { id: 'rhyme_finder', name: 'Rhyme Finder', icon: Music, description: 'Finds rhyming words for poetry or songs.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'creative' or 'song'",
        buttonText: "Find Rhymes",
        generatePrompt: (p: string) => `You are a poet. Provide a list of 10 words that rhyme with the following word. Word: "${p}"`,
        resultTitle: "Rhymes"
    }},
    { id: 'idiom_explainer', name: 'Idiom Explainer', icon: BookOpen, description: 'Explains the meaning of idioms.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Bite the bullet' or 'Break a leg'",
        buttonText: "Explain Idiom",
        generatePrompt: (p: string) => `You are a linguist. Explain the meaning and origin of the following idiom. Idiom: "${p}"`,
        resultTitle: "Idiom Explanation"
    }},
    { id: 'fact_finder', name: 'Fact Finder', icon: Lightbulb, description: 'Finds quick factual answers from knowledge.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'the capital of Australia' or 'the speed of light'",
        buttonText: "Find Fact",
        generatePrompt: (p: string) => `You are a research assistant. Provide a quick, accurate, and concise factual answer to the following question. Question: "${p}"`,
        resultTitle: "Fact"
    }},
    { id: 'list_creator', name: 'List Creator', icon: ListOrdered, description: 'Turns ideas into organized numbered lists.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'grocery items: milk, bread, eggs' or 'project steps: design, develop, test, deploy'",
        buttonText: "Create List",
        generatePrompt: (p: string) => `You are an organizer. Turn the following ideas into an organized, numbered list. Ideas: "${p}"`,
        resultTitle: "Organized List"
    }},
    { id: 'quote_finder', name: 'Quote Finder', icon: Quote, description: 'Suggests quotes for a given topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'quotes about creativity' or 'inspirational quotes for students'",
        buttonText: "Find Quotes",
        generatePrompt: (p: string) => `You are a librarian. Suggest three inspiring or relevant quotes for the given topic. Include the author for each quote. Topic: "${p}"`,
        resultTitle: "Quotes"
    }},
    { id: 'motivational_message_maker', name: 'Motivational Message Maker', icon: Heart, description: 'Creates uplifting short messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'for a friend starting a new job' or 'for someone feeling discouraged'",
        buttonText: "Create Message",
        generatePrompt: (p: string) => `You are a motivational coach. Write a short, uplifting, and encouraging message for the following situation. Situation: "${p}"`,
        resultTitle: "Motivational Message"
    }},
    { id: 'reminder_maker', name: 'Reminder Maker', icon: Bell, description: 'Sets reminders for tasks.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Call mom tomorrow at 5 PM' or 'Submit the report by Friday'",
        buttonText: "Set Reminder",
        generatePrompt: (p: string) => `You are a personal assistant. Create a simple, clear reminder for the following task. Include the task, date, and time if provided. Task: "${p}"`,
        resultTitle: "Reminder"
    }},
    { id: 'calendar_event_filler', name: 'Calendar Event Filler', icon: Calendar, description: 'Generates event details for calendars.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Team meeting next Monday at 10 AM about Q3 results'",
        buttonText: "Generate Event Details",
        generatePrompt: (p: string) => `You are an event coordinator. Generate the details for a calendar event based on the following information. Include a title, date, time, and a brief description. Details: "${p}"`,
        resultTitle: "Calendar Event"
    }},
    { id: 'tagline_maker', name: 'Tagline Maker', icon: Tag, description: 'Creates catchy brand taglines.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'a new coffee brand that is organic and sustainable'",
        buttonText: "Create Tagline",
        generatePrompt: (p: string) => `You are a branding expert. Create five catchy and memorable taglines for a brand with the following description. Description: "${p}"`,
        resultTitle: "Brand Taglines"
    }},
    { id: 'brand_name_generator', name: 'Brand Name Generator', icon: Wand2, description: 'Suggests unique brand names.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A tech company specializing in AI' or 'a cozy bookstore'",
        buttonText: "Generate Names",
        generatePrompt: (p: string) => `You are a branding specialist. Suggest five unique and creative brand names for a company with the following description. Description: "${p}"`,
        resultTitle: "Brand Names"
    }},
    { id: 'slogan_maker', name: 'Slogan Maker', icon: Megaphone, description: 'Makes short marketing slogans.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'for a fast food restaurant' or 'for a new fitness app'",
        buttonText: "Make Slogan",
        generatePrompt: (p: string) => `You are a marketing copywriter. Create three short and impactful marketing slogans for the following product or business. Description: "${p}"`,
        resultTitle: "Marketing Slogans"
    }},
    { id: 'product_description_writer', name: 'Product Description Writer', icon: FileText, description: 'Writes sales descriptions.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A new wireless headphone with noise-cancelling features'",
        buttonText: "Write Description",
        generatePrompt: (p: string) => `You are a professional copywriter. Write a compelling and persuasive sales description for the following product. Highlight its key features and benefits. Product: "${p}"`,
        resultTitle: "Product Description"
    }},
    { id: 'ad_headline_creator', name: 'Ad Headline Creator', icon: TextIcon, description: 'Creates short ad headlines.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'for a 50% off sale on summer clothing'",
        buttonText: "Create Headlines",
        generatePrompt: (p: string) => `You are an advertising expert. Create five short, attention-grabbing ad headlines for the following promotion. Promotion: "${p}"`,
        resultTitle: "Ad Headlines"
    }},
    { id: 'poll_question_maker', name: 'Poll Question Maker', icon: ListChecks, description: 'Suggests questions for polls.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'favorite pizza topping' or 'best movie genre'",
        buttonText: "Make Question",
        generatePrompt: (p: string) => `You are a social media manager. Suggest a simple and engaging poll question with 2-4 options based on the following topic. Topic: "${p}"`,
        resultTitle: "Poll Question"
    }},
    { id: 'survey_question_generator', name: 'Survey Question Generator', icon: FileQuestion, description: 'Creates structured survey questions.', component: SurveyQuestionGenerator },
    { id: 'resume_bullet_point_maker', name: 'Resume Bullet Point Maker', icon: ArrowBigDownDash, description: 'Generates professional CV bullet points.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Managed a team of 5 engineers to launch a new app'",
        buttonText: "Generate Points",
        generatePrompt: (p: string) => `You are a professional resume writer. Rewrite the following experience into three professional, action-oriented bullet points suitable for a resume. Use strong action verbs and quantify achievements where possible. Experience: "${p}"`,
        resultTitle: "Resume Bullet Points"
    }},
    { id: 'job_title_suggestor', name: 'Job Title Suggestor', icon: Briefcase, description: 'Suggests suitable job titles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A person who manages social media and creates content'",
        buttonText: "Suggest Titles",
        generatePrompt: (p: string) => `You are a human resources specialist. Suggest five suitable and professional job titles for a role with the following responsibilities. Responsibilities: "${p}"`,
        resultTitle: "Job Title Suggestions"
    }},
    { id: 'skill_list_generator', name: 'Skill List Generator', icon: List, description: 'Lists skills for specific roles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'for a graphic designer' or 'for a project manager'",
        buttonText: "Generate Skills",
        generatePrompt: (p: string) => `You are a career coach. Create a list of 10 essential skills (both technical and soft skills) for the following job role. Role: "${p}"`,
        resultTitle: "Essential Skills"
    }},
    { id: 'cover_letter_writer', name: 'Cover Letter Writer', icon: Mail, description: 'Generates job cover letters.', component: CoverLetterWriter },
    { id: 'meeting_agenda_maker', name: 'Meeting Agenda Maker', icon: ListOrdered, description: 'Creates meeting agendas.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'a weekly team sync to discuss project progress'",
        buttonText: "Make Agenda",
        generatePrompt: (p: string) => `You are an executive assistant. Create a clear and structured agenda for the following meeting. Include topics, estimated time for each topic, and the person leading the discussion. Meeting: "${p}"`,
        resultTitle: "Meeting Agenda"
    }},
    { id: 'meeting_summary_writer', name: 'Meeting Summary Writer', icon: FileJson, description: 'Summarizes meeting notes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste your raw meeting notes here...",
        buttonText: "Write Summary",
        generatePrompt: (p: string) => `You are a project manager. Summarize the following meeting notes into a concise summary. Highlight the key decisions made and the main action items. Notes: "${p}"`,
        resultTitle: "Meeting Summary"
    }},
    { id: 'task_priority_sorter', name: 'Task Priority Sorter', icon: Filter, description: 'Organizes tasks by priority.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'write report, reply to emails, schedule meeting, buy groceries'",
        buttonText: "Sort Tasks",
        generatePrompt: (p: string) => `You are a productivity expert. Organize the following list of tasks by priority (High, Medium, Low) using a method like the Eisenhower Matrix (Urgent/Important). List: "${p}"`,
        resultTitle: "Prioritized Tasks"
    }},
    { id: 'decision_helper', name: 'Decision Helper', icon: Crosshair, description: 'Suggests best choices based on criteria.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Should I take the new job offer or stay at my current company?'",
        buttonText: "Help Decide",
        generatePrompt: (p: string) => `You are a logical advisor. Based on the following decision, suggest the best choice by analyzing the potential outcomes and criteria. Decision: "${p}"`,
        resultTitle: "Decision Analysis"
    }},
    { id: 'pro_con_list_maker', name: 'Pro/Con List Maker', icon: List, description: 'Lists pros and cons for a decision.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'buying a new car' or 'moving to a new city'",
        buttonText: "Make Pro/Con List",
        generatePrompt: (p: string) => `You are a critical thinker. Create a balanced list of pros and cons for the following decision. Decision: "${p}"`,
        resultTitle: "Pros and Cons"
    }},
    { id: 'swot_analyzer', name: 'SWOT Analyzer', icon: BarChartBig, description: 'Creates Strengths, Weaknesses, Opportunities, Threats.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'a small online bookstore' or 'a new social media app'",
        buttonText: "Analyze SWOT",
        generatePrompt: (p: string) => `You are a business strategist. Conduct a SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) for the following business or project. Business: "${p}"`,
        resultTitle: "SWOT Analysis"
    }},
    { id: 'business_idea_generator', name: 'Business Idea Generator', icon: Lightbulb, description: 'Suggests startup ideas.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'for a small town with a large tourist population' or 'related to sustainable technology'",
        buttonText: "Generate Ideas",
        generatePrompt: (p: string) => `You are an entrepreneur. Suggest three unique and viable startup ideas based on the following criteria. Criteria: "${p}"`,
        resultTitle: "Business Ideas"
    }},
    { id: 'startup_pitch_writer', name: 'Startup Pitch Writer', icon: Presentation, description: 'Writes short pitch presentations.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An app that connects local farmers with consumers'",
        buttonText: "Write Pitch",
        generatePrompt: (p: string) => `You are a venture capitalist. Write a short, compelling startup pitch (an "elevator pitch") for the following business idea. It should clearly state the problem, solution, and market opportunity. Idea: "${p}"`,
        resultTitle: "Startup Pitch"
    }},
    { id: 'cost_estimate_calculator', name: 'Cost Estimate Calculator', icon: Sigma, description: 'Estimates costs for projects.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'building a small website' or 'a 3-day marketing campaign'",
        buttonText: "Calculate Cost",
        generatePrompt: (p: string) => `You are a project manager. Provide a rough, text-based cost estimate for the following project. Break down the costs into major categories (e.g., labor, materials, marketing). Project: "${p}"`,
        resultTitle: "Cost Estimate"
    }},
    { id: 'roi_calculator', name: 'ROI Calculator', icon: BadgePercent, description: 'Calculates return on investment.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Investment: $1000, Return: $1500' or 'Marketing spend: $500, Revenue generated: $2000'",
        buttonText: "Calculate ROI",
        generatePrompt: (p: string) => `You are a financial analyst. Calculate the Return on Investment (ROI) based on the following figures and present the result as a percentage. Figures: "${p}"`,
        resultTitle: "Return on Investment (ROI)"
    }},

    // Financial & Unit Conversion Utilities
    { id: 'budget_planner', name: 'Budget Planner', icon: Banknote, description: 'Plans budgets for personal or business use.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'My monthly income is $3000, and I want to save 20%. Break down my expenses for rent, food, and transport.'",
        buttonText: "Generate Budget Plan",
        generatePrompt: (p: string) => `You are a financial advisor. Create a simple budget plan based on the following information. Break down the expenses into categories and show the remaining amount. Details: "${p}"`,
        resultTitle: "Budget Plan"
    }},
    { id: 'expense_tracker', name: 'Expense Tracker', icon: Receipt, description: 'Tracks daily expenses.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Track my expenses for this week: Coffee $5, Lunch $15, Groceries $60'",
        buttonText: "Track Expenses",
        generatePrompt: (p: string) => `You are an expense tracker. Summarize the following expenses and provide a total. Expenses: "${p}"`,
        resultTitle: "Expense Summary"
    }},
    { id: 'savings_goal_calculator', name: 'Savings Goal Calculator', icon: PiggyBank, description: 'Calculates savings targets.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'I want to save $5000 in 12 months. How much do I need to save per month?'",
        buttonText: "Calculate Savings",
        generatePrompt: (p: string) => `You are a financial calculator. Based on the following savings goal, calculate the required savings per period. Goal: "${p}"`,
        resultTitle: "Savings Goal Calculation"
    }},
    { id: 'loan_calculator', name: 'Loan Calculator', icon: Landmark, description: 'Calculates loan payments.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Loan of $10,000 at 5% interest over 3 years. What are the monthly payments?'",
        buttonText: "Calculate Loan",
        generatePrompt: (p: string) => `You are a loan calculator. Calculate the loan details (e.g., monthly payments, total interest) based on the following information. Show your work. Details: "${p}"`,
        resultTitle: "Loan Calculation"
    }},
    { id: 'interest_calculator', name: 'Interest Calculator', icon: PercentCircle, description: 'Computes interest on investments.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Calculate compound interest on $1000 at 7% annually for 5 years.'",
        buttonText: "Calculate Interest",
        generatePrompt: (p: string) => `You are a financial calculator. Compute the interest based on the following details and show the formula used. Details: "${p}"`,
        resultTitle: "Interest Calculation"
    }},
    { id: 'profit_calculator', name: 'Profit Calculator', icon: DollarSign, description: 'Calculates business profit.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Revenue is $5000 and costs are $2200. What is the profit and profit margin?'",
        buttonText: "Calculate Profit",
        generatePrompt: (p: string) => `You are a business calculator. Calculate the profit and profit margin from the following figures. Show your work. Figures: "${p}"`,
        resultTitle: "Profit Calculation"
    }},
    { id: 'break_even_calculator', name: 'Break-even Calculator', icon: Goal, description: 'Finds break-even point for sales.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Fixed costs are $1000, variable cost per unit is $5, and selling price is $15.'",
        buttonText: "Calculate Break-Even Point",
        generatePrompt: (p: string) => `You are a business analyst. Calculate the break-even point in units based on the following information. Show the formula. Information: "${p}"`,
        resultTitle: "Break-Even Analysis"
    }},
    { id: 'tax_calculator', name: 'Tax Calculator', icon: Calculator, description: 'Estimates taxes owed.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Estimate income tax on $50,000 with a 22% tax rate.'",
        buttonText: "Calculate Tax",
        generatePrompt: (p: string) => `You are a tax calculator. Provide a simple tax estimation based on the following figures. Note that this is a simplified estimate. Figures: "${p}"`,
        resultTitle: "Tax Estimate"
    }},
    { id: 'currency_converter', name: 'Currency Converter', icon: Coins, description: 'Converts between currencies.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 100 USD to EUR.'",
        buttonText: "Convert Currency",
        generatePrompt: (p: string) => `You are a currency converter. Using up-to-date exchange rates, convert the following currency. State the exchange rate you used. Conversion: "${p}"`,
        resultTitle: "Currency Conversion"
    }},
    { id: 'unit_converter', name: 'Unit Converter', icon: Ruler, description: 'Converts measurement units.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 10 miles to kilometers.'",
        buttonText: "Convert Units",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following conversion. Conversion: "${p}"`,
        resultTitle: "Unit Conversion"
    }},
    { id: 'weight_converter', name: 'Weight Converter', icon: Scale, description: 'Converts weight units.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 150 pounds to kilograms.'",
        buttonText: "Convert Weight",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following weight conversion. Conversion: "${p}"`,
        resultTitle: "Weight Conversion"
    }},
    { id: 'temperature_converter', name: 'Temperature Converter', icon: ThermometerIcon, description: 'Converts Celsius, Fahrenheit, Kelvin.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 30 degrees Celsius to Fahrenheit.'",
        buttonText: "Convert Temperature",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following temperature conversion. Conversion: "${p}"`,
        resultTitle: "Temperature Conversion"
    }},
    { id: 'length_converter', name: 'Length Converter', icon: Milestone, description: 'Converts length measurements.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 5 feet 10 inches to centimeters.'",
        buttonText: "Convert Length",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following length conversion. Conversion: "${p}"`,
        resultTitle: "Length Conversion"
    }},
    { id: 'area_converter', name: 'Area Converter', icon: LandPlot, description: 'Converts area measurements.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 2 square meters to square feet.'",
        buttonText: "Convert Area",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following area conversion. Conversion: "${p}"`,
        resultTitle: "Area Conversion"
    }},
    { id: 'volume_converter', name: 'Volume Converter', icon: Beaker, description: 'Converts volume measurements.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 2 liters to gallons.'",
        buttonText: "Convert Volume",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following volume conversion. Conversion: "${p}"`,
        resultTitle: "Volume Conversion"
    }},
    { id: 'speed_converter', name: 'Speed Converter', icon: Car, description: 'Converts between speed units.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Convert 60 mph to km/h.'",
        buttonText: "Convert Speed",
        generatePrompt: (p: string) => `You are a unit converter. Perform the following speed conversion. Conversion: "${p}"`,
        resultTitle: "Speed Conversion"
    }},
    { id: 'time_zone_converter', name: 'Time Zone Converter', icon: Globe, description: 'Converts time between locations.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'What is 3 PM PST in EST?'",
        buttonText: "Convert Time Zone",
        generatePrompt: (p: string) => `You are a time zone converter. Perform the following time zone conversion. Conversion: "${p}"`,
        resultTitle: "Time Zone Conversion"
    }},
    
    // Time & Randomization Utilities
    { id: 'age_calculator', name: 'Age Calculator', icon: User, description: 'Calculates age from date of birth.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Date of birth: October 26, 1985'",
        buttonText: "Calculate Age",
        generatePrompt: (p: string) => `You are a calculator. Calculate the current age based on the following date of birth. DOB: "${p}"`,
        resultTitle: "Age Calculation"
    }},
    { id: 'date_difference_finder', name: 'Date Difference Finder', icon: Calendar, description: 'Finds days between two dates.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'How many days between January 1, 2023 and December 31, 2023?'",
        buttonText: "Calculate Difference",
        generatePrompt: (p: string) => `You are a date calculator. Find the difference in days between the two dates provided. Dates: "${p}"`,
        resultTitle: "Date Difference"
    }},
    { id: 'countdown_timer_maker', name: 'Countdown Timer Maker', icon: Clock, description: 'Creates countdown timers.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Create a 5 minute countdown timer.'",
        buttonText: "Create Countdown",
        generatePrompt: (p: string) => `You are a timer tool. Describe how a user could set up a countdown timer based on their request. You cannot create a real timer. Request: "${p}"`,
        resultTitle: "Countdown Timer Plan"
    }},
    { id: 'stopwatch_tool', name: 'Stopwatch Tool', icon: Clock, description: 'Digital stopwatch.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Start a stopwatch.'",
        buttonText: "Start Stopwatch",
        generatePrompt: (p: string) => `You are a stopwatch tool. Respond by confirming that a stopwatch has started. You cannot create a real stopwatch. Request: "${p}"`,
        resultTitle: "Stopwatch"
    }},
    { id: 'random_number_picker', name: 'Random Number Picker', icon: Hash, description: 'Picks a random number.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Pick a random number between 1 and 100.'",
        buttonText: "Pick Random Number",
        generatePrompt: (p: string) => `You are a random number generator. Pick a random number based on the following range. Range: "${p}"`,
        resultTitle: "Random Number"
    }},
    { id: 'random_name_picker', name: 'Random Name Picker', icon: Users, description: 'Picks random names from a list.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Alice, Bob, Charlie, Diana'",
        buttonText: "Pick Random Name",
        generatePrompt: (p: string) => `You are a random name picker. Pick one random name from the following list. List: "${p}"`,
        resultTitle: "Random Name"
    }},
    { id: 'dice_roller', name: 'Dice Roller', icon: Dices, description: 'Simulates dice rolling.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Roll two 6-sided dice.'",
        buttonText: "Roll Dice",
        generatePrompt: (p: string) => `You are a dice rolling simulator. Simulate the following dice roll and provide the result. Roll: "${p}"`,
        resultTitle: "Dice Roll Result"
    }},
    { id: 'coin_flip', name: 'Coin Flip', icon: CircleDollarSign, description: 'Flips a virtual coin.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Flip a coin.'",
        buttonText: "Flip Coin",
        generatePrompt: (p: string) => `You are a coin flip simulator. Simulate a coin flip and provide the result (Heads or Tails).`,
        resultTitle: "Coin Flip Result"
    }},
    
    // Naming & Security Utilities
    { id: 'password_generator', name: 'Password Generator', icon: Lock, description: 'Creates secure passwords.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Generate a secure 16-character password with numbers and symbols.'",
        buttonText: "Generate Password",
        generatePrompt: (p: string) => `You are a password generator. Create a secure, random password based on the following criteria. Criteria: "${p}"`,
        resultTitle: "Generated Password"
    }},
    { id: 'username_generator', name: 'Username Generator', icon: AtSign, description: 'Suggests usernames.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Generate usernames for a gamer who likes dragons.'",
        buttonText: "Generate Usernames",
        generatePrompt: (p: string) => `You are a username generator. Suggest 5 creative usernames based on the following theme. Theme: "${p}"`,
        resultTitle: "Username Suggestions"
    }},
    { id: 'nickname_maker', name: 'Nickname Maker', icon: Smile, description: 'Generates fun nicknames.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Generate a cool nickname for someone named Alex who is a fast runner.'",
        buttonText: "Make Nickname",
        generatePrompt: (p: string) => `You are a nickname generator. Create 5 fun nicknames based on the following description. Description: "${p}"`,
        resultTitle: "Generated Nicknames"
    }},
    { id: 'wifi_name_generator', name: 'Wi-Fi Name Generator', icon: Wifi, description: 'Suggests Wi-Fi SSIDs.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Suggest funny Wi-Fi names.'",
        buttonText: "Generate Wi-Fi Names",
        generatePrompt: (p: string) => `You are a Wi-Fi name generator. Suggest 5 clever and funny Wi-Fi SSIDs. Request: "${p}"`,
        resultTitle: "Wi-Fi Name Suggestions"
    }},
    { id: 'domain_name_generator', name: 'Domain Name Generator', icon: Globe, description: 'Suggests website domains.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A domain name for a pet-sitting business.'",
        buttonText: "Generate Domain Names",
        generatePrompt: (p: string) => `You are a domain name generator. Suggest 5 available-sounding domain names (using .com, .io, .ai) for the following business idea. Idea: "${p}"`,
        resultTitle: "Domain Name Suggestions"
    }},
    
    // Education & Creative Writing Utilities
    { id: 'app_name_generator', name: 'App Name Generator', icon: AppWindow, description: 'Suggests mobile app names.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A fitness tracking app for runners'",
        buttonText: "Generate App Names",
        generatePrompt: (p: string) => `You are a branding expert. Suggest 10 creative and available-sounding names for a mobile app with the following description: "${p}"`,
        resultTitle: "App Name Ideas"
    }},
    { id: 'game_name_generator', name: 'Game Name Generator', icon: Gamepad2, description: 'Suggests game titles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A fantasy role-playing game about dragons'",
        buttonText: "Generate Game Names",
        generatePrompt: (p: string) => `You are a creative game designer. Suggest 10 unique and cool-sounding names for a video game with the following description: "${p}"`,
        resultTitle: "Game Name Ideas"
    }},
    { id: 'playlist_name_generator', name: 'Playlist Name Generator', icon: Music, description: 'Suggests music playlist names.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A playlist for a late-night study session'",
        buttonText: "Generate Playlist Names",
        generatePrompt: (p: string) => `You are a DJ and music curator. Suggest 10 creative and catchy names for a music playlist with the following theme: "${p}"`,
        resultTitle: "Playlist Name Ideas"
    }},
    { id: 'event_name_generator', name: 'Event Name Generator', icon: Calendar, description: 'Suggests names for events.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A summer music festival focused on indie bands'",
        buttonText: "Generate Event Names",
        generatePrompt: (p: string) => `You are a professional event planner. Suggest 10 creative and catchy names for an event with the following description: "${p}"`,
        resultTitle: "Event Name Ideas"
    }},
    { id: 'book_title_generator', name: 'Book Title Generator', icon: BookOpen, description: 'Suggests book titles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A sci-fi novel about AI taking over the world'",
        buttonText: "Generate Book Titles",
        generatePrompt: (p: string) => `You are a professional author and editor. Suggest 10 compelling and original titles for a book with the following premise: "${p}"`,
        resultTitle: "Book Title Ideas"
    }},
    { id: 'chapter_title_generator', name: 'Chapter Title Generator', icon: ListOrdered, description: 'Suggests chapter names.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The first chapter of a mystery novel where the detective finds the first clue'",
        buttonText: "Generate Chapter Titles",
        generatePrompt: (p: string) => `You are a professional editor. Suggest 5 creative and fitting titles for a chapter with the following summary: "${p}"`,
        resultTitle: "Chapter Title Ideas"
    }},
    { id: 'course_title_generator', name: 'Course Title Generator', icon: GraduationCap, description: 'Suggests online course titles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An online course about digital marketing for beginners'",
        buttonText: "Generate Course Titles",
        generatePrompt: (p: string) => `You are an instructional designer. Suggest 10 engaging and descriptive titles for an online course with the following topic: "${p}"`,
        resultTitle: "Course Title Ideas"
    }},
    { id: 'lesson_plan_maker', name: 'Lesson Plan Maker', icon: ListChecks, description: 'Creates teaching lesson plans.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 45-minute lesson plan for teaching photosynthesis to middle schoolers'",
        buttonText: "Create Lesson Plan",
        generatePrompt: (p: string) => `You are an experienced teacher. Create a detailed lesson plan based on the following request. Include learning objectives, materials, activities, and assessment methods. Request: "${p}"`,
        resultTitle: "Lesson Plan"
    }},
    { id: 'exam_question_generator', name: 'Exam Question Generator', icon: FileQuestion, description: 'Creates test questions.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Create 5 multiple-choice questions about the solar system'",
        buttonText: "Generate Questions",
        generatePrompt: (p: string) => `You are a teacher. Create a set of exam questions based on the user's request. Include a variety of question types (e.g., multiple-choice, short answer) and provide an answer key. Request: "${p}"`,
        resultTitle: "Exam Questions"
    }},
    { id: 'flashcard_maker', name: 'Flashcard Maker', icon: BookCopy, description: 'Generates flashcards for study.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a list of terms and definitions, or a topic like 'French vocabulary for beginners'",
        buttonText: "Make Flashcards",
        generatePrompt: (p: string) => `You are a study assistant. Create a set of flashcards from the following text or topic. Each flashcard should have a 'Term' and a 'Definition'. Format the output clearly. Request: "${p}"`,
        resultTitle: "Generated Flashcards"
    }},
    { id: 'study_guide_maker', name: 'Study Guide Maker', icon: BookHeart, description: 'Creates condensed study notes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Create a study guide for a final exam on American history'",
        buttonText: "Make Guide",
        generatePrompt: (p: string) => `You are a tutor. Create a condensed, easy-to-read study guide for the following topic. Organize it with clear headings, key terms, and bullet points. Topic: "${p}"`,
        resultTitle: "Generated Study Guide"
    }},
    { id: 'concept_explainer', name: 'Concept Explainer', icon: Lightbulb, description: 'Explains difficult concepts simply.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Explain quantum entanglement in simple terms'",
        buttonText: "Explain Concept",
        generatePrompt: (p: string) => `You are a master teacher. Explain the following concept in a clear, concise, and easy-to-understand way, using analogies and simple examples. Concept: "${p}"`,
        resultTitle: "Concept Explanation"
    }},
    { id: 'historical_fact_finder', name: 'Historical Fact Finder', icon: Landmark, description: 'Gives quick historical facts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Interesting facts about Ancient Egypt'",
        buttonText: "Find Facts",
        generatePrompt: (p: string) => `You are a historian. Provide 5 interesting and verifiable historical facts about the following topic: "${p}"`,
        resultTitle: "Historical Facts"
    }},
    { id: 'science_fact_finder', name: 'Science Fact Finder', icon: Beaker, description: 'Shares quick science facts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Interesting facts about black holes'",
        buttonText: "Find Facts",
        generatePrompt: (p: string) => `You are a scientist. Provide 5 interesting and verifiable scientific facts about the following topic: "${p}"`,
        resultTitle: "Science Facts"
    }},
    { id: 'math_problem_solver', name: 'Math Problem Solver', icon: Sigma, description: 'Solves math problems step-by-step.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Solve for x: 3x - 7 = 11'",
        buttonText: "Solve Problem",
        generatePrompt: (p: string) => `You are a math tutor. Solve the following math problem, showing each step of your work clearly. Problem: "${p}"`,
        resultTitle: "Math Problem Solution"
    }},
    { id: 'equation_generator', name: 'Equation Generator', icon: SquarePi, description: 'Creates math practice equations.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Generate 5 simple algebra problems for a 7th grader'",
        buttonText: "Generate Equations",
        generatePrompt: (p: string) => `You are a math teacher. Create a set of practice math equations based on the following request. Include the solutions separately. Request: "${p}"`,
        resultTitle: "Generated Equations"
    }},
    { id: 'geometry_shape_drawer', name: 'Geometry Shape Drawer', icon: Ruler, description: 'Generates diagrams for shapes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Draw an isosceles triangle with labels'",
        buttonText: "Generate Diagram",
        generatePrompt: (p: string) => `You are a geometry tool. Create a text-based ASCII art diagram for the following shape. Include labels if requested. Shape: "${p}"`,
        resultTitle: "Shape Diagram"
    }},
    { id: 'unit_conversion_practice_tool', name: 'Unit Conversion Practice Tool', icon: Ruler, description: 'Makes unit conversion exercises.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Practice problems for converting inches to centimeters'",
        buttonText: "Create Practice",
        generatePrompt: (p: string) => `You are a math tutor. Create 5 practice problems for unit conversion based on the following request. Include an answer key. Request: "${p}"`,
        resultTitle: "Unit Conversion Practice"
    }},
    { id: 'language_practice_partner', name: 'Language Practice Partner', icon: Languages, description: 'Simulates basic conversation practice.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Practice ordering food in a French cafe'",
        buttonText: "Start Practice",
        generatePrompt: (p: string) => `You are a language practice partner. Simulate a basic conversation for the following scenario. You will play the part of the other person, and wait for the user to respond. Scenario: "${p}" Start with your first line.`,
        resultTitle: "Conversation Practice"
    }},
    { id: 'vocabulary_builder', name: 'Vocabulary Builder', icon: BookCheck, description: 'Suggests new words to learn.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Advanced vocabulary for business writing'",
        buttonText: "Build Vocabulary",
        generatePrompt: (p: string) => `You are a lexicographer. Provide a list of 10 useful vocabulary words related to the following topic. For each word, include its definition and an example sentence. Topic: "${p}"`,
        resultTitle: "Vocabulary List"
    }},
    { id: 'spelling_quiz_maker', name: 'Spelling Quiz Maker', icon: SpellCheck, description: 'Generates spelling quizzes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Create a spelling quiz with commonly misspelled words for adults'",
        buttonText: "Make Quiz",
        generatePrompt: (p: string) => `You are an English teacher. Create a 10-word spelling quiz based on the following request. Provide the list of words and then a separate answer key. Request: "${p}"`,
        resultTitle: "Spelling Quiz"
    }},
    { id: 'grammar_quiz_maker', name: 'Grammar Quiz Maker', icon: BookCheck, description: 'Creates grammar practice questions.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Create a quiz on verb tenses'",
        buttonText: "Make Quiz",
        generatePrompt: (p: string) => `You are a language teacher. Create a 5-question grammar quiz on the following topic. Include multiple-choice questions and an answer key. Topic: "${p}"`,
        resultTitle: "Grammar Quiz"
    }},
    { id: 'reading_comprehension_tester', name: 'Reading Comprehension Tester', icon: BookOpen, description: 'Generates comprehension passages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A short passage about the Amazon rainforest for a 6th grade reading level'",
        buttonText: "Generate Test",
        generatePrompt: (p: string) => `You are an educator. Write a short reading comprehension passage on the given topic, followed by 3 questions (with an answer key) to test understanding. Topic: "${p}"`,
        resultTitle: "Reading Comprehension Test"
    }},
    { id: 'essay_topic_generator', name: 'Essay Topic Generator', icon: Feather, description: 'Suggests essay writing topics.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Suggest essay topics for a high school history class on World War II'",
        buttonText: "Generate Essay Topics",
        generatePrompt: (p: string) => `You are a teacher. Suggest 5 thought-provoking essay topics based on the following subject or theme: "${p}"`,
        resultTitle: "Essay Topics"
    }},
    { id: 'script_dialogue_writer', name: 'Script Dialogue Writer', icon: MessageSquare, description: 'Creates short dialogues.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A short, tense dialogue between a detective and a suspect'",
        buttonText: "Write Dialogue",
        generatePrompt: (p: string) => `You are a screenwriter. Write a short piece of dialogue between two characters based on the following scenario. Use standard script format. Scenario: "${p}"`,
        resultTitle: "Generated Dialogue"
    }},
    { id: 'monologue_writer', name: 'Monologue Writer', icon: UserSquare, description: 'Generates monologues for scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A villain explaining their evil plan'",
        buttonText: "Write Monologue",
        generatePrompt: (p: string) => `You are a playwright. Write a compelling and character-driven monologue based on the following theme or character description: "${p}"`,
        resultTitle: "Generated Monologue"
    }},
    { id: 'scene_description_writer', name: 'Scene Description Writer', icon: Clapperboard, description: 'Writes scene details for stories.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Describe a bustling medieval marketplace at noon'",
        buttonText: "Write Scene",
        generatePrompt: (p: string) => `You are a novelist. Write a vivid and sensory-rich description of the following scene, focusing on what the character sees, hears, smells, and feels. Scene: "${p}"`,
        resultTitle: "Scene Description"
    }},
    
    // Latest Batch
    { id: 'character_backstory_maker', name: 'Character Backstory Maker', icon: UserSquare, description: 'Creates fictional backstories.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A rogue who grew up on the streets' or 'An old wizard who has seen too much war'",
        buttonText: "Create Backstory",
        generatePrompt: (p: string) => `You are a creative writer. Create a compelling backstory for a fictional character with the following description. Include their childhood, a defining moment, and their primary motivation. Description: "${p}"`,
        resultTitle: "Character Backstory"
    }},
    { id: 'plot_twist_generator', name: 'Plot Twist Generator', icon: GitBranch, description: 'Suggests plot twists.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A detective story where the main character is hunting a killer'",
        buttonText: "Generate Plot Twist",
        generatePrompt: (p: string) => `You are a master storyteller. Suggest three unexpected and shocking plot twists for a story with the following premise. Premise: "${p}"`,
        resultTitle: "Plot Twists"
    }},
    { id: 'conflict_idea_maker', name: 'Conflict Idea Maker', icon: Swords, description: 'Suggests story conflicts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A sci-fi story set on Mars' or 'A romance between two rival chefs'",
        buttonText: "Suggest Conflict",
        generatePrompt: (p: string) => `You are a creative writer. Suggest three compelling conflicts (internal or external) for a story with the following theme or setting. Theme: "${p}"`,
        resultTitle: "Conflict Ideas"
    }},
    { id: 'ending_suggestor', name: 'Ending Suggestor', icon: Milestone, description: 'Suggests story endings.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Describe your story's premise. e.g., 'A group of friends gets lost in a haunted forest...'",
        buttonText: "Suggest Endings",
        generatePrompt: (p: string) => `You are a storyteller. Suggest three different possible endings (a happy, a tragic, and a twist ending) for a story with the following premise. Premise: "${p}"`,
        resultTitle: "Story Ending Ideas"
    }},
    { id: 'book_summary_maker', name: 'Book Summary Maker', icon: BookOpen, description: 'Summarizes books.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter the title and author of a book, or paste a summary of its plot.",
        buttonText: "Summarize Book",
        generatePrompt: (p: string) => `You are a literary analyst. Provide a concise summary of the following book's plot, including the main characters and the central conflict. Book: "${p}"`,
        resultTitle: "Book Summary"
    }},
    { id: 'movie_summary_maker', name: 'Movie Summary Maker', icon: Film, description: 'Summarizes films.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter the title of a movie.",
        buttonText: "Summarize Movie",
        generatePrompt: (p: string) => `You are a film critic. Provide a concise summary of the following movie's plot, including the main characters and the central conflict. Movie: "${p}"`,
        resultTitle: "Movie Summary"
    }},
    { id: 'episode_recap_writer', name: 'Episode Recap Writer', icon: Clapperboard, description: 'Creates TV show recaps.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The latest episode of a popular fantasy TV show where a major character was revealed to be a traitor.'",
        buttonText: "Write Recap",
        generatePrompt: (p: string) => `You are a TV critic. Write an engaging recap of a TV show episode based on the following description. Summarize the key events and end with a cliffhanger or question for the next episode. Episode: "${p}"`,
        resultTitle: "Episode Recap"
    }},
    { id: 'recipe_writer', name: 'Recipe Writer', icon: CookingPot, description: 'Writes cooking recipes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A simple recipe for chocolate chip cookies'",
        buttonText: "Write Recipe",
        generatePrompt: (p: string) => `You are a chef. Write a clear, step-by-step recipe for the following dish. Include an ingredient list with measurements, and instructions for preparation and cooking. Dish: "${p}"`,
        resultTitle: "Recipe"
    }},
    { id: 'meal_plan_generator', name: 'Meal Plan Generator', icon: Calendar, description: 'Creates weekly meal plans.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 3-day healthy meal plan for someone who is vegetarian.'",
        buttonText: "Generate Plan",
        generatePrompt: (p: string) => `You are a nutritionist. Create a simple and balanced meal plan for one day based on the following request. Include suggestions for breakfast, lunch, and dinner. Request: "${p}"`,
        resultTitle: "Meal Plan"
    }},
    { id: 'grocery_list_maker', name: 'Grocery List Maker', icon: ListChecks, description: 'Generates shopping lists.', component: TextGenerator, componentProps: {
        promptPlaceholder: "List the meals you want to make, e.g., 'Spaghetti bolognese, chicken salad, and oatmeal for breakfast.'",
        buttonText: "Make List",
        generatePrompt: (p: string) => `You are a personal assistant. Create an organized grocery list based on the ingredients needed for the following meals. Categorize the items (e.g., Produce, Dairy, Meat). Meals: "${p}"`,
        resultTitle: "Grocery List"
    }},
    { id: 'calorie_counter', name: 'Calorie Counter', icon: Sigma, description: 'Estimates calories in meals.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A chicken breast, a cup of rice, and a side of broccoli.'",
        buttonText: "Count Calories",
        generatePrompt: (p: string) => `You are a dietitian. Provide a rough estimate of the total calorie count for the following meal. Include a disclaimer that this is an estimate. Meal: "${p}"`,
        resultTitle: "Calorie Estimate"
    }},
    { id: 'workout_plan_generator', name: 'Workout Plan Generator', icon: Dumbbell, description: 'Creates fitness workout plans.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 3-day workout plan for a beginner focused on full-body strength.'",
        buttonText: "Generate Workout",
        generatePrompt: (p: string) => `You are a personal trainer. Create a simple workout plan based on the user's request. Include exercises, sets, and reps for each day. Request: "${p}"`,
        resultTitle: "Workout Plan"
    }},
    { id: 'yoga_routine_generator', name: 'Yoga Routine Generator', icon: Leaf, description: 'Suggests yoga sequences.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 15-minute morning yoga routine to wake up the body.'",
        buttonText: "Generate Routine",
        generatePrompt: (p: string) => `You are a yoga instructor. Create a sequence of yoga poses for the following routine. List the poses in order and suggest a duration for each. Routine: "${p}"`,
        resultTitle: "Yoga Routine"
    }},
    { id: 'meditation_guide', name: 'Meditation Guide', icon: BrainCog, description: 'Gives meditation instructions.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 5-minute guided meditation for stress relief.'",
        buttonText: "Get Guide",
        generatePrompt: (p: string) => `You are a meditation coach. Write a short, guided meditation script based on the user's request. Focus on calming language and simple instructions. Request: "${p}"`,
        resultTitle: "Meditation Guide"
    }},
    { id: 'breathing_exercise_guide', name: 'Breathing Exercise Guide', icon: Wind, description: 'Creates breathing patterns.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A breathing exercise to help with anxiety.'",
        buttonText: "Get Exercise",
        generatePrompt: (p: string) => `You are a wellness coach. Describe a simple breathing exercise for the user's need. Provide clear, step-by-step instructions. Request: "${p}"`,
        resultTitle: "Breathing Exercise"
    }},
    { id: 'habit_tracker', name: 'Habit Tracker', icon: CheckSquare, description: 'Helps track daily habits.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Help me track my goal of reading 10 pages every day.'",
        buttonText: "Set Up Tracker",
        generatePrompt: (p: string) => `You are a productivity coach. Create a simple text-based habit tracker plan for the following goal. Suggest how to track it daily and offer a word of encouragement. Goal: "${p}"`,
        resultTitle: "Habit Plan"
    }},
    { id: 'sleep_routine_planner', name: 'Sleep Routine Planner', icon: Moon, description: 'Suggests sleep improvement plans.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'I want to create a better evening routine to improve my sleep.'",
        buttonText: "Plan Routine",
        generatePrompt: (p: string) => `You are a sleep consultant. Suggest a simple, relaxing evening routine to help improve sleep quality based on the user's request. Include 3-5 steps. Request: "${p}"`,
        resultTitle: "Sleep Routine"
    }},
    { id: 'water_intake_tracker', name: 'Water Intake Tracker', icon: Droplet, description: 'Monitors water consumption.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'I need to drink 8 glasses of water a day.'",
        buttonText: "Set Up Tracker",
        generatePrompt: (p: string) => `You are a health assistant. Create a simple text-based plan to help the user track their water intake goal. Suggest reminders or a simple checklist format. Goal: "${p}"`,
        resultTitle: "Water Intake Plan"
    }},
    { id: 'mood_journal_prompter', name: 'Mood Journal Prompter', icon: BookHeart, description: 'Suggests prompts for mood tracking.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'I'm feeling happy today' or 'I feel a bit anxious.'",
        buttonText: "Get Prompt",
        generatePrompt: (p: string) => `You are a journaling guide. Based on the user's stated mood, provide three thoughtful journal prompts to help them explore their feelings. Mood: "${p}"`,
        resultTitle: "Journal Prompts"
    }},
    { id: 'self_care_checklist_maker', name: 'Self-Care Checklist Maker', icon: ListChecks, description: 'Lists self-care activities.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A simple checklist for a relaxing Sunday.'",
        buttonText: "Make Checklist",
        generatePrompt: (p: string) => `You are a wellness advocate. Create a simple checklist of 5-7 self-care activities based on the user's request. Request: "${p}"`,
        resultTitle: "Self-Care Checklist"
    }},
    { id: 'mind_map_creator', name: 'Mind Map Creator', icon: GitBranch, description: 'Generates simple mind maps.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The main themes of the book I'm writing.'",
        buttonText: "Create Mind Map",
        generatePrompt: (p: string) => `You are a brainstorming assistant. Create a simple, text-based mind map for the following central idea. Use indentation to show branches and sub-points. Idea: "${p}"`,
        resultTitle: "Mind Map"
    }},
    { id: 'goal_tracker', name: 'Goal Tracker', icon: Goal, description: 'Tracks progress toward goals.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'My goal is to learn how to code in Python.'",
        buttonText: "Set Up Goal",
        generatePrompt: (p: string) => `You are a success coach. Break down the following user goal into 3-5 smaller, actionable steps. Goal: "${p}"`,
        resultTitle: "Actionable Steps"
    }},
    { id: 'motivation_quote_sender', name: 'Motivation Quote Sender', icon: Quote, description: 'Sends daily motivational quotes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'I need some motivation for my workout.'",
        buttonText: "Get Quote",
        generatePrompt: (p: string) => `You are a motivational speaker. Provide one powerful and relevant motivational quote for the following situation. Include the author. Situation: "${p}"`,
        resultTitle: "Motivational Quote"
    }},
    { id: 'challenge_idea_generator', name: 'Challenge Idea Generator', icon: Trophy, description: 'Suggests 7-day or 30-day challenges.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 7-day challenge for learning a new skill.'",
        buttonText: "Generate Challenge",
        generatePrompt: (p: string) => `You are a creative planner. Suggest a fun and engaging challenge based on the user's idea. Outline a simple plan or daily tasks for the challenge. Idea: "${p}"`,
        resultTitle: "Challenge Idea"
    }},
    { id: 'diy_project_idea_maker', name: 'DIY Project Idea Maker', icon: Wrench, description: 'Suggests craft or home projects.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Easy DIY projects for a small apartment balcony.'",
        buttonText: "Get Ideas",
        generatePrompt: (p: string) => `You are a crafting expert. Suggest three creative and simple DIY project ideas based on the user's request. For each idea, list the basic materials needed. Request: "${p}"`,
        resultTitle: "DIY Project Ideas"
    }},
    { id: 'gift_idea_generator', name: 'Gift Idea Generator', icon: Gift, description: 'Suggests gifts for occasions.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A birthday gift for a friend who loves hiking.'",
        buttonText: "Get Gift Ideas",
        generatePrompt: (p: string) => `You are a personal shopper. Suggest three thoughtful gift ideas based on the following description. Description: "${p}"`,
        resultTitle: "Gift Ideas"
    }},
    { id: 'party_theme_generator', name: 'Party Theme Generator', icon: PartyPopper, description: 'Suggests party themes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A 30th birthday party in the summer.'",
        buttonText: "Suggest Themes",
        generatePrompt: (p: string) => `You are an event planner. Suggest three creative and fun party themes for the following occasion. Occasion: "${p}"`,
        resultTitle: "Party Themes"
    }},
    { id: 'event_schedule_maker', name: 'Event Schedule Maker', icon: Calendar, description: 'Creates event timelines.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A schedule for a one-day marketing conference.'",
        buttonText: "Make Schedule",
        generatePrompt: (p: string) => `You are an event coordinator. Create a simple, timed schedule or timeline for the following event. Include key activities and breaks. Event: "${p}"`,
        resultTitle: "Event Schedule"
    }},
    { id: 'invitation_message_writer', name: 'Invitation Message Writer', icon: Mail, description: 'Writes short invites.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An invitation for a casual backyard BBQ.'",
        buttonText: "Write Message",
        generatePrompt: (p: string) => `You are an event host. Write a short, friendly, and informative invitation message for the following event. Include the essential details (what, where, when). Event: "${p}"`,
        resultTitle: "Invitation Message"
    }},

    // Newest Batch
    { id: 'toast_speech_writer', name: 'Toast Speech Writer', icon: Presentation, description: 'Creates event toast speeches.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A toast for a wedding' or 'A toast for a retirement party.'",
        buttonText: "Write Toast",
        generatePrompt: (p: string) => `You are an event planner and speechwriter. Write a short, heartfelt, and appropriate toast for the following occasion. Occasion: "${p}"`,
        resultTitle: "Generated Toast"
    }},
    { id: 'eulogy_writer', name: 'Eulogy Writer', icon: BookHeart, description: 'Writes memorial speeches.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A eulogy for a beloved grandparent who was kind and funny.'",
        buttonText: "Write Eulogy",
        generatePrompt: (p: string) => `You are a compassionate writer. Write a thoughtful and respectful eulogy based on the following description. Focus on celebrating the person's life and positive qualities. Description: "${p}"`,
        resultTitle: "Generated Eulogy"
    }},
    { id: 'thank_you_note_maker', name: 'Thank-You Note Maker', icon: Mail, description: 'Creates thank-you messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A thank-you note for a birthday gift' or 'Thanks for a job interview.'",
        buttonText: "Make Note",
        generatePrompt: (p: string) => `You are a thoughtful writer. Create a short, sincere thank-you note for the following occasion. Occasion: "${p}"`,
        resultTitle: "Thank-You Note"
    }},
    { id: 'apology_letter_writer', name: 'Apology Letter Writer', icon: Mailbox, description: 'Writes polite apologies.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An apology for being late to a meeting.'",
        buttonText: "Write Apology",
        generatePrompt: (p: string) => `You are a professional communicator. Write a polite and sincere apology for the following situation. The apology should take responsibility and be constructive. Situation: "${p}"`,
        resultTitle: "Apology Letter"
    }},
    { id: 'love_letter_writer', name: 'Love Letter Writer', icon: Heart, description: 'Writes romantic letters.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A short love letter to my partner of 5 years.'",
        buttonText: "Write Love Letter",
        generatePrompt: (p: string) => `You are a romantic poet. Write a short, heartfelt, and romantic letter based on the following prompt. Prompt: "${p}"`,
        resultTitle: "Love Letter"
    }},
    { id: 'compliment_generator', name: 'Compliment Generator', icon: Smile, description: 'Creates nice compliments.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A compliment for a friend who is a great listener.'",
        buttonText: "Generate Compliment",
        generatePrompt: (p: string) => `You are a positive and encouraging friend. Generate 3 unique and sincere compliments based on the following description. Description: "${p}"`,
        resultTitle: "Generated Compliments"
    }},
    { id: 'roast_joke_generator', name: 'Roast Joke Generator', icon: MicVocal, description: 'Creates light-hearted roast jokes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Roast a friend who is always late.'",
        buttonText: "Generate Roast Joke",
        generatePrompt: (p: string) => `You are a witty comedian. Create a short, light-hearted roast joke (not mean-spirited) about the following topic. Topic: "${p}"`,
        resultTitle: "Roast Joke"
    }},
    { id: 'greeting_card_message_maker', name: 'Greeting Card Message Maker', icon: Gift, description: 'Suggests card messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A message for a get-well-soon card.'",
        buttonText: "Make Message",
        generatePrompt: (p: string) => `You are a greeting card writer. Suggest a short, appropriate message for the following type of greeting card. Card type: "${p}"`,
        resultTitle: "Greeting Card Message"
    }},
    { id: 'holiday_wish_maker', name: 'Holiday Wish Maker', icon: PartyPopper, description: 'Creates festive wishes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A cheerful Christmas wish for a family member.'",
        buttonText: "Make Wish",
        generatePrompt: (p: string) => `You are a festive writer. Create a warm and cheerful holiday wish for the following occasion. Occasion: "${p}"`,
        resultTitle: "Holiday Wish"
    }},
    { id: 'birthday_wish_maker', name: 'Birthday Wish Maker', icon: Gift, description: 'Writes birthday messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A funny birthday wish for a best friend.'",
        buttonText: "Make Wish",
        generatePrompt: (p: string) => `You are a friendly writer. Create a short and sweet birthday wish based on the following description. Description: "${p}"`,
        resultTitle: "Birthday Wish"
    }},
    { id: 'anniversary_wish_maker', name: 'Anniversary Wish Maker', icon: Heart, description: 'Suggests anniversary greetings.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A romantic anniversary wish for a partner.'",
        buttonText: "Make Wish",
        generatePrompt: (p: string) => `You are a romantic writer. Suggest a heartfelt anniversary wish for the following prompt. Prompt: "${p}"`,
        resultTitle: "Anniversary Wish"
    }},
    { id: 'condolence_message_writer', name: 'Condolence Message Writer', icon: BookHeart, description: 'Writes sympathy messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A message for someone who has lost a pet.'",
        buttonText: "Write Message",
        generatePrompt: (p: string) => `You are a compassionate writer. Write a short, sincere message of condolence for the following situation. Situation: "${p}"`,
        resultTitle: "Condolence Message"
    }},
    { id: 'congratulations_message_writer', name: 'Congratulations Message Writer', icon: Trophy, description: 'Suggests congratulatory messages.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Congratulations on a new job' or 'on a graduation.'",
        buttonText: "Write Message",
        generatePrompt: (p: string) => `You are an enthusiastic writer. Write a short and cheerful message of congratulations for the following achievement. Achievement: "${p}"`,
        resultTitle: "Congratulations Message"
    }},
    { id: 'short_story_writer', name: 'Short Story Writer', icon: BookOpen, description: 'Writes short fiction.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A short story about a talking cat.'",
        buttonText: "Write Story",
        generatePrompt: (p: string) => `You are a creative writer. Write a complete short story (a few paragraphs) with a beginning, middle, and end, based on the following prompt. Prompt: "${p}"`,
        resultTitle: "Short Story"
    }},
    { id: 'fairy_tale_creator', name: 'Fairy Tale Creator', icon: Crown, description: 'Writes fairy tale-style stories.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A fairy tale about a princess who saves herself.'",
        buttonText: "Create Fairy Tale",
        generatePrompt: (p: string) => `You are a teller of classic fairy tales. Write a short fairy tale in a traditional style, including classic elements like magic and a clear moral. Prompt: "${p}"`,
        resultTitle: "Fairy Tale"
    }},
    { id: 'fable_writer', name: 'Fable Writer', icon: PawPrint, description: 'Creates moral stories.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A fable about a proud lion and a clever mouse.'",
        buttonText: "Write Fable",
        generatePrompt: (p: string) => `You are a writer of fables. Create a short fable with animal characters and a clear moral at the end, based on the following idea. Idea: "${p}"`,
        resultTitle: "Generated Fable"
    }},
    { id: 'horror_story_maker', name: 'Horror Story Maker', icon: VenetianMask, description: 'Writes short horror tales.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A story about a mysterious noise in an old house.'",
        buttonText: "Make Horror Story",
        generatePrompt: (p: string) => `You are a horror writer. Write a short, scary story designed to build suspense and create a sense of dread. Prompt: "${p}"`,
        resultTitle: "Horror Story"
    }},
    { id: 'mystery_story_generator', name: 'Mystery Story Generator', icon: Search, description: 'Creates mystery plot ideas.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A stolen diamond at a high-society party.'",
        buttonText: "Generate Mystery",
        generatePrompt: (p: string) => `You are a mystery writer. Create a short plot outline for a mystery story, including the crime, the main detective, key clues, and a surprising twist. Prompt: "${p}"`,
        resultTitle: "Mystery Plot"
    }},
    { id: 'fantasy_story_builder', name: 'Fantasy Story Builder', icon: Telescope, description: 'Suggests fantasy story elements.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A young farmhand discovers they have magic powers.'",
        buttonText: "Build Fantasy Story",
        generatePrompt: (p: string) => `You are a fantasy author. Suggest key elements for a fantasy story based on the prompt, including a magic system, a unique world feature, and a potential quest. Prompt: "${p}"`,
        resultTitle: "Fantasy Story Elements"
    }},
    { id: 'sci_fi_story_maker', name: 'Sci-Fi Story Maker', icon: Telescope, description: 'Creates science fiction plots.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A story about the first contact with an alien species.'",
        buttonText: "Make Sci-Fi Story",
        generatePrompt: (p: string) => `You are a sci-fi writer. Create a short story plot outline based on the prompt, including the main technology, the central conflict, and the resolution. Prompt: "${p}"`,
        resultTitle: "Sci-Fi Story Plot"
    }},
    { id: 'detective_case_idea_maker', name: 'Detective Case Idea Maker', icon: Search, description: 'Suggests crime investigation plots.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A locked-room mystery in a modern setting.'",
        buttonText: "Make Case Idea",
        generatePrompt: (p: string) => `You are a crime fiction author. Suggest a compelling case for a detective story, including the victim, the main suspects, and a clever clue. Prompt: "${p}"`,
        resultTitle: "Detective Case Idea"
    }},
    { id: 'superhero_story_creator', name: 'Superhero Story Creator', icon: ShieldCheck, description: 'Builds superhero story ideas.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A hero with the power to control plants.'",
        buttonText: "Create Superhero Story",
        generatePrompt: (p: string) => `You are a comic book writer. Suggest a story idea for a superhero, including a cool superhero name, a formidable villain, and a central conflict. Prompt: "${p}"`,
        resultTitle: "Superhero Story Idea"
    }},
    { id: 'villain_profile_maker', name: 'Villain Profile Maker', icon: UserSquare, description: 'Creates fictional villain profiles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An eco-terrorist who can control the weather.'",
        buttonText: "Make Villain Profile",
        generatePrompt: (p: string) => `You are a character designer. Create a profile for a compelling villain, including their name, powers, motivations, and a key weakness. Prompt: "${p}"`,
        resultTitle: "Villain Profile"
    }},
    { id: 'side_character_generator', name: 'Side Character Generator', icon: Users, description: 'Suggests minor character ideas.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The wise old mentor for a fantasy hero.'",
        buttonText: "Generate Side Character",
        generatePrompt: (p: string) => `You are a writer. Suggest an interesting side character for a story, including their role, a unique personality trait, and how they help or hinder the protagonist. Prompt: "${p}"`,
        resultTitle: "Side Character Idea"
    }},
    { id: 'dialogue_improver', name: 'Dialogue Improver', icon: MessageSquareHeart, description: 'Enhances existing dialogues.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Hello.' 'Hi.' 'How are you?' 'Fine.'",
        buttonText: "Improve Dialogue",
        generatePrompt: (p: string) => `You are a script doctor. Rewrite the following dull dialogue to be more engaging and reveal character. Original dialogue: "${p}"`,
        resultTitle: "Improved Dialogue"
    }},
    { id: 'scene_pacing_adjuster', name: 'Scene Pacing Adjuster', icon: Clock, description: 'Speeds up or slows down story pacing.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A chase scene that feels too slow.'",
        buttonText: "Adjust Pacing",
        generatePrompt: (p: string) => `You are a film editor. Suggest ways to adjust the pacing of the following scene description. For speeding up, suggest shorter sentences and more action. For slowing down, suggest more detail and introspection. Scene: "${p}"`,
        resultTitle: "Pacing Suggestions"
    }},
    { id: 'narrative_style_changer', name: 'Narrative Style Changer', icon: PenLine, description: 'Changes writing style.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Rewrite this from first-person to third-person: I walked down the street.'",
        buttonText: "Change Style",
        generatePrompt: (p: string) => `You are an expert editor. Rewrite the following text in the specified narrative style, while keeping the core events the same. Text and Style: "${p}"`,
        resultTitle: "Rewritten Narrative"
    }},
    { id: 'perspective_rewriter', name: 'Perspective Rewriter', icon: Users, description: 'Changes text from 1st to 3rd person.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Rewrite this from first-person to third-person: I walked down the street.'",
        buttonText: "Rewrite Perspective",
        generatePrompt: (p: string) => `You are a writing instructor. Rewrite the following text, changing its narrative perspective as requested (e.g., from first-person to third-person). Request: "${p}"`,
        resultTitle: "Rewritten Perspective"
    }},
    { id: 'article_rewriter', name: 'Article Rewriter', icon: RefreshCw, description: 'Rephrases articles.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a short article or paragraph to rephrase.",
        buttonText: "Rewrite Article",
        generatePrompt: (p: string) => `You are an expert content creator. Rephrase the following article to make it unique, while preserving the original information and key points. Article: "${p}"`,
        resultTitle: "Rewritten Article"
    }},
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

    
