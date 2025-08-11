
import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, MoonStar, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap, PawPrint, Thermometer, Cloud, Dumbbell, Moon, Package, Bus, Calendar, Heart, ArrowUp, Filter, ShoppingCart, Crown
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
import { BusinessKpiForecaster } from '@/components/modes/BusinessKpiForecaster';
import { StudyMaterialAnalyzer } from '@/components/modes/StudyMaterialAnalyzer';
import { ProductFinder } from '@/components/modes/ProductFinder';
import { BrandFinder } from '@/components/modes/BrandFinder';
import { ConflictPlotGenerator } from '@/components/modes/ConflictPlotGenerator';


export type ModeId = 
  | 'chat' | 'voice_chat' | 'photo_generator' | 'photo_editor' | 'video_maker' | 'video_editor' | 'code_generator' 
  | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
  | 'file_editor' | 'story_generator' | 'summarizer' | 'translator' | 'song_writer' 
  | 'sound_generator' | 'ad_maker' | 'grammar_corrector' | 'homework_helper' | 'yoga_fitness' 
  | 'games_knowledge' | 'question_giver' | 'idea_generator' | 'email_writer' | 'recipe_creator'
  | 'travel_planner' | 'dream_interpreter' | 'speech_writer' | 'poem_generator'
  | 'character_generator' | 'fact_checker' | 'chart_maker' | 'fact_giver' | 'fun_chat'
  | 'logo_maker' | 'design_assistant' | 'three_d_modeler' | 'animation_tool' | 'seo_tool'
  | 'social_media_post_maker' | 'market_research' | 'creative_content_expander' | 'technical_document_generator'
  | 'title_optimizer' | 'fictional_world_builder' | 'interview_question_creator' | 'text_rewriter_pro'
  | 'digital_persona_creator' | 'job_role_analyzer' | 'business_kpi_forecaster'
  | 'study_material_analyzer' | 'product_finder' | 'brand_finder' | 'conflict_plot_generator'
  // Start of new modes
  | 'seo_keyword_gap_finder' | 'meta_tag_optimization_tool' | 'navigation_usability_analyzer'
  | 'conversational_flow_designer' | 'storyboard_idea_expander' | 'smart_prompt_optimizer'
  | 'context_aware_summary_maker' | 'reading_comprehension_assistant' | 'knowledge_graph_builder'
  | 'smart_data_categorizer' | 'concept_map_generator' | 'industry_report_writer'
  | 'product_feature_brainstormer' | 'meeting_notes_formatter' | 'text_complexity_adjuster'
  | 'idiom_and_metaphor_finder' | 'paragraph_flow_improver' | 'acronym_expander'
  | 'real_time_definition_finder' | 'smart_keyword_highlighter' | 'tone_and_mood_adjuster'
  | 'formality_level_converter' | 'brand_voice_enforcer' | 'multilingual_synonym_finder'
  | 'long_form_report_writer' | 'smart_question_answer_engine' | 'policy_drafting_assistant'
  | 'legal_clause_suggestion_tool' | 'patent_abstract_generator' | 'contract_simplifier'
  | 'compliance_document_checker' | 'script_scene_expander' | 'interview_transcript_formatter'
  | 'character_dialogue_improver' | 'multi_threaded_story_planner' | 'fiction_outline_maker'
  | 'comedy_script_punch_up_tool' | 'villain_backstory_creator' | 'theme_and_motif_analyzer'
  | 'story_arc_evaluator' | 'mythology_based_plot_creator' | 'sci_fi_concept_designer'
  | 'fantasy_lore_generator' | 'alternate_history_plot_writer' | 'scientific_hypothesis_suggestor'
  | 'experiment_design_planner' | 'research_summary_maker' | 'journal_abstract_creator'
  | 'methodology_drafting_tool' | 'lab_report_formatter' | 'academic_citation_builder'
  | 'equation_solver_pro' | 'graph_theory_visualizer' | 'statistical_pattern_finder'
  | 'data_anomaly_detector' | 'predictive_model_trainer' | 'simulation_scenario_builder'
  | 'ai_behavior_modeler' | 'ethics_risk_analyzer' | 'bias_detector_engine'
  | 'privacy_impact_forecaster' | 'algorithmic_explainability_tool' | 'dataset_integrity_checker'
  | 'feature_importance_analyzer' | 'forecast_accuracy_evaluator' | 'root_cause_analysis_bot'
  | 'data_quality_score_generator' | 'multi_variable_trend_predictor' 
  | 'competitor_comparison_engine'
  | 'market_gap_identifier' | 'customer_segmentation_mapper' | 'price_elasticity_estimator'
  | 'churn_risk_predictor' | 'profit_margin_optimizer' | 'supply_chain_ai_planner'
  | 'inventory_auto_forecaster' | 'logistics_route_optimizer' | 'vendor_risk_scorer'
  | 'fraud_detection_engine' | 'transaction_pattern_finder' | 'credit_risk_analyzer'
  | 'investment_portfolio_optimizer' | 'financial_statement_summarizer' | 'cash_flow_projection_tool'
  | 'expense_categorization_ai' | 'budget_recommendation_engine' | 'payroll_compliance_checker'
  | 'policy_impact_forecaster' | 'grant_proposal_generator' | 'nonprofit_donor_outreach_ai'
  | 'fundraising_campaign_optimizer' | 'volunteer_scheduling_planner' | 'event_agenda_creator'
  | 'guest_speaker_finder_ai' | 'registration_data_analyzer' | 'audience_engagement_predictor'
  | 'public_opinion_trend_analyzer' | 'civic_policy_simulation_tool' | 'local_issue_report_generator'
  | 'environmental_impact_calculator' | 'climate_data_visualizer' | 'carbon_footprint_forecaster'
  | 'wildlife_pattern_tracker' | 'habitat_restoration_planner' | 'ocean_current_predictor'
  | 'renewable_energy_yield_estimator' | 'disaster_response_simulator' | 'emergency_evacuation_planner'
  | 'health_risk_assessment_ai' | 'symptom_pattern_analyzer' | 'disease_outbreak_predictor'
  | 'nutritional_plan_generator' | 'exercise_routine_optimizer' | 'sleep_cycle_tracker_ai'
  | 'mental_wellness_suggestion_bot' | 'therapy_session_planner' | 'medical_literature_summarizer'
  | 'clinical_trial_data_analyzer' | 'genetic_pattern_detector' | 'protein_structure_predictor'
  | 'drug_interaction_checker' | 'surgical_procedure_planner' | 'patient_recovery_forecaster'
  | 'virtual_lab_technician' | 'radiology_image_analyzer' | 'pathology_report_summarizer'
  | 'diagnostic_support_assistant' | 'remote_patient_monitoring_ai' | 'appointment_scheduling_optimizer'
  | 'hospital_resource_forecaster' | 'medical_inventory_tracker' | 'treatment_plan_personalizer'
  | 'symptom_to_specialist_recommender' | 'manufacturing_workflow_optimizer' | 'quality_control_inspector_ai'
  | 'machine_failure_predictor' | 'production_scheduling_planner' | 'supply_shortage_forecaster'
  | 'assembly_line_speed_optimizer' | 'worker_safety_risk_detector' | 'energy_usage_analyzer'
  | 'maintenance_cost_estimator' | 'smart_factory_process_designer' | 'robotics_task_planner'
  | 'cad_design_suggestion_tool' | 'material_stress_tester_ai' | 'product_lifecycle_forecaster'
  | 'parts_inventory_balancer' | 'blueprint_error_detector' | 'prototype_design_optimizer'
  | 'design_to_manufacture_converter' | 'building_energy_efficiency_analyzer' | 'urban_traffic_flow_predictor'
  | 'road_repair_priority_planner' | 'parking_demand_forecaster' | 'public_transit_route_optimizer'
  | 'construction_schedule_forecaster' | 'utility_consumption_tracker' | 'smart_lighting_planner'
  | 'renewable_grid_load_balancer' | 'flood_risk_predictor' | 'water_usage_efficiency_planner'
  | 'sewage_network_monitoring_ai' | 'crop_yield_forecaster' | 'soil_nutrient_analyzer'
  | 'pest_infestation_predictor' | 'irrigation_optimization_planner' | 'farm_equipment_usage_tracker'
  | 'agricultural_market_price_forecaster' | 'greenhouse_climate_controller' | 'livestock_health_monitor'
  | 'seed_selection_optimizer' | 'weather_impact_predictor' | 'sports_performance_analyzer'
  | 'athlete_training_optimizer' | 'game_strategy_simulator' | 'player_injury_risk_detector'
  | 'match_outcome_predictor' | 'tournament_schedule_optimizer' | 'fan_engagement_tracker'
  | 'sponsorship_roi_analyzer' | 'merchandise_sales_forecaster' | 'ticket_price_optimizer'
  | 'streaming_audience_predictor' | 'social_sentiment_analyzer' | 'trend_forecast_engine'
  | 'brand_loyalty_scorer' | 'customer_review_summarizer' | 'influence_network_mapper'
  | 'viral_content_predictor' | 'ad_campaign_performance_forecaster' | 'conversion_funnel_optimizer'
  | 'lead_scoring_ai' | 'sales_forecasting_assistant' | 'upsell_recommendation_engine'
  | 'cross_sell_pattern_finder' | 'product_return_risk_detector' | 'loyalty_reward_planner'
  | 'customer_retention_strategy_maker' | 'store_layout_optimization_ai' | 'shelf_stocking_suggestion_tool'
  | 'price_match_detector' | 'seasonal_demand_forecaster' | 'fashion_trend_predictor'
  | 'outfit_combination_recommender' | 'fabric_quality_analyzer' | 'production_batch_optimizer'
  | 'color_palette_forecaster' | 'textile_pattern_designer_ai' | 'jewelry_design_suggestor'
  | 'shoe_size_fit_predictor' | 'accessory_style_matcher' | 'luxury_goods_market_forecaster'
  | 'music_mood_classifier' | 'song_tempo_analyzer' | 'instrument_arrangement_suggestor'
  | 'chord_progression_generator' | 'mixing_mastering_advisor' | 'sound_quality_enhancer'
  | 'audio_scene_identifier' | 'noise_removal_optimizer' | 'speech_emotion_analyzer'
  | 'podcast_topic_planner' | 'radio_ad_effectiveness_tracker' | 'film_script_coverage_ai'
  | 'scene_location_suggestor' | 'casting_fit_analyzer' | 'shot_sequence_planner'
  | 'lighting_setup_optimizer' | 'special_effects_cost_estimator' | 'post_production_workflow_planner'
  | 'trailer_impact_predictor' | 'audience_review_sentiment_tracker' | 'board_game_rule_optimizer'
  | 'puzzle_difficulty_balancer' | 'level_design_ai' | 'game_lore_expansion_tool'
  | 'enemy_behavior_modeler' | 'loot_drop_probability_balancer' | 'player_motivation_analyzer'
  | 'multiplayer_matchmaking_optimizer' | 'esports_strategy_advisor' | 'speedrun_path_optimizer'
  | 'education_syllabus_planner' | 'exam_pattern_analyzer' | 'learning_pace_personalizer'
  | 'curriculum_gap_identifier' | 'teaching_method_suggestor' | 'classroom_engagement_tracker'
  | 'assignment_feedback_generator' | 'question_difficulty_calibrator' | 'lesson_plan_enhancer'
  | 'grading_consistency_checker' | 'tutoring_session_scheduler' | 'learning_style_analyzer'
  | 'peer_review_summarizer' | 'academic_progress_forecaster' | 'online_course_enrollment_predictor'
  | 'quiz_question_generator' | 'flashcard_auto_creator' | 'concept_reinforcement_planner'
  | 'study_group_matching_ai' | 'skill_gap_forecaster' | 'language_learning_path_optimizer'
  | 'pronunciation_feedback_ai' | 'vocabulary_expansion_tool' | 'grammar_practice_creator'
  | 'idiom_usage_coach' | 'cultural_context_advisor' | 'debate_strategy_planner'
  | 'speech_timing_analyzer' | 'presentation_flow_optimizer' | 'visual_aid_suggestor'
  | 'slide_deck_consistency_checker' | 'audience_engagement_timer' | 'professional_bio_generator'
  | 'resume_keyword_optimizer' | 'cover_letter_personalizer' | 'job_interview_simulation_ai'
  | 'career_path_predictor' | 'skill_endorsement_analyzer' | 'salary_benchmarking_tool'
  | 'workplace_culture_fit_analyzer' | 'employee_feedback_summarizer' | 'team_dynamics_predictor'
  | 'leadership_style_analyzer' | 'meeting_agenda_optimizer' | 'task_priority_planner'
  | 'workload_balancer_ai' | 'deadline_risk_detector' | 'resource_allocation_forecaster'
  | 'cross_department_communication_tracker' | 'training_needs_identifier' | 'onboarding_experience_planner'
  | 'knowledge_transfer_optimizer' | 'company_policy_clarity_checker' | 'internal_survey_analyzer'
  | 'innovation_idea_ranker' | 'patent_portfolio_analyzer' | 'r&d_project_feasibility_checker'
  | 'product_prototype_feedback_ai' | 'market_entry_risk_forecaster' | 'brand_name_idea_generator'
  | 'logo_color_impact_analyzer' | 'packaging_design_feedback_ai' | 'shelf_placement_impact_predictor'
  | 'store_traffic_flow_analyzer' | 'checkout_time_optimizer' | 'payment_fraud_probability_checker'
  | 'ecommerce_upsell_strategy_planner' | 'subscription_renewal_predictor' | 'customer_service_response_analyzer'
  | 'support_ticket_categorizer' | 'resolution_time_forecaster' | 'chatbot_script_enhancer'
  | 'agent_training_needs_analyzer' | 'knowledge_base_gap_finder' | 'faq_auto_generator'
  | 'feedback_sentiment_classifier' | 'loyalty_program_impact_analyzer' | 'event_sponsorship_roi_calculator'
  | 'public_relations_risk_detector' | 'crisis_communication_planner' | 'reputation_score_tracker'
  | 'influencer_roi_analyzer' | 'content_calendar_optimizer' | 'blog_topic_trend_finder'
  | 'editorial_consistency_checker' | 'fact_reference_link_generator' | 'plagiarism_risk_checker'
  | 'reading_ease_score_analyzer' | 'style_guide_compliance_checker' | 'hyperlink_health_checker'
  | 'website_accessibility_analyzer' | 'mobile_ui_flow_optimizer' | 'conversion_form_design_checker';


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
    { id: 'chat', name: 'AI Chat', icon: BrainCircuit, description: 'Your AI command center for text and files.', component: ChatInterface },
    { id: 'fun_chat', name: 'Fun Chat', icon: Bot, description: 'Chat with a more creative and playful AI.', component: ChatInterface, componentProps: { isFunChat: true } },
    { id: 'voice_chat', name: 'Voice Chat', icon: Mic, description: 'Talk directly with the AI in a voice conversation.', component: VoiceInterface },
    { id: 'photo_generator', name: 'Photo Generator', icon: Image, description: 'Create stunning images from text prompts.', component: PhotoGenerator },
    { id: 'logo_maker', name: 'Logo Maker', icon: Paintbrush, description: 'Generate creative logos for your business or brand.', component: LogoMaker },
    { id: 'design_assistant', name: 'Design Assistant', icon: Star, description: 'Get design suggestions and guidance.', component: DesignAssistant },
    { id: 'photo_editor', name: 'Photo Editor', icon: Palette, description: 'Upload a photo and edit it with an AI prompt.', component: PhotoEditor },
    { id: 'video_maker', name: 'Video Maker', icon: Video, description: 'Generate a video with narration in any language.', component: VideoGenerator },
    { id: 'animation_tool', name: 'Animation Planner', icon: GanttChart, description: 'Plan animations and motion graphics.', component: AnimationTool },
    { id: 'three_d_modeler', name: '3D Model Planner', icon: PieChart, description: 'Create plans for 3D models.', component: ThreeDModeler },
    { id: 'video_editor', name: 'Video Analyzer', icon: Film, description: 'Upload a video and get AI analysis.', component: VideoEditor },
    { id: 'sound_generator', name: 'Sound Generator', icon: AudioLines, description: 'Create sound effects and audio clips.', component: SoundGenerator },
    { id: 'code_generator', name: 'Code Generator', icon: Code, description: 'Generate, manage, and import code.', component: CodeGenerator },
    { id: 'code_analyzer', name: 'Code Analyzer', icon: Search, description: 'Analyze code for errors, performance, and best practices.', component: CodeAnalyzer },
    { id: 'website_maker', name: 'Website Maker', icon: Globe, description: 'Generate, preview, and import websites.', component: WebsiteMaker },
    { id: 'app_maker', name: 'App Maker', icon: AppWindow, description: 'Scaffold, import, and plan mobile applications.', component: AppMaker },
    { id: 'game_maker', name: 'Game Maker', icon: Gamepad2, description: 'Design, import, and create plans for your game.', component: GameMaker },
    { id: 'file_maker', name: 'File Maker', icon: FilePlus, description: 'Create downloadable files from a prompt.', component: FileMaker },
    { id: 'file_editor', name: 'File Editor', icon: FileEdit, description: 'Edit uploaded files with AI instructions.', component: FileEditor },
    { id: 'product_finder', name: 'Product Finder', icon: ShoppingCart, description: 'Find a place to buy any product.', component: ProductFinder },
    { id: 'brand_finder', name: 'Brand Finder', icon: Crown, description: 'Find the best brand for a product.', component: BrandFinder },
    { id: 'creative_content_expander', name: 'Creative Content Expander', icon: Wand2, description: 'Expand on a topic with creative details.', component: CreativeContentExpander },
    { id: 'technical_document_generator', name: 'Technical Document Generator', icon: BookCopy, description: 'Generate technical documents and specifications.', component: TechnicalDocumentGenerator },
    { id: 'title_optimizer', name: 'Title Optimizer', icon: Target, description: 'Optimize titles and headlines for impact.', component: TitleOptimizer },
    { id: 'fictional_world_builder', name: 'Fictional World Builder', icon: Building2, description: 'Create detailed fictional worlds for stories.', component: FictionalWorldBuilder },
    { id: 'interview_question_creator', name: 'Interview Question Creator', icon: HelpCircle, description: 'Generate interview questions for any role.', component: InterviewQuestionCreator },
    { id: 'text_rewriter_pro', name: 'Text Rewriter Pro', icon: RefreshCw, description: 'Rewrite and rephrase text to improve clarity and style.', component: TextRewriterPro },
    { id: 'digital_persona_creator', name: 'Digital Persona Creator', icon: Users, description: 'Create detailed user personas for marketing and product design.', component: DigitalPersonaCreator },
    { id: 'job_role_analyzer', name: 'Job Role Analyzer', icon: Briefcase, description: 'Analyze job roles and create detailed descriptions.', component: JobRoleAnalyzer },
    { id: 'business_kpi_forecaster', name: 'Business KPI Forecaster', icon: LineChart, description: 'Generate text-based forecasts for business KPIs.', component: BusinessKpiForecaster },
    { id: 'story_generator', name: 'Story Generator', icon: BookOpen, description: 'Write creative stories and scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A lost robot searching for the last human on a deserted Earth...",
        buttonText: "Generate Story",
        generatePrompt: (p: string) => `Write a creative story based on the following prompt. The story should be in the same language as the prompt. Prompt: ${p}`,
        resultTitle: "Your Story"
    }},
    { id: 'summarizer', name: 'AI Summarizer', icon: FileQuestion, description: 'Summarize long texts, articles, or documents.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste a long article, report, or any text here to get a summary...",
        buttonText: "Summarize Text",
        generatePrompt: (p: string) => `Summarize the following text, providing the summary in the same language as the original text:\n\n${p}`,
        resultTitle: "Summary"
    }},
    { id: 'translator', name: 'Translator', icon: Globe, description: 'Translate text between multiple languages.', component: Translator },
    { id: 'song_writer', name: 'Song Writer', icon: Music, description: 'Generate lyrics, melody, and find lyrics from a URL.', component: SongWriter },
    { id: 'chart_maker', name: 'Chart & Graph Maker', icon: BarChart3, description: 'Create charts and graphs from data.', component: ChartMaker },
    { id: 'social_media_post_maker', name: 'Social Media Post Maker', icon: MessageSquare, description: 'Generate engaging posts for social media.', component: SocialMediaPostMaker },
    { id: 'market_research', name: 'Market Research', icon: Briefcase, description: 'Gather and analyze market data.', component: MarketResearch },
    { id: 'seo_tool', name: 'SEO Tool', icon: TrendingUp, description: 'Optimize your content for search engines.', component: SeoTool },
    { id: 'question_giver', name: 'Question Giver', icon: HelpCircle, description: 'Get questions for any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'The history of the Roman Empire' or 'La physique quantique'...",
        buttonText: "Generate Questions",
        generatePrompt: (p: string) => `Generate a list of 10 insightful questions about the following topic. The questions should be in the same language as the topic provided. Topic: ${p}`,
        resultTitle: "Generated Questions"
    }},
    { id: 'ad_maker', name: 'Video Ad Script Maker', icon: Megaphone, description: 'Create compelling video ad scripts.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., A new brand of sparkling water with natural fruit flavors...",
        buttonText: "Generate Ad Script",
        generatePrompt: (p: string) => `Write a compelling and descriptive video ad script for the following product/service, including scene descriptions, dialogue, and camera shots. The script should be in the same language as the prompt. Prompt: ${p}`,
        resultTitle: "Video Ad Script"
    }},
    { id: 'grammar_corrector', name: 'Grammar Corrector', icon: BookCheck, description: 'Correct grammar and spelling mistakes.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Paste your text here to correct grammar and spelling...",
        buttonText: "Correct Grammar",
        generatePrompt: (p: string) => `Correct the grammar and spelling of the following text, and provide the corrected version in the same language:\n\n${p}`,
        resultTitle: "Corrected Text"
    }},
    { id: 'homework_helper', name: 'Homework Planner', icon: School, description: 'Plan assignments and get AI help.', component: HomeworkPlanner },
    { id: 'study_material_analyzer', name: 'Study Material Analyzer', icon: GraduationCap, description: 'Get an interactive quiz from a URL.', component: StudyMaterialAnalyzer },
    { id: 'idea_generator', name: 'Idea Generator', icon: Lightbulb, description: 'Brainstorm creative ideas on any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Business ideas for a small town' or 'Plot ideas for a sci-fi novel'...",
        buttonText: "Generate Ideas",
        generatePrompt: (p: string) => `Generate a list of creative and unique ideas for the following topic. The ideas should be in the same language as the prompt. Topic: ${p}`,
        resultTitle: "Creative Ideas"
    }},
    { id: 'email_writer', name: 'Email Writer', icon: Mail, description: 'Draft professional and personal emails.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'An email to my boss requesting time off' or 'A follow-up email after a job interview'...",
        buttonText: "Write Email",
        generatePrompt: (p: string) => `Write a well-formatted and professional email for the following purpose. The email should be in the same language as the prompt. Purpose: ${p}`,
        resultTitle: "Generated Email"
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
    { id: 'dream_interpreter', name: 'Dream Interpreter', icon: MoonStar, description: 'Analyze and find the meaning of your dreams.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Describe your dream in as much detail as possible...",
        buttonText: "Interpret Dream",
        generatePrompt: (p: string) => `Provide a thoughtful and psychological interpretation of the following dream, considering common symbols and themes. The interpretation should be in the same language as the dream description. Dream: ${p}`,
        resultTitle: "Dream Interpretation"
    }},
    { id: 'speech_writer', name: 'Speech Writer', icon: Presentation, description: 'Draft compelling speeches for any occasion.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'A best man speech for my childhood friend' or 'A motivational speech for a sales team'...",
        buttonText: "Write Speech",
        generatePrompt: (p: string) => `Write a powerful and engaging speech for the following occasion. The speech should be in the same language as the prompt. Occasion: ${p}`,
        resultTitle: "Generated Speech"
    }},
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
    { id: 'fact_checker', name: 'Fact Checker', icon: CheckSquare, description: 'Check the accuracy of a statement.', component: TextGenerator, componentProps: {
        promptPlaceholder: "Enter a statement to fact-check, e.g., 'The sky is green.'",
        buttonText: "Fact-Check",
        generatePrompt: (p: string) => `Please fact-check the following statement, provide a determination (e.g., True, False, Misleading), and a brief explanation with sources if possible. The response should be in the same language as the statement. Statement: ${p}`,
        resultTitle: "Fact-Check Result"
    }},
    { id: 'fact_giver', name: 'Fact Giver', icon: Lightbulb, description: 'Get interesting facts about any topic.', component: TextGenerator, componentProps: {
        promptPlaceholder: "e.g., 'Space exploration' or 'The Roman Empire'",
        buttonText: "Get Facts",
        generatePrompt: (p: string) => `Generate a list of 5 interesting and verifiable facts about the following topic. The facts should be in the same language as the topic. Topic: ${p}`,
        resultTitle: "Interesting Facts"
    }},
    { id: 'conflict_plot_generator', name: 'Conflict Plot Generator', icon: Swords, ...textGeneratorProps('Conflict Plot', 'Generate a compelling plot conflict for a story.', 'You are a master storyteller. Take the following core conflict and expand it into a compelling plot outline.') },
    { id: 'seo_keyword_gap_finder', name: 'SEO Keyword Gap Finder', icon: Search, ...textGeneratorProps('Keyword Gaps', 'Find keyword gaps between you and a competitor.', 'You are an SEO expert. Analyze the following two sets of keywords and identify the gaps where the first set is lacking compared to the second.') },
    { id: 'meta_tag_optimization_tool', name: 'Meta Tag Optimization Tool', icon: Tags, ...textGeneratorProps('Meta Tags', 'Optimize meta tags for a webpage.', 'You are an SEO copywriter. Generate an optimized title tag and meta description for a webpage with the following content.') },
    { id: 'navigation_usability_analyzer', name: 'Navigation Usability Analyzer', icon: Route, ...textGeneratorProps('Navigation Usability', 'Analyze the usability of a website navigation.', 'You are a UX specialist. Analyze the following website navigation structure and provide recommendations for improvement.') },
    { id: 'conversational_flow_designer', name: 'Conversational Flow Designer', icon: MessageCircle, ...textGeneratorProps('Conversational Flow', 'Design a conversational flow for a chatbot.', 'You are a conversation designer. Create a flowchart for a chatbot that handles the following user goal.') },
    { id: 'storyboard_idea_expander', name: 'Storyboard Idea Expander', icon: Clapperboard, ...textGeneratorProps('Storyboard Idea', 'Expand a storyboard idea.', 'You are a screenwriter. Take the following one-line storyboard idea and expand it into a 3-scene summary.') },
    { id: 'smart_prompt_optimizer', name: 'Smart Prompt Optimizer', icon: BrainCog, ...textGeneratorProps('Prompt Optimization', 'Optimize a prompt for a better AI response.', 'You are a prompt engineer. Rewrite the following prompt to be more specific, clear, and effective for a large language model.') },
    { id: 'context_aware_summary_maker', name: 'Context-Aware Summary Maker', icon: FileSearch, ...textGeneratorProps('Contextual Summary', 'Summarize text with specific context in mind.', 'You are a research assistant. Summarize the following document, focusing specifically on the aspects related to the provided context.') },
    { id: 'reading_comprehension_assistant', name: 'Reading Comprehension Assistant', icon: BookOpen, ...textGeneratorProps('Reading Comprehension', 'Answer questions based on a text.', 'You are a reading tutor. Read the following text and answer the questions that follow.') },
    { id: 'knowledge_graph_builder', name: 'Knowledge Graph Builder', icon: GitBranch, ...textGeneratorProps('Knowledge Graph', 'Build a knowledge graph from text.', 'You are a data scientist. Extract the key entities and their relationships from the following text and format them as a knowledge graph.') },
    { id: 'smart_data_categorizer', name: 'Smart Data Categorizer', icon: SlidersHorizontal, ...textGeneratorProps('Data Categorization', 'Categorize data into groups.', 'You are a data analyst. Categorize the following list of items into logical groups and provide a name for each group.') },
    { id: 'concept_map_generator', name: 'Concept Map Generator', icon: Map, ...textGeneratorProps('Concept Map', 'Generate a concept map from a topic.', 'You are an educator. Create a concept map outlining the key ideas and their connections for the following topic.') },
    { id: 'industry_report_writer', name: 'Industry Report Writer', icon: Building2, ...textGeneratorProps('Industry Report', 'Write a report on an industry.', 'You are a market analyst. Write a brief report on the current state of the following industry, including key players and trends.') },
    { id: 'product_feature_brainstormer', name: 'Product Feature Brainstormer', icon: Lightbulb, ...textGeneratorProps('Product Features', 'Brainstorm features for a product.', 'You are a product manager. Brainstorm a list of 10 potential features for the following product concept.') },
    { id: 'meeting_notes_formatter', name: 'Meeting Notes Formatter', icon: FileText, ...textGeneratorProps('Formatted Notes', 'Format raw meeting notes.', 'You are an executive assistant. Take the following raw meeting notes and format them into a clean summary with action items.') },
    { id: 'text_complexity_adjuster', name: 'Text Complexity Adjuster', icon: ArrowDownUp, ...textGeneratorProps('Adjusted Text', 'Adjust the complexity of a text.', 'You are an editor. Rewrite the following text to a specified reading level (e.g., 8th grade).') },
    { id: 'idiom_and_metaphor_finder', name: 'Idiom and Metaphor Finder', icon: Drama, ...textGeneratorProps('Idioms and Metaphors', 'Find idioms and metaphors in a text.', 'You are a linguist. Identify all idioms and metaphors in the following text.') },
    { id: 'paragraph_flow_improver', name: 'Paragraph Flow Improver', icon: ArrowDownAZ, ...textGeneratorProps('Improved Flow', 'Improve the flow of a paragraph.', 'You are a writing coach. Reorder the sentences in the following paragraph to improve its logical flow and readability.') },
    { id: 'acronym_expander', name: 'Acronym Expander', icon: BookCopy, ...textGeneratorProps('Expanded Acronyms', 'Expand acronyms found in a text.', 'You are a technical writer. Find all acronyms in the following text and provide their full form.') },
    { id: 'real_time_definition_finder', name: 'Real-Time Definition Finder', icon: HelpCircle, ...textGeneratorProps('Definitions', 'Find definitions for words in a text.', 'You are a lexicographer. Provide definitions for the bolded words in the following text.') },
    { id: 'smart_keyword_highlighter', name: 'Smart Keyword Highlighter', icon: Paintbrush, ...textGeneratorProps('Highlighted Keywords', 'Highlight keywords in a text.', 'You are a researcher. Identify and bold the most important keywords in the following text.') },
    { id: 'tone_and_mood_adjuster', name: 'Tone and Mood Adjuster', icon: Smile, ...textGeneratorProps('Adjusted Tone', 'Adjust the tone and mood of a text.', 'You are a copywriter. Rewrite the following text to have a more optimistic and energetic tone.') },
    { id: 'formality_level_converter', name: 'Formality Level Converter', icon: Briefcase, ...textGeneratorProps('Converted Text', 'Convert text between formal and informal styles.', 'You are a professional communicator. Convert the following informal text into a formal business communication.') },
    { id: 'brand_voice_enforcer', name: 'Brand Voice Enforcer', icon: Megaphone, ...textGeneratorProps('Brand Voice Check', 'Check text for brand voice consistency.', 'You are a brand manager. Review the following text and suggest edits to ensure it aligns with the specified brand voice guidelines.') },
    { id: 'multilingual_synonym_finder', name: 'Multilingual Synonym Finder', icon: Languages, ...textGeneratorProps('Synonyms', 'Find synonyms in multiple languages.', 'You are a translator. Provide 5 synonyms for the given word in the specified languages.') },
];
