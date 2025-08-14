
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

export type ModeId = 
  | 'chat' | 'voice_chat' | 'photo_generator' | 'photo_editor' | 'video_generator' | 'video_editor' | 'code_generator' 
  | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
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
  | 'quiz_generator' | 'book_generator';


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
    { id: 'text_summarizer', name: 'Text Summarizer', icon: FileQuestion, description: 'Summarize long texts, articles, or documents.', component: TextGenerator, componentProps: {
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
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, description: 'Plan and optimize supply chain logistics.', component: SupplyChainAiPlanner },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Package, description: 'Forecast inventory needs based on historical data.', component: InventoryAutoForecaster },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, description: 'Find the most efficient logistics routes.', component: LogisticsRouteOptimizer },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, description: 'Score vendors based on risk factors.', component: VendorRiskScorer },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Bug, description: 'Detect fraudulent transactions and patterns.', component: FraudDetectionEngine },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: LineChart, description: 'Find patterns in transaction data.', component: TransactionPatternFinder },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: Scale, description: 'Analyze credit risk for individuals or businesses.', component: CreditRiskAnalyzer },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, description: 'Suggest optimizations for an investment portfolio.', component: InvestmentPortfolioOptimizer },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileText, description: 'Summarize complex financial statements.', component: FinancialStatementSummarizer },
    
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
    { id: 'games_knowledge', name: 'Games Knowledge', icon: Gamepad2, description: 'Get information and tips about any video game.', component: GamesKnowledge},
    { id: 'yoga_fitness', name: 'Yoga & Fitness', icon: Dumbbell, description: 'Get guidance on yoga poses and fitness exercises.', component: YogaFitness},
    { id: 'grammar_practice_creator', name: 'Grammar Practice Creator', icon: BookCheck, description: 'Generate grammar exercises for any language.', component: GrammarPracticeCreator},
    { id: 'sports_skills_trainer', name: 'Sports Skills Trainer', icon: Trophy, description: 'Learn how to improve your skills in any sport.', component: SportsSkillsTrainer},
    { id: 'quiz_generator', name: 'Quiz Generator', icon: HelpCircle, description: 'Generate quizzes on any topic.', component: QuizQuestionGenerator },
    { id: 'book_generator', name: 'Book Generator', icon: BookOpen, description: 'Write a book on any topic.', component: BookGenerator },
];
