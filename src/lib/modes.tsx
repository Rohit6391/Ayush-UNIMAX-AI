
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
import { CharacterGenerator } from '@/components/modes/CharacterGenerator';
import { DreamInterpreter } from '@/components/modes/DreamInterpreter';
import { TravelPlanner } from '@/components/modes/TravelPlanner';

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
  | 'homework_helper' | 'study_material_analyzer' | 'ai_teacher' | 'games_knowledge' | 'yoga_fitness' | 'grammar_practice_creator' | 'sports_skills_trainer' | 'quiz_generator' | 'book_generator' | 'text_summarizer' | 'question_giver' | 'idea_generator' | 'recipe_creator' | 'travel_planner' | 'grammar_corrector';

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
    
];
