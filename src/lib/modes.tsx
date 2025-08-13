
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, Moon, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle as MessageCircleIcon, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer, Cloud, Dumbbell, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown, Piano, MoonStar, Video as VideoIcon
} from 'lucide-react';
import { ChatInterface } from '@/components/modes/ChatInterface';
import { PhotoGenerator } from '@/components/modes/PhotoGenerator';
import { PhotoEditor } from '@/components/modes/PhotoEditor';
import { VideoMaker } from '@/components/modes/VideoMaker';
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
import { CashFlowProjectionTool } from '@/components/modes/CashFlowProjectionTool';
import { ExpenseCategorizationAi } from '@/components/modes/ExpenseCategorizationAi';
import { BudgetRecommendationEngine } from '@/components/modes/BudgetRecommendationEngine';
import { PayrollComplianceChecker } from '@/components/modes/PayrollComplianceChecker';
import { PolicyImpactForecaster } from '@/components/modes/PolicyImpactForecaster';
import { GrantProposalGenerator } from '@/components/modes/GrantProposalGenerator';
import { NonprofitDonorOutreachAi } from '@/components/modes/NonprofitDonorOutreachAi';
import { FundraisingCampaignOptimizer } from '@/components/modes/FundraisingCampaignOptimizer';
import { VolunteerSchedulingPlanner } from '@/components/modes/VolunteerSchedulingPlanner';
import { EventAgendaCreator } from '@/components/modes/EventAgendaCreator';
import { GuestSpeakerFinderAi } from '@/components/modes/GuestSpeakerFinderAi';
import { RegistrationDataAnalyzer } from '@/components/modes/RegistrationDataAnalyzer';
import { AudienceEngagementPredictor } from '@/components/modes/AudienceEngagementPredictor';
import { PublicOpinionTrendAnalyzer } from '@/components/modes/PublicOpinionTrendAnalyzer';
import { CivicPolicySimulationTool } from '@/components/modes/CivicPolicySimulationTool';
import { LocalIssueReportGenerator } from '@/components/modes/LocalIssueReportGenerator';
import { EnvironmentalImpactCalculator } from '@/components/modes/EnvironmentalImpactCalculator';
import { ClimateDataVisualizer } from '@/components/modes/ClimateDataVisualizer';
import { CarbonFootprintForecaster } from '@/components/modes/CarbonFootprintForecaster';
import { WildlifePatternTracker } from '@/components/modes/WildlifePatternTracker';
import { HabitatRestorationPlanner } from '@/components/modes/HabitatRestorationPlanner';
import { OceanCurrentPredictor } from '@/components/modes/OceanCurrentPredictor';
import { RenewableEnergyYieldEstimator } from '@/components/modes/RenewableEnergyYieldEstimator';
import { DisasterResponseSimulator } from '@/components/modes/DisasterResponseSimulator';
import { EmergencyEvacuationPlanner } from '@/components/modes/EmergencyEvacuationPlanner';
import { HealthRiskAssessmentAi } from '@/components/modes/HealthRiskAssessmentAi';
import { SymptomPatternAnalyzer } from '@/components/modes/SymptomPatternAnalyzer';
import { DiseaseOutbreakPredictor } from '@/components/modes/DiseaseOutbreakPredictor';
import { NutritionalPlanGenerator } from '@/components/modes/NutritionalPlanGenerator';
import { ExerciseRoutineOptimizer } from '@/components/modes/ExerciseRoutineOptimizer';
import { SleepCycleTrackerAi } from '@/components/modes/SleepCycleTrackerAi';
import { MentalWellnessSuggestionBot } from '@/components/modes/MentalWellnessSuggestionBot';
import { TherapySessionPlanner } from '@/components/modes/TherapySessionPlanner';
import { MedicalLiteratureSummarizer } from '@/components/modes/MedicalLiteratureSummarizer';
import { ClinicalTrialDataAnalyzer } from '@/components/modes/ClinicalTrialDataAnalyzer';
import { GeneticPatternDetector } from '@/components/modes/GeneticPatternDetector';
import { ProteinStructurePredictor } from '@/components/modes/ProteinStructurePredictor';
import { DrugInteractionChecker } from '@/components/modes/DrugInteractionChecker';
import { SurgicalProcedurePlanner } from '@/components/modes/SurgicalProcedurePlanner';
import { PatientRecoveryForecaster } from '@/components/modes/PatientRecoveryForecaster';
import { VirtualLabTechnician } from '@/components/modes/VirtualLabTechnician';
import { RadiologyImageAnalyzer } from '@/components/modes/RadiologyImageAnalyzer';
import { PathologyReportSummarizer } from '@/components/modes/PathologyReportSummarizer';
import { DiagnosticSupportAssistant } from '@/components/modes/DiagnosticSupportAssistant';
import { RemotePatientMonitoringAi } from '@/components/modes/RemotePatientMonitoringAi';
import { AppointmentSchedulingOptimizer } from '@/components/modes/AppointmentSchedulingOptimizer';
import { HospitalResourceForecaster } from '@/components/modes/HospitalResourceForecaster';
import { MedicalInventoryTracker } from '@/components/modes/MedicalInventoryTracker';
import { TreatmentPlanPersonalizer } from '@/components/modes/TreatmentPlanPersonalizer';
import { SymptomToSpecialistRecommender } from '@/components/modes/SymptomToSpecialistRecommender';
import { ManufacturingWorkflowOptimizer } from '@/components/modes/ManufacturingWorkflowOptimizer';
import { QualityControlInspectorAi } from '@/components/modes/QualityControlInspectorAi';
import { MachineFailurePredictor } from '@/components/modes/MachineFailurePredictor';
import { ProductionSchedulingPlanner } from '@/components/modes/ProductionSchedulingPlanner';
import { SupplyShortageForecaster } from '@/components/modes/SupplyShortageForecaster';
import { AssemblyLineSpeedOptimizer } from '@/components/modes/AssemblyLineSpeedOptimizer';
import { WorkerSafetyRiskDetector } from '@/components/modes/WorkerSafetyRiskDetector';
import { EnergyUsageAnalyzer } from '@/components/modes/EnergyUsageAnalyzer';
import { MaintenanceCostEstimator } from '@/components/modes/MaintenanceCostEstimator';
import { SmartFactoryProcessDesigner } from '@/components/modes/SmartFactoryProcessDesigner';
import { RoboticsTaskPlanner } from '@/components/modes/RoboticsTaskPlanner';
import { CadDesignSuggestionTool } from '@/components/modes/CadDesignSuggestionTool';
import { MaterialStressTesterAi } from '@/components/modes/MaterialStressTesterAi';
import { ProductLifecycleForecaster } from '@/components/modes/ProductLifecycleForecaster';
import { PartsInventoryBalancer } from '@/components/modes/PartsInventoryBalancer';
import { BlueprintErrorDetector } from '@/components/modes/BlueprintErrorDetector';
import { PrototypeDesignOptimizer } from '@/components/modes/PrototypeDesignOptimizer';
import { DesignToManufactureConverter } from '@/components/modes/DesignToManufactureConverter';
import { BuildingEnergyEfficiencyAnalyzer } from '@/components/modes/BuildingEnergyEfficiencyAnalyzer';
import { UrbanTrafficFlowPredictor } from '@/components/modes/UrbanTrafficFlowPredictor';
import { RoadRepairPriorityPlanner } from '@/components/modes/RoadRepairPriorityPlanner';
import { ParkingDemandForecaster } from '@/components/modes/ParkingDemandForecaster';
import { PublicTransitRouteOptimizer } from '@/components/modes/PublicTransitRouteOptimizer';
import { ConstructionScheduleForecaster } from '@/components/modes/ConstructionScheduleForecaster';
import { UtilityConsumptionTracker } from '@/components/modes/UtilityConsumptionTracker';
import { SmartLightingPlanner } from '@/components/modes/SmartLightingPlanner';
import { RenewableGridLoadBalancer } from '@/components/modes/RenewableGridLoadBalancer';
import { FloodRiskPredictor } from '@/components/modes/FloodRiskPredictor';
import { WaterUsageEfficiencyPlanner } from '@/components/modes/WaterUsageEfficiencyPlanner';
import { SewageNetworkMonitoringAi } from '@/components/modes/SewageNetworkMonitoringAi';
import { CropYieldForecaster } from '@/components/modes/CropYieldForecaster';
import { SoilNutrientAnalyzer } from '@/components/modes/SoilNutrientAnalyzer';
import { PestInfestationPredictor } from '@/components/modes/PestInfestationPredictor';
import { IrrigationOptimizationPlanner } from '@/components/modes/IrrigationOptimizationPlanner';
import { FarmEquipmentUsageTracker } from '@/components/modes/FarmEquipmentUsageTracker';
import { AgriculturalMarketPriceForecaster } from '@/components/modes/AgriculturalMarketPriceForecaster';
import { GreenhouseClimateController } from '@/components/modes/GreenhouseClimateController';
import { LivestockHealthMonitor } from '@/components/modes/LivestockHealthMonitor';
import { SeedSelectionOptimizer } from '@/components/modes/SeedSelectionOptimizer';
import { WeatherImpactPredictor } from '@/components/modes/WeatherImpactPredictor';
import { SportsPerformanceAnalyzer } from '@/components/modes/SportsPerformanceAnalyzer';
import { AthleteTrainingOptimizer } from '@/components/modes/AthleteTrainingOptimizer';
import { GameStrategySimulator } from '@/components/modes/GameStrategySimulator';
import { PlayerInjuryRiskDetector } from '@/components/modes/PlayerInjuryRiskDetector';
import { MatchOutcomePredictor } from '@/components/modes/MatchOutcomePredictor';
import { TournamentScheduleOptimizer } from '@/components/modes/TournamentScheduleOptimizer';
import { FanEngagementTracker } from '@/components/modes/FanEngagementTracker';
import { SponsorshipRoiAnalyzer } from '@/components/modes/SponsorshipRoiAnalyzer';
import { MerchandiseSalesForecaster } from '@/components/modes/MerchandiseSalesForecaster';
import { TicketPriceOptimizer } from '@/components/modes/TicketPriceOptimizer';
import { StreamingAudiencePredictor } from '@/components/modes/StreamingAudiencePredictor';
import { SocialSentimentAnalyzer } from '@/components/modes/SocialSentimentAnalyzer';
import { TrendForecastEngine } from '@/components/modes/TrendForecastEngine';
import { BrandLoyaltyScorer } from '@/components/modes/BrandLoyaltyScorer';
import { CustomerReviewSummarizer } from '@/components/modes/CustomerReviewSummarizer';
import { InfluenceNetworkMapper } from '@/components/modes/InfluenceNetworkMapper';
import { ViralContentPredictor } from '@/components/modes/ViralContentPredictor';
import { AdCampaignPerformanceForecaster } from '@/components/modes/AdCampaignPerformanceForecaster';
import { ConversionFunnelOptimizer } from '@/components/modes/ConversionFunnelOptimizer';
import { LeadScoringAi } from '@/components/modes/LeadScoringAi';
import { SalesForecastingAssistant } from '@/components/modes/SalesForecastingAssistant';
import { UpsellRecommendationEngine } from '@/components/modes/UpsellRecommendationEngine';
import { CrossSellPatternFinder } from '@/components/modes/CrossSellPatternFinder';
import { ProductReturnRiskDetector } from '@/components/modes/ProductReturnRiskDetector';
import { LoyaltyRewardPlanner } from '@/components/modes/LoyaltyRewardPlanner';
import { CustomerRetentionStrategyMaker } from '@/components/modes/CustomerRetentionStrategyMaker';
import { StoreLayoutOptimizationAi } from '@/components/modes/StoreLayoutOptimizationAi';
import { ShelfStockingSuggestionTool } from '@/components/modes/ShelfStockingSuggestionTool';
import { PriceMatchDetector } from '@/components/modes/PriceMatchDetector';
import { SeasonalDemandForecaster } from '@/components/modes/SeasonalDemandForecaster';
import { FashionTrendPredictor } from '@/components/modes/FashionTrendPredictor';
import { OutfitCombinationRecommender } from '@/components/modes/OutfitCombinationRecommender';
import { FabricQualityAnalyzer } from '@/components/modes/FabricQualityAnalyzer';
import { ProductionBatchOptimizer } from '@/components/modes/ProductionBatchOptimizer';
import { ColorPaletteForecaster } from '@/components/modes/ColorPaletteForecaster';
import { TextilePatternDesignerAi } from '@/components/modes/TextilePatternDesignerAi';
import { JewelryDesignSuggestor } from '@/components/modes/JewelryDesignSuggestor';
import { ShoeSizeFitPredictor } from '@/components/modes/ShoeSizeFitPredictor';
import { AccessoryStyleMatcher } from '@/components/modes/AccessoryStyleMatcher';
import { LuxuryGoodsMarketForecaster } from '@/components/modes/LuxuryGoodsMarketForecaster';
import { MusicMoodClassifier } from '@/components/modes/MusicMoodClassifier';
import { SongTempoAnalyzer } from '@/components/modes/SongTempoAnalyzer';
import { InstrumentArrangementSuggestor } from '@/components/modes/InstrumentArrangementSuggestor';
import { ChordProgressionGenerator } from '@/components/modes/ChordProgressionGenerator';
import { MixingMasteringAdvisor } from '@/components/modes/MixingMasteringAdvisor';
import { SoundQualityEnhancer } from '@/components/modes/SoundQualityEnhancer';
import { AudioSceneIdentifier } from '@/components/modes/AudioSceneIdentifier';
import { NoiseRemovalOptimizer } from '@/components/modes/NoiseRemovalOptimizer';
import { SpeechEmotionAnalyzer } from '@/components/modes/SpeechEmotionAnalyzer';
import { PodcastTopicPlanner } from '@/components/modes/PodcastTopicPlanner';
import { RadioAdEffectivenessTracker } from '@/components/modes/RadioAdEffectivenessTracker';
import { FilmScriptCoverageAi } from '@/components/modes/FilmScriptCoverageAi';
import { SceneLocationSuggestor } from '@/components/modes/SceneLocationSuggestor';
import { CastingFitAnalyzer } from '@/components/modes/CastingFitAnalyzer';
import { ShotSequencePlanner } from '@/components/modes/ShotSequencePlanner';
import { LightingSetupOptimizer } from '@/components/modes/LightingSetupOptimizer';
import { SpecialEffectsCostEstimator } from '@/components/modes/SpecialEffectsCostEstimator';
import { PostProductionWorkflowPlanner } from '@/components/modes/PostProductionWorkflowPlanner';
import { TrailerImpactPredictor } from '@/components/modes/TrailerImpactPredictor';
import { AudienceReviewSentimentTracker } from '@/components/modes/AudienceReviewSentimentTracker';
import { BoardGameRuleOptimizer } from '@/components/modes/BoardGameRuleOptimizer';
import { PuzzleDifficultyBalancer } from '@/components/modes/PuzzleDifficultyBalancer';
import { LevelDesignAi } from '@/components/modes/LevelDesignAi';
import { GameLoreExpansionTool } from '@/components/modes/GameLoreExpansionTool';
import { EnemyBehaviorModeler } from '@/components/modes/EnemyBehaviorModeler';
import { LootDropProbabilityBalancer } from '@/components/modes/LootDropProbabilityBalancer';
import { PlayerMotivationAnalyzer } from '@/components/modes/PlayerMotivationAnalyzer';
import { MultiplayerMatchmakingOptimizer } from '@/components/modes/MultiplayerMatchmakingOptimizer';
import { EsportsStrategyAdvisor } from '@/components/modes/EsportsStrategyAdvisor';
import { SpeedrunPathOptimizer } from '@/components/modes/SpeedrunPathOptimizer';
import { EducationSyllabusPlanner } from '@/components/modes/EducationSyllabusPlanner';
import { ExamPatternAnalyzer } from '@/components/modes/ExamPatternAnalyzer';
import { LearningPacePersonalizer } from '@/components/modes/LearningPacePersonalizer';
import { CurriculumGapIdentifier } from '@/components/modes/CurriculumGapIdentifier';
import { TeachingMethodSuggestor } from '@/components/modes/TeachingMethodSuggestor';
import { ClassroomEngagementTracker } from '@/components/modes/ClassroomEngagementTracker';
import { AssignmentFeedbackGenerator } from '@/components/modes/AssignmentFeedbackGenerator';
import { QuestionDifficultyCalibrator } from '@/components/modes/QuestionDifficultyCalibrator';
import { LessonPlanEnhancer } from '@/components/modes/LessonPlanEnhancer';
import { GradingConsistencyChecker } from '@/components/modes/GradingConsistencyChecker';
import { TutoringSessionScheduler } from '@/components/modes/TutoringSessionScheduler';
import { LearningStyleAnalyzer } from '@/components/modes/LearningStyleAnalyzer';
import { PeerReviewSummarizer } from '@/components/modes/PeerReviewSummarizer';
import { AcademicProgressForecaster } from '@/components/modes/AcademicProgressForecaster';
import { OnlineCourseEnrollmentPredictor } from '@/components/modes/OnlineCourseEnrollmentPredictor';
import { QuizQuestionGenerator } from '@/components/modes/QuizQuestionGenerator';
import { FlashcardAutoCreator } from '@/components/modes/FlashcardAutoCreator';
import { ConceptReinforcementPlanner } from '@/components/modes/ConceptReinforcementPlanner';
import { StudyGroupMatchingAi } from '@/components/modes/StudyGroupMatchingAi';
import { SkillGapForecaster } from '@/components/modes/SkillGapForecaster';
import { LanguageLearningPathOptimizer } from '@/components/modes/LanguageLearningPathOptimizer';
import { PronunciationFeedbackAi } from '@/components/modes/PronunciationFeedbackAi';
import { VocabularyExpansionTool } from '@/components/modes/VocabularyExpansionTool';
import { GrammarPracticeCreator } from '@/components/modes/GrammarPracticeCreator';
import { IdiomUsageCoach } from '@/components/modes/IdiomUsageCoach';
import { CulturalContextAdvisor } from '@/components/modes/CulturalContextAdvisor';
import { DebateStrategyPlanner } from '@/components/modes/DebateStrategyPlanner';
import { SpeechTimingAnalyzer } from '@/components/modes/SpeechTimingAnalyzer';
import { PresentationFlowOptimizer } from '@/components/modes/PresentationFlowOptimizer';
import { VisualAidSuggestor } from '@/components/modes/VisualAidSuggestor';
import { SlideDeckConsistencyChecker } from '@/components/modes/SlideDeckConsistencyChecker';
import { AudienceEngagementTimer } from '@/components/modes/AudienceEngagementTimer';
import { ProfessionalBioGenerator } from '@/components/modes/ProfessionalBioGenerator';
import { ResumeKeywordOptimizer } from '@/components/modes/ResumeKeywordOptimizer';
import { CoverLetterPersonalizer } from '@/components/modes/CoverLetterPersonalizer';
import { JobInterviewSimulationAi } from '@/components/modes/JobInterviewSimulationAi';
import { CareerPathPredictor } from '@/components/modes/CareerPathPredictor';
import { SkillEndorsementAnalyzer } from '@/components/modes/SkillEndorsementAnalyzer';
import { SalaryBenchmarkingTool } from '@/components/modes/SalaryBenchmarkingTool';
import { WorkplaceCultureFitAnalyzer } from '@/components/modes/WorkplaceCultureFitAnalyzer';
import { EmployeeFeedbackSummarizer } from '@/components/modes/EmployeeFeedbackSummarizer';
import { TeamDynamicsPredictor } from '@/components/modes/TeamDynamicsPredictor';
import { LeadershipStyleAnalyzer } from '@/components/modes/LeadershipStyleAnalyzer';
import { MeetingAgendaOptimizer } from '@/components/modes/MeetingAgendaOptimizer';
import { TaskPriorityPlanner } from '@/components/modes/TaskPriorityPlanner';
import { WorkloadBalancerAi } from '@/components/modes/WorkloadBalancerAi';
import { DeadlineRiskDetector } from '@/components/modes/DeadlineRiskDetector';
import { ResourceAllocationForecaster } from '@/components/modes/ResourceAllocationForecaster';
import { CrossDepartmentCommunicationTracker } from '@/components/modes/CrossDepartmentCommunicationTracker';
import { TrainingNeedsIdentifier } from '@/components/modes/TrainingNeedsIdentifier';
import { OnboardingExperiencePlanner } from '@/components/modes/OnboardingExperiencePlanner';
import { KnowledgeTransferOptimizer } from '@/components/modes/KnowledgeTransferOptimizer';
import { CompanyPolicyClarityChecker } from '@/components/modes/CompanyPolicyClarityChecker';
import { InternalSurveyAnalyzer } from '@/components/modes/InternalSurveyAnalyzer';
import { InnovationIdeaRanker } from '@/components/modes/InnovationIdeaRanker';
import { PatentPortfolioAnalyzer } from '@/components/modes/PatentPortfolioAnalyzer';
import { RdProjectFeasibilityChecker } from '@/components/modes/RdProjectFeasibilityChecker';
import { ProductPrototypeFeedbackAi } from '@/components/modes/ProductPrototypeFeedbackAi';
import { MarketEntryRiskForecaster } from '@/components/modes/MarketEntryRiskForecaster';
import { BrandNameIdeaGenerator } from '@/components/modes/BrandNameIdeaGenerator';
import { LogoColorImpactAnalyzer } from '@/components/modes/LogoColorImpactAnalyzer';
import { PackagingDesignFeedbackAi } from '@/components/modes/PackagingDesignFeedbackAi';
import { ShelfPlacementImpactPredictor } from '@/components/modes/ShelfPlacementImpactPredictor';
import { StoreTrafficFlowAnalyzer } from '@/components/modes/StoreTrafficFlowAnalyzer';
import { CheckoutTimeOptimizer } from '@/components/modes/CheckoutTimeOptimizer';
import { PaymentFraudProbabilityChecker } from '@/components/modes/PaymentFraudProbabilityChecker';
import { EcommerceUpsellStrategyPlanner } from '@/components/modes/EcommerceUpsellStrategyPlanner';
import { SubscriptionRenewalPredictor } from '@/components/modes/SubscriptionRenewalPredictor';
import { CustomerServiceResponseAnalyzer } from '@/components/modes/CustomerServiceResponseAnalyzer';
import { SupportTicketCategorizer } from '@/components/modes/SupportTicketCategorizer';
import { ResolutionTimeForecaster } from '@/components/modes/ResolutionTimeForecaster';
import { ChatbotScriptEnhancer } from '@/components/modes/ChatbotScriptEnhancer';
import { AgentTrainingNeedsAnalyzer } from '@/components/modes/AgentTrainingNeedsAnalyzer';
import { KnowledgeBaseGapFinder } from '@/components/modes/KnowledgeBaseGapFinder';
import { FaqAutoGenerator } from '@/components/modes/FaqAutoGenerator';
import { FeedbackSentimentClassifier } from '@/components/modes/FeedbackSentimentClassifier';
import { LoyaltyProgramImpactAnalyzer } from '@/components/modes/LoyaltyProgramImpactAnalyzer';
import { EventSponsorshipRoiCalculator } from '@/components/modes/EventSponsorshipRoiCalculator';
import { PublicRelationsRiskDetector } from '@/components/modes/PublicRelationsRiskDetector';
import { CrisisCommunicationPlanner } from '@/components/modes/CrisisCommunicationPlanner';
import { ReputationScoreTracker } from '@/components/modes/ReputationScoreTracker';
import { InfluencerRoiAnalyzer } from '@/components/modes/InfluencerRoiAnalyzer';
import { ContentCalendarOptimizer } from '@/components/modes/ContentCalendarOptimizer';
import { BlogTopicTrendFinder } from '@/components/modes/BlogTopicTrendFinder';
import { EditorialConsistencyChecker } from '@/components/modes/EditorialConsistencyChecker';
import { FactReferenceLinkGenerator } from '@/components/modes/FactReferenceLinkGenerator';
import { PlagiarismRiskChecker } from '@/components/modes/PlagiarismRiskChecker';
import { ReadingEaseScoreAnalyzer } from '@/components/modes/ReadingEaseScoreAnalyzer';
import { StyleGuideComplianceChecker } from '@/components/modes/StyleGuideComplianceChecker';
import { HyperlinkHealthChecker } from '@/components/modes/HyperlinkHealthChecker';
import { WebsiteAccessibilityAnalyzer } from '@/components/modes/WebsiteAccessibilityAnalyzer';
import { MobileUiFlowOptimizer } from '@/components/modes/MobileUiFlowOptimizer';
import { ConversionFormDesignChecker } from '@/components/modes/ConversionFormDesignChecker';
import { PageLoadImpactPredictor } from '@/components/modes/PageLoadImpactPredictor';
import { NavigationUsabilityAnalyzer } from '@/components/modes/NavigationUsabilityAnalyzer';
import { ErrorMessageClarityChecker } from '@/components/modes/ErrorMessageClarityChecker';
import { SeoKeywordGapFinder } from '@/components/modes/SeoKeywordGapFinder';
import { MetaTagOptimizationTool } from '@/components/modes/MetaTagOptimizationTool';
import { BacklinkQualityAnalyzer } from '@/components/modes/BacklinkQualityAnalyzer';
import { SearchIntentClassifier } from '@/components/modes/SearchIntentClassifier';
import { CompetitorAdCopyAnalyzer } from '@/components/modes/CompetitorAdCopyAnalyzer';
import { PpcCampaignRoiPredictor } from '@/components/modes/PpcCampaignRoiPredictor';
import { AbTestResultAnalyzer } from '@/components/modes/AbTestResultAnalyzer';
import { UserRetentionPatternFinder } from '@/components/modes/UserRetentionPatternFinder';
import { BehaviorBasedSegmentationTool } from '@/components/modes/BehaviorBasedSegmentationTool';
import { PersonalizationRuleOptimizer } from '@/components/modes/PersonalizationRuleOptimizer';
import { CrossPlatformEngagementTracker } from '@/components/modes/CrossPlatformEngagementTracker';
import { NotificationTimingOptimizer } from '@/components/modes/NotificationTimingOptimizer';
import { InAppPurchasePredictor } from '@/components/modes/InAppPurchasePredictor';
import { PushNotificationCopyChecker } from '@/components/modes/PushNotificationCopyChecker';
import { FeatureAdoptionForecaster } from '@/components/modes/FeatureAdoptionForecaster';
import { ChurnPreventionStrategyMaker } from '@/components/modes/ChurnPreventionStrategyMaker';
import { TrialConversionRatePredictor } from '@/components/modes/TrialConversionRatePredictor';
import { LoyaltyTierUpgradePredictor } from '@/components/modes/LoyaltyTierUpgradePredictor';
import { LifetimeValueForecastingAi } from '@/components/modes/LifetimeValueForecastingAi';
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

