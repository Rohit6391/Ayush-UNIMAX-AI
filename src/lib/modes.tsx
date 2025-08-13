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
import { AudioEnhancer } from '@/components/modes/AudioEnhancer';
import { AdCopyGenerator } from '@/components/modes/AdCopyGenerator';
import { AffirmationGenerator } from '@/components/modes/AffirmationGenerator';
import { AppUIDesigner } from '@/components/modes/AppUIDesigner';
import { AnimatedGIFEditor } from '@/components/modes/AnimatedGIFEditor';
import { AnimatedLogoMaker } from '@/components/modes/AnimatedLogoMaker';
import { AudioSyncTool } from '@/components/modes/AudioSyncTool';
import { AudioMixer } from '@/components/modes/AudioMixer';
import { AnimatedInfographicMaker } from '@/components/modes/AnimatedInfographicMaker';
import { AudioTranscriptionTool } from '@/components/modes/AudioTranscriptionTool';
import { AudioLoopMaker } from '@/components/modes/AudioLoopMaker';

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
  | 'ai_virtual_pet_creator'
  | 'ad_banner_maker'
  | 'ad_copy_generator'
  | 'affirmation_generator'
  | 'animated_gif_editor'
  | 'animated_infographic_maker'
  | 'animated_logo_maker'
  | 'app_ui_designer'
  | 'audio_enhancer'
  | 'audio_loop_maker'
  | 'audio_mixer'
  | 'audio_sync_tool'
  | 'audio_transcription_tool';


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
];
