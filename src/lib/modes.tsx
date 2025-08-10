import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, MoonStar, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User
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
import { ConflictPlotGenerator } from '@/components/modes/ConflictPlotGenerator';
import { BusinessKpiForecaster } from '@/components/modes/BusinessKpiForecaster';
import { VideoMaker } from '@/components/modes/VideoMaker';

export type ModeId = 
  | 'chat' | 'voice_chat' | 'photo_generator' | 'photo_editor' | 'video_generator' | 'video_editor' | 'code_generator' 
  | 'code_analyzer' | 'website_maker' | 'app_maker' | 'game_maker' | 'file_maker' 
  | 'file_editor' | 'story_generator' | 'summarizer' | 'translator' | 'song_writer' 
  | 'sound_generator' | 'ad_maker' | 'grammar_corrector' | 'homework_helper' | 'yoga_fitness' 
  | 'games_knowledge' | 'question_giver' | 'idea_generator' | 'email_writer' | 'recipe_creator'
  | 'travel_planner' | 'dream_interpreter' | 'speech_writer' | 'poem_generator'
  | 'character_generator' | 'fact_checker' | 'chart_maker' | 'fact_giver' | 'fun_chat'
  | 'logo_maker' | 'design_assistant' | 'three_d_modeler' | 'animation_tool' | 'seo_tool'
  | 'social_media_post_maker' | 'market_research' | 'creative_content_expander' | 'technical_document_generator'
  | 'title_optimizer' | 'fictional_world_builder' | 'interview_question_creator' | 'text_rewriter_pro'
  | 'digital_persona_creator' | 'job_role_analyzer' | 'conflict_plot_generator' | 'business_kpi_forecaster'
  | 'video_maker'
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
  | 'data_quality_score_generator' | 'multi_variable_trend_predictor' | 'competitor_comparison_engine'
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
    { id: 'video_maker', name: 'Video Maker', icon: Clapperboard, description: 'Generate video clips from a text prompt.', component: VideoMaker },
    { id: 'video_generator', name: 'Video Storyboard', icon: Video, description: 'Generate a video with narration in any language.', component: VideoGenerator },
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
    { id: 'creative_content_expander', name: 'Creative Content Expander', icon: Wand2, description: 'Expand on a topic with creative details.', component: CreativeContentExpander },
    { id: 'technical_document_generator', name: 'Technical Document Generator', icon: BookCopy, description: 'Generate technical documents and specifications.', component: TechnicalDocumentGenerator },
    { id: 'title_optimizer', name: 'Title Optimizer', icon: Target, description: 'Optimize titles and headlines for impact.', component: TitleOptimizer },
    { id: 'fictional_world_builder', name: 'Fictional World Builder', icon: Building2, description: 'Create detailed fictional worlds for stories.', component: FictionalWorldBuilder },
    { id: 'interview_question_creator', name: 'Interview Question Creator', icon: HelpCircle, description: 'Generate interview questions for any role.', component: InterviewQuestionCreator },
    { id: 'text_rewriter_pro', name: 'Text Rewriter Pro', icon: RefreshCw, description: 'Rewrite and rephrase text to improve clarity and style.', component: TextRewriterPro },
    { id: 'digital_persona_creator', name: 'Digital Persona Creator', icon: Users, description: 'Create detailed user personas for marketing and product design.', component: DigitalPersonaCreator },
    { id: 'job_role_analyzer', name: 'Job Role Analyzer', icon: Briefcase, description: 'Analyze job roles and create detailed descriptions.', component: JobRoleAnalyzer },
    { id: 'conflict_plot_generator', name: 'Conflict Plot Generator', icon: Shuffle, description: 'Generate compelling plot conflicts for your stories.', component: ConflictPlotGenerator },
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
    { id: 'song_writer', name: 'Song Writer', icon: Music, description: 'Generate lyrics and a matching melody.', component: SongWriter },
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
    // All new modes start here
    { id: 'seo_keyword_gap_finder', name: 'SEO Keyword Gap Finder', icon: FileSearch, ...textGeneratorProps('SEO Keyword Gap', 'Find keywords your competitors rank for, but you don\'t.', 'You are an SEO expert. Analyze the provided competitor domains and find keyword gaps for my domain.') },
    { id: 'meta_tag_optimization_tool', name: 'Meta Tag Optimizer', icon: Tags, ...textGeneratorProps('Meta Tag Optimization', 'Optimize meta tags for better SEO.', 'You are an SEO expert. Generate optimized meta title and description tags for the following URL or topic.') },
    { id: 'navigation_usability_analyzer', name: 'Navigation Usability Analyzer', icon: Route, ...textGeneratorProps('Navigation Usability Analysis', 'Analyze and improve website navigation.', 'You are a UI/UX expert. Analyze the navigation structure provided and suggest improvements for usability.') },
    { id: 'conversational_flow_designer', name: 'Conversational Flow Designer', icon: MessageCircle, ...textGeneratorProps('Conversational Flow', 'Design chatbot and voice assistant flows.', 'You are a conversation design expert. Create a conversational flow for a chatbot based on the following scenario.') },
    { id: 'storyboard_idea_expander', name: 'Storyboard Idea Expander', icon: Clapperboard, ...textGeneratorProps('Expanded Storyboard', 'Expand a simple idea into a full storyboard.', 'You are a creative director. Expand the following simple idea into a detailed storyboard with multiple scenes, actions, and dialogues.') },
    { id: 'smart_prompt_optimizer', name: 'Smart Prompt Optimizer', icon: BrainCog, ...textGeneratorProps('Optimized Prompt', 'Optimize your prompts for better AI results.', 'You are a prompt engineering expert. Rewrite the following prompt to be more effective for a large language model.') },
    { id: 'context_aware_summary_maker', name: 'Context-Aware Summarizer', icon: FileQuestion, ...textGeneratorProps('Context-Aware Summary', 'Summarize text with context in mind.', 'You are an expert summarizer. Summarize the following text, paying special attention to the provided context.') },
    { id: 'reading_comprehension_assistant', name: 'Reading Comprehension Assistant', icon: BookOpen, ...textGeneratorProps('Reading Comprehension', 'Answer questions based on a text.', 'You are a reading comprehension expert. Read the following text and answer the provided questions.') },
    { id: 'knowledge_graph_builder', name: 'Knowledge Graph Builder', icon: GitBranch, ...textGeneratorProps('Knowledge Graph', 'Build knowledge graphs from text.', 'You are a data scientist. Extract entities and relationships from the following text and format them as a knowledge graph (nodes and edges).') },
    { id: 'smart_data_categorizer', name: 'Smart Data Categorizer', icon: SlidersHorizontal, ...textGeneratorProps('Data Categorization', 'Categorize data into relevant groups.', 'You are a data analyst. Categorize the following list of items into logical groups and provide a name for each group.') },
    { id: 'concept_map_generator', name: 'Concept Map Generator', icon: Map, ...textGeneratorProps('Concept Map', 'Generate concept maps from a topic.', 'You are an educator. Create a concept map from the following topic, showing main ideas and their connections in a hierarchical or relational structure.') },
    { id: 'industry_report_writer', name: 'Industry Report Writer', icon: Landmark, ...textGeneratorProps('Industry Report', 'Generate a report on a specific industry.', 'You are a market analyst. Write a concise industry report on the following topic, including key trends, major players, and future outlook.') },
    { id: 'product_feature_brainstormer', name: 'Product Feature Brainstormer', icon: Lightbulb, ...textGeneratorProps('Product Features', 'Brainstorm new features for a product.', 'You are a product manager. Brainstorm a list of innovative new features for the following product.') },
    { id: 'meeting_notes_formatter', name: 'Meeting Notes Formatter', icon: FileText, ...textGeneratorProps('Formatted Notes', 'Format raw meeting notes into a structured summary.', 'You are an executive assistant. Format the following raw meeting notes into a clean summary with action items, key decisions, and topics discussed.') },
    { id: 'text_complexity_adjuster', name: 'Text Complexity Adjuster', icon: SlidersHorizontal, ...textGeneratorProps('Adjusted Text', 'Adjust the complexity of a text.', 'You are an expert editor. Rewrite the following text to a specified complexity level (e.g., "for a 5th grader" or "for a PhD-level academic").') },
    { id: 'idiom_and_metaphor_finder', name: 'Idiom & Metaphor Finder', icon: VenetianMask, ...textGeneratorProps('Figurative Language', 'Find idioms and metaphors in a text.', 'You are a linguist. Identify all idioms, metaphors, and other figurative language in the following text and explain their meaning.') },
    { id: 'paragraph_flow_improver', name: 'Paragraph Flow Improver', icon: ArrowDownUp, ...textGeneratorProps('Improved Paragraphs', 'Improve the flow and transition between paragraphs.', 'You are a writing coach. Reorder and rewrite the following paragraphs to improve their logical flow and transitions.') },
    { id: 'acronym_expander', name: 'Acronym Expander', icon: ArrowDownAZ, ...textGeneratorProps('Expanded Acronyms', 'Expand acronyms found in a text.', 'You are a technical writer. Find all acronyms in the following text and expand them to their full form.') },
    { id: 'real_time_definition_finder', name: 'Real-Time Definition Finder', icon: BookOpen, ...textGeneratorProps('Definitions', 'Find definitions for terms in a text.', 'You are a lexicographer. Provide definitions for the following list of terms.') },
    { id: 'smart_keyword_highlighter', name: 'Smart Keyword Highlighter', icon: Paintbrush, ...textGeneratorProps('Highlighted Keywords', 'Highlight the most important keywords in a text.', 'You are an SEO specialist. Identify and list the most important keywords and phrases in the following text.') },
    { id: 'tone_and_mood_adjuster', name: 'Tone & Mood Adjuster', icon: Smile, ...textGeneratorProps('Adjusted Tone', 'Adjust the tone and mood of a text.', 'You are a professional copywriter. Rewrite the following text to have a specific tone (e.g., "more formal," "more enthusiastic," "more empathetic").') },
    { id: 'formality_level_converter', name: 'Formality Level Converter', icon: Briefcase, ...textGeneratorProps('Converted Formality', 'Convert text between formal and informal language.', 'You are a professional editor. Convert the following text from its current formality level to the specified one (formal or informal).') },
    { id: 'brand_voice_enforcer', name: 'Brand Voice Enforcer', icon: Megaphone, ...textGeneratorProps('Brand Voice Check', 'Ensure text aligns with a specific brand voice.', 'You are a brand manager. Rewrite the following text to align with the provided brand voice guidelines.') },
    { id: 'multilingual_synonym_finder', name: 'Multilingual Synonym Finder', icon: Languages, ...textGeneratorProps('Synonyms', 'Find synonyms for a word in multiple languages.', 'You are a linguist. Provide a list of synonyms for the following word in the specified languages.') },
    { id: 'long_form_report_writer', name: 'Long-Form Report Writer', icon: BookCopy, ...textGeneratorProps('Long-Form Report', 'Generate a detailed long-form report on a topic.', 'You are a research analyst. Write a detailed, multi-page report on the following topic, including an introduction, body paragraphs with data, and a conclusion.') },
    { id: 'smart_question_answer_engine', name: 'Smart Q&A Engine', icon: HelpCircle, ...textGeneratorProps('Answer', 'Answer a question based on provided context.', 'You are an AI assistant. Answer the following question based on the provided context document.') },
    { id: 'policy_drafting_assistant', name: 'Policy Drafting Assistant', icon: Landmark, ...textGeneratorProps('Draft Policy', 'Draft a policy document for an organization.', 'You are a policy advisor. Draft a clear and comprehensive policy document for the following purpose.') },
    { id: 'legal_clause_suggestion_tool', name: 'Legal Clause Suggestion Tool', icon: Scale, ...textGeneratorProps('Legal Clauses', 'Suggest legal clauses for a contract.', 'You are a legal assistant. Suggest standard legal clauses for a contract with the following purpose.') },
    { id: 'patent_abstract_generator', name: 'Patent Abstract Generator', icon: FileText, ...textGeneratorProps('Patent Abstract', 'Generate a technical abstract for a patent.', 'You are a patent agent. Write a concise and technical abstract for a patent based on the following invention description.') },
    { id: 'contract_simplifier', name: 'Contract Simplifier', icon: BookCheck, ...textGeneratorProps('Simplified Contract', 'Simplify complex legal contracts.', 'You are a legal expert. Rewrite the following complex legal contract into plain language that is easy to understand.') },
    { id: 'compliance_document_checker', name: 'Compliance Document Checker', icon: ShieldCheck, ...textGeneratorProps('Compliance Check', 'Check a document for compliance with regulations.', 'You are a compliance officer. Check the following document against the specified regulations and identify any potential issues.') },
    { id: 'script_scene_expander', name: 'Script Scene Expander', icon: Clapperboard, ...textGeneratorProps('Expanded Scene', 'Expand a short scene into a full script segment.', 'You are a screenwriter. Expand the following brief scene description into a full script segment with dialogue, action, and character interactions.') },
    { id: 'interview_transcript_formatter', name: 'Interview Transcript Formatter', icon: MicVocal, ...textGeneratorProps('Formatted Transcript', 'Format a raw interview transcript.', 'You are a journalist. Format the following raw interview transcript, cleaning up errors and adding speaker labels.') },
    { id: 'character_dialogue_improver', name: 'Character Dialogue Improver', icon: MessageCircle, ...textGeneratorProps('Improved Dialogue', 'Improve the dialogue for a character.', 'You are a script doctor. Rewrite the following dialogue for the specified character to make it more believable and impactful.') },
    { id: 'multi_threaded_story_planner', name: 'Multi-threaded Story Planner', icon: GitBranch, ...textGeneratorProps('Story Plan', 'Plan a story with multiple plot threads.', 'You are a novelist. Create an outline for a story with multiple interwoven plot threads based on the following premise.') },
    { id: 'fiction_outline_maker', name: 'Fiction Outline Maker', icon: BookCopy, ...textGeneratorProps('Fiction Outline', 'Create an outline for a fiction story.', 'You are a writer. Create a detailed chapter-by-chapter outline for a story based on the following idea.') },
    { id: 'comedy_script_punch_up_tool', name: 'Comedy Script Punch-up', icon: Smile, ...textGeneratorProps('Punched-up Script', 'Add jokes and improve a comedy script.', 'You are a comedy writer. Punch-up the following comedy script by adding jokes, improving timing, and enhancing the humor.') },
    { id: 'villain_backstory_creator', name: 'Villain Backstory Creator', icon: Drama, ...textGeneratorProps('Villain Backstory', 'Create a compelling backstory for a villain.', 'You are a storyteller. Create a compelling and tragic backstory for a villain with the following characteristics.') },
    { id: 'theme_and_motif_analyzer', name: 'Theme & Motif Analyzer', icon: BookOpen, ...textGeneratorProps('Thematic Analysis', 'Analyze themes and motifs in a text.', 'You are a literary critic. Analyze the major themes and recurring motifs in the following text.') },
    { id: 'story_arc_evaluator', name: 'Story Arc Evaluator', icon: LineChart, ...textGeneratorProps('Story Arc Evaluation', 'Evaluate the strength of a story arc.', 'You are a developmental editor. Evaluate the following story arc for pacing, character development, and emotional impact.') },
    { id: 'mythology_based_plot_creator', name: 'Mythology-based Plot Creator', icon: Landmark, ...textGeneratorProps('Mythological Plot', 'Create a plot based on a mythological story.', 'You are a mythologist. Create a modern story plot based on the framework of the following myth.') },
    { id: 'sci_fi_concept_designer', name: 'Sci-Fi Concept Designer', icon: Telescope, ...textGeneratorProps('Sci-Fi Concept', 'Design a unique science fiction concept.', 'You are a sci-fi author. Flesh out the following science fiction concept with details about technology, society, and implications.') },
    { id: 'fantasy_lore_generator', name: 'Fantasy Lore Generator', icon: BookOpen, ...textGeneratorProps('Fantasy Lore', 'Generate lore for a fantasy world.', 'You are a world-builder. Generate the history, mythology, and lore for a fantasy world based on the following prompt.') },
    { id: 'alternate_history_plot_writer', name: 'Alternate History Plot Writer', icon: Milestone, ...textGeneratorProps('Alternate History Plot', 'Write a plot for an alternate history story.', 'You are a historian. Create a story plot based on the following alternate history premise.') },
    { id: 'scientific_hypothesis_suggestor', name: 'Scientific Hypothesis Suggestor', icon: Beaker, ...textGeneratorProps('Hypothesis', 'Suggest a testable scientific hypothesis.', 'You are a scientist. Based on the following observation, suggest a testable scientific hypothesis.') },
    { id: 'experiment_design_planner', name: 'Experiment Design Planner', icon: FlaskConical, ...textGeneratorProps('Experiment Design', 'Plan an experiment to test a hypothesis.', 'You are a research scientist. Design a detailed experiment to test the following hypothesis, including methodology, controls, and expected outcomes.') },
    { id: 'research_summary_maker', name: 'Research Summary Maker', icon: FileQuestion, ...textGeneratorProps('Research Summary', 'Summarize a scientific research paper.', 'You are a science communicator. Summarize the key findings of the following research paper for a general audience.') },
    { id: 'journal_abstract_creator', name: 'Journal Abstract Creator', icon: FileText, ...textGeneratorProps('Journal Abstract', 'Create a formal abstract for a journal.', 'You are an academic researcher. Write a structured, formal abstract for a scientific journal based on the following research paper.') },
    { id: 'methodology_drafting_tool', name: 'Methodology Drafting Tool', icon: BookCopy, ...textGeneratorProps('Methodology Draft', 'Draft the methodology section of a paper.', 'You are a researcher. Draft the methodology section for a research paper based on the following experimental design.') },
    { id: 'lab_report_formatter', name: 'Lab Report Formatter', icon: FileText, ...textGeneratorProps('Formatted Lab Report', 'Format data into a formal lab report.', 'You are a lab technician. Format the following raw data and observations into a structured lab report.') },
    { id: 'academic_citation_builder', name: 'Academic Citation Builder', icon: Library, ...textGeneratorProps('Citations', 'Build academic citations in various formats.', 'You are a librarian. Generate a citation for the following source in the specified format (e.g., APA, MLA, Chicago).') },
    { id: 'equation_solver_pro', name: 'Equation Solver Pro', icon: Minus, ...textGeneratorProps('Equation Solution', 'Solve complex mathematical equations.', 'You are a mathematician. Solve the following mathematical equation, showing the steps involved.') },
    { id: 'graph_theory_visualizer', name: 'Graph Theory Visualizer', icon: GitBranch, ...textGeneratorProps('Graph Visualization', 'Describe a graph from a set of nodes and edges.', 'You are a computer scientist. Describe the visual representation of a graph with the following nodes and edges.') },
    { id: 'statistical_pattern_finder', name: 'Statistical Pattern Finder', icon: BarChart3, ...textGeneratorProps('Statistical Patterns', 'Find statistical patterns in a dataset.', 'You are a statistician. Analyze the following dataset and identify any significant patterns, correlations, or anomalies.') },
    { id: 'data_anomaly_detector', name: 'Data Anomaly Detector', icon: Search, ...textGeneratorProps('Anomalies', 'Detect anomalies in a dataset.', 'You are a data scientist. Analyze the following dataset and identify any outliers or anomalies that deviate from the norm.') },
    { id: 'predictive_model_trainer', name: 'Predictive Model Trainer', icon: BrainCog, ...textGeneratorProps('Model Training Plan', 'Create a plan to train a predictive model.', 'You are a machine learning engineer. Outline the steps to train a predictive model for the following task, including data preprocessing, model selection, and evaluation.') },
    { id: 'simulation_scenario_builder', name: 'Simulation Scenario Builder', icon: Component, ...textGeneratorProps('Simulation Scenario', 'Build a scenario for a simulation.', 'You are a simulation engineer. Build a detailed scenario for a simulation based on the following parameters.') },
    { id: 'ai_behavior_modeler', name: 'AI Behavior Modeler', icon: Bot, ...textGeneratorProps('AI Behavior Model', 'Model the behavior of an AI agent.', 'You are an AI researcher. Describe the behavior model for an AI agent in the following scenario, including its goals, actions, and decision-making process.') },
    { id: 'ethics_risk_analyzer', name: 'Ethics Risk Analyzer', icon: Scale, ...textGeneratorProps('Ethics Risk Analysis', 'Analyze the ethical risks of a technology.', 'You are an ethics specialist. Analyze the potential ethical risks and societal impacts of the following technology or AI system.') },
    { id: 'bias_detector_engine', name: 'Bias Detector Engine', icon: Search, ...textGeneratorProps('Bias Detection', 'Detect potential bias in a dataset or model.', 'You are a data ethicist. Analyze the following dataset or model description for potential sources of bias and suggest mitigation strategies.') },
    { id: 'privacy_impact_forecaster', name: 'Privacy Impact Forecaster', icon: ShieldCheck, ...textGeneratorProps('Privacy Impact Forecast', 'Forecast the privacy impact of a system.', 'You are a privacy expert. Assess the potential privacy impact of the following system and suggest measures to protect user data.') },
    { id: 'algorithmic_explainability_tool', name: 'Algorithmic Explainability Tool', icon: FileQuestion, ...textGeneratorProps('Algorithm Explanation', 'Explain an algorithm in simple terms.', 'You are an AI communicator. Explain the following complex algorithm in simple, understandable terms for a non-technical audience.') },
    { id: 'dataset_integrity_checker', name: 'Dataset Integrity Checker', icon: CheckSquare, ...textGeneratorProps('Dataset Integrity Check', 'Check the integrity of a dataset.', 'You are a data curator. Analyze the following dataset description for potential issues with integrity, such as missing values, duplicates, or inconsistencies.') },
    { id: 'feature_importance_analyzer', name: 'Feature Importance Analyzer', icon: SlidersHorizontal, ...textGeneratorProps('Feature Importance', 'Analyze the importance of features in a model.', 'You are a machine learning scientist. Based on the following model and dataset description, analyze and rank the importance of each feature.') },
    { id: 'forecast_accuracy_evaluator', name: 'Forecast Accuracy Evaluator', icon: CheckSquare, ...textGeneratorProps('Forecast Accuracy', 'Evaluate the accuracy of a forecast.', 'You are a data analyst. Evaluate the accuracy of the following forecast against the provided actual data and calculate key error metrics.') },
    { id: 'root_cause_analysis_bot', name: 'Root Cause Analysis Bot', icon: Search, ...textGeneratorProps('Root Cause Analysis', 'Perform a root cause analysis on a problem.', 'You are a systems analyst. Perform a root cause analysis on the following problem description, identifying the underlying factors.') },
    { id: 'data_quality_score_generator', name: 'Data Quality Score Generator', icon: CheckSquare, ...textGeneratorProps('Data Quality Score', 'Generate a quality score for a dataset.', 'You are a data steward. Assess the quality of the following dataset based on criteria like completeness, consistency, and accuracy, and provide a quality score and report.') },
    { id: 'multi_variable_trend_predictor', name: 'Multi-variable Trend Predictor', icon: LineChart, ...textGeneratorProps('Trend Prediction', 'Predict trends based on multiple variables.', 'You are a data scientist. Predict future trends based on the following multi-variable dataset.') },
    { id: 'competitor_comparison_engine', name: 'Competitor Comparison Engine', icon: Users, ...textGeneratorProps('Competitor Comparison', 'Compare competitors based on a set of criteria.', 'You are a business strategist. Provide a detailed comparison of the following competitors based on the provided criteria.') },
    { id: 'market_gap_identifier', name: 'Market Gap Identifier', icon: Search, ...textGeneratorProps('Market Gaps', 'Identify gaps in a specific market.', 'You are a market researcher. Analyze the following market and identify potential gaps or underserved customer needs.') },
    { id: 'customer_segmentation_mapper', name: 'Customer Segmentation Mapper', icon: Users, ...textGeneratorProps('Customer Segments', 'Segment customers into distinct groups.', 'You are a marketing analyst. Segment the following customer data into distinct groups based on their behavior and demographics.') },
    { id: 'price_elasticity_estimator', name: 'Price Elasticity Estimator', icon: BadgePercent, ...textGeneratorProps('Price Elasticity', 'Estimate the price elasticity of a product.', 'You are an economist. Estimate the price elasticity of demand for the following product based on the provided sales data at different price points.') },
    { id: 'churn_risk_predictor', name: 'Churn Risk Predictor', icon: TrendingUp, ...textGeneratorProps('Churn Risk', 'Predict customer churn risk.', 'You are a data analyst. Based on the following customer data, predict the churn risk for each customer.') },
    { id: 'profit_margin_optimizer', name: 'Profit Margin Optimizer', icon: CircleDollarSign, ...textGeneratorProps('Profit Margin Optimization', 'Suggest ways to optimize profit margins.', 'You are a business consultant. Analyze the following business case and suggest strategies to optimize profit margins.') },
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, ...textGeneratorProps('Supply Chain Plan', 'Plan an optimized supply chain.', 'You are a logistics expert. Design an optimized supply chain plan for the following product, from manufacturing to final delivery.') },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Home, ...textGeneratorProps('Inventory Forecast', 'Forecast inventory needs.', 'You are a supply chain manager. Forecast the inventory needs for the following product based on historical sales data and upcoming promotions.') },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, ...textGeneratorProps('Optimized Route', 'Optimize a logistics route.', 'You are a logistics planner. Find the most optimal route for a delivery truck given the following list of destinations and constraints.') },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, ...textGeneratorProps('Vendor Risk Score', 'Score the risk of a potential vendor.', 'You are a procurement specialist. Assess the risk of the following potential vendor based on the provided information.') },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Search, ...textGeneratorProps('Fraud Detection', 'Detect fraudulent transactions.', 'You are a financial analyst. Analyze the following list of transactions and identify any that are potentially fraudulent.') },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: BarChart3, ...textGeneratorProps('Transaction Patterns', 'Find patterns in transaction data.', 'You are a data scientist. Analyze the following transaction data to identify recurring patterns or customer behaviors.') },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: CircleDollarSign, ...textGeneratorProps('Credit Risk Analysis', 'Analyze the credit risk of an applicant.', 'You are a credit analyst. Assess the credit risk of the following loan applicant based on their financial profile.') },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, ...textGeneratorProps('Optimized Portfolio', 'Optimize an investment portfolio.', 'You are a financial advisor. Suggest optimizations for the following investment portfolio based on the user\'s risk tolerance and financial goals.') },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileQuestion, ...textGeneratorProps('Financial Summary', 'Summarize a financial statement.', 'You are an accountant. Summarize the key takeaways from the following financial statement for a non-expert audience.') },
    { id: 'cash_flow_projection_tool', name: 'Cash Flow Projection Tool', icon: LineChart, ...textGeneratorProps('Cash Flow Projection', 'Project future cash flow.', 'You are a financial planner. Project the cash flow for the next six months based on the following business data.') },
    { id: 'expense_categorization_ai', name: 'Expense Categorization AI', icon: SlidersHorizontal, ...textGeneratorProps('Categorized Expenses', 'Categorize a list of expenses.', 'You are an accountant. Categorize the following list of business expenses into standard accounting categories.') },
    { id: 'budget_recommendation_engine', name: 'Budget Recommendation Engine', icon: CircleDollarSign, ...textGeneratorProps('Budget Recommendation', 'Recommend a budget based on income and goals.', 'You are a financial advisor. Create a recommended monthly budget for a person with the following income, expenses, and financial goals.') },
    { id: 'payroll_compliance_checker', name: 'Payroll Compliance Checker', icon: CheckSquare, ...textGeneratorProps('Payroll Compliance', 'Check payroll for compliance.', 'You are an HR specialist. Review the following payroll scenario for compliance with labor laws.') },
    { id: 'policy_impact_forecaster', name: 'Policy Impact Forecaster', icon: Landmark, ...textGeneratorProps('Policy Impact', 'Forecast the impact of a new policy.', 'You are a public policy analyst. Forecast the potential social and economic impacts of the following proposed policy.') },
    { id: 'grant_proposal_generator', name: 'Grant Proposal Generator', icon: FileText, ...textGeneratorProps('Grant Proposal', 'Generate a grant proposal.', 'You are a grant writer. Write a compelling grant proposal for the following project and funding body.') },
    { id: 'nonprofit_donor_outreach_ai', name: 'Nonprofit Donor Outreach AI', icon: Users, ...textGeneratorProps('Donor Outreach', 'Draft outreach messages for donors.', 'You are a fundraising coordinator. Draft personalized outreach emails for different segments of nonprofit donors.') },
    { id: 'fundraising_campaign_optimizer', name: 'Fundraising Campaign Optimizer', icon: TrendingUp, ...textGeneratorProps('Fundraising Optimization', 'Optimize a fundraising campaign.', 'You are a fundraising consultant. Suggest strategies to optimize the following fundraising campaign for maximum donations.') },
    { id: 'volunteer_scheduling_planner', name: 'Volunteer Scheduling Planner', icon: GanttChart, ...textGeneratorProps('Volunteer Schedule', 'Create a schedule for volunteers.', 'You are an event coordinator. Create an efficient schedule for volunteers for the following event.') },
    { id: 'event_agenda_creator', name: 'Event Agenda Creator', icon: GanttChart, ...textGeneratorProps('Event Agenda', 'Create an agenda for an event.', 'You are an event planner. Create a detailed agenda for the following event, including session times, speakers, and topics.') },
    { id: 'guest_speaker_finder_ai', name: 'Guest Speaker Finder AI', icon: Search, ...textGeneratorProps('Guest Speakers', 'Find guest speakers for an event.', 'You are an event organizer. Suggest a list of potential guest speakers for an event on the following topic.') },
    { id: 'registration_data_analyzer', name: 'Registration Data Analyzer', icon: BarChart3, ...textGeneratorProps('Registration Analysis', 'Analyze event registration data.', 'You are a data analyst. Analyze the following event registration data to identify attendee demographics and trends.') },
    { id: 'audience_engagement_predictor', name: 'Audience Engagement Predictor', icon: Users, ...textGeneratorProps('Engagement Prediction', 'Predict audience engagement.', 'You are a marketing analyst. Predict the potential audience engagement for the following piece of content or event.') },
    { id: 'public_opinion_trend_analyzer', name: 'Public Opinion Trend Analyzer', icon: TrendingUp, ...textGeneratorProps('Public Opinion', 'Analyze public opinion trends.', 'You are a political scientist. Analyze the following data to identify trends in public opinion on a specific issue.') },
    { id: 'civic_policy_simulation_tool', name: 'Civic Policy Simulation Tool', icon: Component, ...textGeneratorProps('Policy Simulation', 'Simulate the effects of a civic policy.', 'You are a policy analyst. Describe the likely outcomes and effects of implementing the following civic policy.') },
    { id: 'local_issue_report_generator', name: 'Local Issue Report Generator', icon: Landmark, ...textGeneratorProps('Local Issue Report', 'Generate a report on a local issue.', 'You are a journalist. Generate a report on the following local issue, including background, key stakeholders, and potential solutions.') },
    { id: 'environmental_impact_calculator', name: 'Environmental Impact Calculator', icon: Leaf, ...textGeneratorProps('Environmental Impact', 'Calculate the environmental impact of an activity.', 'You are an environmental scientist. Estimate the environmental impact (e.g., carbon footprint) of the following activity or product.') },
    { id: 'climate_data_visualizer', name: 'Climate Data Visualizer', icon: BarChart3, ...textGeneratorProps('Climate Data', 'Describe a visualization for climate data.', 'You are a data visualization expert. Describe an effective way to visualize the following climate data to make it understandable.') },
    { id: 'carbon_footprint_forecaster', name: 'Carbon Footprint Forecaster', icon: LineChart, ...textGeneratorProps('Carbon Forecast', 'Forecast a carbon footprint.', 'You are an environmental analyst. Forecast the future carbon footprint of the following entity (e.g., company, city) based on current trends.') },
    { id: 'wildlife_pattern_tracker', name: 'Wildlife Pattern Tracker', icon: Route, ...textGeneratorProps('Wildlife Patterns', 'Track and analyze wildlife movement patterns.', 'You are a biologist. Analyze the following wildlife tracking data to identify migration patterns, habitat usage, and behavioral trends.') },
    { id: 'habitat_restoration_planner', name: 'Habitat Restoration Planner', icon: Leaf, ...textGeneratorProps('Habitat Restoration Plan', 'Plan a habitat restoration project.', 'You are a conservationist. Create a detailed plan for a habitat restoration project for the following area and species.') },
    { id: 'ocean_current_predictor', name: 'Ocean Current Predictor', icon: Wind, ...textGeneratorProps('Ocean Currents', 'Predict ocean currents.', 'You are an oceanographer. Predict the ocean currents in the following region based on provided data (e.g., wind, temperature).') },
    { id: 'renewable_energy_yield_estimator', name: 'Renewable Energy Yield Estimator', icon: BadgePercent, ...textGeneratorProps('Energy Yield', 'Estimate the yield of a renewable energy project.', 'You are an energy engineer. Estimate the potential energy yield of a renewable energy project (e.g., solar, wind) in the following location.') },
    { id: 'disaster_response_simulator', name: 'Disaster Response Simulator', icon: Component, ...textGeneratorProps('Disaster Response', 'Simulate a disaster response scenario.', 'You are an emergency manager. Outline a response plan and resource allocation for the following disaster scenario.') },
    { id: 'emergency_evacuation_planner', name: 'Emergency Evacuation Planner', icon: Route, ...textGeneratorProps('Evacuation Plan', 'Plan an emergency evacuation route.', 'You are an urban planner. Design an optimal emergency evacuation route for the following area, considering population density and traffic.') },
    { id: 'health_risk_assessment_ai', name: 'Health Risk Assessment AI', icon: HeartPulse, ...textGeneratorProps('Health Risk Assessment', 'Assess health risks based on a profile.', 'You are a health professional. Assess the potential health risks for an individual with the following lifestyle and medical profile.') },
    { id: 'symptom_pattern_analyzer', name: 'Symptom Pattern Analyzer', icon: LineChart, ...textGeneratorProps('Symptom Patterns', 'Analyze patterns in medical symptoms.', 'You are a medical researcher. Analyze the following patient symptom data to identify patterns or potential correlations.') },
    { id: 'disease_outbreak_predictor', name: 'Disease Outbreak Predictor', icon: TrendingUp, ...textGeneratorProps('Outbreak Prediction', 'Predict the spread of a disease.', 'You are an epidemiologist. Predict the potential spread of a disease in a population based on the following data.') },
    { id: 'nutritional_plan_generator', name: 'Nutritional Plan Generator', icon: CookingPot, ...textGeneratorProps('Nutritional Plan', 'Generate a personalized nutritional plan.', 'You are a nutritionist. Create a personalized weekly meal plan for an individual with the following dietary needs and goals.') },
    { id: 'exercise_routine_optimizer', name: 'Exercise Routine Optimizer', icon: Trophy, ...textGeneratorProps('Exercise Routine', 'Optimize an exercise routine.', 'You are a fitness coach. Create an optimized weekly exercise routine for an individual with the following fitness level and goals.') },
    { id: 'sleep_cycle_tracker_ai', name: 'Sleep Cycle Tracker AI', icon: MoonStar, ...textGeneratorProps('Sleep Analysis', 'Analyze sleep cycle data.', 'You are a sleep specialist. Analyze the following sleep tracker data and provide insights and recommendations for improving sleep quality.') },
    { id: 'mental_wellness_suggestion_bot', name: 'Mental Wellness Suggestion Bot', icon: Bot, ...textGeneratorProps('Wellness Suggestions', 'Get suggestions for mental wellness.', 'You are a mental health advocate. Provide a list of actionable suggestions for improving mental wellness based on the following user input.') },
    { id: 'therapy_session_planner', name: 'Therapy Session Planner', icon: GanttChart, ...textGeneratorProps('Therapy Session Plan', 'Plan a therapy session.', 'You are a therapist. Create a structured plan for a therapy session focusing on the following issue or goal.') },
    { id: 'medical_literature_summarizer', name: 'Medical Literature Summarizer', icon: FileQuestion, ...textGeneratorProps('Medical Summary', 'Summarize medical literature.', 'You are a medical researcher. Summarize the key findings of the following medical study for a healthcare professional.') },
    { id: 'clinical_trial_data_analyzer', name: 'Clinical Trial Data Analyzer', icon: TestTube, ...textGeneratorProps('Clinical Trial Analysis', 'Analyze clinical trial data.', 'You are a biostatistician. Analyze the following clinical trial data and summarize the results, including efficacy and safety outcomes.') },
    { id: 'genetic_pattern_detector', name: 'Genetic Pattern Detector', icon: Binary, ...textGeneratorProps('Genetic Patterns', 'Detect patterns in genetic data.', 'You are a geneticist. Analyze the following genetic sequence data to identify specific patterns or markers.') },
    { id: 'protein_structure_predictor', name: 'Protein Structure Predictor', icon: GitBranch, ...textGeneratorProps('Protein Structure', 'Predict the 3D structure of a protein.', 'You are a biochemist. Describe the likely 3D structure of a protein based on its amino acid sequence.') },
    { id: 'drug_interaction_checker', name: 'Drug Interaction Checker', icon: TestTube, ...textGeneratorProps('Drug Interactions', 'Check for potential drug interactions.', 'You are a pharmacist. Check for potential interactions between the following list of drugs.') },
    { id: 'surgical_procedure_planner', name: 'Surgical Procedure Planner', icon: GanttChart, ...textGeneratorProps('Surgical Plan', 'Plan a surgical procedure.', 'You are a surgeon. Outline the key steps and considerations for the following surgical procedure.') },
    { id: 'patient_recovery_forecaster', name: 'Patient Recovery Forecaster', icon: LineChart, ...textGeneratorProps('Recovery Forecast', 'Forecast a patient\'s recovery timeline.', 'You are a physician. Provide a likely recovery timeline and milestones for a patient with the following condition and treatment plan.') },
    { id: 'virtual_lab_technician', name: 'Virtual Lab Technician', icon: Beaker, ...textGeneratorProps('Lab Procedure', 'Get instructions for a lab procedure.', 'You are a lab manager. Provide step-by-step instructions for performing the following laboratory procedure.') },
    { id: 'radiology_image_analyzer', name: 'Radiology Image Analyzer', icon: Image, ...textGeneratorProps('Radiology Analysis', 'Analyze a description of a radiology image.', 'You are a radiologist. Based on the following description of a radiology image (e.g., X-ray, MRI), provide a preliminary analysis and findings.') },
    { id: 'pathology_report_summarizer', name: 'Pathology Report Summarizer', icon: FileQuestion, ...textGeneratorProps('Pathology Summary', 'Summarize a pathology report.', 'You are a pathologist. Summarize the key findings of the following pathology report in clear, concise language.') },
    { id: 'diagnostic_support_assistant', name: 'Diagnostic Support Assistant', icon: Stethoscope, ...textGeneratorProps('Diagnostic Support', 'Get diagnostic suggestions.', 'You are a diagnostic AI. Based on the following patient symptoms and history, provide a list of potential differential diagnoses.') },
    { id: 'remote_patient_monitoring_ai', name: 'Remote Patient Monitoring AI', icon: HeartPulse, ...textGeneratorProps('Patient Monitoring', 'Analyze remote patient monitoring data.', 'You are a nurse practitioner. Analyze the following remote patient monitoring data (e.g., blood pressure, glucose levels) and flag any areas of concern.') },
    { id: 'appointment_scheduling_optimizer', name: 'Appointment Scheduling Optimizer', icon: GanttChart, ...textGeneratorProps('Optimized Schedule', 'Optimize an appointment schedule.', 'You are a clinic manager. Optimize the following appointment schedule to minimize wait times and maximize efficiency.') },
    { id: 'hospital_resource_forecaster', name: 'Hospital Resource Forecaster', icon: Home, ...textGeneratorProps('Resource Forecast', 'Forecast hospital resource needs.', 'You are a hospital administrator. Forecast the resource needs (e.g., beds, staff) for the following week based on admission trends and scheduled procedures.') },
    { id: 'medical_inventory_tracker', name: 'Medical Inventory Tracker', icon: CheckSquare, ...textGeneratorProps('Inventory Tracking', 'Plan medical inventory management.', 'You are a supply chain manager. Based on usage rates, create a reorder plan for the following medical supplies.') },
    { id: 'treatment_plan_personalizer', name: 'Treatment Plan Personalizer', icon: SlidersHorizontal, ...textGeneratorProps('Personalized Treatment', 'Personalize a medical treatment plan.', 'You are a specialist physician. Personalize the following standard treatment plan based on the specific patient\'s profile and comorbidities.') },
    { id: 'symptom_to_specialist_recommender', name: 'Symptom-to-Specialist Recommender', icon: Users, ...textGeneratorProps('Specialist Recommendation', 'Recommend a medical specialist.', 'You are a general practitioner. Based on the following patient symptoms, recommend the appropriate type of medical specialist to consult.') },
    { id: 'manufacturing_workflow_optimizer', name: 'Manufacturing Workflow Optimizer', icon: Workflow, ...textGeneratorProps('Optimized Workflow', 'Optimize a manufacturing workflow.', 'You are an industrial engineer. Analyze the following manufacturing workflow and suggest optimizations to improve efficiency and reduce bottlenecks.') },
    { id: 'quality_control_inspector_ai', name: 'Quality Control Inspector AI', icon: CheckSquare, ...textGeneratorProps('Quality Control', 'Create a quality control checklist.', 'You are a quality assurance manager. Create a detailed quality control inspection checklist for the following product.') },
    { id: 'machine_failure_predictor', name: 'Machine Failure Predictor', icon: TrendingUp, ...textGeneratorProps('Failure Prediction', 'Predict machine failure.', 'You are a maintenance engineer. Based on the following sensor data from a machine, predict the likelihood of failure in the near future.') },
    { id: 'production_scheduling_planner', name: 'Production Scheduling Planner', icon: GanttChart, ...textGeneratorProps('Production Schedule', 'Plan a production schedule.', 'You are a production planner. Create an efficient production schedule to fulfill the following list of orders with the given constraints.') },
    { id: 'supply_shortage_forecaster', name: 'Supply Shortage Forecaster', icon: LineChart, ...textGeneratorProps('Supply Shortage', 'Forecast potential supply shortages.', 'You are a supply chain analyst. Based on the following market data and supplier information, forecast the risk of a supply shortage for a specific component.') },
    { id: 'assembly_line_speed_optimizer', name: 'Assembly Line Speed Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Assembly Line', 'Optimize assembly line speed.', 'You are a process engineer. Suggest adjustments to optimize the speed and throughput of the following assembly line.') },
    { id: 'worker_safety_risk_detector', name: 'Worker Safety Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Safety Risk', 'Detect worker safety risks.', 'You are a safety officer. Analyze the following description of a workplace environment or task and identify potential safety risks for workers.') },
    { id: 'energy_usage_analyzer', name: 'Energy Usage Analyzer', icon: BarChart3, ...textGeneratorProps('Energy Usage', 'Analyze energy usage patterns.', 'You are an energy consultant. Analyze the following energy usage data for a facility and suggest ways to improve efficiency.') },
    { id: 'maintenance_cost_estimator', name: 'Maintenance Cost Estimator', icon: CircleDollarSign, ...textGeneratorProps('Maintenance Cost', 'Estimate maintenance costs.', 'You are a maintenance manager. Estimate the annual maintenance costs for the following piece of equipment.') },
    { id: 'smart_factory_process_designer', name: 'Smart Factory Process Designer', icon: Factory, ...textGeneratorProps('Smart Factory', 'Design a smart factory process.', 'You are a systems engineer. Design an automated, smart factory process for manufacturing the following product.') },
    { id: 'robotics_task_planner', name: 'Robotics Task Planner', icon: Bot, ...textGeneratorProps('Robotics Plan', 'Plan a task for a robot.', 'You are a robotics engineer. Create a sequence of actions for a robot to complete the following task.') },
    { id: 'cad_design_suggestion_tool', name: 'CAD Design Suggestion Tool', icon: Component, ...textGeneratorProps('CAD Suggestions', 'Get suggestions for a CAD design.', 'You are a design engineer. Based on the following CAD design requirements, suggest design features and optimizations.') },
    { id: 'material_stress_tester_ai', name: 'Material Stress Tester AI', icon: TestTube, ...textGeneratorProps('Material Stress Test', 'Simulate a material stress test.', 'You are a materials scientist. Describe the likely outcome of a stress test on the following material under the specified conditions.') },
    { id: 'product_lifecycle_forecaster', name: 'Product Lifecycle Forecaster', icon: LineChart, ...textGeneratorProps('Product Lifecycle', 'Forecast a product\'s lifecycle.', 'You are a product strategist. Forecast the lifecycle stages (introduction, growth, maturity, decline) for the following new product.') },
    { id: 'parts_inventory_balancer', name: 'Parts Inventory Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Inventory Balance', 'Balance a parts inventory.', 'You are an inventory manager. Suggest adjustments to the following parts inventory to balance stock levels and reduce costs.') },
    { id: 'blueprint_error_detector', name: 'Blueprint Error Detector', icon: Search, ...textGeneratorProps('Blueprint Errors', 'Detect errors in a blueprint.', 'You are an architect. Review the following blueprint description for potential errors, conflicts, or inconsistencies.') },
    { id: 'prototype_design_optimizer', name: 'Prototype Design Optimizer', icon: Star, ...textGeneratorProps('Prototype Optimization', 'Optimize a prototype design.', 'You are a product designer. Suggest improvements to the following prototype design to enhance usability and manufacturability.') },
    { id: 'design_to_manufacture_converter', name: 'Design-to-Manufacture Converter', icon: RefreshCw, ...textGeneratorProps('Manufacturing Plan', 'Convert a design into a manufacturing plan.', 'You are a manufacturing engineer. Convert the following product design into a step-by-step manufacturing plan.') },
    { id: 'building_energy_efficiency_analyzer', name: 'Building Energy Efficiency Analyzer', icon: Home, ...textGeneratorProps('Building Efficiency', 'Analyze building energy efficiency.', 'You are an energy auditor. Analyze the following building specifications and suggest improvements for energy efficiency.') },
    { id: 'urban_traffic_flow_predictor', name: 'Urban Traffic Flow Predictor', icon: Route, ...textGeneratorProps('Traffic Prediction', 'Predict urban traffic flow.', 'You are a traffic engineer. Predict the traffic flow on the following city streets at a specified time of day.') },
    { id: 'road_repair_priority_planner', name: 'Road Repair Priority Planner', icon: GanttChart, ...textGeneratorProps('Road Repair', 'Prioritize road repairs.', 'You are a civil engineer. Prioritize the following list of road repairs based on factors like traffic volume, damage severity, and budget.') },
    { id: 'parking_demand_forecaster', name: 'Parking Demand Forecaster', icon: Car, ...textGeneratorProps('Parking Demand', 'Forecast parking demand.', 'You are an urban planner. Forecast the parking demand for the following area or event.') },
    { id: 'public_transit_route_optimizer', name: 'Public Transit Route Optimizer', icon: Route, ...textGeneratorProps('Transit Route', 'Optimize a public transit route.', 'You are a transportation planner. Suggest optimizations for the following public transit route to improve efficiency and ridership.') },
    { id: 'construction_schedule_forecaster', name: 'Construction Schedule Forecaster', icon: GanttChart, ...textGeneratorProps('Construction Schedule', 'Forecast a construction schedule.', 'You are a project manager. Create a realistic construction schedule for the following project, including key milestones.') },
    { id: 'utility_consumption_tracker', name: 'Utility Consumption Tracker', icon: BarChart3, ...textGeneratorProps('Utility Consumption', 'Analyze utility consumption.', 'You are a data analyst. Analyze the following utility consumption data (water, electricity) to identify patterns and anomalies.') },
    { id: 'smart_lighting_planner', name: 'Smart Lighting Planner', icon: Lightbulb, ...textGeneratorProps('Lighting Plan', 'Plan a smart lighting system.', 'You are a lighting designer. Create a plan for a smart lighting system for the following space to optimize for energy efficiency and user comfort.') },
    { id: 'renewable_grid_load_balancer', name: 'Renewable Grid Load Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Grid Load Balancing', 'Plan load balancing for a renewable grid.', 'You are a power systems engineer. Suggest a strategy for load balancing on an electrical grid with the following mix of renewable energy sources.') },
    { id: 'flood_risk_predictor', name: 'Flood Risk Predictor', icon: Wind, ...textGeneratorProps('Flood Risk', 'Predict flood risk.', 'You are a hydrologist. Assess the flood risk for the following area based on weather forecasts and geographical data.') },
    { id: 'water_usage_efficiency_planner', name: 'Water Usage Efficiency Planner', icon: Leaf, ...textGeneratorProps('Water Efficiency', 'Plan for water usage efficiency.', 'You are a sustainability consultant. Suggest a plan to improve water usage efficiency for the following facility or household.') },
    { id: 'sewage_network_monitoring_ai', name: 'Sewage Network Monitoring AI', icon: Workflow, ...textGeneratorProps('Sewage Network', 'Analyze a sewage network.', 'You are a sanitation engineer. Analyze the following data from a sewage network to detect potential blockages or failures.') },
    { id: 'crop_yield_forecaster', name: 'Crop Yield Forecaster', icon: Leaf, ...textGeneratorProps('Crop Yield', 'Forecast crop yield.', 'You are an agronomist. Forecast the potential yield for the following crop based on soil data, weather patterns, and farming practices.') },
    { id: 'soil_nutrient_analyzer', name: 'Soil Nutrient Analyzer', icon: Beaker, ...textGeneratorProps('Soil Analysis', 'Analyze soil nutrients.', 'You are a soil scientist. Analyze the following soil test results and provide recommendations for nutrient management.') },
    { id: 'pest_infestation_predictor', name: 'Pest Infestation Predictor', icon: Bug, ...textGeneratorProps('Pest Prediction', 'Predict pest infestations.', 'You are an entomologist. Predict the risk of a specific pest infestation based on weather data and crop type.') },
    { id: 'irrigation_optimization_planner', name: 'Irrigation Optimization Planner', icon: SlidersHorizontal, ...textGeneratorProps('Irrigation Plan', 'Optimize an irrigation plan.', 'You are a water management specialist. Create an optimized irrigation schedule for the following farm to conserve water and maximize crop health.') },
    { id: 'farm_equipment_usage_tracker', name: 'Farm Equipment Usage Tracker', icon: Tractor, ...textGeneratorProps('Equipment Usage', 'Analyze farm equipment usage.', 'You are a farm manager. Analyze the following farm equipment usage data to identify opportunities for efficiency and maintenance.') },
    { id: 'agricultural_market_price_forecaster', name: 'Agricultural Market Price Forecaster', icon: LineChart, ...textGeneratorProps('Market Price', 'Forecast agricultural market prices.', 'You are an agricultural economist. Forecast the market price for the following commodity based on supply, demand, and market trends.') },
    { id: 'greenhouse_climate_controller', name: 'Greenhouse Climate Controller', icon: Settings, ...textGeneratorProps('Greenhouse Climate', 'Plan a greenhouse climate control strategy.', 'You are a horticulturalist. Devise a climate control strategy (temperature, humidity, light) for a greenhouse growing the following plants.') },
    { id: 'livestock_health_monitor', name: 'Livestock Health Monitor', icon: HeartPulse, ...textGeneratorProps('Livestock Health', 'Analyze livestock health data.', 'You are a veterinarian. Analyze the following health data from livestock (e.g., activity levels, temperature) to detect early signs of illness.') },
    { id: 'seed_selection_optimizer', name: 'Seed Selection Optimizer', icon: Leaf, ...textGeneratorProps('Seed Selection', 'Optimize seed selection.', 'You are a crop scientist. Recommend the best seed varieties for the following location and growing conditions.') },
    { id: 'weather_impact_predictor', name: 'Weather Impact Predictor', icon: Wind, ...textGeneratorProps('Weather Impact', 'Predict the impact of weather.', 'You are a meteorologist. Predict the potential impact of the following weather event on a specific activity or industry (e.g., farming, travel).') },
    { id: 'sports_performance_analyzer', name: 'Sports Performance Analyzer', icon: Trophy, ...textGeneratorProps('Performance Analysis', 'Analyze sports performance data.', 'You are a sports analyst. Analyze the following performance data for an athlete or team and provide insights for improvement.') },
    { id: 'athlete_training_optimizer', name: 'Athlete Training Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Training Plan', 'Optimize an athlete\'s training plan.', 'You are a sports scientist. Create an optimized training plan for an athlete with the following goals and current fitness level.') },
    { id: 'game_strategy_simulator', name: 'Game Strategy Simulator', icon: Component, ...textGeneratorProps('Game Strategy', 'Simulate a sports game strategy.', 'You are a coach. Simulate the likely outcome of using a specific strategy in the following game scenario.') },
    { id: 'player_injury_risk_detector', name: 'Player Injury Risk Detector', icon: HeartPulse, ...textGeneratorProps('Injury Risk', 'Detect player injury risk.', 'You are a sports physician. Assess the injury risk for a player based on their workload, biomechanics, and past injuries.') },
    { id: 'match_outcome_predictor', name: 'Match Outcome Predictor', icon: TrendingUp, ...textGeneratorProps('Match Prediction', 'Predict the outcome of a match.', 'You are a sports betting analyst. Predict the outcome of the following match, including a probability for each result.') },
    { id: 'tournament_schedule_optimizer', name: 'Tournament Schedule Optimizer', icon: GanttChart, ...textGeneratorProps('Tournament Schedule', 'Optimize a tournament schedule.', 'You are a league administrator. Create an optimized schedule for the following tournament to ensure fairness and logistical efficiency.') },
    { id: 'fan_engagement_tracker', name: 'Fan Engagement Tracker', icon: Users, ...textGeneratorProps('Fan Engagement', 'Analyze fan engagement data.', 'You are a sports marketer. Analyze the following fan engagement data (e.g., social media, viewership) and suggest strategies for growth.') },
    { id: 'sponsorship_roi_analyzer', name: 'Sponsorship ROI Analyzer', icon: CircleDollarSign, ...textGeneratorProps('Sponsorship ROI', 'Analyze sponsorship ROI.', 'You are a marketing analyst. Estimate the return on investment (ROI) for the following sports sponsorship deal.') },
    { id: 'merchandise_sales_forecaster', name: 'Merchandise Sales Forecaster', icon: LineChart, ...textGeneratorProps('Sales Forecast', 'Forecast merchandise sales.', 'You are a retail manager. Forecast the sales for the following team merchandise based on team performance and market trends.') },
    { id: 'ticket_price_optimizer', name: 'Ticket Price Optimizer', icon: BadgePercent, ...textGeneratorProps('Ticket Prices', 'Optimize ticket prices.', 'You are an economist. Suggest an optimal ticket pricing strategy for the following game to maximize revenue.') },
    { id: 'streaming_audience_predictor', name: 'Streaming Audience Predictor', icon: Users, ...textGeneratorProps('Audience Prediction', 'Predict a streaming audience.', 'You are a media analyst. Predict the potential streaming audience size for the following live event.') },
    { id: 'social_sentiment_analyzer', name: 'Social Sentiment Analyzer', icon: MessageSquare, ...textGeneratorProps('Social Sentiment', 'Analyze social media sentiment.', 'You are a social media analyst. Analyze the sentiment of the following social media posts regarding a specific topic or brand.') },
    { id: 'trend_forecast_engine', name: 'Trend Forecast Engine', icon: TrendingUp, ...textGeneratorProps('Trend Forecast', 'Forecast emerging trends.', 'You are a trend forecaster. Identify and describe emerging trends based on the following collection of articles and posts.') },
    { id: 'brand_loyalty_scorer', name: 'Brand Loyalty Scorer', icon: Star, ...textGeneratorProps('Brand Loyalty', 'Score brand loyalty.', 'You are a market researcher. Assess the brand loyalty of customers based on the following survey data or purchase history.') },
    { id: 'customer_review_summarizer', name: 'Customer Review Summarizer', icon: FileQuestion, ...textGeneratorProps('Review Summary', 'Summarize customer reviews.', 'You are a product manager. Summarize the key themes and takeaways from the following set of customer reviews.') },
    { id: 'influence_network_mapper', name: 'Influence Network Mapper', icon: GitBranch, ...textGeneratorProps('Influence Network', 'Map an influence network.', 'You are a social network analyst. Map the influence network for a specific topic on social media, identifying key influencers and communities.') },
    { id: 'viral_content_predictor', name: 'Viral Content Predictor', icon: TrendingUp, ...textGeneratorProps('Viral Prediction', 'Predict the viral potential of content.', 'You are a content strategist. Assess the viral potential of the following piece of content.') },
    { id: 'ad_campaign_performance_forecaster', name: 'Ad Campaign Performance Forecaster', icon: LineChart, ...textGeneratorProps('Campaign Performance', 'Forecast ad campaign performance.', 'You are a digital marketer. Forecast the performance (e.g., clicks, conversions) of the following ad campaign.') },
    { id: 'conversion_funnel_optimizer', name: 'Conversion Funnel Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Funnel Optimization', 'Optimize a conversion funnel.', 'You are a conversion rate optimization (CRO) specialist. Analyze the following conversion funnel and suggest improvements to reduce drop-offs.') },
    { id: 'lead_scoring_ai', name: 'Lead Scoring AI', icon: Star, ...textGeneratorProps('Lead Scoring', 'Score sales leads.', 'You are a sales operations manager. Score the following sales leads based on their demographic data and behavior to prioritize follow-up.') },
    { id: 'sales_forecasting_assistant', name: 'Sales Forecasting Assistant', icon: LineChart, ...textGeneratorProps('Sales Forecast', 'Get a sales forecast.', 'You are a sales manager. Create a sales forecast for the next quarter based on the current pipeline and historical data.') },
    { id: 'upsell_recommendation_engine', name: 'Upsell Recommendation Engine', icon: TrendingUp, ...textGeneratorProps('Upsell Recommendations', 'Get upsell recommendations.', 'You are a sales strategist. Based on a customer\'s purchase history, recommend relevant upsell products or services.') },
    { id: 'cross_sell_pattern_finder', name: 'Cross-Sell Pattern Finder', icon: BarChart3, ...textGeneratorProps('Cross-Sell Patterns', 'Find cross-sell patterns.', 'You are a data analyst. Analyze the following sales data to find products that are frequently bought together.') },
    { id: 'product_return_risk_detector', name: 'Product Return Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Return Risk', 'Detect product return risk.', 'You are a retail analyst. Assess the risk of a product being returned based on its attributes and the customer\'s profile.') },
    { id: 'loyalty_reward_planner', name: 'Loyalty Reward Planner', icon: Star, ...textGeneratorProps('Loyalty Rewards', 'Plan a loyalty reward program.', 'You are a marketing manager. Design an effective loyalty rewards program for the following brand.') },
    { id: 'customer_retention_strategy_maker', name: 'Customer Retention Strategy Maker', icon: Users, ...textGeneratorProps('Retention Strategy', 'Create a customer retention strategy.', 'You are a customer success manager. Create a customer retention strategy for the following business and customer segment.') },
    { id: 'store_layout_optimization_ai', name: 'Store Layout Optimization AI', icon: Home, ...textGeneratorProps('Store Layout', 'Optimize a store layout.', 'You are a retail consultant. Suggest optimizations for the following store layout to improve traffic flow and increase sales.') },
    { id: 'shelf_stocking_suggestion_tool', name: 'Shelf Stocking Suggestion Tool', icon: SlidersHorizontal, ...textGeneratorProps('Shelf Stocking', 'Get shelf stocking suggestions.', 'You are a merchandising manager. Based on sales data, suggest the optimal product placement on a store shelf.') },
    { id: 'price_match_detector', name: 'Price Match Detector', icon: Search, ...textGeneratorProps('Price Match', 'Find price matching opportunities.', 'You are a retail analyst. Find instances where a competitor\'s price for the following product is lower.') },
    { id: 'seasonal_demand_forecaster', name: 'Seasonal Demand Forecaster', icon: LineChart, ...textGeneratorProps('Seasonal Demand', 'Forecast seasonal demand.', 'You are a retail planner. Forecast the seasonal demand for the following product.') },
    { id: 'fashion_trend_predictor', name: 'Fashion Trend Predictor', icon: TrendingUp, ...textGeneratorProps('Fashion Trends', 'Predict fashion trends.', 'You are a fashion forecaster. Predict the next big fashion trends based on runway shows, social media, and street style.') },
    { id: 'outfit_combination_recommender', name: 'Outfit Combination Recommender', icon: Shirt, ...textGeneratorProps('Outfit Recommender', 'Get outfit recommendations.', 'You are a personal stylist. Recommend a complete outfit from the following list of clothing items for a specific occasion.') },
    { id: 'fabric_quality_analyzer', name: 'Fabric Quality Analyzer', icon: Search, ...textGeneratorProps('Fabric Quality', 'Analyze fabric quality.', 'You are a textile expert. Assess the quality of a fabric based on the following description of its composition and weave.') },
    { id: 'production_batch_optimizer', name: 'Production Batch Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Production Batch', 'Optimize a production batch.', 'You are a production manager. Determine the optimal batch size for manufacturing the following fashion item to minimize cost and waste.') },
    { id: 'color_palette_forecaster', name: 'Color Palette Forecaster', icon: Palette, ...textGeneratorProps('Color Palette', 'Forecast upcoming color palettes.', 'You are a design trend forecaster. Predict the color palettes that will be popular in the upcoming season.') },
    { id: 'textile_pattern_designer_ai', name: 'Textile Pattern Designer AI', icon: Wand2, ...textGeneratorProps('Textile Pattern', 'Design a textile pattern.', 'You are a textile designer. Generate a description of a unique textile pattern based on the following theme.') },
    { id: 'jewelry_design_suggestor', name: 'Jewelry Design Suggestor', icon: Star, ...textGeneratorProps('Jewelry Design', 'Get jewelry design suggestions.', 'You are a jewelry designer. Suggest a design for a piece of jewelry based on the following concept and materials.') },
    { id: 'shoe_size_fit_predictor', name: 'Shoe Size Fit Predictor', icon: Footprints, ...textGeneratorProps('Shoe Fit', 'Predict shoe size and fit.', 'You are a footwear specialist. Based on a customer\'s measurements and foot shape, predict their correct shoe size and recommend a style.') },
    { id: 'accessory_style_matcher', name: 'Accessory Style Matcher', icon: Component, ...textGeneratorProps('Accessory Match', 'Match accessories to an outfit.', 'You are a fashion stylist. Recommend the best accessories (e.g., bag, scarf, belt) to complement the following outfit.') },
    { id: 'luxury_goods_market_forecaster', name: 'Luxury Goods Market Forecaster', icon: LineChart, ...textGeneratorProps('Luxury Market', 'Forecast the luxury goods market.', 'You are a market analyst. Forecast the trends in the luxury goods market for the next year.') },
    { id: 'music_mood_classifier', name: 'Music Mood Classifier', icon: Music, ...textGeneratorProps('Music Mood', 'Classify the mood of a song.', 'You are a musicologist. Classify the mood and tone of a song based on the following description of its lyrics and instrumentation.') },
    { id: 'song_tempo_analyzer', name: 'Song Tempo Analyzer', icon: SlidersHorizontal, ...textGeneratorProps('Song Tempo', 'Analyze the tempo of a song.', 'You are a DJ. Analyze the tempo (BPM) and energy level of a song based on its description.') },
    { id: 'instrument_arrangement_suggestor', name: 'Instrument Arrangement Suggestor', icon: Component, ...textGeneratorProps('Instrument Arrangement', 'Get instrument arrangement suggestions.', 'You are a music producer. Suggest an instrument arrangement for a song with the following melody and genre.') },
    { id: 'chord_progression_generator', name: 'Chord Progression Generator', icon: Music, ...textGeneratorProps('Chord Progression', 'Generate a chord progression.', 'You are a songwriter. Generate a compelling chord progression in a specific key and style.') },
    { id: 'mixing_mastering_advisor', name: 'Mixing & Mastering Advisor', icon: Settings, ...textGeneratorProps('Mixing/Mastering', 'Get mixing and mastering advice.', 'You are an audio engineer. Provide advice on how to mix and master the following track to achieve a specific sound.') },
    { id: 'sound_quality_enhancer', name: 'Sound Quality Enhancer', icon: Wand2, ...textGeneratorProps('Sound Quality', 'Get tips to enhance sound quality.', 'You are an audio engineer. Suggest techniques to enhance the sound quality of the following audio recording.') },
    { id: 'audio_scene_identifier', name: 'Audio Scene Identifier', icon: AudioLines, ...textGeneratorProps('Audio Scene', 'Identify the scene from audio.', 'You are a sound designer. Based on the following description of an audio clip, identify the environment or scene it represents.') },
    { id: 'noise_removal_optimizer', name: 'Noise Removal Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Noise Removal', 'Get noise removal suggestions.', 'You are an audio restoration specialist. Suggest the best techniques to remove background noise from the following audio recording.') },
    { id: 'speech_emotion_analyzer', name: 'Speech Emotion Analyzer', icon: Smile, ...textGeneratorProps('Speech Emotion', 'Analyze the emotion in speech.', 'You are a linguist. Analyze the emotion conveyed in the following transcript of speech, considering word choice and tone descriptors.') },
    { id: 'podcast_topic_planner', name: 'Podcast Topic Planner', icon: MicVocal, ...textGeneratorProps('Podcast Topics', 'Plan topics for a podcast.', 'You are a podcast producer. Brainstorm a list of episode topics for a podcast with the following theme.') },
    { id: 'radio_ad_effectiveness_tracker', name: 'Radio Ad Effectiveness Tracker', icon: Megaphone, ...textGeneratorProps('Radio Ad', 'Analyze the effectiveness of a radio ad.', 'You are a marketing analyst. Assess the potential effectiveness of the following radio ad script.') },
    { id: 'film_script_coverage_ai', name: 'Film Script Coverage AI', icon: FileText, ...textGeneratorProps('Script Coverage', 'Get coverage for a film script.', 'You are a script reader. Provide coverage for the following film script, including a logline, synopsis, and comments on plot and character.') },
    { id: 'scene_location_suggestor', name: 'Scene Location Suggestor', icon: Map, ...textGeneratorProps('Location Suggestions', 'Get scene location suggestions.', 'You are a location scout. Suggest potential filming locations for a scene with the following description.') },
    { id: 'casting_fit_analyzer', name: 'Casting Fit Analyzer', icon: Users, ...textGeneratorProps('Casting Fit', 'Analyze casting fit for a role.', 'You are a casting director. Assess the fit of the following actor for a specific role based on their past work and the character description.') },
    { id: 'shot_sequence_planner', name: 'Shot Sequence Planner', icon: GanttChart, ...textGeneratorProps('Shot Sequence', 'Plan a shot sequence.', 'You are a film director. Create a shot list and sequence for filming the following scene.') },
    { id: 'lighting_setup_optimizer', name: 'Lighting Setup Optimizer', icon: Lightbulb, ...textGeneratorProps('Lighting Setup', 'Optimize a lighting setup.', 'You are a cinematographer. Design an optimal lighting setup for a scene with the following mood and setting.') },
    { id: 'special_effects_cost_estimator', name: 'Special Effects Cost Estimator', icon: CircleDollarSign, ...textGeneratorProps('VFX Cost', 'Estimate special effects costs.', 'You are a VFX producer. Estimate the potential cost of creating the following special effects sequence.') },
    { id: 'post_production_workflow_planner', name: 'Post-Production Workflow Planner', icon: Workflow, ...textGeneratorProps('Post-Production', 'Plan a post-production workflow.', 'You are a post-production supervisor. Create an efficient workflow plan for the post-production of the following film project.') },
    { id: 'trailer_impact_predictor', name: 'Trailer Impact Predictor', icon: TrendingUp, ...textGeneratorProps('Trailer Impact', 'Predict the impact of a film trailer.', 'You are a marketing executive. Predict the potential audience impact and box office performance based on the following film trailer description.') },
    { id: 'audience_review_sentiment_tracker', name: 'Audience Review Sentiment Tracker', icon: MessageSquare, ...textGeneratorProps('Audience Sentiment', 'Track audience review sentiment.', 'You are a data analyst. Analyze the sentiment of the following audience reviews for a film.') },
    { id: 'board_game_rule_optimizer', name: 'Board Game Rule Optimizer', icon: Gamepad2, ...textGeneratorProps('Game Rules', 'Optimize board game rules.', 'You are a game designer. Suggest improvements to the following set of board game rules to improve clarity and balance.') },
    { id: 'puzzle_difficulty_balancer', name: 'Puzzle Difficulty Balancer', icon: Puzzle, ...textGeneratorProps('Puzzle Difficulty', 'Balance the difficulty of a puzzle.', 'You are a puzzle designer. Adjust the difficulty of the following puzzle to be appropriate for a specific audience.') },
    { id: 'level_design_ai', name: 'Level Design AI', icon: Component, ...textGeneratorProps('Level Design', 'Get suggestions for a game level.', 'You are a level designer. Suggest ideas and features for a game level with the following theme and mechanics.') },
    { id: 'game_lore_expansion_tool', name: 'Game Lore Expansion Tool', icon: BookOpen, ...textGeneratorProps('Game Lore', 'Expand on game lore.', 'You are a narrative designer. Expand the lore of the following game world based on a simple premise.') },
    { id: 'enemy_behavior_modeler', name: 'Enemy Behavior Modeler', icon: Bot, ...textGeneratorProps('Enemy Behavior', 'Model enemy behavior in a game.', 'You are a game AI developer. Design the behavior patterns for an enemy in a game with the following characteristics.') },
    { id: 'loot_drop_probability_balancer', name: 'Loot Drop Probability Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Loot Drops', 'Balance loot drop probabilities.', 'You are a game economy designer. Balance the loot drop probabilities for the following enemies to create a rewarding player experience.') },
    { id: 'player_motivation_analyzer', name: 'Player Motivation Analyzer', icon: User, ...textGeneratorProps('Player Motivation', 'Analyze player motivations.', 'You are a game psychologist. Analyze the following player behavior data to understand their primary motivations.') },
    { id: 'multiplayer_matchmaking_optimizer', name: 'Multiplayer Matchmaking Optimizer', icon: Users, ...textGeneratorProps('Matchmaking', 'Optimize multiplayer matchmaking.', 'You are a backend engineer. Suggest an algorithm to optimize multiplayer matchmaking for skill and low latency.') },
    { id: 'esports_strategy_advisor', name: 'Esports Strategy Advisor', icon: Trophy, ...textGeneratorProps('Esports Strategy', 'Get esports strategy advice.', 'You are an esports coach. Suggest a strategy for the following team to win their next match in a specific game.') },
    { id: 'speedrun_path_optimizer', name: 'Speedrun Path Optimizer', icon: Route, ...textGeneratorProps('Speedrun Path', 'Optimize a speedrun path.', 'You are a speedrunner. Find the optimal path and sequence of actions to complete the following game as quickly as possible.') },
    { id: 'education_syllabus_planner', name: 'Education Syllabus Planner', icon: Library, ...textGeneratorProps('Syllabus', 'Plan an education syllabus.', 'You are a professor. Create a detailed syllabus for a course on the following subject.') },
    { id: 'exam_pattern_analyzer', name: 'Exam Pattern Analyzer', icon: BarChart3, ...textGeneratorProps('Exam Patterns', 'Analyze exam patterns.', 'You are a teacher. Analyze past exams for the following subject to identify recurring topics and question patterns.') },
    { id: 'learning_pace_personalizer', name: 'Learning Pace Personalizer', icon: SlidersHorizontal, ...textGeneratorProps('Learning Pace', 'Personalize a learning pace.', 'You are an instructional designer. Create a personalized learning plan and pace for a student with the following learning style and goals.') },
    { id: 'curriculum_gap_identifier', name: 'Curriculum Gap Identifier', icon: Search, ...textGeneratorProps('Curriculum Gaps', 'Identify gaps in a curriculum.', 'You are an education consultant. Analyze the following curriculum and identify any knowledge gaps or areas for improvement.') },
    { id: 'teaching_method_suggestor', name: 'Teaching Method Suggestor', icon: Wand2, ...textGeneratorProps('Teaching Methods', 'Get teaching method suggestions.', 'You are a pedagogical expert. Suggest effective teaching methods for the following subject and student age group.') },
    { id: 'classroom_engagement_tracker', name: 'Classroom Engagement Tracker', icon: Users, ...textGeneratorProps('Classroom Engagement', 'Analyze classroom engagement.', 'You are an educational researcher. Analyze the following classroom observation notes to assess student engagement levels.') },
    { id: 'assignment_feedback_generator', name: 'Assignment Feedback Generator', icon: FileText, ...textGeneratorProps('Assignment Feedback', 'Generate feedback for an assignment.', 'You are a teaching assistant. Generate constructive feedback for a student on the following assignment.') },
    { id: 'question_difficulty_calibrator', name: 'Question Difficulty Calibrator', icon: SlidersHorizontal, ...textGeneratorProps('Question Difficulty', 'Calibrate question difficulty.', 'You are an exam designer. Assess and calibrate the difficulty level of the following test questions.') },
    { id: 'lesson_plan_enhancer', name: 'Lesson Plan Enhancer', icon: Wand2, ...textGeneratorProps('Enhanced Lesson Plan', 'Enhance a lesson plan.', 'You are an experienced teacher. Suggest enhancements and activities to improve the following lesson plan.') },
    { id: 'grading_consistency_checker', name: 'Grading Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Grading Consistency', 'Check grading consistency.', 'You are a department head. Analyze the following set of grades from different teachers to check for consistency.') },
    { id: 'tutoring_session_scheduler', name: 'Tutoring Session Scheduler', icon: GanttChart, ...textGeneratorProps('Tutoring Schedule', 'Schedule a tutoring session.', 'You are a tutor. Create an effective schedule and plan for a tutoring session on the following subject.') },
    { id: 'learning_style_analyzer', name: 'Learning Style Analyzer', icon: User, ...textGeneratorProps('Learning Style', 'Analyze a learning style.', 'You are an educational psychologist. Analyze the following description of a student\'s habits to determine their likely learning style (e.g., visual, auditory, kinesthetic).') },
    { id: 'peer_review_summarizer', name: 'Peer Review Summarizer', icon: FileQuestion, ...textGeneratorProps('Peer Review Summary', 'Summarize peer reviews.', 'You are a student. Summarize the key feedback points from the following set of peer reviews on your work.') },
    { id: 'academic_progress_forecaster', name: 'Academic Progress Forecaster', icon: LineChart, ...textGeneratorProps('Academic Progress', 'Forecast academic progress.', 'You are a school counselor. Forecast a student\'s academic progress based on their current grades and study habits.') },
    { id: 'online_course_enrollment_predictor', name: 'Online Course Enrollment Predictor', icon: TrendingUp, ...textGeneratorProps('Enrollment Prediction', 'Predict online course enrollment.', 'You are a university administrator. Predict the enrollment numbers for the following new online course.') },
    { id: 'quiz_question_generator', name: 'Quiz Question Generator', icon: HelpCircle, ...textGeneratorProps('Quiz Questions', 'Generate quiz questions.', 'You are a teacher. Generate a set of quiz questions based on the following learning material.') },
    { id: 'flashcard_auto_creator', name: 'Flashcard Auto-Creator', icon: BookCopy, ...textGeneratorProps('Flashcards', 'Create flashcards from text.', 'You are a student. Create a set of flashcards (term and definition) from the following study notes.') },
    { id: 'concept_reinforcement_planner', name: 'Concept Reinforcement Planner', icon: Wand2, ...textGeneratorProps('Reinforcement Plan', 'Plan concept reinforcement.', 'You are a tutor. Create a plan with exercises and activities to reinforce the following concept for a student.') },
    { id: 'study_group_matching_ai', name: 'Study Group Matching AI', icon: Users, ...textGeneratorProps('Study Group', 'Match students for a study group.', 'You are a student coordinator. Match students into effective study groups based on their subjects, availability, and learning styles.') },
    { id: 'skill_gap_forecaster', name: 'Skill Gap Forecaster', icon: TrendingUp, ...textGeneratorProps('Skill Gap', 'Forecast future skill gaps.', 'You are an HR analyst. Forecast future skill gaps in the workforce based on industry trends.') },
    { id: 'language_learning_path_optimizer', name: 'Language Learning Path Optimizer', icon: Route, ...textGeneratorProps('Learning Path', 'Optimize a language learning path.', 'You are a language teacher. Create a personalized learning path for a student to achieve fluency in the following language.') },
    { id: 'pronunciation_feedback_ai', name: 'Pronunciation Feedback AI', icon: MicVocal, ...textGeneratorProps('Pronunciation', 'Get pronunciation feedback.', 'You are a pronunciation coach. Based on the following phonetic transcription, provide feedback and correction tips.') },
    { id: 'vocabulary_expansion_tool', name: 'Vocabulary Expansion Tool', icon: Wand2, ...textGeneratorProps('Vocabulary', 'Expand your vocabulary.', 'You are a lexicographer. Provide a list of advanced synonyms and example sentences for the following word.') },
    { id: 'grammar_practice_creator', name: 'Grammar Practice Creator', icon: BookCheck, ...textGeneratorProps('Grammar Practice', 'Create grammar practice exercises.', 'You are a language teacher. Create a set of grammar practice exercises focusing on a specific grammatical rule.') },
    { id: 'idiom_usage_coach', name: 'Idiom Usage Coach', icon: MessageCircle, ...textGeneratorProps('Idiom Coach', 'Learn how to use idioms.', 'You are a language coach. Explain the meaning and provide example sentences for the following idiom.') },
    { id: 'cultural_context_advisor', name: 'Cultural Context Advisor', icon: Globe, ...textGeneratorProps('Cultural Context', 'Get cultural context.', 'You are a cultural advisor. Provide cultural context and explain customs related to the following country or situation.') },
    { id: 'debate_strategy_planner', name: 'Debate Strategy Planner', icon: Swords, ...textGeneratorProps('Debate Strategy', 'Plan a debate strategy.', 'You are a debate coach. Create a strategy with key arguments and rebuttals for the following debate topic.') },
    { id: 'speech_timing_analyzer', name: 'Speech Timing Analyzer', icon: Clock, ...textGeneratorProps('Speech Timing', 'Analyze speech timing.', 'You are a public speaking coach. Analyze the following speech text and estimate its delivery time, suggesting where to pause.') },
    { id: 'presentation_flow_optimizer', name: 'Presentation Flow Optimizer', icon: Workflow, ...textGeneratorProps('Presentation Flow', 'Optimize a presentation flow.', 'You are a communications expert. Reorganize the following presentation slides for a more logical and impactful flow.') },
    { id: 'visual_aid_suggestor', name: 'Visual Aid Suggestor', icon: Image, ...textGeneratorProps('Visual Aids', 'Get visual aid suggestions.', 'You are a presentation designer. Suggest effective visual aids (e.g., charts, images, diagrams) for the following presentation topic.') },
    { id: 'slide_deck_consistency_checker', name: 'Slide Deck Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Slide Consistency', 'Check slide deck consistency.', 'You are a brand manager. Review the following slide deck for consistency in branding, formatting, and messaging.') },
    { id: 'audience_engagement_timer', name: 'Audience Engagement Timer', icon: Clock, ...textGeneratorProps('Engagement Timer', 'Plan audience engagement.', 'You are a public speaker. Suggest points in the following speech to pause for audience questions or interaction.') },
    { id: 'professional_bio_generator', name: 'Professional Bio Generator', icon: UserSquare, ...textGeneratorProps('Professional Bio', 'Generate a professional bio.', 'You are a career coach. Write a professional bio for an individual with the following experience and skills.') },
    { id: 'resume_keyword_optimizer', name: 'Resume Keyword Optimizer', icon: FileSearch, ...textGeneratorProps('Resume Keywords', 'Optimize a resume with keywords.', 'You are a recruiter. Suggest keywords to include in a resume for the following job description.') },
    { id: 'cover_letter_personalizer', name: 'Cover Letter Personalizer', icon: Mail, ...textGeneratorProps('Personalized Cover Letter', 'Personalize a cover letter.', 'You are a career advisor. Personalize the following generic cover letter for a specific job application.') },
    { id: 'job_interview_simulation_ai', name: 'Job Interview Simulation AI', icon: Mic, ...textGeneratorProps('Interview Simulation', 'Simulate a job interview.', 'You are an HR manager. Act as an interviewer and ask questions for the following job role.') },
    { id: 'career_path_predictor', name: 'Career Path Predictor', icon: TrendingUp, ...textGeneratorProps('Career Path', 'Predict a potential career path.', 'You are a career counselor. Based on the following skills and interests, suggest potential career paths.') },
    { id: 'skill_endorsement_analyzer', name: 'Skill Endorsement Analyzer', icon: Star, ...textGeneratorProps('Skill Endorsements', 'Analyze skill endorsements.', 'You are a professional networker. Analyze the following list of skill endorsements to identify a person\'s key strengths.') },
    { id: 'salary_benchmarking_tool', name: 'Salary Benchmarking Tool', icon: CircleDollarSign, ...textGeneratorProps('Salary Benchmark', 'Benchmark a salary.', 'You are an HR analyst. Provide a salary benchmark for the following job role in a specific location.') },
    { id: 'workplace_culture_fit_analyzer', name: 'Workplace Culture Fit Analyzer', icon: Users, ...textGeneratorProps('Culture Fit', 'Analyze workplace culture fit.', 'You are a corporate recruiter. Assess the potential culture fit of a candidate with the following personality traits for a specific company.') },
    { id: 'employee_feedback_summarizer', name: 'Employee Feedback Summarizer', icon: FileQuestion, ...textGeneratorProps('Feedback Summary', 'Summarize employee feedback.', 'You are an HR manager. Summarize the key themes from the following employee feedback survey.') },
    { id: 'team_dynamics_predictor', name: 'Team Dynamics Predictor', icon: Users, ...textGeneratorProps('Team Dynamics', 'Predict team dynamics.', 'You are an organizational psychologist. Predict the team dynamics of a group with the following personality profiles.') },
    { id: 'leadership_style_analyzer', name: 'Leadership Style Analyzer', icon: UserSquare, ...textGeneratorProps('Leadership Style', 'Analyze a leadership style.', 'You are a business coach. Analyze the following description of a manager\'s actions to determine their leadership style.') },
    { id: 'meeting_agenda_optimizer', name: 'Meeting Agenda Optimizer', icon: GanttChart, ...textGeneratorProps('Meeting Agenda', 'Optimize a meeting agenda.', 'You are a productivity expert. Optimize the following meeting agenda to be more efficient and outcome-focused.') },
    { id: 'task_priority_planner', name: 'Task Priority Planner', icon: GanttChart, ...textGeneratorProps('Task Priority', 'Prioritize a list of tasks.', 'You are a project manager. Prioritize the following list of tasks using a framework like the Eisenhower Matrix (Urgent/Important).') },
    { id: 'workload_balancer_ai', name: 'Workload Balancer AI', icon: SlidersHorizontal, ...textGeneratorProps('Workload Balancing', 'Balance a team\'s workload.', 'You are a team lead. Suggest a plan to balance the workload among team members with the following tasks and capacities.') },
    { id: 'deadline_risk_detector', name: 'Deadline Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Deadline Risk', 'Detect deadline risks.', 'You are a project manager. Assess the risk of missing the deadline for the following project based on its current status.') },
    { id: 'resource_allocation_forecaster', name: 'Resource Allocation Forecaster', icon: Users, ...textGeneratorProps('Resource Allocation', 'Forecast resource allocation needs.', 'You are a resource manager. Forecast the resource allocation needs for the following upcoming project.') },
    { id: 'cross_department_communication_tracker', name: 'Cross-Department Communication Tracker', icon: Workflow, ...textGeneratorProps('Communication Flow', 'Analyze communication flow.', 'You are a business analyst. Analyze the following description of communication between departments and identify potential bottlenecks.') },
    { id: 'training_needs_identifier', name: 'Training Needs Identifier', icon: Lightbulb, ...textGeneratorProps('Training Needs', 'Identify training needs.', 'You are a learning and development specialist. Identify potential training needs for a team with the following skill set and project goals.') },
    { id: 'onboarding_experience_planner', name: 'Onboarding Experience Planner', icon: GanttChart, ...textGeneratorProps('Onboarding Plan', 'Plan an onboarding experience.', 'You are an HR manager. Create a detailed 30-day onboarding plan for a new employee in the following role.') },
    { id: 'knowledge_transfer_optimizer', name: 'Knowledge Transfer Optimizer', icon: RefreshCw, ...textGeneratorProps('Knowledge Transfer', 'Optimize a knowledge transfer plan.', 'You are a project manager. Create a plan to efficiently transfer knowledge from an outgoing employee to a new one.') },
    { id: 'company_policy_clarity_checker', name: 'Company Policy Clarity Checker', icon: CheckSquare, ...textGeneratorProps('Policy Clarity', 'Check a company policy for clarity.', 'You are a communications specialist. Review the following company policy for clarity, simplicity, and tone.') },
    { id: 'internal_survey_analyzer', name: 'Internal Survey Analyzer', icon: BarChart3, ...textGeneratorProps('Survey Analysis', 'Analyze an internal survey.', 'You are an HR analyst. Analyze the results of the following internal employee survey and summarize the key findings.') },
    { id: 'innovation_idea_ranker', name: 'Innovation Idea Ranker', icon: Lightbulb, ...textGeneratorProps('Idea Ranking', 'Rank innovation ideas.', 'You are a strategist. Rank the following innovation ideas based on criteria like feasibility, impact, and cost.') },
    { id: 'patent_portfolio_analyzer', name: 'Patent Portfolio Analyzer', icon: Library, ...textGeneratorProps('Patent Portfolio', 'Analyze a patent portfolio.', 'You are an intellectual property lawyer. Analyze the following patent portfolio and identify key strengths and potential risks.') },
    { id: 'r&d_project_feasibility_checker', name: 'R&D Feasibility Checker', icon: TestTube, ...textGeneratorProps('R&D Feasibility', 'Check R&D project feasibility.', 'You are a research director. Assess the technical and commercial feasibility of the following R&D project.') },
    { id: 'product_prototype_feedback_ai', name: 'Prototype Feedback AI', icon: Wand2, ...textGeneratorProps('Prototype Feedback', 'Get feedback on a product prototype.', 'You are a UX researcher. Provide constructive feedback on the following product prototype description.') },
    { id: 'market_entry_risk_forecaster', name: 'Market Entry Risk Forecaster', icon: ShieldCheck, ...textGeneratorProps('Market Entry Risk', 'Forecast market entry risk.', 'You are a business development manager. Assess the risks of entering the following new market.') },
    { id: 'brand_name_idea_generator', name: 'Brand Name Idea Generator', icon: Lightbulb, ...textGeneratorProps('Brand Names', 'Generate brand name ideas.', 'You are a branding expert. Generate a list of potential brand names for a company or product with the following description.') },
    { id: 'logo_color_impact_analyzer', name: 'Logo Color Impact Analyzer', icon: Palette, ...textGeneratorProps('Logo Color Impact', 'Analyze the impact of logo colors.', 'You are a design psychologist. Analyze the psychological impact of the colors used in the following logo description.') },
    { id: 'packaging_design_feedback_ai', name: 'Packaging Design Feedback AI', icon: Wand2, ...textGeneratorProps('Packaging Feedback', 'Get feedback on packaging design.', 'You are a packaging designer. Provide feedback and suggestions for the following packaging design concept.') },
    { id: 'shelf_placement_impact_predictor', name: 'Shelf Placement Impact Predictor', icon: TrendingUp, ...textGeneratorProps('Shelf Placement', 'Predict the impact of shelf placement.', 'You are a retail analyst. Predict the sales impact of placing a product on a different shelf (e.g., eye-level vs. bottom shelf).') },
    { id: 'store_traffic_flow_analyzer', name: 'Store Traffic Flow Analyzer', icon: Route, ...textGeneratorProps('Traffic Flow', 'Analyze store traffic flow.', 'You are a retail experience manager. Analyze the following description of customer traffic flow in a store and identify bottlenecks or dead zones.') },
    { id: 'checkout_time_optimizer', name: 'Checkout Time Optimizer', icon: Clock, ...textGeneratorProps('Checkout Time', 'Optimize checkout time.', 'You are a retail operations manager. Suggest strategies to reduce customer checkout time in the following scenario.') },
    { id: 'payment_fraud_probability_checker', name: 'Payment Fraud Probability Checker', icon: ShieldCheck, ...textGeneratorProps('Fraud Probability', 'Check payment fraud probability.', 'You are a risk analyst. Assess the fraud probability of the following online transaction based on its attributes.') },
    { id: 'ecommerce_upsell_strategy_planner', name: 'E-commerce Upsell Strategy Planner', icon: TrendingUp, ...textGeneratorProps('Upsell Strategy', 'Plan an e-commerce upsell strategy.', 'You are an e-commerce manager. Create an upsell strategy for the following product page.') },
    { id: 'subscription_renewal_predictor', name: 'Subscription Renewal Predictor', icon: RefreshCw, ...textGeneratorProps('Subscription Renewal', 'Predict subscription renewal.', 'You are a customer success specialist. Predict the likelihood of a customer renewing their subscription based on their usage data.') },
    { id: 'customer_service_response_analyzer', name: 'Customer Service Response Analyzer', icon: MessageSquare, ...textGeneratorProps('Response Analysis', 'Analyze a customer service response.', 'You are a customer service manager. Analyze the following customer service response for tone, helpfulness, and brand voice.') },
    { id: 'support_ticket_categorizer', name: 'Support Ticket Categorizer', icon: SlidersHorizontal, ...textGeneratorProps('Ticket Categorization', 'Categorize support tickets.', 'You are a support operations lead. Categorize the following support tickets into relevant topics (e.g., billing, technical issue, feature request).') },
    { id: 'resolution_time_forecaster', name: 'Resolution Time Forecaster', icon: LineChart, ...textGeneratorProps('Resolution Time', 'Forecast support ticket resolution time.', 'You are a support manager. Forecast the likely resolution time for a support ticket with the following description.') },
    { id: 'chatbot_script_enhancer', name: 'Chatbot Script Enhancer', icon: Wand2, ...textGeneratorProps('Chatbot Script', 'Enhance a chatbot script.', 'You are a conversation designer. Rewrite the following chatbot script to be more helpful, natural, and friendly.') },
    { id: 'agent_training_needs_analyzer', name: 'Agent Training Needs Analyzer', icon: Lightbulb, ...textGeneratorProps('Agent Training', 'Analyze agent training needs.', 'You are a customer support trainer. Based on the following set of customer interactions, identify training needs for the support agent.') },
    { id: 'knowledge_base_gap_finder', name: 'Knowledge Base Gap Finder', icon: Search, ...textGeneratorProps('Knowledge Base Gaps', 'Find gaps in a knowledge base.', 'You are a documentation manager. Analyze the following list of customer queries to find gaps in your knowledge base.') },
    { id: 'faq_auto_generator', name: 'FAQ Auto-Generator', icon: HelpCircle, ...textGeneratorProps('FAQ Generator', 'Generate an FAQ from a document.', 'You are a content writer. Generate a list of frequently asked questions (FAQs) and their answers from the following document.') },
    { id: 'feedback_sentiment_classifier', name: 'Feedback Sentiment Classifier', icon: Smile, ...textGeneratorProps('Feedback Sentiment', 'Classify feedback sentiment.', 'You are a data analyst. Classify the sentiment (positive, negative, neutral) of the following piece of customer feedback.') },
    { id: 'loyalty_program_impact_analyzer', name: 'Loyalty Program Impact Analyzer', icon: Star, ...textGeneratorProps('Loyalty Program Impact', 'Analyze the impact of a loyalty program.', 'You are a marketing analyst. Assess the impact of the following loyalty program on customer retention and spending.') },
    { id: 'event_sponsorship_roi_calculator', name: 'Event Sponsorship ROI Calculator', icon: CircleDollarSign, ...textGeneratorProps('Sponsorship ROI', 'Calculate event sponsorship ROI.', 'You are an event marketer. Estimate the return on investment (ROI) for sponsoring the following event.') },
    { id: 'public_relations_risk_detector', name: 'Public Relations Risk Detector', icon: ShieldCheck, ...textGeneratorProps('PR Risk', 'Detect public relations risks.', 'You are a PR specialist. Identify potential public relations risks in the following company announcement or action.') },
    { id: 'crisis_communication_planner', name: 'Crisis Communication Planner', icon: Megaphone, ...textGeneratorProps('Crisis Communication', 'Plan crisis communications.', 'You are a communications director. Draft a crisis communication plan for the following negative event.') },
    { id: 'reputation_score_tracker', name: 'Reputation Score Tracker', icon: BarChart3, ...textGeneratorProps('Reputation Score', 'Analyze brand reputation.', 'You are a reputation manager. Analyze the following set of news articles and social media posts to assess a brand\'s reputation score.') },
    { id: 'influencer_roi_analyzer', name: 'Influencer ROI Analyzer', icon: CircleDollarSign, ...textGeneratorProps('Influencer ROI', 'Analyze influencer marketing ROI.', 'You are a digital marketer. Estimate the ROI of an influencer marketing campaign with the following reach, engagement, and conversion data.') },
    { id: 'content_calendar_optimizer', name: 'Content Calendar Optimizer', icon: GanttChart, ...textGeneratorProps('Content Calendar', 'Optimize a content calendar.', 'You are a content manager. Suggest an optimized content calendar for a blog or social media channel on the following topic.') },
    { id: 'blog_topic_trend_finder', name: 'Blog Topic Trend Finder', icon: TrendingUp, ...textGeneratorProps('Blog Topics', 'Find trending blog topics.', 'You are a content strategist. Identify trending blog topics in the following industry or niche.') },
    { id: 'editorial_consistency_checker', name: 'Editorial Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Editorial Consistency', 'Check for editorial consistency.', 'You are an editor-in-chief. Review the following set of articles for consistency in style, tone, and formatting.') },
    { id: 'fact_reference_link_generator', name: 'Fact-Reference Link Generator', icon: Link, ...textGeneratorProps('Fact Links', 'Generate links for facts.', 'You are a fact checker. For the following statement, find and provide a link to a reputable source that verifies it.') },
    { id: 'plagiarism_risk_checker', name: 'Plagiarism Risk Checker', icon: Search, ...textGeneratorProps('Plagiarism Check', 'Check for plagiarism risk.', 'You are an academic integrity officer. Analyze the following text for potential plagiarism against a provided source text.') },
    { id: 'reading_ease_score_analyzer', name: 'Reading Ease Score Analyzer', icon: FileQuestion, ...textGeneratorProps('Reading Ease', 'Analyze reading ease.', 'You are an editor. Assess the reading ease of the following text using a metric like Flesch-Kincaid.') },
    { id: 'style_guide_compliance_checker', name: 'Style Guide Compliance Checker', icon: CheckSquare, ...textGeneratorProps('Style Guide', 'Check for style guide compliance.', 'You are a copy editor. Check the following text for compliance with a specified style guide (e.g., AP, Chicago).') },
    { id: 'hyperlink_health_checker', name: 'Hyperlink Health Checker', icon: Link, ...textGeneratorProps('Hyperlink Health', 'Describe hyperlink health check.', 'You are a webmaster. Describe the process for checking the hyperlinks in the following text for broken links.') },
    { id: 'website_accessibility_analyzer', name: 'Website Accessibility Analyzer', icon: User, ...textGeneratorProps('Accessibility', 'Analyze website accessibility.', 'You are a web developer. Analyze the following website description for compliance with WCAG accessibility standards.') },
    { id: 'mobile_ui_flow_optimizer', name: 'Mobile UI Flow Optimizer', icon: Workflow, ...textGeneratorProps('Mobile UI Flow', 'Optimize a mobile UI flow.', 'You are a UX designer. Suggest improvements to the following mobile app user flow to make it more intuitive.') },
    { id: 'conversion_form_design_checker', name: 'Conversion Form Design Checker', icon: CheckSquare, ...textGeneratorProps('Form Design', 'Check conversion form design.', 'You are a CRO specialist. Analyze the following web form design and suggest improvements to increase conversion rates.') }
];