export type ModeId = 
  | 'chat' | 'voice_chat' | 'photo_generator' | 'photo_editor' | 'video_generator' | 'video_editor' | 'code_generator' 
  | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
  | 'file_editor' | 'story_generator' | 'summarizer' | 'translator' | 'song_writer' 
  | 'sound_generator' | 'document_maker' | 'ad_maker' | 'grammar_corrector' | 'homework_helper' | 'yoga_fitness' 
  | 'games_knowledge' | 'question_giver' | 'idea_generator' | 'email_writer' | 'recipe_creator'
  | 'travel_planner' | 'dream_interpreter' | 'speech_writer' | 'poem_generator'
  | 'character_generator' | 'fact_checker' | 'chart_maker' | 'fact_giver' | 'fun_chat'
  | 'logo_maker' | 'design_assistant' | 'three_d_modeler' | 'animation_tool' | 'seo_tool'
  | 'social_media_post_maker' | 'market_research' | 'video_maker'
  // Start of new modes from the big list
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
  | 'profit_margin_optimizer' | 'supply_chain_ai_planner' | 'inventory_auto_forecaster' | 'logistics_route_optimizer'
  | 'vendor_risk_scorer' | 'fraud_detection_engine' | 'transaction_pattern_finder' | 'credit_risk_analyzer'
  | 'investment_portfolio_optimizer' | 'financial_statement_summarizer' | 'cash_flow_projection_tool' | 'expense_categorization_ai'
  | 'budget_recommendation_engine' | 'payroll_compliance_checker' | 'policy_impact_forecaster' | 'grant_proposal_generator'
  | 'nonprofit_donor_outreach_ai' | 'fundraising_campaign_optimizer' | 'volunteer_scheduling_planner' | 'event_agenda_creator'
  | 'guest_speaker_finder_ai' | 'registration_data_analyzer' | 'audience_engagement_predictor' | 'public_opinion_trend_analyzer'
  | 'civic_policy_simulation_tool' | 'local_issue_report_generator' | 'environmental_impact_calculator' | 'climate_data_visualizer'
  | 'carbon_footprint_forecaster' | 'wildlife_pattern_tracker' | 'habitat_restoration_planner' | 'ocean_current_predictor'
  | 'renewable_energy_yield_estimator' | 'disaster_response_simulator' | 'emergency_evacuation_planner' | 'health_risk_assessment_ai'
  | 'symptom_pattern_analyzer' | 'disease_outbreak_predictor' | 'nutritional_plan_generator' | 'exercise_routine_optimizer'
  | 'sleep_cycle_tracker_ai' | 'mental_wellness_suggestion_bot' | 'therapy_session_planner' | 'medical_literature_summarizer'
  | 'clinical_trial_data_analyzer' | 'genetic_pattern_detector' | 'protein_structure_predictor' | 'drug_interaction_checker'
  | 'surgical_procedure_planner' | 'patient_recovery_forecaster' | 'virtual_lab_technician' | 'radiology_image_analyzer'
  | 'pathology_report_summarizer' | 'diagnostic_support_assistant' | 'remote_patient_monitoring_ai' | 'appointment_scheduling_optimizer'
  | 'hospital_resource_forecaster' | 'medical_inventory_tracker' | 'treatment_plan_personalizer' | 'symptom_to_specialist_recommender'
  | 'manufacturing_workflow_optimizer' | 'quality_control_inspector_ai' | 'machine_failure_predictor' | 'production_scheduling_planner'
  | 'supply_shortage_forecaster' | 'assembly_line_speed_optimizer' | 'worker_safety_risk_detector' | 'energy_usage_analyzer'
  | 'maintenance_cost_estimator' | 'smart_factory_process_designer' | 'robotics_task_planner' | 'cad_design_suggestion_tool'
  | 'material_stress_tester_ai' | 'product_lifecycle_forecaster' | 'parts_inventory_balancer' | 'blueprint_error_detector'
  | 'prototype_design_optimizer' | 'design_to_manufacture_converter' | 'building_energy_efficiency_analyzer' | 'urban_traffic_flow_predictor'
  | 'road_repair_priority_planner' | 'parking_demand_forecaster' | 'public_transit_route_optimizer' | 'construction_schedule_forecaster'
  | 'utility_consumption_tracker' | 'smart_lighting_planner' | 'renewable_grid_load_balancer' | 'flood_risk_predictor'
  | 'water_usage_efficiency_planner' | 'sewage_network_monitoring_ai' | 'crop_yield_forecaster' | 'soil_nutrient_analyzer'
  | 'pest_infestation_predictor' | 'irrigation_optimization_planner' | 'farm_equipment_usage_tracker' | 'agricultural_market_price_forecaster'
  | 'greenhouse_climate_controller' | 'livestock_health_monitor' | 'seed_selection_optimizer' | 'weather_impact_predictor'
  | 'sports_performance_analyzer' | 'athlete_training_optimizer' | 'game_strategy_simulator' | 'player_injury_risk_detector'
  | 'match_outcome_predictor' | 'tournament_schedule_optimizer' | 'fan_engagement_tracker' | 'sponsorship_roi_analyzer'
  | 'merchandise_sales_forecaster' | 'ticket_price_optimizer' | 'streaming_audience_predictor' | 'social_sentiment_analyzer'
  | 'trend_forecast_engine' | 'brand_loyalty_scorer' | 'customer_review_summarizer' | 'influence_network_mapper'
  | 'viral_content_predictor' | 'ad_campaign_performance_forecaster' | 'conversion_funnel_optimizer' | 'lead_scoring_ai'
  | 'sales_forecasting_assistant' | 'upsell_recommendation_engine' | 'cross_sell_pattern_finder' | 'product_return_risk_detector'
  | 'loyalty_reward_planner' | 'customer_retention_strategy_maker' | 'store_layout_optimization_ai' | 'shelf_stocking_suggestion_tool'
  | 'price_match_detector' | 'seasonal_demand_forecaster' | 'fashion_trend_predictor' | 'outfit_combination_recommender'
  | 'fabric_quality_analyzer' | 'production_batch_optimizer' | 'color_palette_forecaster' | 'textile_pattern_designer_ai'
  | 'jewelry_design_suggestor' | 'shoe_size_fit_predictor' | 'accessory_style_matcher' | 'luxury_goods_market_forecaster'
  | 'music_mood_classifier' | 'song_tempo_analyzer' | 'instrument_arrangement_suggestor' | 'chord_progression_generator'
  | 'mixing_mastering_advisor' | 'sound_quality_enhancer' | 'audio_scene_identifier' | 'noise_removal_optimizer'
  | 'speech_emotion_analyzer' | 'podcast_topic_planner' | 'radio_ad_effectiveness_tracker' | 'film_script_coverage_ai'
  | 'scene_location_suggestor' | 'casting_fit_analyzer' | 'shot_sequence_planner' | 'lighting_setup_optimizer'
  | 'special_effects_cost_estimator' | 'post_production_workflow_planner' | 'trailer_impact_predictor' | 'audience_review_sentiment_tracker'
  | 'board_game_rule_optimizer' | 'puzzle_difficulty_balancer' | 'level_design_ai' | 'game_lore_expansion_tool'
  | 'enemy_behavior_modeler' | 'loot_drop_probability_balancer' | 'player_motivation_analyzer' | 'multiplayer_matchmaking_optimizer'
  | 'esports_strategy_advisor' | 'speedrun_path_optimizer' | 'education_syllabus_planner' | 'exam_pattern_analyzer'
  | 'learning_pace_personalizer' | 'curriculum_gap_identifier' | 'teaching_method_suggestor' | 'classroom_engagement_tracker'
  | 'assignment_feedback_generator' | 'question_difficulty_calibrator' | 'lesson_plan_enhancer' | 'grading_consistency_checker'
  | 'tutoring_session_scheduler' | 'learning_style_analyzer' | 'peer_review_summarizer' | 'academic_progress_forecaster'
  | 'online_course_enrollment_predictor' | 'quiz_question_generator' | 'flashcard_auto_creator' | 'concept_reinforcement_planner'
  | 'study_group_matching_ai' | 'skill_gap_forecaster' | 'language_learning_path_optimizer' | 'pronunciation_feedback_ai'
  | 'vocabulary_expansion_tool' | 'grammar_practice_creator' | 'idiom_usage_coach' | 'cultural_context_advisor'
  | 'debate_strategy_planner' | 'speech_timing_analyzer' | 'presentation_flow_optimizer' | 'visual_aid_suggestor'
  | 'slide_deck_consistency_checker' | 'audience_engagement_timer' | 'professional_bio_generator' | 'resume_keyword_optimizer'
  | 'cover_letter_personalizer' | 'job_interview_simulation_ai' | 'career_path_predictor' | 'skill_endorsement_analyzer'
  | 'salary_benchmarking_tool' | 'workplace_culture_fit_analyzer' | 'employee_feedback_summarizer' | 'team_dynamics_predictor'
  | 'leadership_style_analyzer' | 'meeting_agenda_optimizer' | 'task_priority_planner' | 'workload_balancer_ai'
  | 'deadline_risk_detector' | 'resource_allocation_forecaster' | 'cross_department_communication_tracker' | 'training_needs_identifier'
  | 'onboarding_experience_planner' | 'knowledge_transfer_optimizer' | 'company_policy_clarity_checker' | 'internal_survey_analyzer'
  | 'innovation_idea_ranker' | 'patent_portfolio_analyzer' | 'r_d_project_feasibility_checker' | 'product_prototype_feedback_ai'
  | 'market_entry_risk_forecaster' | 'brand_name_idea_generator' | 'logo_color_impact_analyzer' | 'packaging_design_feedback_ai'
  | 'shelf_placement_impact_predictor' | 'store_traffic_flow_analyzer' | 'checkout_time_optimizer' | 'payment_fraud_probability_checker'
  | 'ecommerce_upsell_strategy_planner' | 'subscription_renewal_predictor' | 'customer_service_response_analyzer' | 'support_ticket_categorizer'
  | 'resolution_time_forecaster' | 'chatbot_script_enhancer' | 'agent_training_needs_analyzer' | 'knowledge_base_gap_finder'
  | 'faq_auto_generator' | 'feedback_sentiment_classifier' | 'loyalty_program_impact_analyzer' | 'event_sponsorship_roi_calculator'
  | 'public_relations_risk_detector' | 'crisis_communication_planner' | 'reputation_score_tracker' | 'influencer_roi_analyzer'
  | 'content_calendar_optimizer' | 'blog_topic_trend_finder' | 'editorial_consistency_checker' | 'fact_reference_link_generator'
  | 'plagiarism_risk_checker' | 'reading_ease_score_analyzer' | 'style_guide_compliance_checker' | 'hyperlink_health_checker'
  | 'website_accessibility_analyzer' | 'mobile_ui_flow_optimizer' | 'conversion_form_design_checker' | 'page_load_impact_predictor'
  | 'navigation_usability_analyzer' | 'error_message_clarity_checker' | 'seo_keyword_gap_finder' | 'meta_tag_optimization_tool'
  | 'backlink_quality_analyzer' | 'search_intent_classifier' | 'competitor_ad_copy_analyzer' | 'ppc_campaign_roi_predictor'
  | 'ab_test_result_analyzer' | 'user_retention_pattern_finder' | 'behavior_based_segmentation_tool' | 'personalization_rule_optimizer'
  | 'cross_platform_engagement_tracker' | 'notification_timing_optimizer' | 'in_app_purchase_predictor' | 'push_notification_copy_checker'
  | 'feature_adoption_forecaster' | 'churn_prevention_strategy_maker' | 'trial_conversion_rate_predictor' | 'loyalty_tier_upgrade_predictor'
  | 'lifetime_value_forecasting_ai'
  | 'brand_finder'
  | 'product_finder'
  | 'shopping_assistant'
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
  | 'animated_gif_editor'
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
  | 'ai_real_estate_listing_writer'
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
  | 'ai_game_level_designer'
  | 'ai_virtual_pet_creator';


