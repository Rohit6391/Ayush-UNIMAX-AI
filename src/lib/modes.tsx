import {
    BrainCircuit, Image, Palette, Video, Code, Search, Globe, AppWindow, Gamepad2, FilePlus, FileEdit, BookOpen,
    FileQuestion, FileText, Megaphone, BookCheck, School, Wind, Mic, Film, HelpCircle, Lightbulb, Mail, CookingPot,
    Plane, MoonStar, Presentation, Feather, UserSquare, Scale, Stethoscope, Landmark, CheckSquare, Music, BarChart3, Bot, Clapperboard, AudioLines, Paintbrush, Star, GanttChart, PieChart, TrendingUp, MessageSquare, Briefcase, Wand2, BookCopy, Target, Building2, RefreshCw, Users, LineChart, Shuffle, FileSearch, Tags, Route, BrainCog, SlidersHorizontal, ArrowDownAZ, ArrowDownUp, Languages, BadgePercent, TestTube, FlaskConical, Beaker, Drama, Smile, MicVocal, GitBranch, Binary, Puzzle, ShieldCheck, HeartPulse, Leaf, Factory, Tractor, Trophy, Shirt, CircleDollarSign, Library, Home, Settings, Component, Workflow, Key, Anchor, Telescope, Swords, VenetianMask, MessageCircle, Map, Milestone, Minus, Bug, Footprints, Car, Clock, Link, User, GraduationCap
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
import { StudyMaterialAnalyzer } from '@/components/modes/StudyMaterialAnalyzer';


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
  | 'digital_persona_creator' | 'job_role_analyzer' | 'conflict_plot_generator' | 'business_kpi_forecaster'
  | 'study_material_analyzer'
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
    { id: 'title_and_headline_optimizer', name: 'Title and Headline Optimizer', icon: Target, ...textGeneratorProps('Optimized Titles', 'Optimize titles and headlines.', 'You are a marketing expert. Generate 5 alternative, catchy headlines for the following article title.') },
    { id: 'long_form_report_writer', name: 'Long-form Report Writer', icon: FileText, ...textGeneratorProps('Long Report', 'Write a long-form report.', 'You are a professional writer. Write a 500-word report on the following topic, including an introduction, body, and conclusion.') },
    { id: 'smart_question_answer_engine', name: 'Smart Question-Answer Engine', icon: HelpCircle, ...textGeneratorProps('Answer', 'Answer a question based on a text.', 'You are an expert analyst. Answer the following question based on the provided document.') },
    { id: 'policy_drafting_assistant', name: 'Policy Drafting Assistant', icon: BookCheck, ...textGeneratorProps('Policy Draft', 'Draft a policy document.', 'You are a policy advisor. Draft a company policy for the following issue, including scope, procedures, and responsibilities.') },
    { id: 'legal_clause_suggestion_tool', name: 'Legal Clause Suggestion Tool', icon: Scale, ...textGeneratorProps('Legal Clauses', 'Suggest legal clauses.', 'You are a paralegal. Suggest 3 standard legal clauses that should be included in the following type of contract.') },
    { id: 'patent_abstract_generator', name: 'Patent Abstract Generator', icon: Lightbulb, ...textGeneratorProps('Patent Abstract', 'Generate a patent abstract.', 'You are a patent agent. Write a concise abstract for a patent application based on the following invention description.') },
    { id: 'contract_simplifier', name: 'Contract Simplifier', icon: FileEdit, ...textGeneratorProps('Simplified Contract', 'Simplify a contract.', 'You are a legal expert. Rewrite the following complex legal contract into plain, easy-to-understand language.') },
    { id: 'compliance_document_checker', name: 'Compliance Document Checker', icon: ShieldCheck, ...textGeneratorProps('Compliance Check', 'Check a document for compliance.', 'You are a compliance officer. Review the following document and identify any potential compliance issues against the provided regulations.') },
    { id: 'script_scene_expander', name: 'Script Scene Expander', icon: Clapperboard, ...textGeneratorProps('Expanded Scene', 'Expand a script scene.', 'You are a scriptwriter. Expand the following brief scene description into a full scene with dialogue and action.') },
    { id: 'interview_transcript_formatter', name: 'Interview Transcript Formatter', icon: FileText, ...textGeneratorProps('Formatted Transcript', 'Format an interview transcript.', 'You are an editor. Clean up and format the following raw interview transcript for readability.') },
    { id: 'character_dialogue_improver', name: 'Character Dialogue Improver', icon: MessageSquare, ...textGeneratorProps('Improved Dialogue', 'Improve character dialogue.', 'You are a story editor. Rewrite the following character dialogue to be more impactful and reveal character.') },
    { id: 'multi_threaded_story_planner', name: 'Multi-threaded Story Planner', icon: GitBranch, ...textGeneratorProps('Multi-threaded Plot', 'Plan a multi-threaded story.', 'You are a novelist. Outline a story with three intersecting plotlines based on the following premise.') },
    { id: 'fiction_outline_maker', name: 'Fiction Outline Maker', icon: BookOpen, ...textGeneratorProps('Fiction Outline', 'Create an outline for a fiction story.', 'You are a writer. Create a 3-act story outline for a fictional story based on the following idea.') },
    { id: 'comedy_script_punch_up_tool', name: 'Comedy Script Punch-up Tool', icon: Smile, ...textGeneratorProps('Punched-up Script', 'Punch up a comedy script.', 'You are a comedy writer. Add 5 jokes or funny situations to the following comedy scene.') },
    { id: 'villain_backstory_creator', name: 'Villain Backstory Creator', icon: UserSquare, ...textGeneratorProps('Villain Backstory', 'Create a villain backstory.', 'You are a storyteller. Write a compelling and tragic backstory for a villain with the following characteristics.') },
    { id: 'theme_and_motif_analyzer', name: 'Theme and Motif Analyzer', icon: Search, ...textGeneratorProps('Thematic Analysis', 'Analyze themes and motifs.', 'You are a literary critic. Identify the major themes and recurring motifs in the following piece of text.') },
    { id: 'story_arc_evaluator', name: 'Story Arc Evaluator', icon: TrendingUp, ...textGeneratorProps('Story Arc Evaluation', 'Evaluate a story arc.', 'You are a developmental editor. Evaluate the following story arc for pacing, character development, and stakes.') },
    { id: 'mythology_based_plot_creator', name: 'Mythology-based Plot Creator', icon: Landmark, ...textGeneratorProps('Mythological Plot', 'Create a plot based on mythology.', 'You are a mythologist. Create a modern story plot based on the framework of the following ancient myth.') },
    { id: 'sci_fi_concept_designer', name: 'Sci-Fi Concept Designer', icon: Telescope, ...textGeneratorProps('Sci-Fi Concept', 'Design a sci-fi concept.', 'You are a science fiction author. Develop a unique sci-fi concept based on the following scientific principle.') },
    { id: 'fantasy_lore_generator', name: 'Fantasy Lore Generator', icon: Swords, ...textGeneratorProps('Fantasy Lore', 'Generate fantasy lore.', 'You are a world-builder. Write a piece of lore for a fantasy world about the following legendary artifact.') },
    { id: 'alternate_history_plot_writer', name: 'Alternate History Plot Writer', icon: VenetianMask, ...textGeneratorProps('Alternate History Plot', 'Write an alternate history plot.', 'You are a historian. Create a plot for an alternate history story where the following historical event turned out differently.') },
    { id: 'scientific_hypothesis_suggestor', name: 'Scientific Hypothesis Suggestor', icon: Beaker, ...textGeneratorProps('Hypothesis', 'Suggest a scientific hypothesis.', 'You are a scientist. Propose a testable hypothesis based on the following observation.') },
    { id: 'experiment_design_planner', name: 'Experiment Design Planner', icon: FlaskConical, ...textGeneratorProps('Experiment Design', 'Plan an experiment.', 'You are a research scientist. Design an experiment to test the following hypothesis, including variables, controls, and methods.') },
    { id: 'research_summary_maker', name: 'Research Summary Maker', icon: FileQuestion, ...textGeneratorProps('Research Summary', 'Summarize a research paper.', 'You are a science journalist. Summarize the following academic research paper for a lay audience.') },
    { id: 'journal_abstract_creator', name: 'Journal Abstract Creator', icon: FileText, ...textGeneratorProps('Journal Abstract', 'Create a journal abstract.', 'You are a researcher. Write a 250-word abstract for a journal article with the following findings.') },
    { id: 'methodology_drafting_tool', name: 'Methodology Drafting Tool', icon: TestTube, ...textGeneratorProps('Methodology Draft', 'Draft a methodology section.', 'You are a research assistant. Draft the methodology section for a research paper based on the following experimental plan.') },
    { id: 'lab_report_formatter', name: 'Lab Report Formatter', icon: FileEdit, ...textGeneratorProps('Formatted Lab Report', 'Format a lab report.', 'You are a teaching assistant. Format the following data and notes into a standard lab report structure.') },
    { id: 'academic_citation_builder', name: 'Academic Citation Builder', icon: Library, ...textGeneratorProps('Citations', 'Build academic citations.', 'You are a librarian. Create a properly formatted citation in APA, MLA, and Chicago style for the following source information.') },
    { id: 'equation_solver_pro', name: 'Equation Solver Pro', icon: Minus, ...textGeneratorProps('Solved Equation', 'Solve an equation.', 'You are a mathematician. Show the step-by-step solution for the following mathematical equation.') },
    { id: 'graph_theory_visualizer', name: 'Graph Theory Visualizer', icon: GitBranch, ...textGeneratorProps('Graph Visualization', 'Visualize a graph.', 'You are a computer scientist. Describe the visual representation of a graph with the following nodes and edges.') },
    { id: 'statistical_pattern_finder', name: 'Statistical Pattern Finder', icon: LineChart, ...textGeneratorProps('Statistical Patterns', 'Find statistical patterns in data.', 'You are a statistician. Analyze the following dataset and report any significant statistical patterns or correlations.') },
    { id: 'data_anomaly_detector', name: 'Data Anomaly Detector', icon: Bug, ...textGeneratorProps('Anomalies', 'Detect anomalies in data.', 'You are a data analyst. Identify any outliers or anomalies in the following dataset and explain their potential significance.') },
    { id: 'predictive_model_trainer', name: 'Predictive Model Trainer', icon: BrainCog, ...textGeneratorProps('Model Training Plan', 'Plan training for a predictive model.', 'You are a machine learning engineer. Outline the steps to train a predictive model for the following task, including data preparation, model selection, and evaluation.') },
    { id: 'simulation_scenario_builder', name: 'Simulation Scenario Builder', icon: Component, ...textGeneratorProps('Simulation Scenario', 'Build a simulation scenario.', 'You are a simulation specialist. Create a detailed scenario for a simulation based on the following parameters.') },
    { id: 'ai_behavior_modeler', name: 'AI Behavior Modeler', icon: Bot, ...textGeneratorProps('AI Behavior Model', 'Model an AI behavior.', 'You are an AI developer. Describe the behavior tree or state machine for an AI agent designed to perform the following task.') },
    { id: 'ethics_risk_analyzer', name: 'Ethics Risk Analyzer', icon: Scale, ...textGeneratorProps('Ethics Risk Analysis', 'Analyze ethical risks.', 'You are an ethics officer. Analyze the following AI application and identify potential ethical risks and mitigation strategies.') },
    { id: 'bias_detector_engine', name: 'Bias Detector Engine', icon: SlidersHorizontal, ...textGeneratorProps('Bias Detection', 'Detect bias in data or models.', 'You are an AI ethicist. Analyze the following dataset or model description and identify potential sources of bias.') },
    { id: 'privacy_impact_forecaster', name: 'Privacy Impact Forecaster', icon: ShieldCheck, ...textGeneratorProps('Privacy Impact Forecast', 'Forecast privacy impact.', 'You are a privacy expert. Assess the potential privacy impact of the following data-driven project.') },
    { id: 'algorithmic_explainability_tool', name: 'Algorithmic Explainability Tool', icon: Search, ...textGeneratorProps('Algorithm Explanation', 'Explain an algorithm.', 'You are an AI researcher. Explain the decision-making process of the following algorithm in simple, understandable terms.') },
    { id: 'dataset_integrity_checker', name: 'Dataset Integrity Checker', icon: CheckSquare, ...textGeneratorProps('Dataset Integrity Check', 'Check the integrity of a dataset.', 'You are a data curator. Suggest methods to check the integrity and quality of the following dataset.') },
    { id: 'feature_importance_analyzer', name: 'Feature Importance Analyzer', icon: BarChart3, ...textGeneratorProps('Feature Importance', 'Analyze feature importance.', 'You are a data scientist. Determine the most important features in a dataset for predicting the following outcome.') },
    { id: 'forecast_accuracy_evaluator', name: 'Forecast Accuracy Evaluator', icon: TrendingUp, ...textGeneratorProps('Forecast Accuracy', 'Evaluate forecast accuracy.', 'You are a business analyst. Suggest metrics to evaluate the accuracy of the following business forecast.') },
    { id: 'root_cause_analysis_bot', name: 'Root Cause Analysis Bot', icon: Footprints, ...textGeneratorProps('Root Cause Analysis', 'Perform root cause analysis.', 'You are a quality engineer. Perform a root cause analysis for the following problem statement.') },
    { id: 'data_quality_score_generator', name: 'Data Quality Score Generator', icon: CheckSquare, ...textGeneratorProps('Data Quality Score', 'Generate a data quality score.', 'You are a data steward. Create a scoring rubric to assess the quality of the following dataset.') },
    { id: 'multi_variable_trend_predictor', name: 'Multi-variable Trend Predictor', icon: LineChart, ...textGeneratorProps('Trend Prediction', 'Predict trends with multiple variables.', 'You are a data scientist. Predict the future trend of the following metric based on its relationship with the other provided variables.') },
    { id: 'competitor_comparison_engine', name: 'Competitor Comparison Engine', icon: Swords, ...textGeneratorProps('Competitor Comparison', 'Compare competitors.', 'You are a market strategist. Provide a detailed comparison of the following two competitors based on the provided metrics.') },
    { id: 'market_gap_identifier', name: 'Market Gap Identifier', icon: Search, ...textGeneratorProps('Market Gaps', 'Identify market gaps.', 'You are a business development manager. Identify potential market gaps based on the following analysis of existing products.') },
    { id: 'customer_segmentation_mapper', name: 'Customer Segmentation Mapper', icon: Users, ...textGeneratorProps('Customer Segments', 'Map customer segments.', 'You are a marketing analyst. Create distinct customer segments based on the following demographic and behavioral data.') },
    { id: 'price_elasticity_estimator', name: 'Price Elasticity Estimator', icon: BadgePercent, ...textGeneratorProps('Price Elasticity', 'Estimate price elasticity.', 'You are an economist. Estimate the price elasticity of demand for a product with the following sales data at different price points.') },
    { id: 'churn_risk_predictor', name: 'Churn Risk Predictor', icon: User, ...textGeneratorProps('Churn Risk', 'Predict customer churn risk.', 'You are a customer success manager. Identify which of the following customers are at the highest risk of churning and explain why.') },
    { id: 'profit_margin_optimizer', name: 'Profit Margin Optimizer', icon: CircleDollarSign, ...textGeneratorProps('Profit Margin Optimization', 'Optimize profit margins.', 'You are a financial analyst. Suggest strategies to optimize the profit margin for the following product, considering its costs and pricing.') },
    { id: 'supply_chain_ai_planner', name: 'Supply Chain AI Planner', icon: Workflow, ...textGeneratorProps('Supply Chain Plan', 'Plan a supply chain.', 'You are a logistics manager. Outline an efficient supply chain plan for a new product from manufacturing to final delivery.') },
    { id: 'inventory_auto_forecaster', name: 'Inventory Auto-Forecaster', icon: Home, ...textGeneratorProps('Inventory Forecast', 'Forecast inventory needs.', 'You are a retail manager. Forecast the inventory needs for the next quarter for the following product based on past sales data.') },
    { id: 'logistics_route_optimizer', name: 'Logistics Route Optimizer', icon: Route, ...textGeneratorProps('Optimized Route', 'Optimize a logistics route.', 'You are a logistics coordinator. Find the most efficient delivery route for a truck with the following list of destinations.') },
    { id: 'vendor_risk_scorer', name: 'Vendor Risk Scorer', icon: ShieldCheck, ...textGeneratorProps('Vendor Risk Score', 'Score vendor risk.', 'You are a procurement specialist. Create a risk score for the following vendor based on the provided performance and financial data.') },
    { id: 'fraud_detection_engine', name: 'Fraud Detection Engine', icon: Bug, ...textGeneratorProps('Fraud Detection', 'Detect fraudulent transactions.', 'You are a financial investigator. Identify which of the following transactions are potentially fraudulent and explain the red flags.') },
    { id: 'transaction_pattern_finder', name: 'Transaction Pattern Finder', icon: LineChart, ...textGeneratorProps('Transaction Patterns', 'Find patterns in transactions.', 'You are a data analyst. Analyze the following list of transactions and identify any significant patterns.') },
    { id: 'credit_risk_analyzer', name: 'Credit Risk Analyzer', icon: User, ...textGeneratorProps('Credit Risk Analysis', 'Analyze credit risk.', 'You are a loan officer. Assess the credit risk of the following loan applicant based on their financial profile.') },
    { id: 'investment_portfolio_optimizer', name: 'Investment Portfolio Optimizer', icon: PieChart, ...textGeneratorProps('Optimized Portfolio', 'Optimize an investment portfolio.', 'You are a financial advisor. Suggest changes to the following investment portfolio to optimize for growth with moderate risk.') },
    { id: 'financial_statement_summarizer', name: 'Financial Statement Summarizer', icon: FileQuestion, ...textGeneratorProps('Financial Summary', 'Summarize a financial statement.', 'You are an accountant. Summarize the key takeaways from the following financial statement.') },
    { id: 'cash_flow_projection_tool', name: 'Cash Flow Projection Tool', icon: LineChart, ...textGeneratorProps('Cash Flow Projection', 'Project cash flow.', 'You are a small business owner. Create a 3-month cash flow projection based on the following revenue and expense data.') },
    { id: 'expense_categorization_ai', name: 'Expense Categorization AI', icon: SlidersHorizontal, ...textGeneratorProps('Categorized Expenses', 'Categorize expenses.', 'You are an office manager. Categorize the following list of expenses into standard business categories like travel, office supplies, and marketing.') },
    { id: 'budget_recommendation_engine', name: 'Budget Recommendation Engine', icon: CircleDollarSign, ...textGeneratorProps('Budget Recommendation', 'Get budget recommendations.', 'You are a financial planner. Recommend a monthly budget for an individual with the following income and financial goals.') },
    { id: 'payroll_compliance_checker', name: 'Payroll Compliance Checker', icon: CheckSquare, ...textGeneratorProps('Payroll Compliance Check', 'Check payroll for compliance.', 'You are an HR specialist. Review the following payroll data and identify any potential compliance issues with labor laws.') },
    { id: 'policy_impact_forecaster', name: 'Policy Impact Forecaster', icon: Landmark, ...textGeneratorProps('Policy Impact', 'Forecast the impact of a policy.', 'You are a public policy analyst. Forecast the potential economic and social impact of the following proposed government policy.') },
    { id: 'grant_proposal_generator', name: 'Grant Proposal Generator', icon: FileText, ...textGeneratorProps('Grant Proposal', 'Generate a grant proposal.', 'You are a grant writer. Write a compelling grant proposal for the following nonprofit project.') },
    { id: 'nonprofit_donor_outreach_ai', name: 'Nonprofit Donor Outreach AI', icon: Users, ...textGeneratorProps('Donor Outreach', 'Draft donor outreach messages.', 'You are a fundraising coordinator. Draft a personalized outreach email to a potential major donor for the following nonprofit campaign.') },
    { id: 'fundraising_campaign_optimizer', name: 'Fundraising Campaign Optimizer', icon: TrendingUp, ...textGeneratorProps('Fundraising Optimization', 'Optimize a fundraising campaign.', 'You are a nonprofit consultant. Suggest strategies to optimize the following fundraising campaign for maximum donations.') },
    { id: 'volunteer_scheduling_planner', name: 'Volunteer Scheduling Planner', icon: Calendar, ...textGeneratorProps('Volunteer Schedule', 'Plan a volunteer schedule.', 'You are a volunteer coordinator. Create an efficient schedule for the following event with the given list of volunteers and tasks.') },
    { id: 'event_agenda_creator', name: 'Event Agenda Creator', icon: FileText, ...textGeneratorProps('Event Agenda', 'Create an event agenda.', 'You are an event planner. Create a detailed agenda for the following one-day conference.') },
    { id: 'guest_speaker_finder_ai', name: 'Guest Speaker Finder AI', icon: MicVocal, ...textGeneratorProps('Speaker Suggestions', 'Find guest speakers.', 'You are a conference organizer. Suggest 5 potential guest speakers for a conference on the following topic.') },
    { id: 'registration_data_analyzer', name: 'Registration Data Analyzer', icon: LineChart, ...textGeneratorProps('Registration Analysis', 'Analyze event registration data.', 'You are an event marketer. Analyze the following registration data to identify trends in attendee demographics and interests.') },
    { id: 'audience_engagement_predictor', name: 'Audience Engagement Predictor', icon: Users, ...textGeneratorProps('Engagement Prediction', 'Predict audience engagement.', 'You are a content strategist. Predict the potential audience engagement for the following piece of content.') },
    { id: 'public_opinion_trend_analyzer', name: 'Public Opinion Trend Analyzer', icon: TrendingUp, ...textGeneratorProps('Opinion Trends', 'Analyze public opinion trends.', 'You are a political analyst. Analyze the following polling data to identify trends in public opinion on a specific issue.') },
    { id: 'civic_policy_simulation_tool', name: 'Civic Policy Simulation Tool', icon: Component, ...textGeneratorProps('Policy Simulation', 'Simulate the effects of a civic policy.', 'You are a city planner. Describe the likely outcomes of implementing the following civic policy in a simulated city.') },
    { id: 'local_issue_report_generator', name: 'Local Issue Report Generator', icon: FileText, ...textGeneratorProps('Issue Report', 'Generate a report on a local issue.', 'You are a community organizer. Write a brief report summarizing the following local issue for a city council meeting.') },
    { id: 'environmental_impact_calculator', name: 'Environmental Impact Calculator', icon: Leaf, ...textGeneratorProps('Environmental Impact', 'Calculate environmental impact.', 'You are an environmental scientist. Estimate the environmental impact of the following project based on the provided data.') },
    { id: 'climate_data_visualizer', name: 'Climate Data Visualizer', icon: BarChart3, ...textGeneratorProps('Climate Data Visualization', 'Describe a climate data visualization.', 'You are a climatologist. Describe how you would visualize the following climate dataset to make it understandable to the public.') },
    { id: 'carbon_footprint_forecaster', name: 'Carbon Footprint Forecaster', icon: Footprints, ...textGeneratorProps('Carbon Footprint', 'Forecast a carbon footprint.', 'You are a sustainability consultant. Forecast the carbon footprint of the following organization over the next 5 years.') },
    { id: 'wildlife_pattern_tracker', name: 'Wildlife Pattern Tracker', icon: PawPrint, ...textGeneratorProps('Wildlife Patterns', 'Track wildlife patterns.', 'You are a biologist. Analyze the following animal tracking data to identify patterns in migration and behavior.') },
    { id: 'habitat_restoration_planner', name: 'Habitat Restoration Planner', icon: Leaf, ...textGeneratorProps('Restoration Plan', 'Plan a habitat restoration.', 'You are a conservationist. Create a plan to restore the natural habitat in the following degraded area.') },
    { id: 'ocean_current_predictor', name: 'Ocean Current Predictor', icon: Wind, ...textGeneratorProps('Ocean Currents', 'Predict ocean currents.', 'You are an oceanographer. Predict the path of an object in the ocean based on the following current and wind data.') },
    { id: 'renewable_energy_yield_estimator', name: 'Renewable Energy Yield Estimator', icon: Wind, ...textGeneratorProps('Energy Yield', 'Estimate renewable energy yield.', 'You are an energy analyst. Estimate the potential energy yield of a solar or wind farm at the following location.') },
    { id: 'disaster_response_simulator', name: 'Disaster Response Simulator', icon: Component, ...textGeneratorProps('Disaster Response', 'Simulate a disaster response.', 'You are an emergency manager. Outline a response plan for a simulated natural disaster with the following characteristics.') },
    { id: 'emergency_evacuation_planner', name: 'Emergency Evacuation Planner', icon: Route, ...textGeneratorProps('Evacuation Plan', 'Plan an emergency evacuation.', 'You are a public safety officer. Create an emergency evacuation plan for the following building or area.') },
    { id: 'health_risk_assessment_ai', name: 'Health Risk Assessment AI', icon: HeartPulse, ...textGeneratorProps('Health Risk', 'Assess health risks.', 'You are a public health official. Assess the health risks for a population with the following demographic and environmental factors.') },
    { id: 'symptom_pattern_analyzer', name: 'Symptom Pattern Analyzer', icon: LineChart, ...textGeneratorProps('Symptom Patterns', 'Analyze symptom patterns.', 'You are an epidemiologist. Analyze the following patient symptom data to identify patterns that could indicate a specific illness.') },
    { id: 'disease_outbreak_predictor', name: 'Disease Outbreak Predictor', icon: TrendingUp, ...textGeneratorProps('Outbreak Prediction', 'Predict a disease outbreak.', 'You are a public health researcher. Predict the likelihood and spread of a disease outbreak based on the following data.') },
    { id: 'nutritional_plan_generator', name: 'Nutritional Plan Generator', icon: Leaf, ...textGeneratorProps('Nutrition Plan', 'Generate a nutritional plan.', 'You are a dietitian. Create a one-week nutritional plan for a person with the following dietary needs and goals.') },
    { id: 'exercise_routine_optimizer', name: 'Exercise Routine Optimizer', icon: Dumbbell, ...textGeneratorProps('Exercise Routine', 'Optimize an exercise routine.', 'You are a personal trainer. Optimize the following exercise routine for maximum effectiveness and safety.') },
    { id: 'sleep_cycle_tracker_ai', name: 'Sleep Cycle Tracker AI', icon: Moon, ...textGeneratorProps('Sleep Analysis', 'Analyze sleep cycle data.', 'You are a sleep scientist. Analyze the following sleep tracker data and provide recommendations for improving sleep quality.') },
    { id: 'mental_wellness_suggestion_bot', name: 'Mental Wellness Suggestion Bot', icon: Smile, ...textGeneratorProps('Wellness Suggestions', 'Get mental wellness suggestions.', 'You are a wellness coach. Provide 5 suggestions for improving mental wellness based on the following user-described feelings.') },
    { id: 'therapy_session_planner', name: 'Therapy Session Planner', icon: Calendar, ...textGeneratorProps('Therapy Plan', 'Plan a therapy session.', 'You are a therapist. Outline a plan for a therapy session to address the following client issue.') },
    { id: 'medical_literature_summarizer', name: 'Medical Literature Summarizer', icon: FileQuestion, ...textGeneratorProps('Medical Summary', 'Summarize medical literature.', 'You are a medical researcher. Summarize the key findings of the following medical study.') },
    { id: 'clinical_trial_data_analyzer', name: 'Clinical Trial Data Analyzer', icon: LineChart, ...textGeneratorProps('Clinical Trial Analysis', 'Analyze clinical trial data.', 'You are a biostatistician. Analyze the following clinical trial data and determine the efficacy and safety of the treatment.') },
    { id: 'genetic_pattern_detector', name: 'Genetic Pattern Detector', icon: GitBranch, ...textGeneratorProps('Genetic Patterns', 'Detect genetic patterns.', 'You are a geneticist. Analyze the following DNA sequence data to identify patterns that may be associated with a specific trait or disease.') },
    { id: 'protein_structure_predictor', name: 'Protein Structure Predictor', icon: Component, ...textGeneratorProps('Protein Structure', 'Predict a protein structure.', 'You are a biochemist. Predict the 3D structure of a protein based on its amino acid sequence.') },
    { id: 'drug_interaction_checker', name: 'Drug Interaction Checker', icon: Beaker, ...textGeneratorProps('Drug Interactions', 'Check for drug interactions.', 'You are a pharmacist. Check for potential interactions between the following list of medications.') },
    { id: 'surgical_procedure_planner', name: 'Surgical Procedure Planner', icon: Workflow, ...textGeneratorProps('Surgical Plan', 'Plan a surgical procedure.', 'You are a surgeon. Outline the key steps for the following surgical procedure.') },
    { id: 'patient_recovery_forecaster', name: 'Patient Recovery Forecaster', icon: TrendingUp, ...textGeneratorProps('Recovery Forecast', 'Forecast patient recovery.', 'You are a physician. Forecast the recovery timeline for a patient with the following condition and treatment plan.') },
    { id: 'virtual_lab_technician', name: 'Virtual Lab Technician', icon: TestTube, ...textGeneratorProps('Virtual Lab', 'Simulate a lab experiment.', 'You are a lab manager. Describe the results of a simulated lab experiment based on the following procedure and inputs.') },
    { id: 'radiology_image_analyzer', name: 'Radiology Image Analyzer', icon: Image, ...textGeneratorProps('Radiology Analysis', 'Analyze a radiology image.', 'You are a radiologist. Provide a preliminary analysis of the following (described) radiology image.') },
    { id: 'pathology_report_summarizer', name: 'Pathology Report Summarizer', icon: FileQuestion, ...textGeneratorProps('Pathology Summary', 'Summarize a pathology report.', 'You are a pathologist. Summarize the key findings of the following pathology report.') },
    { id: 'diagnostic_support_assistant', name: 'Diagnostic Support Assistant', icon: Stethoscope, ...textGeneratorProps('Diagnostic Support', 'Get diagnostic support.', 'You are a medical AI. Suggest a differential diagnosis based on the following list of patient symptoms and test results.') },
    { id: 'remote_patient_monitoring_ai', name: 'Remote Patient Monitoring AI', icon: User, ...textGeneratorProps('Patient Monitoring', 'Monitor a remote patient.', 'You are a nurse. Analyze the following stream of remote patient data and flag any potential issues.') },
    { id: 'appointment_scheduling_optimizer', name: 'Appointment Scheduling Optimizer', icon: Calendar, ...textGeneratorProps('Optimized Schedule', 'Optimize an appointment schedule.', 'You are a clinic manager. Optimize the following doctor\'s appointment schedule to minimize wait times and maximize efficiency.') },
    { id: 'hospital_resource_forecaster', name: 'Hospital Resource Forecaster', icon: Home, ...textGeneratorProps('Resource Forecast', 'Forecast hospital resource needs.', 'You are a hospital administrator. Forecast the need for beds, staff, and supplies for the next week based on current admission rates.') },
    { id: 'medical_inventory_tracker', name: 'Medical Inventory Tracker', icon: Package, ...textGeneratorProps('Inventory Tracking', 'Track medical inventory.', 'You are a supply chain manager. Suggest reorder points for the following medical supplies based on their usage rates.') },
    { id: 'treatment_plan_personalizer', name: 'Treatment Plan Personalizer', icon: Wand2, ...textGeneratorProps('Personalized Plan', 'Personalize a treatment plan.', 'You are a specialist physician. Personalize the following standard treatment plan based on the specific patient\'s characteristics and history.') },
    { id: 'symptom_to_specialist_recommender', name: 'Symptom-to-Specialist Recommender', icon: Stethoscope, ...textGeneratorProps('Specialist Recommendation', 'Recommend a specialist.', 'You are a general practitioner. Recommend the appropriate medical specialist for a patient presenting with the following symptoms.') },
    { id: 'manufacturing_workflow_optimizer', name: 'Manufacturing Workflow Optimizer', icon: Workflow, ...textGeneratorProps('Optimized Workflow', 'Optimize a manufacturing workflow.', 'You are an industrial engineer. Suggest improvements to optimize the following manufacturing workflow for speed and quality.') },
    { id: 'quality_control_inspector_ai', name: 'Quality Control Inspector AI', icon: CheckSquare, ...textGeneratorProps('QC Inspection', 'Perform a virtual quality control inspection.', 'You are a quality control inspector. Assess the quality of the following product based on its described specifications and potential defects.') },
    { id: 'machine_failure_predictor', name: 'Machine Failure Predictor', icon: Car, ...textGeneratorProps('Failure Prediction', 'Predict machine failure.', 'You are a maintenance engineer. Predict the likelihood of failure for a machine with the following sensor data and maintenance history.') },
    { id: 'production_scheduling_planner', name: 'Production Scheduling Planner', icon: Calendar, ...textGeneratorProps('Production Schedule', 'Plan a production schedule.', 'You are a production planner. Create an efficient production schedule to fulfill the following list of orders with the given factory constraints.') },
    { id: 'supply_shortage_forecaster', name: 'Supply Shortage Forecaster', icon: Package, ...textGeneratorProps('Shortage Forecast', 'Forecast a supply shortage.', 'You are a supply chain analyst. Forecast a potential shortage of the following raw material based on market data and supplier information.') },
    { id: 'assembly_line_speed_optimizer', name: 'Assembly Line Speed Optimizer', icon: Factory, ...textGeneratorProps('Assembly Line Speed', 'Optimize assembly line speed.', 'You are a process engineer. Recommend the optimal speed for the following assembly line to balance throughput and quality.') },
    { id: 'worker_safety_risk_detector', name: 'Worker Safety Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Safety Risk', 'Detect worker safety risks.', 'You are a safety manager. Identify potential safety risks in the following description of a workplace environment or task.') },
    { id: 'energy_usage_analyzer', name: 'Energy Usage Analyzer', icon: LineChart, ...textGeneratorProps('Energy Usage', 'Analyze energy usage.', 'You are a sustainability officer. Analyze the following factory\'s energy usage data and suggest ways to reduce consumption.') },
    { id: 'maintenance_cost_estimator', name: 'Maintenance Cost Estimator', icon: CircleDollarSign, ...textGeneratorProps('Maintenance Cost', 'Estimate maintenance costs.', 'You are a financial controller. Estimate the annual maintenance cost for the following piece of industrial equipment.') },
    { id: 'smart_factory_process_designer', name: 'Smart Factory Process Designer', icon: Component, ...textGeneratorProps('Smart Factory Process', 'Design a smart factory process.', 'You are an automation engineer. Design an automated process for a smart factory to perform the following manufacturing task.') },
    { id: 'robotics_task_planner', name: 'Robotics Task Planner', icon: Bot, ...textGeneratorProps('Robotics Plan', 'Plan a task for a robot.', 'You are a robotics engineer. Plan the sequence of actions for a robotic arm to complete the following assembly task.') },
    { id: 'cad_design_suggestion_tool', name: 'CAD Design Suggestion Tool', icon: Puzzle, ...textGeneratorProps('CAD Suggestions', 'Get CAD design suggestions.', 'You are a mechanical engineer. Suggest improvements for the following CAD design to enhance its strength and manufacturability.') },
    { id: 'material_stress_tester_ai', name: 'Material Stress Tester AI', icon: TestTube, ...textGeneratorProps('Material Stress Test', 'Simulate a material stress test.', 'You are a materials scientist. Describe the likely results of a stress test on the following material under the given conditions.') },
    { id: 'product_lifecycle_forecaster', name: 'Product Lifecycle Forecaster', icon: RefreshCw, ...textGeneratorProps('Product Lifecycle', 'Forecast a product lifecycle.', 'You are a product marketing manager. Forecast the sales lifecycle of the following new product, from launch to decline.') },
    { id: 'parts_inventory_balancer', name: 'Parts Inventory Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Inventory Balance', 'Balance a parts inventory.', 'You are an inventory manager. Recommend order quantities for the following list of manufacturing parts to balance inventory levels and avoid stockouts.') },
    { id: 'blueprint_error_detector', name: 'Blueprint Error Detector', icon: Bug, ...textGeneratorProps('Blueprint Errors', 'Detect errors in a blueprint.', 'You are an architect. Review the following architectural blueprint description and identify any potential errors or inconsistencies.') },
    { id: 'prototype_design_optimizer', name: 'Prototype Design Optimizer', icon: Wand2, ...textGeneratorProps('Optimized Prototype', 'Optimize a prototype design.', 'You are a product designer. Suggest optimizations for the following product prototype design based on user feedback.') },
    { id: 'design_to_manufacture_converter', name: 'Design-to-Manufacture Converter', icon: RefreshCw, ...textGeneratorProps('Manufacturing Plan', 'Convert a design to a manufacturing plan.', 'You are a manufacturing engineer. Create a high-level manufacturing plan based on the following product design.') },
    { id: 'building_energy_efficiency_analyzer', name: 'Building Energy Efficiency Analyzer', icon: Home, ...textGeneratorProps('Energy Efficiency', 'Analyze building energy efficiency.', 'You are an energy auditor. Analyze the following building\'s specifications and suggest ways to improve its energy efficiency.') },
    { id: 'urban_traffic_flow_predictor', name: 'Urban Traffic Flow Predictor', icon: Car, ...textGeneratorProps('Traffic Prediction', 'Predict urban traffic flow.', 'You are a traffic engineer. Predict traffic flow at a specific intersection based on the following time of day and event data.') },
    { id: 'road_repair_priority_planner', name: 'Road Repair Priority Planner', icon: Route, ...textGeneratorProps('Road Repair Plan', 'Prioritize road repairs.', 'You are a civil engineer. Prioritize the following list of roads for repair based on their condition and traffic volume.') },
    { id: 'parking_demand_forecaster', name: 'Parking Demand Forecaster', icon: Car, ...textGeneratorProps('Parking Demand', 'Forecast parking demand.', 'You are a city planner. Forecast the parking demand for a new downtown development based on its size and purpose.') },
    { id: 'public_transit_route_optimizer', name: 'Public Transit Route Optimizer', icon: Bus, ...textGeneratorProps('Optimized Transit Route', 'Optimize a public transit route.', 'You are a transit authority planner. Suggest optimizations for the following public transit route to improve ridership and efficiency.') },
    { id: 'construction_schedule_forecaster', name: 'Construction Schedule Forecaster', icon: Calendar, ...textGeneratorProps('Construction Schedule', 'Forecast a construction schedule.', 'You are a construction manager. Create a high-level construction schedule for the following project.') },
    { id: 'utility_consumption_tracker', name: 'Utility Consumption Tracker', icon: LineChart, ...textGeneratorProps('Utility Consumption', 'Track utility consumption.', 'You are a property manager. Analyze the following building\'s utility consumption data and identify any anomalies.') },
    { id: 'smart_lighting_planner', name: 'Smart Lighting Planner', icon: Lightbulb, ...textGeneratorProps('Lighting Plan', 'Plan a smart lighting system.', 'You are a lighting designer. Create a plan for a smart lighting system for the following office space to optimize for energy savings and employee comfort.') },
    { id: 'renewable_grid_load_balancer', name: 'Renewable Grid Load Balancer', icon: Wind, ...textGeneratorProps('Grid Load Balance', 'Balance a renewable energy grid.', 'You are a grid operator. Suggest how to balance the electrical grid with the following mix of renewable energy sources and demand forecast.') },
    { id: 'flood_risk_predictor', name: 'Flood Risk Predictor', icon: Wind, ...textGeneratorProps('Flood Risk', 'Predict flood risk.', 'You are a hydrologist. Predict the flood risk for a specific area based on the following weather forecast and river level data.') },
    { id: 'water_usage_efficiency_planner', name: 'Water Usage Efficiency Planner', icon: Beaker, ...textGeneratorProps('Water Usage Plan', 'Plan for water usage efficiency.', 'You are a water conservation specialist. Suggest ways for the following facility to improve its water usage efficiency.') },
    { id: 'sewage_network_monitoring_ai', name: 'Sewage Network Monitoring AI', icon: Workflow, ...textGeneratorProps('Sewage Network', 'Monitor a sewage network.', 'You are a wastewater engineer. Analyze the following data from a sewage network and identify any potential blockages or issues.') },
    { id: 'crop_yield_forecaster', name: 'Crop Yield Forecaster', icon: Leaf, ...textGeneratorProps('Crop Yield', 'Forecast crop yield.', 'You are an agronomist. Forecast the potential yield for the following crop based on soil, weather, and seed data.') },
    { id: 'soil_nutrient_analyzer', name: 'Soil Nutrient Analyzer', icon: FlaskConical, ...textGeneratorProps('Soil Nutrients', 'Analyze soil nutrients.', 'You are a soil scientist. Analyze the following soil test results and recommend fertilizer and amendments.') },
    { id: 'pest_infestation_predictor', name: 'Pest Infestation Predictor', icon: Bug, ...textGeneratorProps('Pest Prediction', 'Predict a pest infestation.', 'You are an entomologist. Predict the risk of a specific pest infestation based on the following weather and crop data.') },
    { id: 'irrigation_optimization_planner', name: 'Irrigation Optimization Planner', icon: SlidersHorizontal, ...textGeneratorProps('Irrigation Plan', 'Optimize an irrigation plan.', 'You are a farm manager. Create an optimized irrigation schedule for the following field to conserve water and maximize crop health.') },
    { id: 'farm_equipment_usage_tracker', name: 'Farm Equipment Usage Tracker', icon: Tractor, ...textGeneratorProps('Equipment Usage', 'Track farm equipment usage.', 'You are an agricultural engineer. Analyze the following equipment usage data and suggest optimizations for fuel efficiency and maintenance scheduling.') },
    { id: 'agricultural_market_price_forecaster', name: 'Agricultural Market Price Forecaster', icon: LineChart, ...textGeneratorProps('Market Price', 'Forecast agricultural market prices.', 'You are an agricultural economist. Forecast the market price for the following commodity for the next quarter.') },
    { id: 'greenhouse_climate_controller', name: 'Greenhouse Climate Controller', icon: Thermometer, ...textGeneratorProps('Greenhouse Climate', 'Control a greenhouse climate.', 'You are a botanist. Recommend the optimal climate settings (temperature, humidity, light) for a greenhouse growing the following plants.') },
    { id: 'livestock_health_monitor', name: 'Livestock Health Monitor', icon: HeartPulse, ...textGeneratorProps('Livestock Health', 'Monitor livestock health.', 'You are a veterinarian. Analyze the following data from a livestock health monitor and identify any animals that may be sick.') },
    { id: 'seed_selection_optimizer', name: 'Seed Selection Optimizer', icon: Leaf, ...textGeneratorProps('Seed Selection', 'Optimize seed selection.', 'You are a plant breeder. Recommend the best seed variety for the following farm based on its location and soil type.') },
    { id: 'weather_impact_predictor', name: 'Weather Impact Predictor', icon: Cloud, ...textGeneratorProps('Weather Impact', 'Predict weather impact on crops.', 'You are an agricultural consultant. Predict the impact of the following weather forecast on the specified crop.') },
    { id: 'sports_performance_analyzer', name: 'Sports Performance Analyzer', icon: User, ...textGeneratorProps('Performance Analysis', 'Analyze sports performance.', 'You are a sports analyst. Analyze the following athlete\'s performance data and identify areas for improvement.') },
    { id: 'athlete_training_optimizer', name: 'Athlete Training Optimizer', icon: Dumbbell, ...textGeneratorProps('Training Optimization', 'Optimize an athlete\'s training.', 'You are a sports scientist. Suggest optimizations for the following athlete\'s training plan to improve performance and reduce injury risk.') },
    { id: 'game_strategy_simulator', name: 'Game Strategy Simulator', icon: Component, ...textGeneratorProps('Game Strategy', 'Simulate a game strategy.', 'You are a coach. Describe the likely outcome of a sports game if the team uses the following strategy against their opponent.') },
    { id: 'player_injury_risk_detector', name: 'Player Injury Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Injury Risk', 'Detect player injury risk.', 'You are a physical therapist. Assess the injury risk for a player with the following biometric and workload data.') },
    { id: 'match_outcome_predictor', name: 'Match Outcome Predictor', icon: Trophy, ...textGeneratorProps('Match Outcome', 'Predict a match outcome.', 'You are a sports betting analyst. Predict the outcome of a match between the following two teams.') },
    { id: 'tournament_schedule_optimizer', name: 'Tournament Schedule Optimizer', icon: Calendar, ...textGeneratorProps('Tournament Schedule', 'Optimize a tournament schedule.', 'You are a league organizer. Create an optimized schedule for a tournament with the following teams and constraints.') },
    { id: 'fan_engagement_tracker', name: 'Fan Engagement Tracker', icon: Users, ...textGeneratorProps('Fan Engagement', 'Track fan engagement.', 'You are a sports marketer. Analyze the following social media data to gauge fan engagement and sentiment.') },
    { id: 'sponsorship_roi_analyzer', name: 'Sponsorship ROI Analyzer', icon: BadgePercent, ...textGeneratorProps('Sponsorship ROI', 'Analyze sponsorship ROI.', 'You are a marketing manager. Analyze the return on investment (ROI) for the following sports sponsorship deal.') },
    { id: 'merchandise_sales_forecaster', name: 'Merchandise Sales Forecaster', icon: Shirt, ...textGeneratorProps('Merchandise Sales', 'Forecast merchandise sales.', 'You are a retail manager. Forecast the sales of the following team\'s merchandise for the next season.') },
    { id: 'ticket_price_optimizer', name: 'Ticket Price Optimizer', icon: CircleDollarSign, ...textGeneratorProps('Ticket Prices', 'Optimize ticket prices.', 'You are an event manager. Recommend the optimal ticket prices for the following game to maximize revenue.') },
    { id: 'streaming_audience_predictor', name: 'Streaming Audience Predictor', icon: Users, ...textGeneratorProps('Streaming Audience', 'Predict a streaming audience.', 'You are a media analyst. Predict the size of the streaming audience for the following live sports event.') },
    { id: 'social_sentiment_analyzer', name: 'Social Sentiment Analyzer', icon: Smile, ...textGeneratorProps('Social Sentiment', 'Analyze social sentiment.', 'You are a brand strategist. Analyze the social media sentiment for the following brand or product.') },
    { id: 'trend_forecast_engine', name: 'Trend Forecast Engine', icon: TrendingUp, ...textGeneratorProps('Trend Forecast', 'Forecast a trend.', 'You are a futurist. Forecast the next big trend in the following industry.') },
    { id: 'brand_loyalty_scorer', name: 'Brand Loyalty Scorer', icon: Heart, ...textGeneratorProps('Brand Loyalty', 'Score brand loyalty.', 'You are a market researcher. Score the brand loyalty of customers based on the following survey data.') },
    { id: 'customer_review_summarizer', name: 'Customer Review Summarizer', icon: FileQuestion, ...textGeneratorProps('Review Summary', 'Summarize customer reviews.', 'You are a product manager. Summarize the key themes from the following list of customer reviews.') },
    { id: 'influence_network_mapper', name: 'Influence Network Mapper', icon: GitBranch, ...textGeneratorProps('Influence Network', 'Map an influence network.', 'You are a PR specialist. Map the network of influence for the following topic on social media.') },
    { id: 'viral_content_predictor', name: 'Viral Content Predictor', icon: TrendingUp, ...textGeneratorProps('Viral Prediction', 'Predict viral content.', 'You are a content creator. Predict the likelihood of the following piece of content going viral.') },
    { id: 'ad_campaign_performance_forecaster', name: 'Ad Campaign Performance Forecaster', icon: LineChart, ...textGeneratorProps('Ad Performance', 'Forecast ad campaign performance.', 'You are an advertising executive. Forecast the performance of the following ad campaign based on its creative and targeting.') },
    { id: 'conversion_funnel_optimizer', name: 'Conversion Funnel Optimizer', icon: Filter, ...textGeneratorProps('Conversion Funnel', 'Optimize a conversion funnel.', 'You are a digital marketer. Suggest optimizations for the following e-commerce conversion funnel.') },
    { id: 'lead_scoring_ai', name: 'Lead Scoring AI', icon: Star, ...textGeneratorProps('Lead Scoring', 'Score sales leads.', 'You are a sales manager. Score the following sales leads based on their demographic and behavioral data.') },
    { id: 'sales_forecasting_assistant', name: 'Sales Forecasting Assistant', icon: LineChart, ...textGeneratorProps('Sales Forecast', 'Forecast sales.', 'You are a sales director. Forecast sales for the next quarter based on the current pipeline and historical data.') },
    { id: 'upsell_recommendation_engine', name: 'Upsell Recommendation Engine', icon: ArrowUp, ...textGeneratorProps('Upsell Recommendations', 'Get upsell recommendations.', 'You are a retail strategist. Recommend upsell products for a customer who has purchased the following item.') },
    { id: 'cross_sell_pattern_finder', name: 'Cross-Sell Pattern Finder', icon: Shuffle, ...textGeneratorProps('Cross-Sell Patterns', 'Find cross-sell patterns.', 'You are a data analyst. Identify cross-sell patterns in the following transaction data.') },
    { id: 'product_return_risk_detector', name: 'Product Return Risk Detector', icon: ShieldCheck, ...textGeneratorProps('Return Risk', 'Detect product return risk.', 'You are a retail analyst. Assess the risk of a customer returning the following product.') },
    { id: 'loyalty_reward_planner', name: 'Loyalty Reward Planner', icon: Trophy, ...textGeneratorProps('Loyalty Rewards', 'Plan loyalty rewards.', 'You are a marketing specialist. Design a loyalty rewards program for the following type of business.') },
    { id: 'customer_retention_strategy_maker', name: 'Customer Retention Strategy Maker', icon: User, ...textGeneratorProps('Retention Strategy', 'Create a customer retention strategy.', 'You are a customer success consultant. Create a customer retention strategy for a business with the following customer churn problem.') },
    { id: 'store_layout_optimization_ai', name: 'Store Layout Optimization AI', icon: Home, ...textGeneratorProps('Store Layout', 'Optimize a store layout.', 'You are a retail designer. Suggest optimizations for the following store layout to improve customer flow and sales.') },
    { id: 'shelf_stocking_suggestion_tool', name: 'Shelf Stocking Suggestion Tool', icon: Package, ...textGeneratorProps('Stocking Suggestions', 'Get shelf stocking suggestions.', 'You are a merchandiser. Suggest how to stock the shelves for the following product category to maximize sales.') },
    { id: 'price_match_detector', name: 'Price Match Detector', icon: CircleDollarSign, ...textGeneratorProps('Price Match', 'Detect price matches.', 'You are a competitive intelligence analyst. Determine if the following competitor price constitutes a price match for your product.') },
    { id: 'seasonal_demand_forecaster', name: 'Seasonal Demand Forecaster', icon: LineChart, ...textGeneratorProps('Seasonal Demand', 'Forecast seasonal demand.', 'You are a demand planner. Forecast the seasonal demand for the following product.') },
    { id: 'fashion_trend_predictor', name: 'Fashion Trend Predictor', icon: Shirt, ...textGeneratorProps('Fashion Trends', 'Predict fashion trends.', 'You are a fashion editor. Predict the top 5 fashion trends for the upcoming season.') },
    { id: 'outfit_combination_recommender', name: 'Outfit Combination Recommender', icon: Shirt, ...textGeneratorProps('Outfit Recommender', 'Get outfit recommendations.', 'You are a personal stylist. Recommend a complete outfit from the following list of clothing items for a specific occasion.') },
    { id: 'fabric_quality_analyzer', name: 'Fabric Quality Analyzer', icon: Search, ...textGeneratorProps('Fabric Quality', 'Analyze fabric quality.', 'You are a textile expert. Assess the quality of a fabric based on the following description of its composition and weave.') },
    { id: 'production_batch_optimizer', name: 'Production Batch Optimizer', icon: SlidersHorizontal, ...textGeneratorProps('Production Batch', 'Optimize a production batch.', 'You are a production manager. Determine the optimal batch size for manufacturing the following fashion item to minimize cost and waste.') },
    { id: 'color_palette_forecaster', name: 'Color Palette Forecaster', icon: Palette, ...textGeneratorProps('Color Palette', 'Forecast upcoming color palettes.', 'You are a design trend forecaster. Predict the color palettes that will be popular in the upcoming season.') },
    { id: 'textile_pattern_designer_ai', name: 'Textile Pattern Designer AI', icon: Wand2, ...textGeneratorProps('Textile Pattern', 'Design a textile pattern.', 'You are a textile designer. Generate a description of a unique textile pattern based on the following theme.') },
    { id: 'jewelry_design_suggestor', name: 'Jewelry Design Suggestor', icon: Star, ...textGeneratorProps('Jewelry Design', 'Get jewelry design suggestions.', 'You are a jewelry designer. Suggest a design for a piece of jewelry based on the following concept and materials.') },
    { id: 'shoe_size_fit_predictor', name: 'Shoe Size Fit Predictor', icon: Footprints, ...textGeneratorProps('Shoe Fit', 'Predict shoe size fit.', 'You are a footwear specialist. Predict the best shoe size for a customer based on their measurements from other brands.') },
    { id: 'accessory_style_matcher', name: 'Accessory Style Matcher', icon: VenetianMask, ...textGeneratorProps('Accessory Match', 'Match accessories to a style.', 'You are a fashion stylist. Recommend accessories to match the following outfit and occasion.') },
    { id: 'luxury_goods_market_forecaster', name: 'Luxury Goods Market Forecaster', icon: LineChart, ...textGeneratorProps('Luxury Market', 'Forecast the luxury goods market.', 'You are a market analyst. Forecast the growth of the luxury goods market in the following region.') },
    { id: 'music_mood_classifier', name: 'Music Mood Classifier', icon: Music, ...textGeneratorProps('Music Mood', 'Classify the mood of a song.', 'You are a musicologist. Classify the mood and tempo of a song based on the following description of its lyrics and instrumentation.') },
    { id: 'song_tempo_analyzer', name: 'Song Tempo Analyzer', icon: Clock, ...textGeneratorProps('Song Tempo', 'Analyze a song\'s tempo.', 'You are a DJ. Determine the beats per minute (BPM) and energy level of a song from its description.') },
    { id: 'instrument_arrangement_suggestor', name: 'Instrument Arrangement Suggestor', icon: SlidersHorizontal, ...textGeneratorProps('Instrument Arrangement', 'Get instrument arrangement suggestions.', 'You are a music producer. Suggest an instrument arrangement for a song in the following genre.') },
    { id: 'chord_progression_generator', name: 'Chord Progression Generator', icon: Music, ...textGeneratorProps('Chord Progression', 'Generate a chord progression.', 'You are a songwriter. Generate a 4-chord progression in a specified key and mood.') },
    { id: 'mixing_mastering_advisor', name: 'Mixing & Mastering Advisor', icon: SlidersHorizontal, ...textGeneratorProps('Mixing/Mastering Advice', 'Get mixing and mastering advice.', 'You are an audio engineer. Provide mixing and mastering advice for the following track description.') },
    { id: 'sound_quality_enhancer', name: 'Sound Quality Enhancer', icon: Wand2, ...textGeneratorProps('Sound Quality', 'Enhance sound quality.', 'You are a sound designer. Suggest EQ and compression settings to enhance the quality of the following audio recording.') },
    { id: 'audio_scene_identifier', name: 'Audio Scene Identifier', icon: AudioLines, ...textGeneratorProps('Audio Scene', 'Identify an audio scene.', 'You are a sound editor. Identify the environment and key sounds in the following audio scene description.') },
    { id: 'noise_removal_optimizer', name: 'Noise Removal Optimizer', icon: Minus, ...textGeneratorProps('Noise Removal', 'Optimize noise removal.', 'You are an audio restoration specialist. Suggest the best technique to remove background noise from the following audio recording.') },
    { id: 'speech_emotion_analyzer', name: 'Speech Emotion Analyzer', icon: Smile, ...textGeneratorProps('Speech Emotion', 'Analyze emotion in speech.', 'You are a psychologist. Analyze the emotion conveyed in the following transcript of spoken words.') },
    { id: 'podcast_topic_planner', name: 'Podcast Topic Planner', icon: MicVocal, ...textGeneratorProps('Podcast Topics', 'Plan podcast topics.', 'You are a podcast producer. Brainstorm 5 potential topics for a podcast series on the following theme.') },
    { id: 'radio_ad_effectiveness_tracker', name: 'Radio Ad Effectiveness Tracker', icon: LineChart, ...textGeneratorProps('Radio Ad Effectiveness', 'Track radio ad effectiveness.', 'You are a media buyer. Suggest how to track the effectiveness of the following radio ad campaign.') },
    { id: 'film_script_coverage_ai', name: 'Film Script Coverage AI', icon: FileSearch, ...textGeneratorProps('Script Coverage', 'Get AI script coverage.', 'You are a studio reader. Provide professional script coverage for the following screenplay logline, including a summary and critique.') },
    { id: 'scene_location_suggestor', name: 'Scene Location Suggestor', icon: Map, ...textGeneratorProps('Location Suggestions', 'Get scene location suggestions.', 'You are a location scout. Suggest 3 potential filming locations for a scene with the following description.') },
    { id: 'casting_fit_analyzer', name: 'Casting Fit Analyzer', icon: User, ...textGeneratorProps('Casting Fit', 'Analyze casting fit.', 'You are a casting director. Analyze the suitability of the following actor for a specific role based on their past work and character description.') },
    { id: 'shot_sequence_planner', name: 'Shot Sequence Planner', icon: Clapperboard, ...textGeneratorProps('Shot Sequence', 'Plan a shot sequence.', 'You are a director. Plan the shot sequence (e.g., wide shot, close-up) for the following dramatic scene.') },
    { id: 'lighting_setup_optimizer', name: 'Lighting Setup Optimizer', icon: Lightbulb, ...textGeneratorProps('Lighting Setup', 'Optimize a lighting setup.', 'You are a cinematographer. Suggest a lighting setup to create the following mood for a scene.') },
    { id: 'special_effects_cost_estimator', name: 'Special Effects Cost Estimator', icon: CircleDollarSign, ...textGeneratorProps('SFX Cost', 'Estimate special effects costs.', 'You are a VFX producer. Provide a rough cost estimate for the special effects required in the following scene description.') },
    { id: 'post_production_workflow_planner', name: 'Post-Production Workflow Planner', icon: Workflow, ...textGeneratorProps('Post-Production Workflow', 'Plan a post-production workflow.', 'You are a post-production supervisor. Outline the workflow for editing, color grading, and sound design for the following film project.') },
    { id: 'trailer_impact_predictor', name: 'Trailer Impact Predictor', icon: TrendingUp, ...textGeneratorProps('Trailer Impact', 'Predict trailer impact.', 'You are a marketing executive. Predict the audience impact and potential box office performance based on the following movie trailer description.') },
    { id: 'audience_review_sentiment_tracker', name: 'Audience Review Sentiment Tracker', icon: Smile, ...textGeneratorProps('Review Sentiment', 'Track audience review sentiment.', 'You are a data analyst. Analyze the sentiment of the following audience reviews for a film.') },
    { id: 'board_game_rule_optimizer', name: 'Board Game Rule Optimizer', icon: Puzzle, ...textGeneratorProps('Rule Optimization', 'Optimize board game rules.', 'You are a game designer. Suggest improvements to the following board game rule to make it clearer and more balanced.') },
    { id: 'puzzle_difficulty_balancer', name: 'Puzzle Difficulty Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Puzzle Difficulty', 'Balance puzzle difficulty.', 'You are a puzzle creator. Adjust the difficulty of the following puzzle to be suitable for a specific audience.') },
    { id: 'level_design_ai', name: 'Level Design AI', icon: Component, ...textGeneratorProps('Level Design', 'Get AI level design ideas.', 'You are a level designer. Generate a layout and key features for a video game level with the following theme.') },
    { id: 'game_lore_expansion_tool', name: 'Game Lore Expansion Tool', icon: BookOpen, ...textGeneratorProps('Game Lore', 'Expand game lore.', 'You are a narrative designer. Write a piece of lore that expands on the following aspect of a game\'s world.') },
    { id: 'enemy_behavior_modeler', name: 'Enemy Behavior Modeler', icon: Bot, ...textGeneratorProps('Enemy Behavior', 'Model enemy behavior in a game.', 'You are a game AI developer. Design the behavior patterns for an enemy in a game with the following characteristics.') },
    { id: 'loot_drop_probability_balancer', name: 'Loot Drop Probability Balancer', icon: SlidersHorizontal, ...textGeneratorProps('Loot Drops', 'Balance loot drop probabilities.', 'You are a game economy designer. Balance the loot drop probabilities for the following enemies to create a rewarding player experience.') },
    { id: 'player_motivation_analyzer', name: 'Player Motivation Analyzer', icon: User, ...textGeneratorProps('Player Motivation', 'Analyze player motivations.', 'You are a game psychologist. Analyze the following player behavior data to understand their primary motivations.') },
    { id: 'multiplayer_matchmaking_optimizer', name: 'Multiplayer Matchmaking Optimizer', icon: Users, ...textGeneratorProps('Matchmaking', 'Optimize multiplayer matchmaking.', 'You are a backend engineer. Suggest an algorithm to optimize multiplayer matchmaking for skill and low latency.') },
    { id: 'esports_strategy_advisor', name: 'Esports Strategy Advisor', icon: Trophy, ...textGeneratorProps('Esports Strategy', 'Get esports strategy advice.', 'You are an esports coach. Suggest a strategy for the following team to win their next match in a specific game.') },
    { id: 'speedrun_path_optimizer', name: 'Speedrun Path Optimizer', icon: Route, ...textGeneratorProps('Speedrun Path', 'Optimize a speedrun path.', 'You are a speedrunner. Find the optimal path and sequence of actions to complete the following game as quickly as possible.') },
    { id: 'education_syllabus_planner', name: 'Education Syllabus Planner', icon: Library, ...textGeneratorProps('Syllabus', 'Plan an education syllabus.', 'You are a professor. Create a 12-week syllabus for a university course on the following subject.') },
    { id: 'exam_pattern_analyzer', name: 'Exam Pattern Analyzer', icon: FileSearch, ...textGeneratorProps('Exam Patterns', 'Analyze exam patterns.', 'You are a teacher. Analyze the following past exams to identify recurring topics and question types.') },
    { id: 'learning_pace_personalizer', name: 'Learning Pace Personalizer', icon: User, ...textGeneratorProps('Personalized Learning', 'Personalize a learning pace.', 'You are an instructional designer. Create a personalized learning plan for a student with the following learning style and goals.') },
    { id: 'curriculum_gap_identifier', name: 'Curriculum Gap Identifier', icon: Search, ...textGeneratorProps('Curriculum Gaps', 'Identify curriculum gaps.', 'You are a curriculum developer. Identify any gaps in the following curriculum compared to industry standards.') },
    { id: 'teaching_method_suggestor', name: 'Teaching Method Suggestor', icon: Lightbulb, ...textGeneratorProps('Teaching Methods', 'Get teaching method suggestions.', 'You are an education expert. Suggest effective teaching methods for the following subject and age group.') },
    { id: 'classroom_engagement_tracker', name: 'Classroom Engagement Tracker', icon: Users, ...textGeneratorProps('Classroom Engagement', 'Track classroom engagement.', 'You are an educational researcher. Suggest ways to measure and track student engagement in a classroom setting.') },
    { id: 'assignment_feedback_generator', name: 'Assignment Feedback Generator', icon: FileEdit, ...textGeneratorProps('Assignment Feedback', 'Generate assignment feedback.', 'You are a teaching assistant. Provide constructive feedback on the following student assignment.') },
    { id: 'question_difficulty_calibrator', name: 'Question Difficulty Calibrator', icon: SlidersHorizontal, ...textGeneratorProps('Question Difficulty', 'Calibrate question difficulty.', 'You are an exam designer. Calibrate the difficulty of the following test question for a specific grade level.') },
    { id: 'lesson_plan_enhancer', name: 'Lesson Plan Enhancer', icon: Wand2, ...textGeneratorProps('Enhanced Lesson Plan', 'Enhance a lesson plan.', 'You are a master teacher. Suggest enhancements for the following lesson plan to make it more engaging and effective.') },
    { id: 'grading_consistency_checker', name: 'Grading Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Grading Consistency', 'Check grading consistency.', 'You are a department head. Analyze the following set of grades from different teachers to check for grading consistency.') },
    { id: 'tutoring_session_scheduler', name: 'Tutoring Session Scheduler', icon: Calendar, ...textGeneratorProps('Tutoring Schedule', 'Schedule a tutoring session.', 'You are a tutor. Create a schedule for a tutoring session that covers the following topics.') },
    { id: 'learning_style_analyzer', name: 'Learning Style Analyzer', icon: User, ...textGeneratorProps('Learning Style', 'Analyze a learning style.', 'You are an educational psychologist. Analyze the following description of a student\'s study habits to determine their likely learning style.') },
    { id: 'peer_review_summarizer', name: 'Peer Review Summarizer', icon: FileQuestion, ...textGeneratorProps('Peer Review Summary', 'Summarize peer reviews.', 'You are a student. Summarize the key feedback from the following set of peer reviews on your work.') },
    { id: 'academic_progress_forecaster', name: 'Academic Progress Forecaster', icon: TrendingUp, ...textGeneratorProps('Academic Progress', 'Forecast academic progress.', 'You are a school counselor. Forecast a student\'s academic progress based on their current grades and study habits.') },
    { id: 'online_course_enrollment_predictor', name: 'Online Course Enrollment Predictor', icon: Users, ...textGeneratorProps('Enrollment Prediction', 'Predict online course enrollment.', 'You are a university administrator. Predict the enrollment numbers for the following new online course.') },
    { id: 'quiz_question_generator', name: 'Quiz Question Generator', icon: HelpCircle, ...textGeneratorProps('Quiz Questions', 'Generate quiz questions.', 'You are a teacher. Generate 5 multiple-choice quiz questions based on the following text.') },
    { id: 'flashcard_auto_creator', name: 'Flashcard Auto-Creator', icon: FilePlus, ...textGeneratorProps('Flashcards', 'Create flashcards.', 'You are a student. Create a set of flashcards (term and definition) from the following list of key vocabulary.') },
    { id: 'concept_reinforcement_planner', name: 'Concept Reinforcement Planner', icon: BrainCog, ...textGeneratorProps('Concept Reinforcement', 'Plan concept reinforcement.', 'You are a tutor. Create a plan with 3 activities to reinforce the following educational concept.') },
    { id: 'study_group_matching_ai', name: 'Study Group Matching AI', icon: Users, ...textGeneratorProps('Study Group', 'Match students for a study group.', 'You are a student success coordinator. Match the following students into effective study groups based on their subjects and learning styles.') },
    { id: 'skill_gap_forecaster', name: 'Skill Gap Forecaster', icon: TrendingUp, ...textGeneratorProps('Skill Gaps', 'Forecast future skill gaps.', 'You are a workforce development expert. Forecast the skill gaps in the following industry for the next 5 years.') },
    { id: 'language_learning_path_optimizer', name: 'Language Learning Path Optimizer', icon: Route, ...textGeneratorProps('Learning Path', 'Optimize a language learning path.', 'You are a language teacher. Create an optimized learning path for a student to achieve conversational fluency in the following language.') },
    { id: 'pronunciation_feedback_ai', name: 'Pronunciation Feedback AI', icon: MicVocal, ...textGeneratorProps('Pronunciation Feedback', 'Get pronunciation feedback.', 'You are a linguistics coach. Provide feedback on the pronunciation in the following audio recording (described) of a non-native speaker.') },
    { id: 'vocabulary_expansion_tool', name: 'Vocabulary Expansion Tool', icon: BookOpen, ...textGeneratorProps('Vocabulary', 'Expand your vocabulary.', 'You are a wordsmith. Provide 5 advanced vocabulary words to use instead of the following common word.') },
    { id: 'grammar_practice_creator', name: 'Grammar Practice Creator', icon: BookCheck, ...textGeneratorProps('Grammar Practice', 'Create grammar practice exercises.', 'You are a language instructor. Create a grammar practice exercise focusing on the following grammatical concept.') },
    { id: 'idiom_usage_coach', name: 'Idiom Usage Coach', icon: Drama, ...textGeneratorProps('Idiom Coach', 'Get coaching on idiom usage.', 'You are a language expert. Explain the meaning and proper usage of the following idiom.') },
    { id: 'cultural_context_advisor', name: 'Cultural Context Advisor', icon: Landmark, ...textGeneratorProps('Cultural Context', 'Get cultural context advice.', 'You are a cultural advisor. Provide cultural context and explain any potential misunderstandings for the following social situation.') },
    { id: 'debate_strategy_planner', name: 'Debate Strategy Planner', icon: MessageSquare, ...textGeneratorProps('Debate Strategy', 'Plan a debate strategy.', 'You are a debate coach. Create a strategy, including key arguments and rebuttals, for a debate on the following topic.') },
    { id: 'speech_timing_analyzer', name: 'Speech Timing Analyzer', icon: Clock, ...textGeneratorProps('Speech Timing', 'Analyze speech timing.', 'You are a public speaking coach. Analyze the timing and pacing of the following speech transcript.') },
    { id: 'presentation_flow_optimizer', name: 'Presentation Flow Optimizer', icon: Workflow, ...textGeneratorProps('Presentation Flow', 'Optimize presentation flow.', 'You are a communications expert. Suggest improvements to the flow and structure of the following presentation outline.') },
    { id: 'visual_aid_suggestor', name: 'Visual Aid Suggestor', icon: Image, ...textGeneratorProps('Visual Aids', 'Get visual aid suggestions.', 'You are a presentation designer. Suggest visual aids (e.g., charts, images) for the following presentation slides.') },
    { id: 'slide_deck_consistency_checker', name: 'Slide Deck Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Deck Consistency', 'Check slide deck consistency.', 'You are a brand specialist. Check the following slide deck for consistency in branding, formatting, and messaging.') },
    { id: 'audience_engagement_timer', name: 'Audience Engagement Timer', icon: Clock, ...textGeneratorProps('Engagement Timer', 'Time audience engagement.', 'You are a professional speaker. Suggest points in the following speech to pause for audience interaction or questions.') },
    { id: 'professional_bio_generator', name: 'Professional Bio Generator', icon: UserSquare, ...textGeneratorProps('Professional Bio', 'Generate a professional bio.', 'You are a career coach. Write a professional bio (100 words) for a person with the following experience and skills.') },
    { id: 'resume_keyword_optimizer', name: 'Resume Keyword Optimizer', icon: FileSearch, ...textGeneratorProps('Resume Keywords', 'Optimize resume keywords.', 'You are a recruiter. Suggest keywords to include in a resume for the following job description.') },
    { id: 'cover_letter_personalizer', name: 'Cover Letter Personalizer', icon: Mail, ...textGeneratorProps('Personalized Cover Letter', 'Personalize a cover letter.', 'You are a professional writer. Personalize the following generic cover letter for a specific job application.') },
    { id: 'job_interview_simulation_ai', name: 'Job Interview Simulation AI', icon: Mic, ...textGeneratorProps('Interview Simulation', 'Simulate a job interview.', 'You are an HR manager. Conduct a simulated job interview by asking 5 common questions for the following role.') },
    { id: 'career_path_predictor', name: 'Career Path Predictor', icon: TrendingUp, ...textGeneratorProps('Career Path', 'Predict a career path.', 'You are a career counselor. Predict a potential 10-year career path for a person with the following skills and interests.') },
    { id: 'skill_endorsement_analyzer', name: 'Skill Endorsement Analyzer', icon: Star, ...textGeneratorProps('Skill Endorsements', 'Analyze skill endorsements.', 'You are a professional networker. Analyze the following list of skill endorsements and suggest which ones to highlight on a professional profile.') },
    { id: 'salary_benchmarking_tool', name: 'Salary Benchmarking Tool', icon: CircleDollarSign, ...textGeneratorProps('Salary Benchmark', 'Benchmark a salary.', 'You are an HR analyst. Provide a salary benchmark for the following job role in a specific location.') },
    { id: 'workplace_culture_fit_analyzer', name: 'Workplace Culture Fit Analyzer', icon: Building2, ...textGeneratorProps('Culture Fit', 'Analyze workplace culture fit.', 'You are an organizational psychologist. Assess the potential culture fit of a candidate with the following personality traits in a company with the described culture.') },
    { id: 'employee_feedback_summarizer', name: 'Employee Feedback Summarizer', icon: FileQuestion, ...textGeneratorProps('Feedback Summary', 'Summarize employee feedback.', 'You are a manager. Summarize the key themes from the following anonymous employee feedback.') },
    { id: 'team_dynamics_predictor', name: 'Team Dynamics Predictor', icon: Users, ...textGeneratorProps('Team Dynamics', 'Predict team dynamics.', 'You are a team-building expert. Predict the potential team dynamics of a group with the following mix of personality types.') },
    { id: 'leadership_style_analyzer', name: 'Leadership Style Analyzer', icon: User, ...textGeneratorProps('Leadership Style', 'Analyze a leadership style.', 'You are a business consultant. Analyze the leadership style of a manager based on the following description of their actions.') },
    { id: 'meeting_agenda_optimizer', name: 'Meeting Agenda Optimizer', icon: FileText, ...textGeneratorProps('Optimized Agenda', 'Optimize a meeting agenda.', 'You are a productivity expert. Optimize the following meeting agenda for clarity, focus, and efficiency.') },
    { id: 'task_priority_planner', name: 'Task Priority Planner', icon: SlidersHorizontal, ...textGeneratorProps('Task Priorities', 'Plan task priorities.', 'You are a project manager. Prioritize the following list of tasks using a method like the Eisenhower Matrix (Urgent/Important).') },
    { id: 'workload_balancer_ai', name: 'Workload Balancer AI', icon: SlidersHorizontal, ...textGeneratorProps('Workload Balance', 'Balance a team\'s workload.', 'You are a team lead. Suggest how to balance the workload for the following project among the given team members.') },
    { id: 'deadline_risk_detector', name: 'Deadline Risk Detector', icon: Clock, ...textGeneratorProps('Deadline Risk', 'Detect deadline risks.', 'You are a program manager. Identify the tasks with the highest risk of missing their deadline in the following project plan.') },
    { id: 'resource_allocation_forecaster', name: 'Resource Allocation Forecaster', icon: Users, ...textGeneratorProps('Resource Allocation', 'Forecast resource allocation.', 'You are a resource manager. Forecast the resource allocation needs for the next quarter based on the following project pipeline.') },
    { id: 'cross_department_communication_tracker', name: 'Cross-Department Communication Tracker', icon: Workflow, ...textGeneratorProps('Communication Tracking', 'Track cross-department communication.', 'You are an internal communications specialist. Suggest ways to track and improve communication between the following two departments.') },
    { id: 'training_needs_identifier', name: 'Training Needs Identifier', icon: Lightbulb, ...textGeneratorProps('Training Needs', 'Identify training needs.', 'You are a training coordinator. Identify potential training needs for a team with the following performance review data.') },
    { id: 'onboarding_experience_planner', name: 'Onboarding Experience Planner', icon: User, ...textGeneratorProps('Onboarding Plan', 'Plan an onboarding experience.', 'You are an HR manager. Create a 30-day onboarding plan for a new employee in the following role.') },
    { id: 'knowledge_transfer_optimizer', name: 'Knowledge Transfer Optimizer', icon: RefreshCw, ...textGeneratorProps('Knowledge Transfer', 'Optimize knowledge transfer.', 'You are a knowledge management specialist. Suggest a process for an expert employee to transfer their knowledge before retiring.') },
    { id: 'company_policy_clarity_checker', name: 'Company Policy Clarity Checker', icon: CheckSquare, ...textGeneratorProps('Policy Clarity', 'Check company policy clarity.', 'You are a communications consultant. Review the following company policy for clarity and suggest improvements.') },
    { id: 'internal_survey_analyzer', name: 'Internal Survey Analyzer', icon: FileSearch, ...textGeneratorProps('Survey Analysis', 'Analyze an internal survey.', 'You are an HR analyst. Analyze the results of the following internal employee survey and summarize the key findings.') },
    { id: 'innovation_idea_ranker', name: 'Innovation Idea Ranker', icon: Lightbulb, ...textGeneratorProps('Idea Ranking', 'Rank innovation ideas.', 'You are an innovation manager. Rank the following list of ideas based on their potential impact and feasibility.') },
    { id: 'patent_portfolio_analyzer', name: 'Patent Portfolio Analyzer', icon: Library, ...textGeneratorProps('Patent Portfolio', 'Analyze a patent portfolio.', 'You are a patent attorney. Analyze the following patent portfolio and identify its strengths and weaknesses.') },
    { id: 'r&d_project_feasibility_checker', name: 'R&D Project Feasibility Checker', icon: Beaker, ...textGeneratorProps('R&D Feasibility', 'Check R&D project feasibility.', 'You are a research director. Assess the technical and commercial feasibility of the following R&D project.') },
    { id: 'product_prototype_feedback_ai', name: 'Product Prototype Feedback AI', icon: Wand2, ...textGeneratorProps('Prototype Feedback', 'Get feedback on a product prototype.', 'You are a user researcher. Provide constructive feedback on the following product prototype description.') },
    { id: 'market_entry_risk_forecaster', name: 'Market Entry Risk Forecaster', icon: TrendingUp, ...textGeneratorProps('Market Entry Risk', 'Forecast market entry risk.', 'You are a business strategist. Assess the risks of entering the following new market with a specific product.') },
    { id: 'brand_name_idea_generator', name: 'Brand Name Idea Generator', icon: Lightbulb, ...textGeneratorProps('Brand Names', 'Generate brand name ideas.', 'You are a branding expert. Generate 10 potential brand names for a new company in the following industry.') },
    { id: 'logo_color_impact_analyzer', name: 'Logo Color Impact Analyzer', icon: Palette, ...textGeneratorProps('Logo Color Impact', 'Analyze logo color impact.', 'You are a design psychologist. Analyze the psychological impact of the colors used in the following logo description.') },
    { id: 'packaging_design_feedback_ai', name: 'Packaging Design Feedback AI', icon: Package, ...textGeneratorProps('Packaging Feedback', 'Get feedback on packaging design.', 'You are a packaging designer. Provide feedback on the following packaging design concept for a specific product.') },
    { id: 'shelf_placement_impact_predictor', name: 'Shelf Placement Impact Predictor', icon: TrendingUp, ...textGeneratorProps('Shelf Placement', 'Predict shelf placement impact.', 'You are a retail analyst. Predict the impact on sales of placing a product on a different shelf in a store.') },
    { id: 'store_traffic_flow_analyzer', name: 'Store Traffic Flow Analyzer', icon: Footprints, ...textGeneratorProps('Traffic Flow', 'Analyze store traffic flow.', 'You are a retail operations manager. Analyze the following description of store traffic flow and identify any bottlenecks.') },
    { id: 'checkout_time_optimizer', name: 'Checkout Time Optimizer', icon: Clock, ...textGeneratorProps('Checkout Time', 'Optimize checkout time.', 'You are a process improvement specialist. Suggest ways to optimize the checkout process to reduce customer wait times.') },
    { id: 'payment_fraud_probability_checker', name: 'Payment Fraud Probability Checker', icon: ShieldCheck, ...textGeneratorProps('Fraud Probability', 'Check payment fraud probability.', 'You are a risk analyst. Assess the probability of fraud for a credit card transaction with the following characteristics.') },
    { id: 'ecommerce_upsell_strategy_planner', name: 'E-commerce Upsell Strategy Planner', icon: ArrowUp, ...textGeneratorProps('Upsell Strategy', 'Plan an e-commerce upsell strategy.', 'You are an e-commerce manager. Create an upsell strategy for customers who add the following item to their cart.') },
    { id: 'subscription_renewal_predictor', name: 'Subscription Renewal Predictor', icon: RefreshCw, ...textGeneratorProps('Subscription Renewal', 'Predict subscription renewal.', 'You are a customer success specialist. Predict the likelihood of a customer renewing their subscription based on their usage data.') },
    { id: 'customer_service_response_analyzer', name: 'Customer Service Response Analyzer', icon: MessageSquare, ...textGeneratorProps('Response Analysis', 'Analyze a customer service response.', 'You are a quality assurance manager. Analyze the following customer service response for tone, helpfulness, and accuracy.') },
    { id: 'support_ticket_categorizer', name: 'Support Ticket Categorizer', icon: Tags, ...textGeneratorProps('Ticket Categorization', 'Categorize support tickets.', 'You are a customer support lead. Categorize the following support tickets into logical groups like "Billing," "Technical," or "Feature Request."') },
    { id: 'resolution_time_forecaster', name: 'Resolution Time Forecaster', icon: Clock, ...textGeneratorProps('Resolution Time', 'Forecast ticket resolution time.', 'You are a support operations analyst. Forecast the resolution time for a support ticket with the following characteristics.') },
    { id: 'chatbot_script_enhancer', name: 'Chatbot Script Enhancer', icon: Bot, ...textGeneratorProps('Chatbot Script', 'Enhance a chatbot script.', 'You are a conversation designer. Suggest improvements to the following chatbot script to make it more natural and effective.') },
    { id: 'agent_training_needs_analyzer', name: 'Agent Training Needs Analyzer', icon: Lightbulb, ...textGeneratorProps('Agent Training', 'Analyze agent training needs.', 'You are a training manager. Identify training needs for a customer service agent based on their performance metrics and customer feedback.') },
    { id: 'knowledge_base_gap_finder', name: 'Knowledge Base Gap Finder', icon: Search, ...textGeneratorProps('Knowledge Base Gaps', 'Find gaps in a knowledge base.', 'You are a technical writer. Identify gaps in the following knowledge base by analyzing a list of unresolved support tickets.') },
    { id: 'faq_auto_generator', name: 'FAQ Auto-Generator', icon: FilePlus, ...textGeneratorProps('FAQ', 'Generate an FAQ.', 'You are a content manager. Generate a list of frequently asked questions (FAQs) and their answers from the following product documentation.') },
    { id: 'feedback_sentiment_classifier', name: 'Feedback Sentiment Classifier', icon: Smile, ...textGeneratorProps('Feedback Sentiment', 'Classify feedback sentiment.', 'You are a data scientist. Classify the sentiment (Positive, Negative, Neutral) of the following piece of customer feedback.') },
    { id: 'loyalty_program_impact_analyzer', name: 'Loyalty Program Impact Analyzer', icon: Heart, ...textGeneratorProps('Loyalty Program Impact', 'Analyze loyalty program impact.', 'You are a marketing analyst. Analyze the impact of a new loyalty program based on the following customer spending data.') },
    { id: 'event_sponsorship_roi_calculator', name: 'Event Sponsorship ROI Calculator', icon: BadgePercent, ...textGeneratorProps('Sponsorship ROI', 'Calculate event sponsorship ROI.', 'You are an event marketing manager. Calculate the return on investment (ROI) for sponsoring an event, given the following costs and outcomes.') },
    { id: 'public_relations_risk_detector', name: 'Public Relations Risk Detector', icon: ShieldCheck, ...textGeneratorProps('PR Risk', 'Detect public relations risks.', 'You are a PR crisis manager. Identify potential public relations risks in the following company announcement.') },
    { id: 'crisis_communication_planner', name: 'Crisis Communication Planner', icon: Megaphone, ...textGeneratorProps('Crisis Communication', 'Plan crisis communications.', 'You are a communications director. Draft a crisis communication plan to address the following negative event.') },
    { id: 'reputation_score_tracker', name: 'Reputation Score Tracker', icon: LineChart, ...textGeneratorProps('Reputation Score', 'Track a reputation score.', 'You are a brand reputation manager. Suggest metrics to create a reputation score for a brand based on news and social media mentions.') },
    { id: 'influencer_roi_analyzer', name: 'Influencer ROI Analyzer', icon: User, ...textGeneratorProps('Influencer ROI', 'Analyze influencer ROI.', 'You are an influencer marketing manager. Analyze the ROI of an influencer campaign with the following engagement data and sales figures.') },
    { id: 'content_calendar_optimizer', name: 'Content Calendar Optimizer', icon: Calendar, ...textGeneratorProps('Content Calendar', 'Optimize a content calendar.', 'You are a content strategist. Suggest optimizations for the following content calendar to maximize reach and engagement.') },
    { id: 'blog_topic_trend_finder', name: 'Blog Topic Trend Finder', icon: TrendingUp, ...textGeneratorProps('Blog Topics', 'Find trending blog topics.', 'You are a blogger. Identify 3 trending blog topics in the following niche.') },
    { id: 'editorial_consistency_checker', name: 'Editorial Consistency Checker', icon: CheckSquare, ...textGeneratorProps('Editorial Consistency', 'Check editorial consistency.', 'You are an editor-in-chief. Check the following set of articles for consistency in tone, style, and formatting.') },
    { id: 'fact_reference_link_generator', name: 'Fact-Reference Link Generator', icon: Link, ...textGeneratorProps('Reference Links', 'Generate fact reference links.', 'You are a fact-checker. Provide a credible source link for the following factual statement.') },
    { id: 'plagiarism_risk_checker', name: 'Plagiarism Risk Checker', icon: FileSearch, ...textGeneratorProps('Plagiarism Risk', 'Check for plagiarism risk.', 'You are an academic advisor. Assess the plagiarism risk of the following piece of writing by checking for non-original content.') },
    { id: 'reading_ease_score_analyzer', name: 'Reading Ease Score Analyzer', icon: BookOpen, ...textGeneratorProps('Reading Ease', 'Analyze reading ease.', 'You are a writer. Analyze the reading ease (e.g., Flesch-Kincaid score) of the following text.') },
    { id: 'style_guide_compliance_checker', name: 'Style Guide Compliance Checker', icon: BookCheck, ...textGeneratorProps('Style Guide Compliance', 'Check for style guide compliance.', 'You are a copy editor. Check the following text for compliance with a specified style guide (e.g., AP, Chicago).') },
    { id: 'hyperlink_health_checker', name: 'Hyperlink Health Checker', icon: Link, ...textGeneratorProps('Hyperlink Health', 'Check hyperlink health.', 'You are a webmaster. Suggest a method to check for broken hyperlinks in the following list of URLs.') },
    { id: 'website_accessibility_analyzer', name: 'Website Accessibility Analyzer', icon: User, ...textGeneratorProps('Accessibility Analysis', 'Analyze website accessibility.', 'You are a web developer. Analyze the accessibility (WCAG) of a website based on the following description of its structure and elements.') },
    { id: 'mobile_ui_flow_optimizer', name: 'Mobile UI Flow Optimizer', icon: AppWindow, ...textGeneratorProps('Mobile UI Flow', 'Optimize a mobile UI flow.', 'You are a UX designer. Suggest optimizations for the following mobile app user flow to improve usability.') },
    { id: 'conversion_form_design_checker', name: 'Conversion Form Design Checker', icon: CheckSquare, ...textGeneratorProps('Form Design', 'Check a conversion form design.', 'You are a conversion rate optimization specialist. Analyze the design of the following web form and suggest changes to increase conversions.') },
];