export interface Mode {
    id: ModeId;
    name: string;
    icon: React.ElementType;
    description: string;
    component: React.ElementType;
    componentProps?: Record<string, any>;
}

const textGeneratorProps = (name: string, description: string, promptPrefix: string) => ({
    name,
    description,
    component: TextGenerator,
    componentProps: {
        promptPlaceholder: description,
        buttonText: `Generate ${name}`,
        generatePrompt: (p: string) => `${promptPrefix}: "${p}"`,
        resultTitle: `Generated ${name}`,
    },
});

export const modes: Mode[] = [
    // Original Modes
    { id: 'chat', name: 'AI Chat', icon: BrainCircuit, description: 'Your AI command center for text and files.', component: ChatInterface },
    { id: 'fun_chat', name: 'Fun Chat', icon: Bot, description: 'Chat with a more creative and playful AI.', component: ChatInterface, componentProps: { isFunChat: true } },
    { id: 'voice_chat', name: 'Voice Chat', icon: Mic, description: 'Talk directly with the AI in a voice conversation.', component: VoiceInterface },
    { id: 'photo_generator', name: 'Photo Generator', icon: Image, description: 'Create stunning images from text prompts.', component: PhotoGenerator },
    { id: 'logo_maker', name: 'Logo Maker', icon: Paintbrush, description: 'Generate creative logos for your business or brand.', component: LogoMaker },
    { id: 'design_assistant', name: 'Design Assistant', icon: Star, description: 'Get design suggestions and guidance.', component: DesignAssistant },
    { id: 'photo_editor', name: 'Photo Editor', icon: Palette, description: 'Upload a photo and edit it with an AI prompt.', component: PhotoEditor },
    { id: 'video_maker', name: 'Video Maker', icon: Video, description: 'Generate a video from a text prompt or animate an image.', component: VideoMaker },
    { id: 'animation_tool', name: 'Animation Planner', icon: GanttChart, description: 'Plan animations and motion graphics.', component: AnimationTool },
    { id: 'three_d_modeler', name: '3D Model Planner', icon: PieChart, description: 'Create plans for 3D models.', component: ThreeDModeler },
    { id: 'video_editor', name: 'Video Analyzer', icon: Film, description: 'Upload a video and get AI analysis.', component: VideoEditor },
    { id: 'sound_generator', name: 'Sound Generator', icon: AudioLines, description: 'Create sound effects and audio clips.', component: SoundGenerator },
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
    { id: 'code_generator', name: 'Code Generator', icon: Code, description: 'Generate, manage, and import code.', component: CodeGenerator },
    { id: 'code_analyzer', name: 'Code Analyzer', icon: Search, description: 'Analyze code for errors, performance, and best practices.', component: CodeAnalyzer },
    { id: 'website_maker', name: 'Website Maker', icon: Globe, description: 'Generate, preview, and import websites.', component: WebsiteMaker },
    { id: 'app_maker', name: 'App Maker', icon: AppWindow, description: 'Scaffold, import, and plan mobile applications.', component: AppMaker },
    { id: 'game_maker', name: 'Game Maker', icon: Gamepad2, description: 'Design, import, and create plans for your game.', component: GameMaker },
    { id: 'file_maker', name: 'File Maker', icon: FilePlus, description: 'Create downloadable files from a prompt.', component: FileMaker },
    { id: 'file_editor', name: 'File Editor', icon: FileEdit, description: 'Edit uploaded files with AI instructions.', component: FileEditor },
    { id: 'chart_maker', name: 'Chart & Graph Maker', icon: BarChart3, description: 'Create charts and graphs from data.', component: ChartMaker },
    { id: 'market_research', name: 'Market Research', icon: Briefcase, description: 'Gather and analyze market data.', component: MarketResearch },
    { id: 'social_media_post_maker', name: 'Social Media Post Maker', icon: Megaphone, description: 'Generate engaging posts for social media.', component: SocialMediaPostMaker },
    { id: 'seo_tool', name: 'SEO Tool', icon: TrendingUp, description: 'Optimize your content for search engines.', component: SeoTool },
    { id: 'summarizer', name: 'AI Summarizer', icon: FileQuestion, description: 'Summarize long texts, articles, or documents.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a long article, report, or any text here to get a summary...",
        buttonText: "Summarize Text",
        generatePrompt: (p: string) => `Summarize the following text, providing the summary in the same language as the original text:\n\n${p}`,
        resultTitle: "Summary"
    }},
    { id: 'translator', name: 'Translator', icon: Globe, description: 'Translate text between multiple languages.', component: Translator },
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
    { id: 'speech_writer', name: 'Speech Writer', icon: Presentation, description: 'Draft compelling speeches for any occasion.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A best man speech for my childhood friend' or 'A motivational speech for a sales team'...",
        buttonText: "Write Speech",
        generatePrompt: (p: string) => `Write a powerful and engaging speech for the following occasion. The speech should be in the same language as the prompt. Occasion: ${p}`,
        resultTitle: "Generated Speech"
    }},
    { id: 'fact_checker', name: 'Fact Checker', icon: CheckSquare, description: 'Check the accuracy of a statement.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter a statement to fact-check, e.g., 'The sky is green.'",
        buttonText: "Fact-Check",
        generatePrompt: (p: string) => `Please fact-check the following statement, provide a determination (e.g., True, False, Misleading), and a brief explanation with sources if possible. The response should be in the same language as the statement. Statement: ${p}`,
        resultTitle: "Fact-Check Result"
    }},
    { id: 'homework_helper', name: 'Homework Planner', icon: School, description: 'Plan assignments and get AI help.', component: HomeworkPlanner },
    { id: 'question_giver', name: 'Question Giver', icon: HelpCircle, description: 'Get questions for any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The history of the Roman Empire' or 'La physique quantique'...",
        buttonText: "Generate Questions",
        generatePrompt: (p: string) => `Generate a list of 10 insightful questions about the following topic. The questions should be in the same language as the topic provided. Topic: ${p}`,
        resultTitle: "Generated Questions"
    }},
    { id: 'fact_giver', name: 'Fact Giver', icon: Lightbulb, description: 'Get interesting facts about any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Space exploration' or 'The Roman Empire'",
        buttonText: "Get Facts",
        generatePrompt: (p: string) => `Generate a list of 5 interesting and verifiable facts about the following topic. The facts should be in the same language as the topic. Topic: ${p}`,
        resultTitle: "Interesting Facts"
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
    { id: 'brand_finder', name: 'Brand Finder', icon: Crown, description: 'Find top brands for any product.', component: BrandFinder },
    { id: 'product_finder', name: 'Product Finder', icon: ShoppingCart, description: 'Find where to buy products online.', component: ProductFinder },
    { id: 'study_material_analyzer', name: 'Study Material Analyzer', icon: GraduationCap, description: 'Analyze study material and get a quiz.', component: StudyMaterialAnalyzer },
    { id: 'ad_banner_maker', name: 'Ad Banner Maker', icon: Megaphone, description: 'Designs banners for marketing.', component: AdBannerMaker },
    { id: 'ad_copy_generator', name: 'Ad Copy Generator', icon: Feather, description: 'Writes ads for marketing.', component: AdCopyGenerator },
    { id: 'affirmation_generator', name: 'Affirmation Generator', icon: Smile, description: 'Creates affirmations for self-growth.', component: AffirmationGenerator },
    { id: 'ai_business_plan_writer', name: 'AI Business Plan Writer', icon: Briefcase, description: 'Writes business plans for startups.', component: AIBusinessPlanWriter },
    { id: 'ai_game_level_designer', name: 'AI Game Level Designer', icon: Gamepad2, description: 'Generates playable level layouts.', component: AIGameLevelDesigner },
    { id: 'ai_joke_writer', name: 'AI Joke Writer', icon: Smile, description: 'Writes jokes for entertainment.', component: AIJokeWriter },
    { id: 'ai_teacher', name: 'AI Teacher', icon: School, description: 'Teaches concepts for education.', component: AITeacher },
    { id: 'ai_therapist', name: 'AI Therapist', icon: HeartPulse, description: 'Mental health guidance for wellness.', component: AITherapist },
    { id: 'ai_virtual_pet_creator', name: 'AI Virtual Pet Creator', icon: PawPrint, description: 'Designs virtual pets for games.', component: AIVirtualPetCreator },
    { id: 'animated_gif_editor', name: 'Animated GIF Editor', icon: Film, description: 'Edits GIFs for social sharing.', component: AnimatedGIFEditor },
    { id: 'animated_infographic_maker', name: 'Animated Infographic Maker', icon: BarChart3, description: 'Designs animated charts for presentations.', component: AnimatedInfographicMaker },
    { id: 'animated_logo_maker', name: 'Animated Logo Maker', icon: Star, description: 'Animates logos for branding.', component: AnimatedLogoMaker },
    { id: 'app_ui_designer', name: 'App UI Designer', icon: AppWindow, description: 'Designs app interfaces for development.', component: AppUIDesigner },
    { id: 'audio_enhancer', name: 'Audio Enhancer', icon: AudioLines, description: 'Improves sound for podcasts/music.', component: AudioEnhancer },
    { id: 'audio_loop_maker', name: 'Audio Loop Maker', icon: Music, description: 'Creates loops for music production.', component: AudioLoopMaker },
    { id: 'audio_mixer', name: 'Audio Mixer', icon: SlidersHorizontal, description: 'Mixes tracks for DJs.', component: AudioMixer },
    { id: 'audio_sync_tool', name: 'Audio Sync Tool', icon: Clock, description: 'Syncs audio for editing.', component: AudioSyncTool },
    { id: 'audio_transcription_tool', name: 'Audio Transcription Tool', icon: FileText, description: 'Transcribes audio for accessibility.', component: AudioTranscriptionTool },

    // 365 Modes
    { id: 'text_rewriter_pro', name: 'Text Rewriter Pro', icon: RefreshCw, component: TextRewriterPro, description: 'Rewrite text for clarity, style, and impact.' },
    { id: 'creative_content_expander', name: 'Creative Content Expander', icon: Wand2, component: CreativeContentExpander, description: 'Expand a topic into a detailed, engaging article.' },
    { id: 'conversational_flow_designer', name: 'Conversational Flow Designer', icon: MessageCircleIcon, component: ConversationalFlowDesigner, description: 'Design a conversational flow for a chatbot.' },
    { id: 'technical_document_generator', name: 'Technical Document Generator', icon: BookCopy, component: TechnicalDocumentGenerator, description: 'Generate technical documents and specifications.' },
    { id: 'storyboard_idea_expander', name: 'Storyboard Idea Expander', icon: Clapperboard, component: StoryboardIdeaExpander, description: 'Expand a storyboard idea into a 3-scene summary.' },
    { id: 'digital_persona_creator', name: 'Digital Persona Creator', icon: Users, component: DigitalPersonaCreator, description: 'Create detailed user personas for marketing and product design.' },
    { id: 'smart_prompt_optimizer', name: 'Smart Prompt Optimizer', icon: BrainCog, component: SmartPromptOptimizer, description: 'Rewrite a prompt to be more specific, clear, and effective.' },
    { id: 'context_aware_summary_maker', name: 'Context-Aware Summary Maker', icon: FileSearch, component: ContextAwareSummaryMaker, description: 'Summarize text with a specific context in mind.' },
    { id: 'reading_comprehension_assistant', name: 'Reading Comprehension Assistant', icon: BookOpen, component: ReadingComprehensionAssistant, description: 'Answer questions based on a provided text.' },
    { id: 'knowledge_graph_builder', name: 'Knowledge Graph Builder', icon: GitBranch, component: KnowledgeGraphBuilder, description: 'Build a knowledge graph from text.' },
    { id: 'smart_data_categorizer', name: 'Smart Data Categorizer', icon: SlidersHorizontal, component: SmartDataCategorizer, description: 'Categorize a list of items into logical groups.' },
    { id: 'concept_map_generator', name: 'Concept Map Generator', icon: Map, component: ConceptMapGenerator, description: 'Generate a concept map from a topic.' },
    { id: 'interview_question_creator', name: 'Interview Question Creator', icon: HelpCircle, component: InterviewQuestionCreator, description: 'Generate interview questions for any job role.' },
    { id: 'job_role_analyzer', name: 'Job Role Analyzer', icon: Briefcase, component: JobRoleAnalyzer, description: 'Analyze a job role and create a detailed description.' },
    { id: 'industry_report_writer', name: 'Industry Report Writer', icon: Building2, component: IndustryReportWriter, description: 'Write a brief report on the current state of an industry.' },
    { id: 'product_feature_brainstormer', name: 'Product Feature Brainstormer', icon: Lightbulb, component: ProductFeatureBrainstormer, description: 'Brainstorm creative and useful features for a product.' },
    { id: 'meeting_notes_formatter', name: 'Meeting Notes Formatter', icon: FileText, component: MeetingNotesFormatter, description: 'Format raw meeting notes into a clean summary.' },
    { id: 'text_complexity_adjuster', name: 'Text Complexity Adjuster', icon: ArrowDownUp, component: TextComplexityAdjuster, description: 'Rewrite text to a specified reading level or for a target audience.' },
    { id: 'idiom_and_metaphor_finder', name: 'Idiom and Metaphor Finder', icon: Drama, component: IdiomAndMetaphorFinder, description: 'Identify idioms, metaphors, and figures of speech in a text.' },
    { id: 'paragraph_flow_improver', name: 'Paragraph Flow Improver', icon: ArrowDownAZ, component: ParagraphFlowImprover, description: 'Improve the logical flow and readability of a paragraph.' },
    { id: 'acronym_expander', name: 'Acronym Expander', icon: BookCopy, component: AcronymExpander, description: 'Find and expand acronyms in a text.' },
    { id: 'real_time_definition_finder', name: 'Real-Time Definition Finder', icon: HelpCircle, component: RealTimeDefinitionFinder, description: 'Provide definitions for specific words in a text.' },
    { id: 'smart_keyword_highlighter', name: 'Smart Keyword Highlighter', icon: Paintbrush, component: SmartKeywordHighlighter, description: 'Identify and highlight the most important keywords in a text.' },
    { id: 'tone_and_mood_adjuster', name: 'Tone and Mood Adjuster', icon: Smile, component: ToneAndMoodAdjuster, description: 'Rewrite text to have a specified tone and mood.' },
    { id: 'formality_level_converter', name: 'Formality Level Converter', icon: Briefcase, component: FormalityLevelConverter, description: 'Convert text between formal and informal styles.' },
    { id: 'brand_voice_enforcer', name: 'Brand Voice Enforcer', icon: Megaphone, component: BrandVoiceEnforcer, description: 'Ensure text aligns with specified brand voice guidelines.' },
    { id: 'multilingual_synonym_finder', name: 'Multilingual Synonym Finder', icon: Languages, component: MultilingualSynonymFinder, description: 'Provide synonyms for a word in multiple languages.' },
    { id: 'title_and_headline_optimizer', name: 'Title & Headline Optimizer', icon: Target, component: TitleOptimizer, description: 'Generate compelling and SEO-friendly titles.' },
    { id: 'long_form_report_writer', name: 'Long-form Report Writer', icon: FileText, component: LongFormReportWriter, description: 'Generate a comprehensive report from a topic and key points.' },
    { id: 'smart_question_answer_engine', name: 'Smart Question-Answer Engine', icon: HelpCircle, component: SmartQuestionAnswerEngine, description: 'Get a clear, concise, and factual answer to any question.' },
    { id: 'policy_drafting_assistant', name: 'Policy Drafting Assistant', icon: Landmark, component: PolicyDraftingAssistant, description: 'Draft a clear and comprehensive company policy.' },
    { id: 'legal_clause_suggestion_tool', name: 'Legal Clause Suggestion Tool', icon: Scale, component: LegalClauseSuggestionTool, description: 'Get a standard, well-formulated legal clause.' },
    { id: 'patent_abstract_generator', name: 'Patent Abstract Generator', icon: BookCopy, component: PatentAbstractGenerator, description: 'Write a clear, concise abstract for a patent application.' },
    { id: 'contract_simplifier', name: 'Contract Simplifier', icon: FileQuestion, component: ContractSimplifier, description: 'Rewrite complex legal text into plain, easy-to-understand language.' },
    { id: 'compliance_document_checker', name: 'Compliance Document Checker', icon: ShieldCheck, component: ComplianceDocumentChecker, description: 'Review a document against a specified compliance standard.' },
    { id: 'script_scene_expander', name: 'Script Scene Expander', icon: Clapperboard, component: ScriptSceneExpander, description: 'Expand a brief scene description into a full script scene.' },
    { id: 'interview_transcript_formatter', name: 'Interview Transcript Formatter', icon: FileText, component: InterviewTranscriptFormatter, description: 'Format a raw interview transcript into a clean, readable document.' },
    { id: 'fictional_world_builder', name: 'Fictional World Builder', icon: Globe, component: FictionalWorldBuilder, description: 'Create a detailed description of a fictional world.' },
    { id: 'conflict_plot_generator', name: 'Conflict Plot Generator', icon: Swords, component: ConflictPlotGenerator, description: 'Expand a core conflict into a compelling plot outline.' },
    { id: 'character_dialogue_improver', name: 'Character Dialogue Improver', icon: MessageCircleIcon, component: CharacterDialogueImprover, description: 'Rewrite dialogue to be more impactful and character-driven.' },
    { id: 'multi_threaded_story_planner', name: 'Multi-threaded Story Planner', icon: GitBranch, component: MultiThreadedStoryPlanner, description: 'Create a plan for how different plotlines will intersect.' },
    { id: 'fiction_outline_maker', name: 'Fiction Outline Maker', icon: GanttChart, component: FictionOutlineMaker, description: 'Create a detailed, chapter-by-chapter outline for a novel.' },
    { id: 'comedy_script_punch_up_tool', name: 'Comedy Script Punch-up Tool', icon: Smile, component: ComedyScriptPunchUpTool, description: 'Get funnier alternative lines or scenarios for a joke or scene.' },
    { id: 'villain_backstory_creator', name: 'Villain Backstory Creator', icon: UserSquare, component: VillainBackstoryCreator, description: 'Create a compelling and tragic backstory for a villain.' },
    { id: 'theme_and_motif_analyzer', name: 'Theme and Motif Analyzer', icon: BookOpen, component: ThemeAndMotifAnalyzer, description: 'Identify major themes and recurring motifs in a text.' },
    { id: 'story_arc_evaluator', name: 'Story Arc Evaluator', icon: TrendingUp, component: StoryArcEvaluator, description: 'Evaluate a story or character arc for completeness.' },
    { id: 'mythology_based_plot_creator', name: 'Mythology-based Plot Creator', icon: VenetianMask, component: MythologyBasedPlotCreator, description: 'Create a unique story plot based on a myth.' },
    { id: 'sci_fi_concept_designer', name: 'Sci-Fi Concept Designer', icon: Telescope, component: SciFiConceptDesigner, description: 'Flesh out a sci-fi concept with details.' },
    { id: 'fantasy_lore_generator', name: 'Fantasy Lore Generator', icon: Crown, component: FantasyLoreGenerator, description: 'Generate detailed lore for a fantasy concept.' },
    { id: 'alternate_history_plot_writer', name: 'Alternate History Plot Writer', icon: Landmark, component: AlternateHistoryPlotWriter, description: 'Create a compelling alternate history plot.' },
    { id: 'scientific_hypothesis_suggestor', name: 'Scientific Hypothesis Suggestor', icon: Beaker, component: ScientificHypothesisSuggestor, description: 'Suggest three novel, testable scientific hypotheses.' },
    { id: 'experiment_design_planner', name: 'Experiment Design Planner', icon: FlaskConical, component: ExperimentDesignPlanner, description: 'Design a detailed experimental plan to test a hypothesis.' },
    { id: 'research_summary_maker', name: 'Research Summary Maker', icon: FileSearch, component: ResearchSummaryMaker, description: 'Summarize a research paper for a lay audience.' },
    { id: 'journal_abstract_creator', name: 'Journal Abstract Creator', icon: BookCopy, component: JournalAbstractCreator, description: 'Write a formal, structured abstract for a research paper.' },
    { id: 'methodology_drafting_tool', name: 'Methodology Drafting Tool', icon: FileText, component: MethodologyDraftingTool, description: "Write a detailed 'Methodology' section for a research paper." },
    { id: 'lab_report_formatter', name: 'Lab Report Formatter', icon: TestTube, component:LabReportFormatter, description: 'Format raw lab notes into a structured lab report.' },
    { id: 'academic_citation_builder', name: 'Academic Citation Builder', icon: Library, component: AcademicCitationBuilder, description: 'Generate a perfectly formatted academic citation.' },
    { id: 'equation_solver_pro', name: 'Equation Solver Pro', icon: Minus, component: EquationSolverPro, description: 'Solve a mathematical equation with a step-by-step process.' },
    { id: 'graph_theory_visualizer', name: 'Graph Theory Visualizer', icon: GitBranch, component: GraphTheoryVisualizer, description: 'Create a text-based representation of a graph.' },
    { id: 'statistical_pattern_finder', name: 'Statistical Pattern Finder', icon: LineChart, component: StatisticalPatternFinder, description: 'Identify significant patterns, trends, or correlations in a dataset.' },
    { id: 'data_anomaly_detector', name: 'Data Anomaly Detector', icon: Bug, component: DataAnomalyDetector, description: 'Detect outliers or anomalies in a dataset.' },
    { id: 'predictive_model_trainer', name: 'Predictive Model Trainer', icon: BrainCog, component: PredictiveModelTrainer, description: 'Outline the steps to train a predictive model.' },
    { id: 'simulation_scenario_builder', name: 'Simulation Scenario Builder', icon: Component, component: SimulationScenarioBuilder, description: 'Create a detailed scenario for a system simulation.' },
    { id: 'ai_behavior_modeler', name: 'AI Behavior Modeler', icon: Puzzle, component: AiBehaviorModeler, description: 'Design a behavior tree or state machine for an AI agent.' },
    { id: 'ethics_risk_analyzer', name: 'Ethics Risk Analyzer', icon: ShieldCheck, component: EthicsRiskAnalyzer, description: 'Analyze an AI application for potential ethical risks.' },
    { id: 'bias_detector_engine', name: 'Bias Detector Engine', icon: Scale, component: BiasDetectorEngine, description: 'Analyze text or a dataset for potential sources of bias.' },
    { id: 'privacy_impact_forecaster', name: 'Privacy Impact Forecaster', icon: UserSquare, component: PrivacyImpactForecaster, description: 'Conduct a privacy impact assessment for a product.' },
    { id: 'algorithmic_explainability_tool', name: 'Algorithmic Explainability Tool', icon: FileSearch, component: AlgorithmicExplainabilityTool, description: "Provide a clear explanation for an algorithm's decision." },
    { id: 'dataset_integrity_checker', name: 'Dataset Integrity Checker', icon: CheckSquare, component: DatasetIntegrityChecker, description: 'Identify potential integrity issues in a dataset.' },
    { id: 'feature_importance_analyzer', name: 'Feature Importance Analyzer', icon: SlidersHorizontal, component: FeatureImportanceAnalyzer, description: "Rank features by their importance in a model's predictions." },
    { id: 'forecast_accuracy_evaluator', name: 'Forecast Accuracy Evaluator', icon: BadgePercent, component: ForecastAccuracyEvaluator, description: 'Evaluate the accuracy of a forecast using key metrics.' },
    { id: 'root_cause_analysis_bot', name: 'Root Cause Analysis Bot', icon: Footprints, component: RootCauseAnalysisBot, description: "Perform a root cause analysis using the '5 Whys' technique." },
    { id: 'data_quality_score_generator', name: 'Data Quality Score Generator', icon: Star, component: DataQualityScoreGenerator, description: 'Provide a data quality score for a dataset.' },
    { id: 'multi_variable_trend_predictor', name: 'Multi-variable Trend Predictor', icon: LineChart, component: MultiVariableTrendPredictor, description: 'Predict future trends based on multiple variables.' },
    { id: 'business_kpi_forecaster', name: 'Business KPI Forecaster', icon: TrendingUp, component: BusinessKpiForecaster, description: 'Provide a text-based forecast and analysis for business KPIs.' },
    { id: 'competitor_comparison_engine', name: 'Competitor Comparison Engine', icon: Swords, component: CompetitorComparisonEngine, description: 'Provide a detailed SWOT analysis of competitors.' },
    { id: 'market_gap_identifier', name: 'Market Gap Identifier', icon: Search, component: MarketGapIdentifier, description: 'Analyze a market to identify gaps and underserved niches.' },
    { id: 'customer_segmentation_mapper', name: 'Customer Segmentation Mapper', icon: Users, component: CustomerSegmentationMapper, description: 'Create distinct customer segments for a product.' },
    { id: 'price_elasticity_estimator', name: 'Price Elasticity Estimator', icon: CircleDollarSign, component: PriceElasticityEstimator, description: 'Estimate the price elasticity of demand for a product.' },
    { id: 'churn_risk_predictor', name: 'Churn Risk Predictor', icon: TrendingUp, component: ChurnRiskPredictor, description: 'Assess customer churn risk and suggest retention strategies.' },
    { id: 'profit_margin_optimizer', name: 'Profit Margin Optimizer', icon: BadgePercent, component: ProfitMarginOptimizer, description: 'Suggest strategies to optimize a product\'s profit margin.' },
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, description: 'Plan and optimize supply chain logistics.', component: TextGenerator, componentProps: textGeneratorProps('Supply Chain Plan', 'Describe your supply chain goals to get an optimized plan.', 'Create a supply chain plan') },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Package, description: 'Forecast inventory needs based on historical data.', component: TextGenerator, componentProps: textGeneratorProps('Inventory Forecast', 'Describe your product and sales data to get an inventory forecast.', 'Create an inventory forecast') },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, description: 'Find the most efficient logistics routes.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Route', 'List your start, end, and multi-stop points to get an optimized route.', 'Optimize a logistics route') },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, description: 'Score vendors based on risk factors.', component: TextGenerator, componentProps: textGeneratorProps('Vendor Risk Score', 'Describe a vendor and its services to get a risk score.', 'Score a vendor for risk') },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Bug, description: 'Detect fraudulent transactions and patterns.', component: TextGenerator, componentProps: textGeneratorProps('Fraud Analysis', 'Describe a set of transactions to check for fraud.', 'Analyze transactions for fraud') },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: LineChart, description: 'Find patterns in transaction data.', component: TextGenerator, componentProps: textGeneratorProps('Transaction Patterns', 'Provide transaction data to find patterns.', 'Find patterns in transaction data') },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: Scale, description: 'Analyze credit risk for individuals or businesses.', component: TextGenerator, componentProps: textGeneratorProps('Credit Risk Analysis', 'Provide financial data to analyze credit risk.', 'Analyze credit risk') },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, description: 'Suggest optimizations for an investment portfolio.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Portfolio', 'List your current investments and goals to get an optimized portfolio.', 'Optimize an investment portfolio') },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileText, description: 'Summarize complex financial statements.', component: TextGenerator, componentProps: textGeneratorProps('Financial Summary', 'Paste a financial statement to summarize.', 'Summarize a financial statement') },
    { id: 'cash_flow_projection_tool', name: 'Cash Flow Projection Tool', icon: TrendingUp, description: 'Project future cash flow based on inputs.', component: TextGenerator, componentProps: textGeneratorProps('Cash Flow Projection', 'Provide your income and expenses to project cash flow.', 'Project cash flow') },
    { id: 'expense_categorization_ai', name: 'Expense Categorization AI', icon: Tags, description: 'Automatically categorize lists of expenses.', component: TextGenerator, componentProps: textGeneratorProps('Categorized Expenses', 'Paste a list of expenses to categorize them.', 'Categorize expenses') },
    { id: 'budget_recommendation_engine', name: 'Budget Recommendation Engine', icon: CircleDollarSign, description: 'Recommend budgets based on income and goals.', component: TextGenerator, componentProps: textGeneratorProps('Budget Recommendation', 'Provide your income, expenses, and financial goals to get a budget recommendation.', 'Recommend a budget') },
    { id: 'payroll_compliance_checker', name: 'Payroll Compliance Checker', icon: CheckSquare, description: 'Check payroll data for compliance issues.', component: TextGenerator, componentProps: textGeneratorProps('Payroll Compliance Check', 'Provide payroll data to check for compliance.', 'Check payroll compliance') },
    { id: 'policy_impact_forecaster', name: 'Policy Impact Forecaster', icon: Landmark, description: 'Forecast the potential impact of new policies.', component: TextGenerator, componentProps: textGeneratorProps('Policy Impact Forecast', 'Describe a new policy to forecast its impact.', 'Forecast the impact of a policy') },
    { id: 'grant_proposal_generator', name: 'Grant Proposal Generator', icon: Feather, description: 'Generate grant proposals for nonprofits.', component: TextGenerator, componentProps: textGeneratorProps('Grant Proposal', 'Describe your project to generate a grant proposal.', 'Generate a grant proposal') },
    { id: 'nonprofit_donor_outreach_ai', name: 'Nonprofit Donor Outreach AI', icon: Users, description: 'Draft donor outreach messages.', component: TextGenerator, componentProps: textGeneratorProps('Donor Outreach Message', 'Describe your campaign to draft donor outreach messages.', 'Draft a donor outreach message') },
    { id: 'fundraising_campaign_optimizer', name: 'Fundraising Campaign Optimizer', icon: TrendingUp, description: 'Optimize a fundraising campaign.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Campaign', 'Describe your fundraising campaign to get optimization suggestions.', 'Optimize a fundraising campaign') },
    { id: 'volunteer_scheduling_planner', name: 'Volunteer Scheduling Planner', icon: Calendar, description: 'Plan a volunteer schedule for an event.', component: TextGenerator, componentProps: textGeneratorProps('Volunteer Schedule', 'Describe your event and volunteer needs to get a schedule.', 'Plan a volunteer schedule') },
    { id: 'event_agenda_creator', name: 'Event Agenda Creator', icon: FileText, description: 'Create a detailed event agenda.', component: TextGenerator, componentProps: textGeneratorProps('Event Agenda', 'Describe your event to create a detailed event agenda.', 'Create an event agenda') },
    { id: 'guest_speaker_finder_ai', name: 'Guest Speaker Finder AI', icon: MicVocal, description: 'Find guest speakers for a conference.', component: TextGenerator, componentProps: textGeneratorProps('Speaker Suggestions', 'Describe your event and topic to find guest speakers.', 'Find guest speakers') },
    { id: 'registration_data_analyzer', name: 'Registration Data Analyzer', icon: LineChart, description: 'Analyze event registration data.', component: TextGenerator, componentProps: textGeneratorProps('Registration Analysis', 'Provide registration data to analyze.', 'Analyze registration data') },
    { id: 'audience_engagement_predictor', name: 'Audience Engagement Predictor', icon: Users, description: 'Predict audience engagement for an event.', component: TextGenerator, componentProps: textGeneratorProps('Engagement Prediction', 'Describe your event to predict audience engagement.', 'Predict audience engagement') },
    { id: 'public_opinion_trend_analyzer', name: 'Public Opinion Trend Analyzer', icon: TrendingUp, description: 'Analyze trends in public opinion.', component: TextGenerator, componentProps: textGeneratorProps('Public Opinion Analysis', 'Provide a topic to analyze public opinion trends.', 'Analyze public opinion trends') },
    { id: 'civic_policy_simulation_tool', name: 'Civic Policy Simulation Tool', icon: Landmark, description: 'Simulate the effects of civic policies.', component: TextGenerator, componentProps: textGeneratorProps('Policy Simulation', 'Describe a civic policy to simulate its effects.', 'Simulate a civic policy') },
    { id: 'local_issue_report_generator', name: 'Local Issue Report Generator', icon: Home, description: 'Generate reports on local issues.', component: TextGenerator, componentProps: textGeneratorProps('Local Issue Report', 'Describe a local issue to generate a report.', 'Generate a report on a local issue') },
    { id: 'environmental_impact_calculator', name: 'Environmental Impact Calculator', icon: Leaf, description: 'Calculate the environmental impact of activities.', component: TextGenerator, componentProps: textGeneratorProps('Environmental Impact Report', 'Describe an activity to calculate its environmental impact.', 'Calculate environmental impact') },
    { id: 'climate_data_visualizer', name: 'Climate Data Visualizer', icon: Cloud, description: 'Visualize complex climate data.', component: TextGenerator, componentProps: textGeneratorProps('Climate Data Visualization', 'Provide climate data to visualize.', 'Visualize climate data') },
    { id: 'carbon_footprint_forecaster', name: 'Carbon Footprint Forecaster', icon: Footprints, description: 'Forecast carbon footprints for projects.', component: TextGenerator, componentProps: textGeneratorProps('Carbon Footprint Forecast', 'Describe a project to forecast its carbon footprint.', 'Forecast a carbon footprint') },
    { id: 'wildlife_pattern_tracker', name: 'Wildlife Pattern Tracker', icon: PawPrint, description: 'Track and predict wildlife movement patterns.', component: TextGenerator, componentProps: textGeneratorProps('Wildlife Pattern Analysis', 'Provide data to track wildlife patterns.', 'Track wildlife patterns') },
    { id: 'habitat_restoration_planner', name: 'Habitat Restoration Planner', icon: Leaf, description: 'Plan habitat restoration projects.', component: TextGenerator, componentProps: textGeneratorProps('Habitat Restoration Plan', 'Describe an area to plan habitat restoration.', 'Plan habitat restoration') },
    { id: 'ocean_current_predictor', name: 'Ocean Current Predictor', icon: Wind, description: 'Predict ocean currents and conditions.', component: TextGenerator, componentProps: textGeneratorProps('Ocean Current Prediction', 'Provide location and date to predict ocean currents.', 'Predict ocean currents') },
    { id: 'renewable_energy_yield_estimator', name: 'Renewable Energy Yield Estimator', icon: Wind, description: 'Estimate the yield of renewable energy projects.', component: TextGenerator, componentProps: textGeneratorProps('Energy Yield Estimate', 'Describe a renewable energy project to estimate its yield.', 'Estimate renewable energy yield') },
    { id: 'disaster_response_simulator', name: 'Disaster Response Simulator', icon: Home, description: 'Simulate disaster response scenarios.', component: TextGenerator, componentProps: textGeneratorProps('Disaster Response Simulation', 'Describe a disaster scenario to simulate a response.', 'Simulate a disaster response') },
    { id: 'emergency_evacuation_planner', name: 'Emergency Evacuation Planner', icon: Bus, description: 'Plan emergency evacuation routes and procedures.', component: TextGenerator, componentProps: textGeneratorProps('Evacuation Plan', 'Describe a location to plan an emergency evacuation.', 'Plan an emergency evacuation') },
    { id: 'health_risk_assessment_ai', name: 'Health Risk Assessment AI', icon: HeartPulse, description: 'Assess health risks based on various factors.', component: TextGenerator, componentProps: textGeneratorProps('Health Risk Assessment', 'Provide health data to assess risks.', 'Assess health risks') },
    { id: 'symptom_pattern_analyzer', name: 'Symptom Pattern Analyzer', icon: Stethoscope, description: 'Analyze symptom patterns to identify potential illnesses.', component: TextGenerator, componentProps: textGeneratorProps('Symptom Analysis', 'List symptoms to analyze patterns.', 'Analyze symptom patterns') },
    { id: 'disease_outbreak_predictor', name: 'Disease Outbreak Predictor', icon: TrendingUp, description: 'Predict disease outbreaks based on data.', component: TextGenerator, componentProps: textGeneratorProps('Outbreak Prediction', 'Provide data to predict a disease outbreak.', 'Predict a disease outbreak') },
    { id: 'nutritional_plan_generator', name: 'Nutritional Plan Generator', icon: CookingPot, description: 'Generate personalized nutritional plans.', component: TextGenerator, componentProps: textGeneratorProps('Nutritional Plan', 'Provide your dietary needs to generate a nutritional plan.', 'Generate a nutritional plan') },
    { id: 'exercise_routine_optimizer', name: 'Exercise Routine Optimizer', icon: Dumbbell, description: 'Optimize exercise routines for specific goals.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Routine', 'Describe your fitness goals to get an optimized exercise routine.', 'Optimize an exercise routine') },
    { id: 'sleep_cycle_tracker_ai', name: 'Sleep Cycle Tracker AI', icon: Moon, description: 'Analyze sleep data to provide insights.', component: TextGenerator, componentProps: textGeneratorProps('Sleep Analysis', 'Provide sleep data to analyze your sleep cycle.', 'Analyze a sleep cycle') },
    { id: 'mental_wellness_suggestion_bot', name: 'Mental Wellness Suggestion Bot', icon: Smile, description: 'Provide suggestions for improving mental wellness.', component: TextGenerator, componentProps: textGeneratorProps('Wellness Suggestions', 'Describe your mood to get mental wellness suggestions.', 'Get mental wellness suggestions') },
    { id: 'therapy_session_planner', name: 'Therapy Session Planner', icon: FileText, description: 'Plan and structure therapy sessions.', component: TextGenerator, componentProps: textGeneratorProps('Therapy Session Plan', 'Describe your goals to plan a therapy session.', 'Plan a therapy session') },
    { id: 'medical_literature_summarizer', name: 'Medical Literature Summarizer', icon: BookOpen, description: 'Summarize complex medical literature.', component: TextGenerator, componentProps: textGeneratorProps('Medical Summary', 'Paste medical literature to summarize.', 'Summarize medical literature') },
    { id: 'clinical_trial_data_analyzer', name: 'Clinical Trial Data Analyzer', icon: TestTube, description: 'Analyze data from clinical trials.', component: TextGenerator, componentProps: textGeneratorProps('Clinical Trial Analysis', 'Provide clinical trial data to analyze.', 'Analyze clinical trial data') },
    { id: 'genetic_pattern_detector', name: 'Genetic Pattern Detector', icon: Binary, description: 'Detect patterns in genetic data.', component: TextGenerator, componentProps: textGeneratorProps('Genetic Pattern Analysis', 'Provide genetic data to detect patterns.', 'Detect genetic patterns') },
    { id: 'protein_structure_predictor', name: 'Protein Structure Predictor', icon: Component, description: 'Predict the 3D structure of proteins.', component: TextGenerator, componentProps: textGeneratorProps('Protein Structure', 'Provide a protein sequence to predict its structure.', 'Predict a protein structure') },
    { id: 'drug_interaction_checker', name: 'Drug Interaction Checker', icon: FlaskConical, description: 'Check for potential drug interactions.', component: TextGenerator, componentProps: textGeneratorProps('Drug Interaction Check', 'List drugs to check for interactions.', 'Check drug interactions') },
    { id: 'surgical_procedure_planner', name: 'Surgical Procedure Planner', icon: Stethoscope, description: 'Plan surgical procedures step-by-step.', component: TextGenerator, componentProps: textGeneratorProps('Surgical Plan', 'Describe a surgical case to plan the procedure.', 'Plan a surgical procedure') },
    { id: 'patient_recovery_forecaster', name: 'Patient Recovery Forecaster', icon: TrendingUp, description: 'Forecast patient recovery times and outcomes.', component: TextGenerator, componentProps: textGeneratorProps('Recovery Forecast', 'Provide patient data to forecast recovery.', 'Forecast patient recovery') },
    { id: 'virtual_lab_technician', name: 'Virtual Lab Technician', icon: Beaker, description: 'Simulate lab experiments and procedures.', component: TextGenerator, componentProps: textGeneratorProps('Virtual Experiment', 'Describe an experiment to simulate it.', 'Simulate a lab experiment') },
    { id: 'radiology_image_analyzer', name: 'Radiology Image Analyzer', icon: Image, description: 'Analyze radiology images for anomalies.', component: TextGenerator, componentProps: textGeneratorProps('Radiology Analysis', 'Upload a radiology image to analyze.', 'Analyze a radiology image') },
    { id: 'pathology_report_summarizer', name: 'Pathology Report Summarizer', icon: FileSearch, description: 'Summarize pathology reports for easier understanding.', component: TextGenerator, componentProps: textGeneratorProps('Pathology Summary', 'Paste a pathology report to summarize.', 'Summarize a pathology report') },
    { id: 'diagnostic_support_assistant', name: 'Diagnostic Support Assistant', icon: HelpCircle, description: 'Provide diagnostic support for medical professionals.', component: TextGenerator, componentProps: textGeneratorProps('Diagnostic Support', 'Describe a case to get diagnostic support.', 'Get diagnostic support') },
    { id: 'remote_patient_monitoring_ai', name: 'Remote Patient Monitoring AI', icon: HeartPulse, description: 'Monitor remote patient data and flag anomalies.', component: TextGenerator, componentProps: textGeneratorProps('Patient Monitoring', 'Provide patient data to monitor remotely.', 'Monitor a patient remotely') },
    { id: 'appointment_scheduling_optimizer', name: 'Appointment Scheduling Optimizer', icon: Calendar, description: 'Optimize appointment schedules for efficiency.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Schedule', 'Provide appointment data to optimize the schedule.', 'Optimize an appointment schedule') },
    { id: 'hospital_resource_forecaster', name: 'Hospital Resource Forecaster', icon: Building2, description: 'Forecast hospital resource needs.', component: TextGenerator, componentProps: textGeneratorProps('Resource Forecast', 'Provide data to forecast hospital resource needs.', 'Forecast hospital resources') },
    { id: 'medical_inventory_tracker', name: 'Medical Inventory Tracker', icon: Package, description: 'Track and manage medical inventory.', component: TextGenerator, componentProps: textGeneratorProps('Inventory Management', 'Provide inventory data to track and manage.', 'Track medical inventory') },
    { id: 'treatment_plan_personalizer', name: 'Treatment Plan Personalizer', icon: UserSquare, description: 'Personalize treatment plans based on patient data.', component: TextGenerator, componentProps: textGeneratorProps('Personalized Plan', 'Provide patient data to personalize a treatment plan.', 'Personalize a treatment plan') },
    { id: 'symptom_to_specialist_recommender', name: 'Symptom-to-Specialist Recommender', icon: Stethoscope, description: 'Recommend medical specialists based on symptoms.', component: TextGenerator, componentProps: textGeneratorProps('Specialist Recommendation', 'List symptoms to get a specialist recommendation.', 'Recommend a specialist') },
    { id: 'manufacturing_workflow_optimizer', name: 'Manufacturing Workflow Optimizer', icon: Workflow, description: 'Optimize manufacturing workflows.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Workflow', 'Describe a manufacturing process to optimize the workflow.', 'Optimize a manufacturing workflow') },
    { id: 'quality_control_inspector_ai', name: 'Quality Control Inspector AI', icon: CheckSquare, description: 'Automate quality control inspections.', component: TextGenerator, componentProps: textGeneratorProps('Quality Inspection', 'Describe a product to perform a virtual quality control inspection.', 'Inspect quality control') },
    { id: 'machine_failure_predictor', name: 'Machine Failure Predictor', icon: Bug, description: 'Predict machine failures in a factory setting.', component: TextGenerator, componentProps: textGeneratorProps('Failure Prediction', 'Provide machine data to predict failures.', 'Predict machine failures') },
    { id: 'production_scheduling_planner', name: 'Production Scheduling Planner', icon: GanttChart, description: 'Plan and schedule production runs.', component: TextGenerator, componentProps: textGeneratorProps('Production Schedule', 'Describe your production needs to get a schedule.', 'Plan a production schedule') },
    { id: 'supply_shortage_forecaster', name: 'Supply Shortage Forecaster', icon: TrendingUp, description: 'Forecast potential supply shortages.', component: TextGenerator, componentProps: textGeneratorProps('Shortage Forecast', 'Provide supply chain data to forecast shortages.', 'Forecast supply shortages') },
    { id: 'assembly_line_speed_optimizer', name: 'Assembly Line Speed Optimizer', icon: Factory, description: 'Optimize assembly line speeds.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Speed', 'Describe an assembly line to optimize its speed.', 'Optimize assembly line speed') },
    { id: 'worker_safety_risk_detector', name: 'Worker Safety Risk Detector', icon: ShieldCheck, description: 'Detect safety risks for workers.', component: TextGenerator, componentProps: textGeneratorProps('Safety Risk Analysis', 'Describe a work environment to detect safety risks.', 'Detect worker safety risks') },
    { id: 'energy_usage_analyzer', name: 'Energy Usage Analyzer', icon: Wind, description: 'Analyze and optimize energy usage.', component: TextGenerator, componentProps: textGeneratorProps('Energy Usage Analysis', 'Provide energy usage data to analyze and optimize.', 'Analyze energy usage') },
    { id: 'maintenance_cost_estimator', name: 'Maintenance Cost Estimator', icon: CircleDollarSign, description: 'Estimate the cost of maintenance tasks.', component: TextGenerator, componentProps: textGeneratorProps('Maintenance Cost Estimate', 'Describe a maintenance task to estimate its cost.', 'Estimate maintenance cost') },
    { id: 'smart_factory_process_designer', name: 'Smart Factory Process Designer', icon: Factory, description: 'Design smart factory processes.', component: TextGenerator, componentProps: textGeneratorProps('Smart Factory Design', 'Describe your goals to design a smart factory process.', 'Design a smart factory process') },
    { id: 'robotics_task_planner', name: 'Robotics Task Planner', icon: Puzzle, description: 'Plan tasks for robotic systems.', component: TextGenerator, componentProps: textGeneratorProps('Robotics Task Plan', 'Describe a robotic system and goal to plan its tasks.', 'Plan robotics tasks') },
    { id: 'cad_design_suggestion_tool', name: 'CAD Design Suggestion Tool', icon: Component, description: 'Provide suggestions for CAD designs.', component: TextGenerator, componentProps: textGeneratorProps('CAD Design Suggestions', 'Upload a CAD design to get suggestions.', 'Get CAD design suggestions') },
    { id: 'material_stress_tester_ai', name: 'Material Stress Tester AI', icon: TestTube, description: 'Simulate stress tests on materials.', component: TextGenerator, componentProps: textGeneratorProps('Material Stress Test', 'Describe a material to simulate a stress test.', 'Test material stress') },
    { id: 'product_lifecycle_forecaster', name: 'Product Lifecycle Forecaster', icon: TrendingUp, description: 'Forecast the lifecycle of a product.', component: TextGenerator, componentProps: textGeneratorProps('Product Lifecycle Forecast', 'Describe a product to forecast its lifecycle.', 'Forecast a product lifecycle') },
    { id: 'parts_inventory_balancer', name: 'Parts Inventory Balancer', icon: Package, description: 'Balance parts inventory levels.', component: TextGenerator, componentProps: textGeneratorProps('Inventory Balance', 'Provide parts inventory data to balance levels.', 'Balance parts inventory') },
    { id: 'blueprint_error_detector', name: 'Blueprint Error Detector', icon: Bug, description: 'Detect errors in blueprints and schematics.', component: TextGenerator, componentProps: textGeneratorProps('Blueprint Error Check', 'Upload a blueprint to detect errors.', 'Detect blueprint errors') },
    { id: 'prototype_design_optimizer', name: 'Prototype Design Optimizer', icon: Star, description: 'Optimize prototype designs.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Prototype', 'Upload a prototype design to optimize it.', 'Optimize a prototype design') },
    { id: 'design_to_manufacture_converter', name: 'Design-to-Manufacture Converter', icon: RefreshCw, description: 'Convert design files for manufacturing.', component: TextGenerator, componentProps: textGeneratorProps('Manufacturing Conversion', 'Upload a design file to convert it for manufacturing.', 'Convert a design for manufacturing') },
    { id: 'building_energy_efficiency_analyzer', name: 'Building Energy Efficiency Analyzer', icon: Home, description: 'Analyze the energy efficiency of buildings.', component: TextGenerator, componentProps: textGeneratorProps('Energy Efficiency Analysis', 'Provide building data to analyze its energy efficiency.', 'Analyze building energy efficiency') },
    { id: 'urban_traffic_flow_predictor', name: 'Urban Traffic Flow Predictor', icon: Car, description: 'Predict urban traffic flow.', component: TextGenerator, componentProps: textGeneratorProps('Traffic Prediction', 'Provide location data to predict urban traffic flow.', 'Predict urban traffic flow') },
    { id: 'road_repair_priority_planner', name: 'Road Repair Priority Planner', icon: Route, description: 'Plan road repair priorities.', component: TextGenerator, componentProps: textGeneratorProps('Road Repair Plan', 'Provide road data to plan repair priorities.', 'Plan road repairs') },
    { id: 'parking_demand_forecaster', name: 'Parking Demand Forecaster', icon: Car, description: 'Forecast parking demand.', component: TextGenerator, componentProps: textGeneratorProps('Parking Demand Forecast', 'Provide data to forecast parking demand.', 'Forecast parking demand') },
    { id: 'public_transit_route_optimizer', name: 'Public Transit Route Optimizer', icon: Bus, description: 'Optimize public transit routes.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Transit Route', 'Provide transit data to optimize routes.', 'Optimize public transit routes') },
    { id: 'construction_schedule_forecaster', name: 'Construction Schedule Forecaster', icon: GanttChart, description: 'Forecast construction schedules.', component: TextGenerator, componentProps: textGeneratorProps('Construction Schedule Forecast', 'Provide project data to forecast the construction schedule.', 'Forecast a construction schedule') },
    { id: 'utility_consumption_tracker', name: 'Utility Consumption Tracker', icon: Thermometer, description: 'Track and analyze utility consumption.', component: TextGenerator, componentProps: textGeneratorProps('Utility Consumption Analysis', 'Provide utility data to track and analyze consumption.', 'Track utility consumption') },
    { id: 'smart_lighting_planner', name: 'Smart Lighting Planner', icon: Lightbulb, description: 'Plan smart lighting systems.', component: TextGenerator, componentProps: textGeneratorProps('Smart Lighting Plan', 'Describe a space to plan a smart lighting system.', 'Plan a smart lighting system') },
    { id: 'renewable_grid_load_balancer', name: 'Renewable Grid Load Balancer', icon: Wind, description: 'Balance loads on renewable energy grids.', component: TextGenerator, componentProps: textGeneratorProps('Grid Load Balancing', 'Provide grid data to balance loads.', 'Balance a renewable grid load') },
    { id: 'flood_risk_predictor', name: 'Flood Risk Predictor', icon: Cloud, description: 'Predict flood risks for specific areas.', component: TextGenerator, componentProps: textGeneratorProps('Flood Risk Prediction', 'Provide location data to predict flood risk.', 'Predict flood risk') },
    { id: 'water_usage_efficiency_planner', name: 'Water Usage Efficiency Planner', icon: Thermometer, description: 'Plan for more efficient water usage.', component: TextGenerator, componentProps: textGeneratorProps('Water Efficiency Plan', 'Describe your water usage to get an efficiency plan.', 'Plan water usage efficiency') },
    { id: 'sewage_network_monitoring_ai', name: 'Sewage Network Monitoring AI', icon: Bug, description: 'Monitor sewage networks for issues.', component: TextGenerator, componentProps: textGeneratorProps('Sewage Network Monitoring', 'Provide network data to monitor for issues.', 'Monitor a sewage network') },
    { id: 'crop_yield_forecaster', name: 'Crop Yield Forecaster', icon: Leaf, description: 'Forecast crop yields.', component: TextGenerator, componentProps: textGeneratorProps('Crop Yield Forecast', 'Provide farm data to forecast crop yields.', 'Forecast crop yields') },
    { id: 'soil_nutrient_analyzer', name: 'Soil Nutrient Analyzer', icon: Beaker, description: 'Analyze soil nutrient content.', component: TextGenerator, componentProps: textGeneratorProps('Soil Nutrient Analysis', 'Provide soil data to analyze nutrient content.', 'Analyze soil nutrients') },
    { id: 'pest_infestation_predictor', name: 'Pest Infestation Predictor', icon: Bug, description: 'Predict pest infestations.', component: TextGenerator, componentProps: textGeneratorProps('Pest Infestation Prediction', 'Provide data to predict pest infestations.', 'Predict pest infestations') },
    { id: 'irrigation_optimization_planner', name: 'Irrigation Optimization Planner', icon: Thermometer, description: 'Plan for optimized irrigation.', component: TextGenerator, componentProps: textGeneratorProps('Irrigation Plan', 'Provide farm data to plan optimized irrigation.', 'Plan irrigation optimization') },
    { id: 'farm_equipment_usage_tracker', name: 'Farm Equipment Usage Tracker', icon: Tractor, description: 'Track and analyze farm equipment usage.', component: TextGenerator, componentProps: textGeneratorProps('Equipment Usage Analysis', 'Provide equipment data to track and analyze usage.', 'Track farm equipment usage') },
    { id: 'agricultural_market_price_forecaster', name: 'Agricultural Market Price Forecaster', icon: TrendingUp, description: 'Forecast agricultural market prices.', component: TextGenerator, componentProps: textGeneratorProps('Market Price Forecast', 'Provide market data to forecast agricultural prices.', 'Forecast agricultural market prices') },
    { id: 'greenhouse_climate_controller', name: 'Greenhouse Climate Controller', icon: Cloud, description: 'Control greenhouse climates automatically.', component: TextGenerator, componentProps: textGeneratorProps('Greenhouse Climate Control', 'Describe your greenhouse to get a climate control plan.', 'Control a greenhouse climate') },
    { id: 'livestock_health_monitor', name: 'Livestock Health Monitor', icon: HeartPulse, description: 'Monitor the health of livestock.', component: TextGenerator, componentProps: textGeneratorProps('Livestock Health Monitoring', 'Provide livestock data to monitor their health.', 'Monitor livestock health') },
    { id: 'seed_selection_optimizer', name: 'Seed Selection Optimizer', icon: Leaf, description: 'Optimize seed selection for crops.', component: TextGenerator, componentProps: textGeneratorProps('Seed Selection', 'Provide crop goals to get optimized seed selections.', 'Optimize seed selection') },
    { id: 'weather_impact_predictor', name: 'Weather Impact Predictor', icon: Cloud, description: 'Predict the impact of weather on various systems.', component: TextGenerator, componentProps: textGeneratorProps('Weather Impact Prediction', 'Describe a system and location to predict weather impact.', 'Predict weather impact') },
    { id: 'sports_performance_analyzer', name: 'Sports Performance Analyzer', icon: BarChart3, description: 'Analyze sports performance data.', component: TextGenerator, componentProps: textGeneratorProps('Performance Analysis', 'Provide sports data to analyze performance.', 'Analyze sports performance') },
    { id: 'athlete_training_optimizer', name: 'Athlete Training Optimizer', icon: Dumbbell, description: 'Optimize training plans for athletes.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Training Plan', 'Provide athlete data to optimize a training plan.', 'Optimize an athlete\'s training') },
    { id: 'game_strategy_simulator', name: 'Game Strategy Simulator', icon: Gamepad2, description: 'Simulate game strategies.', component: TextGenerator, componentProps: textGeneratorProps('Game Strategy Simulation', 'Describe a game to simulate strategies.', 'Simulate a game strategy') },
    { id: 'player_injury_risk_detector', name: 'Player Injury Risk Detector', icon: HeartPulse, description: 'Detect the risk of injury for players.', component: TextGenerator, componentProps: textGeneratorProps('Injury Risk Analysis', 'Provide player data to detect injury risk.', 'Detect player injury risk') },
    { id: 'match_outcome_predictor', name: 'Match Outcome Predictor', icon: Trophy, description: 'Predict the outcome of sports matches.', component: TextGenerator, componentProps: textGeneratorProps('Match Outcome Prediction', 'Provide match data to predict the outcome.', 'Predict a match outcome') },
    { id: 'tournament_schedule_optimizer', name: 'Tournament Schedule Optimizer', icon: GanttChart, description: 'Optimize tournament schedules.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Tournament Schedule', 'Provide tournament data to optimize the schedule.', 'Optimize a tournament schedule') },
    { id: 'fan_engagement_tracker', name: 'Fan Engagement Tracker', icon: Users, description: 'Track and analyze fan engagement.', component: TextGenerator, componentProps: textGeneratorProps('Fan Engagement Analysis', 'Provide social media data to track fan engagement.', 'Track fan engagement') },
    { id: 'sponsorship_roi_analyzer', name: 'Sponsorship ROI Analyzer', icon: BadgePercent, description: 'Analyze the return on investment for sponsorships.', component: TextGenerator, componentProps: textGeneratorProps('Sponsorship ROI Analysis', 'Provide sponsorship data to analyze ROI.', 'Analyze sponsorship ROI') },
    { id: 'merchandise_sales_forecaster', name: 'Merchandise Sales Forecaster', icon: Shirt, description: 'Forecast merchandise sales.', component: TextGenerator, componentProps: textGeneratorProps('Merchandise Sales Forecast', 'Provide sales data to forecast merchandise sales.', 'Forecast merchandise sales') },
    { id: 'ticket_price_optimizer', name: 'Ticket Price Optimizer', icon: CircleDollarSign, description: 'Optimize ticket prices for events.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Ticket Prices', 'Provide event data to optimize ticket prices.', 'Optimize ticket prices') },
    { id: 'streaming_audience_predictor', name: 'Streaming Audience Predictor', icon: Users, description: 'Predict the audience for streaming events.', component: TextGenerator, componentProps: textGeneratorProps('Streaming Audience Prediction', 'Describe a streaming event to predict its audience.', 'Predict a streaming audience') },
    { id: 'social_sentiment_analyzer', name: 'Social Sentiment Analyzer', icon: Smile, description: 'Analyze social media sentiment.', component: TextGenerator, componentProps: textGeneratorProps('Social Sentiment Analysis', 'Provide a topic to analyze social media sentiment.', 'Analyze social sentiment') },
    { id: 'trend_forecast_engine', name: 'Trend Forecast Engine', icon: TrendingUp, description: 'Forecast trends based on data.', component: TextGenerator, componentProps: textGeneratorProps('Trend Forecast', 'Provide data to forecast trends.', 'Forecast trends') },
    { id: 'brand_loyalty_scorer', name: 'Brand Loyalty Scorer', icon: Heart, description: 'Score brand loyalty based on customer data.', component: TextGenerator, componentProps: textGeneratorProps('Brand Loyalty Score', 'Provide customer data to score brand loyalty.', 'Score brand loyalty') },
    { id: 'customer_review_summarizer', name: 'Customer Review Summarizer', icon: FileText, description: 'Summarize large volumes of customer reviews.', component: TextGenerator, componentProps: textGeneratorProps('Review Summary', 'Paste customer reviews to summarize.', 'Summarize customer reviews') },
    { id: 'influence_network_mapper', name: 'Influence Network Mapper', icon: GitBranch, description: 'Map out influence networks on social media.', component: TextGenerator, componentProps: textGeneratorProps('Influence Network Map', 'Provide a topic to map the influence network.', 'Map an influence network') },
    { id: 'viral_content_predictor', name: 'Viral Content Predictor', icon: TrendingUp, description: 'Predict the potential for content to go viral.', component: TextGenerator, componentProps: textGeneratorProps('Viral Prediction', 'Describe content to predict its viral potential.', 'Predict viral content') },
    { id: 'ad_campaign_performance_forecaster', name: 'Ad Campaign Performance Forecaster', icon: Megaphone, description: 'Forecast the performance of ad campaigns.', component: TextGenerator, componentProps: textGeneratorProps('Ad Campaign Forecast', 'Describe an ad campaign to forecast its performance.', 'Forecast an ad campaign') },
    { id: 'conversion_funnel_optimizer', name: 'Conversion Funnel Optimizer', icon: Filter, description: 'Optimize conversion funnels.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Funnel', 'Describe a conversion funnel to optimize it.', 'Optimize a conversion funnel') },
    { id: 'lead_scoring_ai', name: 'Lead Scoring AI', icon: Star, description: 'Score leads based on their likelihood to convert.', component: TextGenerator, componentProps: textGeneratorProps('Lead Score', 'Provide lead data to score their conversion likelihood.', 'Score leads') },
    { id: 'sales_forecasting_assistant', name: 'Sales Forecasting Assistant', icon: TrendingUp, description: 'Assist with sales forecasting.', component: TextGenerator, componentProps: textGeneratorProps('Sales Forecast', 'Provide sales data to get a forecast.', 'Get a sales forecast') },
    { id: 'upsell_recommendation_engine', name: 'Upsell Recommendation Engine', icon: ArrowUp, description: 'Recommend upsell opportunities.', component: TextGenerator, componentProps: textGeneratorProps('Upsell Recommendations', 'Provide customer data to get upsell recommendations.', 'Get upsell recommendations') },
    { id: 'cross_sell_pattern_finder', name: 'Cross-Sell Pattern Finder', icon: Shuffle, description: 'Find patterns for cross-selling products.', component: TextGenerator, componentProps: textGeneratorProps('Cross-Sell Patterns', 'Provide sales data to find cross-sell patterns.', 'Find cross-sell patterns') },
    { id: 'product_return_risk_detector', name: 'Product Return Risk Detector', icon: Package, description: 'Detect the risk of a product being returned.', component: TextGenerator, componentProps: textGeneratorProps('Return Risk Analysis', 'Provide product data to detect return risk.', 'Detect product return risk') },
    { id: 'loyalty_reward_planner', name: 'Loyalty Reward Planner', icon: Trophy, description: 'Plan loyalty reward programs.', component: TextGenerator, componentProps: textGeneratorProps('Loyalty Program Plan', 'Describe your business to plan a loyalty program.', 'Plan a loyalty program') },
    { id: 'customer_retention_strategy_maker', name: 'Customer Retention Strategy Maker', icon: Anchor, description: 'Create customer retention strategies.', component: TextGenerator, componentProps: textGeneratorProps('Retention Strategy', 'Describe your business to create customer retention strategies.', 'Create a customer retention strategy') },
    { id: 'store_layout_optimization_ai', name: 'Store Layout Optimization AI', icon: Home, description: 'Optimize store layouts for sales.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Store Layout', 'Describe your store to get an optimized layout.', 'Optimize a store layout') },
    { id: 'shelf_stocking_suggestion_tool', name: 'Shelf Stocking Suggestion Tool', icon: Package, description: 'Suggest how to stock shelves for optimal sales.', component: TextGenerator, componentProps: textGeneratorProps('Shelf Stocking Suggestions', 'Provide sales data to get shelf stocking suggestions.', 'Get shelf stocking suggestions') },
    { id: 'price_match_detector', name: 'Price Match Detector', icon: CircleDollarSign, description: 'Detect price matching opportunities.', component: TextGenerator, componentProps: textGeneratorProps('Price Match Detection', 'Provide a product to detect price matching opportunities.', 'Detect price matches') },
    { id: 'seasonal_demand_forecaster', name: 'Seasonal Demand Forecaster', icon: Cloud, description: 'Forecast seasonal demand for products.', component: TextGenerator, componentProps: textGeneratorProps('Seasonal Demand Forecast', 'Describe a product to forecast its seasonal demand.', 'Forecast seasonal demand') },
    { id: 'fashion_trend_predictor', name: 'Fashion Trend Predictor', icon: Shirt, description: 'Predict fashion trends.', component: TextGenerator, componentProps: textGeneratorProps('Fashion Trend Prediction', 'Provide data to predict fashion trends.', 'Predict fashion trends') },
    { id: 'outfit_combination_recommender', name: 'Outfit Combination Recommender', icon: Shirt, description: 'Recommend outfit combinations.', component: TextGenerator, componentProps: textGeneratorProps('Outfit Recommendations', 'Describe your style to get outfit recommendations.', 'Get outfit recommendations') },
    { id: 'fabric_quality_analyzer', name: 'Fabric Quality Analyzer', icon: Beaker, description: 'Analyze the quality of fabrics.', component: TextGenerator, componentProps: textGeneratorProps('Fabric Quality Analysis', 'Describe a fabric to analyze its quality.', 'Analyze fabric quality') },
    { id: 'production_batch_optimizer', name: 'Production Batch Optimizer', icon: Factory, description: 'Optimize production batch sizes.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Batch Size', 'Provide production data to optimize batch sizes.', 'Optimize production batch sizes') },
    { id: 'color_palette_forecaster', name: 'Color Palette Forecaster', icon: Palette, description: 'Forecast color palette trends.', component: TextGenerator, componentProps: textGeneratorProps('Color Palette Forecast', 'Provide data to forecast color palette trends.', 'Forecast color palettes') },
    { id: 'textile_pattern_designer_ai', name: 'Textile Pattern Designer AI', icon: Wand2, description: 'Design textile patterns with AI.', component: TextGenerator, componentProps: textGeneratorProps('Textile Pattern Design', 'Describe a theme to design a textile pattern.', 'Design a textile pattern') },
    { id: 'jewelry_design_suggestor', name: 'Jewelry Design Suggestor', icon: Star, description: 'Suggest jewelry designs.', component: TextGenerator, componentProps: textGeneratorProps('Jewelry Design Suggestions', 'Describe a style to get jewelry design suggestions.', 'Get jewelry design suggestions') },
    { id: 'shoe_size_fit_predictor', name: 'Shoe Size Fit Predictor', icon: Footprints, description: 'Predict the best shoe size fit.', component: TextGenerator, componentProps: textGeneratorProps('Shoe Size Prediction', 'Provide foot measurements to predict shoe size.', 'Predict shoe size') },
    { id: 'accessory_style_matcher', name: 'Accessory Style Matcher', icon: Shirt, description: 'Match accessories to different styles.', component: TextGenerator, componentProps: textGeneratorProps('Accessory Recommendations', 'Describe an outfit to get accessory recommendations.', 'Match accessories to styles') },
    { id: 'luxury_goods_market_forecaster', name: 'Luxury Goods Market Forecaster', icon: Crown, description: 'Forecast the luxury goods market.', component: TextGenerator, componentProps: textGeneratorProps('Luxury Market Forecast', 'Provide data to forecast the luxury goods market.', 'Forecast the luxury goods market') },
    { id: 'music_mood_classifier', name: 'Music Mood Classifier', icon: Music, description: 'Classify the mood of music.', component: TextGenerator, componentProps: textGeneratorProps('Music Mood', 'Upload a song to classify its mood.', 'Classify music mood') },
    { id: 'song_tempo_analyzer', name: 'Song Tempo Analyzer', icon: Clock, description: 'Analyze the tempo of a song.', component: TextGenerator, componentProps: textGeneratorProps('Song Tempo', 'Upload a song to analyze its tempo.', 'Analyze song tempo') },
    { id: 'instrument_arrangement_suggestor', name: 'Instrument Arrangement Suggestor', icon: Piano, description: 'Suggest instrument arrangements for a song.', component: TextGenerator, componentProps: textGeneratorProps('Instrument Arrangement', 'Describe a song to get instrument arrangement suggestions.', 'Suggest an instrument arrangement') },
    { id: 'chord_progression_generator', name: 'Chord Progression Generator', icon: Music, description: 'Generate chord progressions.', component: TextGenerator, componentProps: textGeneratorProps('Chord Progression', 'Describe a mood to generate a chord progression.', 'Generate a chord progression') },
    { id: 'mixing_mastering_advisor', name: 'Mixing & Mastering Advisor', icon: SlidersHorizontal, description: 'Provide advice on mixing and mastering audio.', component: TextGenerator, componentProps: textGeneratorProps('Mixing/Mastering Advice', 'Upload a track to get mixing and mastering advice.', 'Get mixing and mastering advice') },
    { id: 'sound_quality_enhancer', name: 'Sound Quality Enhancer', icon: AudioLines, description: 'Enhance the quality of audio recordings.', component: TextGenerator, componentProps: textGeneratorProps('Enhanced Audio', 'Upload an audio file to enhance its quality.', 'Enhance audio quality') },
    { id: 'audio_scene_identifier', name: 'Audio Scene Identifier', icon: AudioLines, description: 'Identify scenes from audio clips.', component: TextGenerator, componentProps: textGeneratorProps('Audio Scene', 'Upload an audio clip to identify the scene.', 'Identify an audio scene') },
    { id: 'noise_removal_optimizer', name: 'Noise Removal Optimizer', icon: Mic, description: 'Optimize noise removal from audio.', component: TextGenerator, componentProps: textGeneratorProps('Noise-Free Audio', 'Upload an audio file to remove noise.', 'Remove audio noise') },
    { id: 'speech_emotion_analyzer', name: 'Speech Emotion Analyzer', icon: Smile, description: 'Analyze the emotion in speech.', component: TextGenerator, componentProps: textGeneratorProps('Speech Emotion', 'Upload a speech clip to analyze the emotion.', 'Analyze speech emotion') },
    { id: 'podcast_topic_planner', name: 'Podcast Topic Planner', icon: MicVocal, description: 'Plan topics for a podcast series.', component: TextGenerator, componentProps: textGeneratorProps('Podcast Topics', 'Describe your podcast to get topic ideas.', 'Plan podcast topics') },
    { id: 'radio_ad_effectiveness_tracker', name: 'Radio Ad Effectiveness Tracker', icon: Megaphone, description: 'Track the effectiveness of radio ads.', component: TextGenerator, componentProps: textGeneratorProps('Ad Effectiveness', 'Provide ad data to track its effectiveness.', 'Track radio ad effectiveness') },
    { id: 'film_script_coverage_ai', name: 'Film Script Coverage AI', icon: FileText, description: 'Provide coverage for film scripts.', component: TextGenerator, componentProps: textGeneratorProps('Script Coverage', 'Upload a film script to get coverage.', 'Get film script coverage') },
    { id: 'scene_location_suggestor', name: 'Scene Location Suggestor', icon: Map, description: 'Suggest locations for film scenes.', component: TextGenerator, componentProps: textGeneratorProps('Location Suggestions', 'Describe a scene to get location suggestions.', 'Suggest scene locations') },
    { id: 'casting_fit_analyzer', name: 'Casting Fit Analyzer', icon: Users, description: 'Analyze the fit of actors for roles.', component: TextGenerator, componentProps: textGeneratorProps('Casting Fit', 'Describe a role to analyze casting fit.', 'Analyze casting fit') },
    { id: 'shot_sequence_planner', name: 'Shot Sequence Planner', icon: Clapperboard, description: 'Plan shot sequences for a film.', component: TextGenerator, componentProps: textGeneratorProps('Shot Sequence', 'Describe a scene to plan the shot sequence.', 'Plan a shot sequence') },
    { id: 'lighting_setup_optimizer', name: 'Lighting Setup Optimizer', icon: Lightbulb, description: 'Optimize lighting setups for scenes.', component: TextGenerator, componentProps: textGeneratorProps('Lighting Setup', 'Describe a scene to optimize the lighting setup.', 'Optimize a lighting setup') },
    { id: 'special_effects_cost_estimator', name: 'Special Effects Cost Estimator', icon: CircleDollarSign, description: 'Estimate the cost of special effects.', component: TextGenerator, componentProps: textGeneratorProps('SFX Cost Estimate', 'Describe special effects to estimate their cost.', 'Estimate special effects cost') },
    { id: 'post_production_workflow_planner', name: 'Post-Production Workflow Planner', icon: Workflow, description: 'Plan post-production workflows.', component: TextGenerator, componentProps: textGeneratorProps('Post-Production Workflow', 'Describe a project to plan the post-production workflow.', 'Plan a post-production workflow') },
    { id: 'trailer_impact_predictor', name: 'Trailer Impact Predictor', icon: Film, description: 'Predict the impact of a movie trailer.', component: TextGenerator, componentProps: textGeneratorProps('Trailer Impact', 'Describe a trailer to predict its impact.', 'Predict trailer impact') },
    { id: 'audience_review_sentiment_tracker', name: 'Audience Review Sentiment Tracker', icon: Smile, description: 'Track sentiment in audience reviews.', component: TextGenerator, componentProps: textGeneratorProps('Audience Sentiment', 'Provide reviews to track audience sentiment.', 'Track audience sentiment') },
    { id: 'board_game_rule_optimizer', name: 'Board Game Rule Optimizer', icon: Gamepad2, description: 'Optimize the rules of a board game.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Rules', 'Describe a board game to optimize its rules.', 'Optimize board game rules') },
    { id: 'puzzle_difficulty_balancer', name: 'Puzzle Difficulty Balancer', icon: Puzzle, description: 'Balance the difficulty of puzzles.', component: TextGenerator, componentProps: textGeneratorProps('Balanced Puzzle', 'Describe a puzzle to balance its difficulty.', 'Balance puzzle difficulty') },
    { id: 'level_design_ai', name: 'Level Design AI', icon: Component, description: 'Assist with the design of game levels.', component: TextGenerator, componentProps: textGeneratorProps('Level Design', 'Describe a game to get level design assistance.', 'Get level design assistance') },
    { id: 'game_lore_expansion_tool', name: 'Game Lore Expansion Tool', icon: BookOpen, description: 'Expand the lore of a game world.', component: TextGenerator, componentProps: textGeneratorProps('Expanded Lore', 'Describe a game world to expand its lore.', 'Expand game lore') },
    { id: 'enemy_behavior_modeler', name: 'Enemy Behavior Modeler', icon: Bug, description: 'Model the behavior of game enemies.', component: TextGenerator, componentProps: textGeneratorProps('Enemy Behavior', 'Describe an enemy to model its behavior.', 'Model enemy behavior') },
    { id: 'loot_drop_probability_balancer', name: 'Loot Drop Probability Balancer', icon: Trophy, description: 'Balance loot drop probabilities in games.', component: TextGenerator, componentProps: textGeneratorProps('Balanced Loot Drops', 'Describe a game to balance its loot drop probabilities.', 'Balance loot drops') },
    { id: 'player_motivation_analyzer', name: 'Player Motivation Analyzer', icon: User, description: 'Analyze player motivations in games.', component: TextGenerator, componentProps: textGeneratorProps('Player Motivation', 'Describe a game to analyze player motivations.', 'Analyze player motivations') },
    { id: 'multiplayer_matchmaking_optimizer', name: 'Multiplayer Matchmaking Optimizer', icon: Users, description: 'Optimize matchmaking for multiplayer games.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Matchmaking', 'Describe a game to optimize its matchmaking.', 'Optimize matchmaking') },
    { id: 'esports_strategy_advisor', name: 'Esports Strategy Advisor', icon: Trophy, description: 'Provide strategic advice for esports.', component: TextGenerator, componentProps: textGeneratorProps('Esports Strategy', 'Describe a game to get esports strategy advice.', 'Get esports strategy advice') },
    { id: 'speedrun_path_optimizer', name: 'Speedrun Path Optimizer', icon: Route, description: 'Optimize paths for speedrunning games.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Speedrun Path', 'Describe a game to optimize its speedrun path.', 'Optimize a speedrun path') },
    { id: 'education_syllabus_planner', name: 'Education Syllabus Planner', icon: BookOpen, description: 'Plan a syllabus for a course.', component: TextGenerator, componentProps: textGeneratorProps('Syllabus', 'Describe a course to plan its syllabus.', 'Plan a syllabus') },
    { id: 'exam_pattern_analyzer', name: 'Exam Pattern Analyzer', icon: FileSearch, description: 'Analyze patterns in exams.', component: TextGenerator, componentProps: textGeneratorProps('Exam Patterns', 'Provide exam data to analyze patterns.', 'Analyze exam patterns') },
    { id: 'learning_pace_personalizer', name: 'Learning Pace Personalizer', icon: User, description: 'Personalize learning paces for students.', component: TextGenerator, componentProps: textGeneratorProps('Personalized Learning Pace', 'Provide student data to personalize their learning pace.', 'Personalize a learning pace') },
    { id: 'curriculum_gap_identifier', name: 'Curriculum Gap Identifier', icon: Search, description: 'Identify gaps in a curriculum.', component: TextGenerator, componentProps: textGeneratorProps('Curriculum Gaps', 'Provide a curriculum to identify gaps.', 'Identify curriculum gaps') },
    { id: 'teaching_method_suggestor', name: 'Teaching Method Suggestor', icon: Lightbulb, description: 'Suggest teaching methods for subjects.', component: TextGenerator, componentProps: textGeneratorProps('Teaching Methods', 'Describe a subject to get teaching method suggestions.', 'Suggest teaching methods') },
    { id: 'classroom_engagement_tracker', name: 'Classroom Engagement Tracker', icon: Users, description: 'Track and analyze classroom engagement.', component: TextGenerator, componentProps: textGeneratorProps('Classroom Engagement', 'Describe a class to track and analyze engagement.', 'Track classroom engagement') },
    { id: 'assignment_feedback_generator', name: 'Assignment Feedback Generator', icon: FileText, description: 'Generate feedback for student assignments.', component: TextGenerator, componentProps: textGeneratorProps('Assignment Feedback', 'Upload an assignment to generate feedback.', 'Generate assignment feedback') },
    { id: 'question_difficulty_calibrator', name: 'Question Difficulty Calibrator', icon: SlidersHorizontal, description: 'Calibrate the difficulty of questions.', component: TextGenerator, componentProps: textGeneratorProps('Calibrated Questions', 'Provide questions to calibrate their difficulty.', 'Calibrate question difficulty') },
    { id: 'lesson_plan_enhancer', name: 'Lesson Plan Enhancer', icon: BookOpen, description: 'Enhance lesson plans.', component: TextGenerator, componentProps: textGeneratorProps('Enhanced Lesson Plan', 'Upload a lesson plan to enhance it.', 'Enhance a lesson plan') },
    { id: 'grading_consistency_checker', name: 'Grading Consistency Checker', icon: CheckSquare, description: 'Check for consistency in grading.', component: TextGenerator, componentProps: textGeneratorProps('Grading Consistency', 'Provide grading data to check for consistency.', 'Check grading consistency') },
    { id: 'tutoring_session_scheduler', name: 'Tutoring Session Scheduler', icon: Calendar, description: 'Schedule tutoring sessions.', component: TextGenerator, componentProps: textGeneratorProps('Tutoring Schedule', 'Provide availability to schedule tutoring sessions.', 'Schedule tutoring sessions') },
    { id: 'learning_style_analyzer', name: 'Learning Style Analyzer', icon: UserSquare, description: 'Analyze learning styles.', component: TextGenerator, componentProps: textGeneratorProps('Learning Style', 'Answer a questionnaire to analyze your learning style.', 'Analyze a learning style') },
    { id: 'peer_review_summarizer', name: 'Peer Review Summarizer', icon: Users, description: 'Summarize peer reviews.', component: TextGenerator, componentProps: textGeneratorProps('Peer Review Summary', 'Upload peer reviews to summarize them.', 'Summarize peer reviews') },
    { id: 'academic_progress_forecaster', name: 'Academic Progress Forecaster', icon: TrendingUp, description: 'Forecast academic progress.', component: TextGenerator, componentProps: textGeneratorProps('Academic Progress Forecast', 'Provide student data to forecast academic progress.', 'Forecast academic progress') },
    { id: 'online_course_enrollment_predictor', name: 'Online Course Enrollment Predictor', icon: GraduationCap, description: 'Predict enrollment numbers for online courses.', component: TextGenerator, componentProps: textGeneratorProps('Enrollment Prediction', 'Provide course data to predict enrollment.', 'Predict online course enrollment') },
    { id: 'quiz_question_generator', name: 'Quiz Question Generator', icon: HelpCircle, description: 'Generate quiz questions.', component: TextGenerator, componentProps: textGeneratorProps('Quiz Questions', 'Provide a topic to generate quiz questions.', 'Generate quiz questions') },
    { id: 'flashcard_auto_creator', name: 'Flashcard Auto-Creator', icon: FilePlus, description: 'Automatically create flashcards from text.', component: TextGenerator, componentProps: textGeneratorProps('Flashcards', 'Paste text to create flashcards.', 'Create flashcards') },
    { id: 'concept_reinforcement_planner', name: 'Concept Reinforcement Planner', icon: BrainCog, description: 'Plan concept reinforcement activities.', component: TextGenerator, componentProps: textGeneratorProps('Reinforcement Plan', 'Describe a concept to plan reinforcement activities.', 'Plan concept reinforcement') },
    { id: 'study_group_matching_ai', name: 'Study Group Matching AI', icon: Users, description: 'Match students into study groups.', component: TextGenerator, componentProps: textGeneratorProps('Study Groups', 'Provide your profile to get matched with a study group.', 'Match with a study group') },
    { id: 'skill_gap_forecaster', name: 'Skill Gap Forecaster', icon: TrendingUp, description: 'Forecast skill gaps in the workforce.', component: TextGenerator, componentProps: textGeneratorProps('Skill Gap Forecast', 'Provide industry data to forecast skill gaps.', 'Forecast skill gaps') },
    { id: 'language_learning_path_optimizer', name: 'Language Learning Path Optimizer', icon: Languages, description: 'Optimize learning paths for languages.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Learning Path', 'Choose a language to get an optimized learning path.', 'Optimize a language learning path') },
    { id: 'pronunciation_feedback_ai', name: 'Pronunciation Feedback AI', icon: Mic, description: 'Provide feedback on pronunciation.', component: TextGenerator, componentProps: textGeneratorProps('Pronunciation Feedback', 'Record your voice to get pronunciation feedback.', 'Get pronunciation feedback') },
    { id: 'vocabulary_expansion_tool', name: 'Vocabulary Expansion Tool', icon: BookOpen, description: 'Help expand vocabulary.', component: TextGenerator, componentProps: textGeneratorProps('Vocabulary Expansion', 'Choose a topic to expand your vocabulary.', 'Expand your vocabulary') },
    { id: 'grammar_practice_creator', name: 'Grammar Practice Creator', icon: BookCheck, description: 'Create grammar practice exercises.', component: TextGenerator, componentProps: textGeneratorProps('Grammar Practice', 'Choose a grammar topic to get practice exercises.', 'Create grammar practice') },
    { id: 'idiom_usage_coach', name: 'Idiom Usage Coach', icon: Drama, description: 'Coach on the usage of idioms.', component: TextGenerator, componentProps: textGeneratorProps('Idiom Coach', 'Choose an idiom to get usage coaching.', 'Get idiom usage coaching') },
    { id: 'cultural_context_advisor', name: 'Cultural Context Advisor', icon: Globe, description: 'Provide cultural context for language.', component: TextGenerator, componentProps: textGeneratorProps('Cultural Context', 'Ask about cultural context for a language.', 'Get cultural context') },
    { id: 'debate_strategy_planner', name: 'Debate Strategy Planner', icon: Swords, description: 'Plan debate strategies.', component: TextGenerator, componentProps: textGeneratorProps('Debate Strategy', 'Describe a debate topic to plan your strategy.', 'Plan a debate strategy') },
    { id: 'speech_timing_analyzer', name: 'Speech Timing Analyzer', icon: Clock, description: 'Analyze the timing of speeches.', component: TextGenerator, componentProps: textGeneratorProps('Speech Timing', 'Upload a speech to analyze its timing.', 'Analyze speech timing') },
    { id: 'presentation_flow_optimizer', name: 'Presentation Flow Optimizer', icon: Presentation, description: 'Optimize the flow of presentations.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Presentation Flow', 'Upload a presentation to optimize its flow.', 'Optimize a presentation flow') },
    { id: 'visual_aid_suggestor', name: 'Visual Aid Suggestor', icon: Image, description: 'Suggest visual aids for presentations.', component: TextGenerator, componentProps: textGeneratorProps('Visual Aid Suggestions', 'Describe your presentation to get visual aid suggestions.', 'Get visual aid suggestions') },
    { id: 'slide_deck_consistency_checker', name: 'Slide Deck Consistency Checker', icon: CheckSquare, description: 'Check for consistency in slide decks.', component: TextGenerator, componentProps: textGeneratorProps('Slide Deck Consistency', 'Upload a slide deck to check for consistency.', 'Check slide deck consistency') },
    { id: 'audience_engagement_timer', name: 'Audience Engagement Timer', icon: Clock, description: 'Time audience engagement during presentations.', component: TextGenerator, componentProps: textGeneratorProps('Audience Engagement', 'Start a timer to track audience engagement.', 'Time audience engagement') },
    { id: 'professional_bio_generator', name: 'Professional Bio Generator', icon: User, description: 'Generate professional biographies.', component: TextGenerator, componentProps: textGeneratorProps('Professional Bio', 'Provide your details to generate a professional bio.', 'Generate a professional bio') },
    { id: 'resume_keyword_optimizer', name: 'Resume Keyword Optimizer', icon: FileText, description: 'Optimize resumes with relevant keywords.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Resume', 'Upload your resume to optimize it with keywords.', 'Optimize a resume') },
    { id: 'cover_letter_personalizer', name: 'Cover Letter Personalizer', icon: Mail, description: 'Personalize cover letters for job applications.', component: TextGenerator, componentProps: textGeneratorProps('Personalized Cover Letter', 'Provide a job description to personalize your cover letter.', 'Personalize a cover letter') },
    { id: 'job_interview_simulation_ai', name: 'Job Interview Simulation AI', icon: Mic, description: 'Simulate job interviews.', component: TextGenerator, componentProps: textGeneratorProps('Interview Simulation', 'Choose a job role to simulate an interview.', 'Simulate a job interview') },
    { id: 'career_path_predictor', name: 'Career Path Predictor', icon: Route, description: 'Predict potential career paths.', component: TextGenerator, componentProps: textGeneratorProps('Career Path', 'Provide your profile to predict your career path.', 'Predict a career path') },
    { id: 'skill_endorsement_analyzer', name: 'Skill Endorsement Analyzer', icon: Star, description: 'Analyze skill endorsements.', component: TextGenerator, componentProps: textGeneratorProps('Skill Endorsements', 'Provide your skills to analyze endorsements.', 'Analyze skill endorsements') },
    { id: 'salary_benchmarking_tool', name: 'Salary Benchmarking Tool', icon: CircleDollarSign, description: 'Benchmark salaries for various roles.', component: TextGenerator, componentProps: textGeneratorProps('Salary Benchmark', 'Provide a job role to benchmark the salary.', 'Benchmark a salary') },
    { id: 'workplace_culture_fit_analyzer', name: 'Workplace Culture Fit Analyzer', icon: Building2, description: 'Analyze fit with workplace cultures.', component: TextGenerator, componentProps: textGeneratorProps('Culture Fit', 'Describe yourself to analyze your workplace culture fit.', 'Analyze workplace culture fit') },
    { id: 'employee_feedback_summarizer', name: 'Employee Feedback Summarizer', icon: FileText, description: 'Summarize employee feedback.', component: TextGenerator, componentProps: textGeneratorProps('Feedback Summary', 'Upload employee feedback to summarize it.', 'Summarize employee feedback') },
    { id: 'team_dynamics_predictor', name: 'Team Dynamics Predictor', icon: Users, description: 'Predict team dynamics.', component: TextGenerator, componentProps: textGeneratorProps('Team Dynamics', 'Describe a team to predict its dynamics.', 'Predict team dynamics') },
    { id: 'leadership_style_analyzer', name: 'Leadership Style Analyzer', icon: UserSquare, description: 'Analyze leadership styles.', component: TextGenerator, componentProps: textGeneratorProps('Leadership Style', 'Answer a questionnaire to analyze your leadership style.', 'Analyze a leadership style') },
    { id: 'meeting_agenda_optimizer', name: 'Meeting Agenda Optimizer', icon: GanttChart, description: 'Optimize meeting agendas.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Agenda', 'Upload a meeting agenda to optimize it.', 'Optimize a meeting agenda') },
    { id: 'task_priority_planner', name: 'Task Priority Planner', icon: Milestone, description: 'Plan task priorities.', component: TextGenerator, componentProps: textGeneratorProps('Task Priorities', 'List your tasks to plan their priorities.', 'Plan task priorities') },
    { id: 'workload_balancer_ai', name: 'Workload Balancer AI', icon: SlidersHorizontal, description: 'Balance workloads among team members.', component: TextGenerator, componentProps: textGeneratorProps('Balanced Workload', 'Describe your team to balance their workloads.', 'Balance workloads') },
    { id: 'deadline_risk_detector', name: 'Deadline Risk Detector', icon: Clock, description: 'Detect risks of missing deadlines.', component: TextGenerator, componentProps: textGeneratorProps('Deadline Risk', 'Describe a project to detect deadline risks.', 'Detect deadline risks') },
    { id: 'resource_allocation_forecaster', name: 'Resource Allocation Forecaster', icon: Users, description: 'Forecast resource allocation needs.', component: TextGenerator, componentProps: textGeneratorProps('Resource Allocation', 'Describe a project to forecast resource allocation needs.', 'Forecast resource allocation') },
    { id: 'cross_department_communication_tracker', name: 'Cross-Department Communication Tracker', icon: Building2, description: 'Track cross-departmental communication.', component: TextGenerator, componentProps: textGeneratorProps('Communication Tracker', 'Provide data to track cross-departmental communication.', 'Track cross-departmental communication') },
    { id: 'training_needs_identifier', name: 'Training Needs Identifier', icon: Lightbulb, description: 'Identify training needs within an organization.', component: TextGenerator, componentProps: textGeneratorProps('Training Needs', 'Describe a team to identify their training needs.', 'Identify training needs') },
    { id: 'onboarding_experience_planner', name: 'Onboarding Experience Planner', icon: User, description: 'Plan employee onboarding experiences.', component: TextGenerator, componentProps: textGeneratorProps('Onboarding Plan', 'Describe a new role to plan the onboarding experience.', 'Plan an onboarding experience') },
    { id: 'knowledge_transfer_optimizer', name: 'Knowledge Transfer Optimizer', icon: BookOpen, description: 'Optimize knowledge transfer processes.', component: TextGenerator, componentProps: textGeneratorProps('Knowledge Transfer', 'Describe a process to optimize knowledge transfer.', 'Optimize knowledge transfer') },
    { id: 'company_policy_clarity_checker', name: 'Company Policy Clarity Checker', icon: CheckSquare, description: 'Check company policies for clarity.', component: TextGenerator, componentProps: textGeneratorProps('Policy Clarity', 'Upload a company policy to check its clarity.', 'Check policy clarity') },
    { id: 'internal_survey_analyzer', name: 'Internal Survey Analyzer', icon: LineChart, description: 'Analyze internal survey data.', component: TextGenerator, componentProps: textGeneratorProps('Survey Analysis', 'Upload survey data to analyze it.', 'Analyze internal survey data') },
    { id: 'innovation_idea_ranker', name: 'Innovation Idea Ranker', icon: Lightbulb, description: 'Rank innovation ideas.', component: TextGenerator, componentProps: textGeneratorProps('Innovation Ideas', 'List your ideas to rank them.', 'Rank innovation ideas') },
    { id: 'patent_portfolio_analyzer', name: 'Patent Portfolio Analyzer', icon: BookCopy, description: 'Analyze patent portfolios.', component: TextGenerator, componentProps: textGeneratorProps('Patent Portfolio', 'Provide patent data to analyze the portfolio.', 'Analyze a patent portfolio') },
    { id: 'r_d_project_feasibility_checker', name: 'R&D Project Feasibility Checker', icon: FlaskConical, description: 'Check the feasibility of R&D projects.', component: TextGenerator, componentProps: textGeneratorProps('R&D Feasibility', 'Describe an R&D project to check its feasibility.', 'Check R&D project feasibility') },
    { id: 'product_prototype_feedback_ai', name: 'Product Prototype Feedback AI', icon: Star, description: 'Provide feedback on product prototypes.', component: TextGenerator, componentProps: textGeneratorProps('Prototype Feedback', 'Upload a prototype to get feedback.', 'Get prototype feedback') },
    { id: 'market_entry_risk_forecaster', name: 'Market Entry Risk Forecaster', icon: TrendingUp, description: 'Forecast market entry risks.', component: TextGenerator, componentProps: textGeneratorProps('Market Entry Risk', 'Describe a market to forecast entry risks.', 'Forecast market entry risks') },
    { id: 'brand_name_idea_generator', name: 'Brand Name Idea Generator', icon: Lightbulb, description: 'Generate brand name ideas.', component: TextGenerator, componentProps: textGeneratorProps('Brand Names', 'Describe your brand to get name ideas.', 'Get brand name ideas') },
    { id: 'logo_color_impact_analyzer', name: 'Logo Color Impact Analyzer', icon: Palette, description: 'Analyze the impact of logo colors.', component: TextGenerator, componentProps: textGeneratorProps('Logo Color Impact', 'Upload a logo to analyze its color impact.', 'Analyze logo color impact') },
    { id: 'packaging_design_feedback_ai', name: 'Packaging Design Feedback AI', icon: Package, description: 'Provide feedback on packaging designs.', component: TextGenerator, componentProps: textGeneratorProps('Packaging Feedback', 'Upload a packaging design to get feedback.', 'Get packaging design feedback') },
    { id: 'shelf_placement_impact_predictor', name: 'Shelf Placement Impact Predictor', icon: Home, description: 'Predict the impact of shelf placement.', component: TextGenerator, componentProps: textGeneratorProps('Shelf Placement Impact', 'Describe a product to predict its shelf placement impact.', 'Predict shelf placement impact') },
    { id: 'store_traffic_flow_analyzer', name: 'Store Traffic Flow Analyzer', icon: Route, description: 'Analyze store traffic flow.', component: TextGenerator, componentProps: textGeneratorProps('Traffic Flow Analysis', 'Provide store data to analyze traffic flow.', 'Analyze store traffic flow') },
    { id: 'checkout_time_optimizer', name: 'Checkout Time Optimizer', icon: Clock, description: 'Optimize checkout times.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Checkout', 'Describe your checkout process to optimize it.', 'Optimize checkout time') },
    { id: 'payment_fraud_probability_checker', name: 'Payment Fraud Probability Checker', icon: ShieldCheck, description: 'Check the probability of payment fraud.', component: TextGenerator, componentProps: textGeneratorProps('Fraud Check', 'Provide transaction data to check for fraud probability.', 'Check payment fraud probability') },
    { id: 'ecommerce_upsell_strategy_planner', name: 'E-commerce Upsell Strategy Planner', icon: ArrowUp, description: 'Plan e-commerce upsell strategies.', component: TextGenerator, componentProps: textGeneratorProps('Upsell Strategy', 'Describe your products to plan an upsell strategy.', 'Plan an e-commerce upsell strategy') },
    { id: 'subscription_renewal_predictor', name: 'Subscription Renewal Predictor', icon: RefreshCw, description: 'Predict subscription renewals.', component: TextGenerator, componentProps: textGeneratorProps('Subscription Renewal', 'Provide customer data to predict subscription renewals.', 'Predict subscription renewals') },
    { id: 'customer_service_response_analyzer', name: 'Customer Service Response Analyzer', icon: MessageSquare, description: 'Analyze customer service responses.', component: TextGenerator, componentProps: textGeneratorProps('Response Analysis', 'Upload customer service responses to analyze them.', 'Analyze customer service responses') },
    { id: 'support_ticket_categorizer', name: 'Support Ticket Categorizer', icon: Tags, description: 'Categorize support tickets.', component: TextGenerator, componentProps: textGeneratorProps('Ticket Categorization', 'Upload support tickets to categorize them.', 'Categorize support tickets') },
    { id: 'resolution_time_forecaster', name: 'Resolution Time Forecaster', icon: Clock, description: 'Forecast support ticket resolution times.', component: TextGenerator, componentProps: textGeneratorProps('Resolution Time', 'Provide support ticket data to forecast resolution times.', 'Forecast resolution time') },
    { id: 'chatbot_script_enhancer', name: 'Chatbot Script Enhancer', icon: Bot, description: 'Enhance chatbot scripts.', component: TextGenerator, componentProps: textGeneratorProps('Enhanced Script', 'Upload a chatbot script to enhance it.', 'Enhance a chatbot script') },
    { id: 'agent_training_needs_analyzer', name: 'Agent Training Needs Analyzer', icon: Lightbulb, description: 'Analyze training needs for customer service agents.', component: TextGenerator, componentProps: textGeneratorProps('Agent Training Needs', 'Provide agent data to analyze their training needs.', 'Analyze agent training needs') },
    { id: 'knowledge_base_gap_finder', name: 'Knowledge Base Gap Finder', icon: Search, description: 'Find gaps in knowledge bases.', component: TextGenerator, componentProps: textGeneratorProps('Knowledge Base Gaps', 'Provide a knowledge base to find gaps.', 'Find knowledge base gaps') },
    { id: 'faq_auto_generator', name: 'FAQ Auto-Generator', icon: FilePlus, description: 'Automatically generate FAQs.', component: TextGenerator, componentProps: textGeneratorProps('Generated FAQs', 'Provide a topic to generate FAQs.', 'Generate FAQs') },
    { id: 'feedback_sentiment_classifier', name: 'Feedback Sentiment Classifier', icon: Smile, description: 'Classify the sentiment of feedback.', component: TextGenerator, componentProps: textGeneratorProps('Feedback Sentiment', 'Upload feedback to classify its sentiment.', 'Classify feedback sentiment') },
    { id: 'loyalty_program_impact_analyzer', name: 'Loyalty Program Impact Analyzer', icon: Heart, description: 'Analyze the impact of loyalty programs.', component: TextGenerator, componentProps: textGeneratorProps('Loyalty Program Impact', 'Describe a loyalty program to analyze its impact.', 'Analyze loyalty program impact') },
    { id: 'event_sponsorship_roi_calculator', name: 'Event Sponsorship ROI Calculator', icon: BadgePercent, description: 'Calculate the ROI of event sponsorships.', component: TextGenerator, componentProps: textGeneratorProps('Sponsorship ROI', 'Provide sponsorship data to calculate the ROI.', 'Calculate event sponsorship ROI') },
    { id: 'public_relations_risk_detector', name: 'Public Relations Risk Detector', icon: Megaphone, description: 'Detect public relations risks.', component: TextGenerator, componentProps: textGeneratorProps('PR Risk', 'Describe a situation to detect public relations risks.', 'Detect PR risks') },
    { id: 'crisis_communication_planner', name: 'Crisis Communication Planner', icon: Megaphone, description: 'Plan crisis communications.', component: TextGenerator, componentProps: textGeneratorProps('Crisis Communication Plan', 'Describe a crisis to plan communications.', 'Plan crisis communications') },
    { id: 'reputation_score_tracker', name: 'Reputation Score Tracker', icon: Star, description: 'Track reputation scores.', component: TextGenerator, componentProps: textGeneratorProps('Reputation Score', 'Provide data to track your reputation score.', 'Track a reputation score') },
    { id: 'influencer_roi_analyzer', name: 'Influencer ROI Analyzer', icon: Users, description: 'Analyze the ROI of influencer marketing.', component: TextGenerator, componentProps: textGeneratorProps('Influencer ROI', 'Provide influencer data to analyze the ROI.', 'Analyze influencer ROI') },
    { id: 'content_calendar_optimizer', name: 'Content Calendar Optimizer', icon: Calendar, description: 'Optimize content calendars.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Content Calendar', 'Upload a content calendar to optimize it.', 'Optimize a content calendar') },
    { id: 'blog_topic_trend_finder', name: 'Blog Topic Trend Finder', icon: Lightbulb, description: 'Find trending blog topics.', component: TextGenerator, componentProps: textGeneratorProps('Trending Topics', 'Describe your blog to find trending topics.', 'Find trending blog topics') },
    { id: 'editorial_consistency_checker', name: 'Editorial Consistency Checker', icon: CheckSquare, description: 'Check for editorial consistency.', component: TextGenerator, componentProps: textGeneratorProps('Editorial Consistency', 'Upload content to check for editorial consistency.', 'Check editorial consistency') },
    { id: 'fact_reference_link_generator', name: 'Fact-Reference Link Generator', icon: Link, description: 'Generate reference links for facts.', component: TextGenerator, componentProps: textGeneratorProps('Fact-Reference Links', 'Provide a fact to generate a reference link.', 'Generate a fact-reference link') },
    { id: 'plagiarism_risk_checker', name: 'Plagiarism Risk Checker', icon: ShieldCheck, description: 'Check for plagiarism risks.', component: TextGenerator, componentProps: textGeneratorProps('Plagiarism Check', 'Upload text to check for plagiarism risks.', 'Check for plagiarism') },
    { id: 'reading_ease_score_analyzer', name: 'Reading Ease Score Analyzer', icon: BookOpen, description: 'Analyze the reading ease score of a text.', component: TextGenerator, componentProps: textGeneratorProps('Reading Ease Score', 'Upload text to analyze its reading ease score.', 'Analyze a reading ease score') },
    { id: 'style_guide_compliance_checker', name: 'Style Guide Compliance Checker', icon: CheckSquare, description: 'Check for compliance with style guides.', component: TextGenerator, componentProps: textGeneratorProps('Style Guide Compliance', 'Upload text and a style guide to check for compliance.', 'Check style guide compliance') },
    { id: 'hyperlink_health_checker', name: 'Hyperlink Health Checker', icon: Link, description: 'Check the health of hyperlinks in a text.', component: TextGenerator, componentProps: textGeneratorProps('Hyperlink Health', 'Upload text to check the health of its hyperlinks.', 'Check hyperlink health') },
    { id: 'website_accessibility_analyzer', name: 'Website Accessibility Analyzer', icon: UserSquare, description: 'Analyze website accessibility.', component: TextGenerator, componentProps: textGeneratorProps('Accessibility Analysis', 'Provide a URL to analyze website accessibility.', 'Analyze website accessibility') },
    { id: 'mobile_ui_flow_optimizer', name: 'Mobile UI Flow Optimizer', icon: AppWindow, description: 'Optimize mobile UI flows.', component: TextGenerator, componentProps: textGeneratorProps('Optimized UI Flow', 'Describe a mobile UI flow to optimize it.', 'Optimize a mobile UI flow') },
    { id: 'conversion_form_design_checker', name: 'Conversion Form Design Checker', icon: CheckSquare, description: 'Check the design of conversion forms.', component: TextGenerator, componentProps: textGeneratorProps('Form Design Check', 'Describe a conversion form to check its design.', 'Check a conversion form design') },
    { id: 'page_load_impact_predictor', name: 'Page Load Impact Predictor', icon: Clock, description: 'Predict the impact of page load times.', component: TextGenerator, componentProps: textGeneratorProps('Page Load Impact', 'Provide a URL to predict its page load impact.', 'Predict page load impact') },
    { id: 'navigation_usability_analyzer', name: 'Navigation Usability Analyzer', icon: Route, description: 'Analyze the usability of website navigation.', component: TextGenerator, componentProps: textGeneratorProps('Navigation Usability', 'Provide a URL to analyze its navigation usability.', 'Analyze navigation usability') },
    { id: 'error_message_clarity_checker', name: 'Error Message Clarity Checker', icon: Bug, description: 'Check the clarity of error messages.', component: TextGenerator, componentProps: textGeneratorProps('Error Message Clarity', 'Provide an error message to check its clarity.', 'Check error message clarity') },
    { id: 'seo_keyword_gap_finder', name: 'SEO Keyword Gap Finder', icon: Search, description: 'Find keyword gaps between competitors.', component: TextGenerator, componentProps: textGeneratorProps('Keyword Gaps', 'Provide competitor URLs to find keyword gaps.', 'Find SEO keyword gaps') },
    { id: 'meta_tag_optimization_tool', name: 'Meta Tag Optimization Tool', icon: Tags, description: 'Optimize meta tags for SEO.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Meta Tags', 'Provide a URL to optimize its meta tags.', 'Optimize meta tags') },
    { id: 'backlink_quality_analyzer', name: 'Backlink Quality Analyzer', icon: Link, description: 'Analyze the quality of backlinks.', component: TextGenerator, componentProps: textGeneratorProps('Backlink Quality', 'Provide a URL to analyze its backlink quality.', 'Analyze backlink quality') },
    { id: 'search_intent_classifier', name: 'Search Intent Classifier', icon: Search, description: 'Classify search intent.', component: TextGenerator, componentProps: textGeneratorProps('Search Intent', 'Provide a search query to classify its intent.', 'Classify search intent') },
    { id: 'competitor_ad_copy_analyzer', name: 'Competitor Ad Copy Analyzer', icon: Megaphone, description: "Analyze competitors' ad copy.", component: TextGenerator, componentProps: textGeneratorProps('Ad Copy Analysis', "Provide a competitor's ad copy to analyze it.", "Analyze competitor ad copy") },
    { id: 'ppc_campaign_roi_predictor', name: 'PPC Campaign ROI Predictor', icon: BadgePercent, description: 'Predict the ROI of PPC campaigns.', component: TextGenerator, componentProps: textGeneratorProps('PPC ROI', 'Describe a PPC campaign to predict its ROI.', 'Predict PPC campaign ROI') },
    { id: 'ab_test_result_analyzer', name: 'A/B Test Result Analyzer', icon: TestTube, description: 'Analyze the results of A/B tests.', component: TextGenerator, componentProps: textGeneratorProps('A/B Test Results', 'Provide A/B test data to analyze the results.', 'Analyze A/B test results') },
    { id: 'user_retention_pattern_finder', name: 'User Retention Pattern Finder', icon: Users, description: 'Find patterns in user retention.', component: TextGenerator, componentProps: textGeneratorProps('User Retention Patterns', 'Provide user data to find retention patterns.', 'Find user retention patterns') },
    { id: 'behavior_based_segmentation_tool', name: 'Behavior-Based Segmentation Tool', icon: Users, description: 'Segment users based on their behavior.', component: TextGenerator, componentProps: textGeneratorProps('User Segments', 'Provide user data to segment them based on behavior.', 'Segment users by behavior') },
    { id: 'personalization_rule_optimizer', name: 'Personalization Rule Optimizer', icon: Star, description: 'Optimize personalization rules.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Personalization', 'Describe personalization rules to optimize them.', 'Optimize personalization rules') },
    { id: 'cross_platform_engagement_tracker', name: 'Cross-Platform Engagement Tracker', icon: LineChart, description: 'Track user engagement across platforms.', component: TextGenerator, componentProps: textGeneratorProps('Cross-Platform Engagement', 'Provide data to track user engagement across platforms.', 'Track cross-platform engagement') },
    { id: 'notification_timing_optimizer', name: 'Notification Timing Optimizer', icon: Clock, description: 'Optimize the timing of notifications.', component: TextGenerator, componentProps: textGeneratorProps('Optimized Notifications', 'Describe your users to optimize notification timing.', 'Optimize notification timing') },
    { id: 'in_app_purchase_predictor', name: 'In-App Purchase Predictor', icon: ShoppingCart, description: 'Predict in-app purchases.', component: TextGenerator, componentProps: textGeneratorProps('In-App Purchase Prediction', 'Provide user data to predict in-app purchases.', 'Predict in-app purchases') },
    { id: 'push_notification_copy_checker', name: 'Push Notification Copy Checker', icon: MessageSquare, description: 'Check the copy of push notifications.', component: TextGenerator, componentProps: textGeneratorProps('Push Notification Copy', 'Provide push notification copy to check it.', 'Check push notification copy') },
    { id: 'feature_adoption_forecaster', name: 'Feature Adoption Forecaster', icon: Star, description: 'Forecast the adoption of new features.', component: TextGenerator, componentProps: textGeneratorProps('Feature Adoption Forecast', 'Describe a new feature to forecast its adoption.', 'Forecast feature adoption') },
    { id: 'churn_prevention_strategy_maker', name: 'Churn Prevention Strategy Maker', icon: Anchor, description: 'Create churn prevention strategies.', component: TextGenerator, componentProps: textGeneratorProps('Churn Prevention Strategy', 'Describe your business to create churn prevention strategies.', 'Create a churn prevention strategy') },
    { id: 'trial_conversion_rate_predictor', name: 'Trial Conversion Rate Predictor', icon: BadgePercent, description: 'Predict trial conversion rates.', component: TextGenerator, componentProps: textGeneratorProps('Trial Conversion Prediction', 'Provide trial data to predict the conversion rate.', 'Predict trial conversion rate') },
    { id: 'loyalty_tier_upgrade_predictor', name: 'Loyalty Tier Upgrade Predictor', icon: ArrowUp, description: 'Predict loyalty tier upgrades.', component: TextGenerator, componentProps: textGeneratorProps('Loyalty Tier Upgrade', 'Provide customer data to predict loyalty tier upgrades.', 'Predict loyalty tier upgrades') },
    { id: 'lifetime_value_forecasting_ai', name: 'Lifetime Value Forecasting AI', icon: TrendingUp, description: 'Forecast customer lifetime value.', component: TextGenerator, componentProps: textGeneratorProps('Lifetime Value Forecast', 'Provide customer data to forecast their lifetime value.', 'Forecast customer lifetime value') },
];
