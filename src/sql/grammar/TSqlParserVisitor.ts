// Generated from src/sql/grammar/TSqlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { RANKING_WINDOWED_FUNCContext } from "./TSqlParser";
import { AGGREGATE_WINDOWED_FUNCContext } from "./TSqlParser";
import { ANALYTIC_WINDOWED_FUNCContext } from "./TSqlParser";
import { SCALAR_FUNCTIONContext } from "./TSqlParser";
import { BINARY_CHECKSUMContext } from "./TSqlParser";
import { CASTContext } from "./TSqlParser";
import { CONVERTContext } from "./TSqlParser";
import { CHECKSUMContext } from "./TSqlParser";
import { COALESCEContext } from "./TSqlParser";
import { CURRENT_TIMESTAMPContext } from "./TSqlParser";
import { CURRENT_USERContext } from "./TSqlParser";
import { DATEADDContext } from "./TSqlParser";
import { DATEDIFFContext } from "./TSqlParser";
import { DATENAMEContext } from "./TSqlParser";
import { DATEPARTContext } from "./TSqlParser";
import { GETDATEContext } from "./TSqlParser";
import { GETUTCDATEContext } from "./TSqlParser";
import { IDENTITYContext } from "./TSqlParser";
import { MIN_ACTIVE_ROWVERSIONContext } from "./TSqlParser";
import { NULLIFContext } from "./TSqlParser";
import { STUFFContext } from "./TSqlParser";
import { SESSION_USERContext } from "./TSqlParser";
import { SYSTEM_USERContext } from "./TSqlParser";
import { ISNULLContext } from "./TSqlParser";
import { XML_DATA_TYPE_FUNCContext } from "./TSqlParser";
import { IFFContext } from "./TSqlParser";
import { Tsql_fileContext } from "./TSqlParser";
import { BatchContext } from "./TSqlParser";
import { Sql_clausesContext } from "./TSqlParser";
import { Sql_clauseContext } from "./TSqlParser";
import { Dml_clauseContext } from "./TSqlParser";
import { Ddl_clauseContext } from "./TSqlParser";
import { Backup_statementContext } from "./TSqlParser";
import { Cfl_statementContext } from "./TSqlParser";
import { Block_statementContext } from "./TSqlParser";
import { Break_statementContext } from "./TSqlParser";
import { Continue_statementContext } from "./TSqlParser";
import { Goto_statementContext } from "./TSqlParser";
import { Return_statementContext } from "./TSqlParser";
import { If_statementContext } from "./TSqlParser";
import { Throw_statementContext } from "./TSqlParser";
import { Throw_error_numberContext } from "./TSqlParser";
import { Throw_messageContext } from "./TSqlParser";
import { Throw_stateContext } from "./TSqlParser";
import { Try_catch_statementContext } from "./TSqlParser";
import { Waitfor_statementContext } from "./TSqlParser";
import { While_statementContext } from "./TSqlParser";
import { Print_statementContext } from "./TSqlParser";
import { Raiseerror_statementContext } from "./TSqlParser";
import { Empty_statementContext } from "./TSqlParser";
import { Another_statementContext } from "./TSqlParser";
import { Alter_application_roleContext } from "./TSqlParser";
import { Create_application_roleContext } from "./TSqlParser";
import { Drop_aggregateContext } from "./TSqlParser";
import { Drop_application_roleContext } from "./TSqlParser";
import { Alter_assemblyContext } from "./TSqlParser";
import { Alter_assembly_startContext } from "./TSqlParser";
import { Alter_assembly_clauseContext } from "./TSqlParser";
import { Alter_assembly_from_clauseContext } from "./TSqlParser";
import { Alter_assembly_from_clause_startContext } from "./TSqlParser";
import { Alter_assembly_drop_clauseContext } from "./TSqlParser";
import { Alter_assembly_drop_multiple_filesContext } from "./TSqlParser";
import { Alter_assembly_dropContext } from "./TSqlParser";
import { Alter_assembly_add_clauseContext } from "./TSqlParser";
import { Alter_asssembly_add_clause_startContext } from "./TSqlParser";
import { Alter_assembly_client_file_clauseContext } from "./TSqlParser";
import { Alter_assembly_file_nameContext } from "./TSqlParser";
import { Alter_assembly_file_bitsContext } from "./TSqlParser";
import { Alter_assembly_asContext } from "./TSqlParser";
import { Alter_assembly_with_clauseContext } from "./TSqlParser";
import { Alter_assembly_withContext } from "./TSqlParser";
import { Client_assembly_specifierContext } from "./TSqlParser";
import { Assembly_optionContext } from "./TSqlParser";
import { Network_file_shareContext } from "./TSqlParser";
import { Network_computerContext } from "./TSqlParser";
import { Network_file_startContext } from "./TSqlParser";
import { File_pathContext } from "./TSqlParser";
import { File_directory_path_separatorContext } from "./TSqlParser";
import { Local_fileContext } from "./TSqlParser";
import { Local_driveContext } from "./TSqlParser";
import { Multiple_local_filesContext } from "./TSqlParser";
import { Multiple_local_file_startContext } from "./TSqlParser";
import { Create_assemblyContext } from "./TSqlParser";
import { Drop_assemblyContext } from "./TSqlParser";
import { Alter_asymmetric_keyContext } from "./TSqlParser";
import { Alter_asymmetric_key_startContext } from "./TSqlParser";
import { Asymmetric_key_optionContext } from "./TSqlParser";
import { Asymmetric_key_option_startContext } from "./TSqlParser";
import { Asymmetric_key_password_change_optionContext } from "./TSqlParser";
import { Create_asymmetric_keyContext } from "./TSqlParser";
import { Drop_asymmetric_keyContext } from "./TSqlParser";
import { Alter_authorizationContext } from "./TSqlParser";
import { Authorization_granteeContext } from "./TSqlParser";
import { Entity_toContext } from "./TSqlParser";
import { Colon_colonContext } from "./TSqlParser";
import { Alter_authorization_startContext } from "./TSqlParser";
import { Alter_authorization_for_sql_databaseContext } from "./TSqlParser";
import { Alter_authorization_for_azure_dwContext } from "./TSqlParser";
import { Alter_authorization_for_parallel_dwContext } from "./TSqlParser";
import { Class_typeContext } from "./TSqlParser";
import { Class_type_for_sql_databaseContext } from "./TSqlParser";
import { Class_type_for_azure_dwContext } from "./TSqlParser";
import { Class_type_for_parallel_dwContext } from "./TSqlParser";
import { Drop_availability_groupContext } from "./TSqlParser";
import { Alter_availability_groupContext } from "./TSqlParser";
import { Alter_availability_group_startContext } from "./TSqlParser";
import { Alter_availability_group_optionsContext } from "./TSqlParser";
import { Create_or_alter_broker_priorityContext } from "./TSqlParser";
import { Drop_broker_priorityContext } from "./TSqlParser";
import { Alter_certificateContext } from "./TSqlParser";
import { Alter_column_encryption_keyContext } from "./TSqlParser";
import { Create_column_encryption_keyContext } from "./TSqlParser";
import { Drop_certificateContext } from "./TSqlParser";
import { Drop_column_encryption_keyContext } from "./TSqlParser";
import { Drop_column_master_keyContext } from "./TSqlParser";
import { Drop_contractContext } from "./TSqlParser";
import { Drop_credentialContext } from "./TSqlParser";
import { Drop_cryptograhic_providerContext } from "./TSqlParser";
import { Drop_databaseContext } from "./TSqlParser";
import { Drop_database_audit_specificationContext } from "./TSqlParser";
import { Drop_database_scoped_credentialContext } from "./TSqlParser";
import { Drop_defaultContext } from "./TSqlParser";
import { Drop_endpointContext } from "./TSqlParser";
import { Drop_external_data_sourceContext } from "./TSqlParser";
import { Drop_external_file_formatContext } from "./TSqlParser";
import { Drop_external_libraryContext } from "./TSqlParser";
import { Drop_external_resource_poolContext } from "./TSqlParser";
import { Drop_external_tableContext } from "./TSqlParser";
import { Drop_event_notificationsContext } from "./TSqlParser";
import { Drop_event_sessionContext } from "./TSqlParser";
import { Drop_fulltext_catalogContext } from "./TSqlParser";
import { Drop_fulltext_indexContext } from "./TSqlParser";
import { Drop_fulltext_stoplistContext } from "./TSqlParser";
import { Drop_loginContext } from "./TSqlParser";
import { Drop_master_keyContext } from "./TSqlParser";
import { Drop_message_typeContext } from "./TSqlParser";
import { Drop_partition_functionContext } from "./TSqlParser";
import { Drop_partition_schemeContext } from "./TSqlParser";
import { Drop_queueContext } from "./TSqlParser";
import { Drop_remote_service_bindingContext } from "./TSqlParser";
import { Drop_resource_poolContext } from "./TSqlParser";
import { Drop_db_roleContext } from "./TSqlParser";
import { Drop_routeContext } from "./TSqlParser";
import { Drop_ruleContext } from "./TSqlParser";
import { Drop_schemaContext } from "./TSqlParser";
import { Drop_search_property_listContext } from "./TSqlParser";
import { Drop_security_policyContext } from "./TSqlParser";
import { Drop_sequenceContext } from "./TSqlParser";
import { Drop_server_auditContext } from "./TSqlParser";
import { Drop_server_audit_specificationContext } from "./TSqlParser";
import { Drop_server_roleContext } from "./TSqlParser";
import { Drop_serviceContext } from "./TSqlParser";
import { Drop_signatureContext } from "./TSqlParser";
import { Drop_statistics_name_azure_dw_and_pdwContext } from "./TSqlParser";
import { Drop_symmetric_keyContext } from "./TSqlParser";
import { Drop_synonymContext } from "./TSqlParser";
import { Drop_userContext } from "./TSqlParser";
import { Drop_workload_groupContext } from "./TSqlParser";
import { Drop_xml_schema_collectionContext } from "./TSqlParser";
import { Disable_triggerContext } from "./TSqlParser";
import { Enable_triggerContext } from "./TSqlParser";
import { Lock_tableContext } from "./TSqlParser";
import { Truncate_tableContext } from "./TSqlParser";
import { Create_column_master_keyContext } from "./TSqlParser";
import { Alter_credentialContext } from "./TSqlParser";
import { Create_credentialContext } from "./TSqlParser";
import { Alter_cryptographic_providerContext } from "./TSqlParser";
import { Create_cryptographic_providerContext } from "./TSqlParser";
import { Create_event_notificationContext } from "./TSqlParser";
import { Create_or_alter_event_sessionContext } from "./TSqlParser";
import { Event_session_predicate_expressionContext } from "./TSqlParser";
import { Event_session_predicate_factorContext } from "./TSqlParser";
import { Event_session_predicate_leafContext } from "./TSqlParser";
import { Alter_external_data_sourceContext } from "./TSqlParser";
import { Alter_external_libraryContext } from "./TSqlParser";
import { Create_external_libraryContext } from "./TSqlParser";
import { Alter_external_resource_poolContext } from "./TSqlParser";
import { Create_external_resource_poolContext } from "./TSqlParser";
import { Alter_fulltext_catalogContext } from "./TSqlParser";
import { Create_fulltext_catalogContext } from "./TSqlParser";
import { Alter_fulltext_stoplistContext } from "./TSqlParser";
import { Create_fulltext_stoplistContext } from "./TSqlParser";
import { Alter_login_sql_serverContext } from "./TSqlParser";
import { Create_login_sql_serverContext } from "./TSqlParser";
import { Alter_login_azure_sqlContext } from "./TSqlParser";
import { Create_login_azure_sqlContext } from "./TSqlParser";
import { Alter_login_azure_sql_dw_and_pdwContext } from "./TSqlParser";
import { Create_login_pdwContext } from "./TSqlParser";
import { Alter_master_key_sql_serverContext } from "./TSqlParser";
import { Create_master_key_sql_serverContext } from "./TSqlParser";
import { Alter_master_key_azure_sqlContext } from "./TSqlParser";
import { Create_master_key_azure_sqlContext } from "./TSqlParser";
import { Alter_message_typeContext } from "./TSqlParser";
import { Alter_partition_functionContext } from "./TSqlParser";
import { Alter_partition_schemeContext } from "./TSqlParser";
import { Alter_remote_service_bindingContext } from "./TSqlParser";
import { Create_remote_service_bindingContext } from "./TSqlParser";
import { Create_resource_poolContext } from "./TSqlParser";
import { Alter_resource_governorContext } from "./TSqlParser";
import { Alter_db_roleContext } from "./TSqlParser";
import { Create_db_roleContext } from "./TSqlParser";
import { Create_routeContext } from "./TSqlParser";
import { Create_ruleContext } from "./TSqlParser";
import { Alter_schema_sqlContext } from "./TSqlParser";
import { Create_schemaContext } from "./TSqlParser";
import { Create_schema_azure_sql_dw_and_pdwContext } from "./TSqlParser";
import { Alter_schema_azure_sql_dw_and_pdwContext } from "./TSqlParser";
import { Create_search_property_listContext } from "./TSqlParser";
import { Create_security_policyContext } from "./TSqlParser";
import { Alter_sequenceContext } from "./TSqlParser";
import { Create_sequenceContext } from "./TSqlParser";
import { Alter_server_auditContext } from "./TSqlParser";
import { Create_server_auditContext } from "./TSqlParser";
import { Alter_server_audit_specificationContext } from "./TSqlParser";
import { Create_server_audit_specificationContext } from "./TSqlParser";
import { Alter_server_configurationContext } from "./TSqlParser";
import { Alter_server_roleContext } from "./TSqlParser";
import { Create_server_roleContext } from "./TSqlParser";
import { Alter_server_role_pdwContext } from "./TSqlParser";
import { Alter_serviceContext } from "./TSqlParser";
import { Create_serviceContext } from "./TSqlParser";
import { Alter_service_master_keyContext } from "./TSqlParser";
import { Alter_symmetric_keyContext } from "./TSqlParser";
import { Create_symmetric_keyContext } from "./TSqlParser";
import { Create_synonymContext } from "./TSqlParser";
import { Alter_userContext } from "./TSqlParser";
import { Create_userContext } from "./TSqlParser";
import { Create_user_azure_sql_dwContext } from "./TSqlParser";
import { Alter_user_azure_sqlContext } from "./TSqlParser";
import { Alter_workload_groupContext } from "./TSqlParser";
import { Create_workload_groupContext } from "./TSqlParser";
import { Create_xml_schema_collectionContext } from "./TSqlParser";
import { Create_queueContext } from "./TSqlParser";
import { Queue_settingsContext } from "./TSqlParser";
import { Alter_queueContext } from "./TSqlParser";
import { Queue_actionContext } from "./TSqlParser";
import { Queue_rebuild_optionsContext } from "./TSqlParser";
import { Create_contractContext } from "./TSqlParser";
import { Conversation_statementContext } from "./TSqlParser";
import { Message_statementContext } from "./TSqlParser";
import { Merge_statementContext } from "./TSqlParser";
import { Merge_matchedContext } from "./TSqlParser";
import { Merge_not_matchedContext } from "./TSqlParser";
import { Delete_statementContext } from "./TSqlParser";
import { Delete_statement_fromContext } from "./TSqlParser";
import { Insert_statementContext } from "./TSqlParser";
import { Insert_statement_valueContext } from "./TSqlParser";
import { Receive_statementContext } from "./TSqlParser";
import { Select_statementContext } from "./TSqlParser";
import { TimeContext } from "./TSqlParser";
import { Update_statementContext } from "./TSqlParser";
import { Output_clauseContext } from "./TSqlParser";
import { Output_dml_list_elemContext } from "./TSqlParser";
import { Output_column_nameContext } from "./TSqlParser";
import { Create_databaseContext } from "./TSqlParser";
import { Create_indexContext } from "./TSqlParser";
import { Create_or_alter_procedureContext } from "./TSqlParser";
import { Create_or_alter_triggerContext } from "./TSqlParser";
import { Create_or_alter_dml_triggerContext } from "./TSqlParser";
import { Dml_trigger_optionContext } from "./TSqlParser";
import { Dml_trigger_operationContext } from "./TSqlParser";
import { Create_or_alter_ddl_triggerContext } from "./TSqlParser";
import { Ddl_trigger_operationContext } from "./TSqlParser";
import { Create_or_alter_functionContext } from "./TSqlParser";
import { Func_body_returns_selectContext } from "./TSqlParser";
import { Func_body_returns_tableContext } from "./TSqlParser";
import { Func_body_returns_scalarContext } from "./TSqlParser";
import { Procedure_paramContext } from "./TSqlParser";
import { Procedure_optionContext } from "./TSqlParser";
import { Function_optionContext } from "./TSqlParser";
import { Create_statisticsContext } from "./TSqlParser";
import { Update_statisticsContext } from "./TSqlParser";
import { Create_tableContext } from "./TSqlParser";
import { Table_optionsContext } from "./TSqlParser";
import { Create_viewContext } from "./TSqlParser";
import { View_attributeContext } from "./TSqlParser";
import { Alter_tableContext } from "./TSqlParser";
import { Alter_databaseContext } from "./TSqlParser";
import { Database_optionspecContext } from "./TSqlParser";
import { Auto_optionContext } from "./TSqlParser";
import { Change_tracking_optionContext } from "./TSqlParser";
import { Change_tracking_option_listContext } from "./TSqlParser";
import { Containment_optionContext } from "./TSqlParser";
import { Cursor_optionContext } from "./TSqlParser";
import { Alter_endpointContext } from "./TSqlParser";
import { Database_mirroring_optionContext } from "./TSqlParser";
import { Mirroring_set_optionContext } from "./TSqlParser";
import { Mirroring_partnerContext } from "./TSqlParser";
import { Mirroring_witnessContext } from "./TSqlParser";
import { Witness_partner_equalContext } from "./TSqlParser";
import { Partner_optionContext } from "./TSqlParser";
import { Witness_optionContext } from "./TSqlParser";
import { Witness_serverContext } from "./TSqlParser";
import { Partner_serverContext } from "./TSqlParser";
import { Mirroring_host_port_seperatorContext } from "./TSqlParser";
import { Partner_server_tcp_prefixContext } from "./TSqlParser";
import { Port_numberContext } from "./TSqlParser";
import { HostContext } from "./TSqlParser";
import { Date_correlation_optimization_optionContext } from "./TSqlParser";
import { Db_encryption_optionContext } from "./TSqlParser";
import { Db_state_optionContext } from "./TSqlParser";
import { Db_update_optionContext } from "./TSqlParser";
import { Db_user_access_optionContext } from "./TSqlParser";
import { Delayed_durability_optionContext } from "./TSqlParser";
import { External_access_optionContext } from "./TSqlParser";
import { Hadr_optionsContext } from "./TSqlParser";
import { Mixed_page_allocation_optionContext } from "./TSqlParser";
import { Parameterization_optionContext } from "./TSqlParser";
import { Recovery_optionContext } from "./TSqlParser";
import { Service_broker_optionContext } from "./TSqlParser";
import { Snapshot_optionContext } from "./TSqlParser";
import { Sql_optionContext } from "./TSqlParser";
import { Target_recovery_time_optionContext } from "./TSqlParser";
import { TerminationContext } from "./TSqlParser";
import { Drop_indexContext } from "./TSqlParser";
import { Drop_relational_or_xml_or_spatial_indexContext } from "./TSqlParser";
import { Drop_backward_compatible_indexContext } from "./TSqlParser";
import { Drop_procedureContext } from "./TSqlParser";
import { Drop_triggerContext } from "./TSqlParser";
import { Drop_dml_triggerContext } from "./TSqlParser";
import { Drop_ddl_triggerContext } from "./TSqlParser";
import { Drop_functionContext } from "./TSqlParser";
import { Drop_statisticsContext } from "./TSqlParser";
import { Drop_tableContext } from "./TSqlParser";
import { Drop_viewContext } from "./TSqlParser";
import { Create_typeContext } from "./TSqlParser";
import { Drop_typeContext } from "./TSqlParser";
import { Rowset_function_limitedContext } from "./TSqlParser";
import { OpenqueryContext } from "./TSqlParser";
import { OpendatasourceContext } from "./TSqlParser";
import { Declare_statementContext } from "./TSqlParser";
import { Cursor_statementContext } from "./TSqlParser";
import { Backup_databaseContext } from "./TSqlParser";
import { Backup_logContext } from "./TSqlParser";
import { Backup_certificateContext } from "./TSqlParser";
import { Backup_master_keyContext } from "./TSqlParser";
import { Backup_service_master_keyContext } from "./TSqlParser";
import { Execute_statementContext } from "./TSqlParser";
import { Execute_bodyContext } from "./TSqlParser";
import { Execute_statement_argContext } from "./TSqlParser";
import { Execute_var_stringContext } from "./TSqlParser";
import { Security_statementContext } from "./TSqlParser";
import { Create_certificateContext } from "./TSqlParser";
import { Existing_keysContext } from "./TSqlParser";
import { Private_key_optionsContext } from "./TSqlParser";
import { Generate_new_keysContext } from "./TSqlParser";
import { Date_optionsContext } from "./TSqlParser";
import { Open_keyContext } from "./TSqlParser";
import { Close_keyContext } from "./TSqlParser";
import { Create_keyContext } from "./TSqlParser";
import { Key_optionsContext } from "./TSqlParser";
import { AlgorithmContext } from "./TSqlParser";
import { Encryption_mechanismContext } from "./TSqlParser";
import { Decryption_mechanismContext } from "./TSqlParser";
import { Grant_permissionContext } from "./TSqlParser";
import { Set_statementContext } from "./TSqlParser";
import { Transaction_statementContext } from "./TSqlParser";
import { Go_statementContext } from "./TSqlParser";
import { Use_statementContext } from "./TSqlParser";
import { Setuser_statementContext } from "./TSqlParser";
import { Dbcc_clauseContext } from "./TSqlParser";
import { Dbcc_optionsContext } from "./TSqlParser";
import { Execute_clauseContext } from "./TSqlParser";
import { Declare_localContext } from "./TSqlParser";
import { Table_type_definitionContext } from "./TSqlParser";
import { Xml_type_definitionContext } from "./TSqlParser";
import { Xml_schema_collectionContext } from "./TSqlParser";
import { Column_def_table_constraintsContext } from "./TSqlParser";
import { Column_def_table_constraintContext } from "./TSqlParser";
import { Column_definitionContext } from "./TSqlParser";
import { Materialized_column_definitionContext } from "./TSqlParser";
import { Column_constraintContext } from "./TSqlParser";
import { Table_constraintContext } from "./TSqlParser";
import { On_deleteContext } from "./TSqlParser";
import { On_updateContext } from "./TSqlParser";
import { Index_optionsContext } from "./TSqlParser";
import { Index_optionContext } from "./TSqlParser";
import { Declare_cursorContext } from "./TSqlParser";
import { Declare_set_cursor_commonContext } from "./TSqlParser";
import { Declare_set_cursor_common_partialContext } from "./TSqlParser";
import { Fetch_cursorContext } from "./TSqlParser";
import { Set_specialContext } from "./TSqlParser";
import { Constant_LOCAL_IDContext } from "./TSqlParser";
import { ExpressionContext } from "./TSqlParser";
import { Primitive_expressionContext } from "./TSqlParser";
import { Case_expressionContext } from "./TSqlParser";
import { Unary_operator_expressionContext } from "./TSqlParser";
import { Bracket_expressionContext } from "./TSqlParser";
import { Constant_expressionContext } from "./TSqlParser";
import { SubqueryContext } from "./TSqlParser";
import { With_expressionContext } from "./TSqlParser";
import { Common_table_expressionContext } from "./TSqlParser";
import { Update_elemContext } from "./TSqlParser";
import { Search_condition_listContext } from "./TSqlParser";
import { Search_conditionContext } from "./TSqlParser";
import { Search_condition_andContext } from "./TSqlParser";
import { Search_condition_notContext } from "./TSqlParser";
import { PredicateContext } from "./TSqlParser";
import { Query_expressionContext } from "./TSqlParser";
import { Sql_unionContext } from "./TSqlParser";
import { Query_specificationContext } from "./TSqlParser";
import { Top_clauseContext } from "./TSqlParser";
import { Top_percentContext } from "./TSqlParser";
import { Top_countContext } from "./TSqlParser";
import { Order_by_clauseContext } from "./TSqlParser";
import { For_clauseContext } from "./TSqlParser";
import { Xml_common_directivesContext } from "./TSqlParser";
import { Order_by_expressionContext } from "./TSqlParser";
import { Group_by_itemContext } from "./TSqlParser";
import { Option_clauseContext } from "./TSqlParser";
import { OptionContext } from "./TSqlParser";
import { Optimize_for_argContext } from "./TSqlParser";
import { Select_listContext } from "./TSqlParser";
import { Udt_method_argumentsContext } from "./TSqlParser";
import { AsteriskContext } from "./TSqlParser";
import { Column_elemContext } from "./TSqlParser";
import { Udt_elemContext } from "./TSqlParser";
import { Expression_elemContext } from "./TSqlParser";
import { Select_list_elemContext } from "./TSqlParser";
import { Table_sourcesContext } from "./TSqlParser";
import { Table_sourceContext } from "./TSqlParser";
import { Table_source_item_joinedContext } from "./TSqlParser";
import { Table_source_itemContext } from "./TSqlParser";
import { Open_xmlContext } from "./TSqlParser";
import { Schema_declarationContext } from "./TSqlParser";
import { Column_declarationContext } from "./TSqlParser";
import { Change_tableContext } from "./TSqlParser";
import { Join_partContext } from "./TSqlParser";
import { Pivot_clauseContext } from "./TSqlParser";
import { Unpivot_clauseContext } from "./TSqlParser";
import { Full_column_name_listContext } from "./TSqlParser";
import { Table_name_with_hintContext } from "./TSqlParser";
import { Rowset_functionContext } from "./TSqlParser";
import { Bulk_optionContext } from "./TSqlParser";
import { Derived_tableContext } from "./TSqlParser";
import { Function_callContext } from "./TSqlParser";
import { Xml_data_type_methodsContext } from "./TSqlParser";
import { Value_methodContext } from "./TSqlParser";
import { Query_methodContext } from "./TSqlParser";
import { Exist_methodContext } from "./TSqlParser";
import { Modify_methodContext } from "./TSqlParser";
import { Nodes_methodContext } from "./TSqlParser";
import { Switch_sectionContext } from "./TSqlParser";
import { Switch_search_condition_sectionContext } from "./TSqlParser";
import { As_column_aliasContext } from "./TSqlParser";
import { As_table_aliasContext } from "./TSqlParser";
import { Table_aliasContext } from "./TSqlParser";
import { With_table_hintsContext } from "./TSqlParser";
import { Insert_with_table_hintsContext } from "./TSqlParser";
import { Table_hintContext } from "./TSqlParser";
import { Index_valueContext } from "./TSqlParser";
import { Column_alias_listContext } from "./TSqlParser";
import { Column_aliasContext } from "./TSqlParser";
import { Table_value_constructorContext } from "./TSqlParser";
import { Expression_listContext } from "./TSqlParser";
import { Ranking_windowed_functionContext } from "./TSqlParser";
import { Aggregate_windowed_functionContext } from "./TSqlParser";
import { Analytic_windowed_functionContext } from "./TSqlParser";
import { All_distinct_expressionContext } from "./TSqlParser";
import { Over_clauseContext } from "./TSqlParser";
import { Row_or_range_clauseContext } from "./TSqlParser";
import { Window_frame_extentContext } from "./TSqlParser";
import { Window_frame_boundContext } from "./TSqlParser";
import { Window_frame_precedingContext } from "./TSqlParser";
import { Window_frame_followingContext } from "./TSqlParser";
import { Create_database_optionContext } from "./TSqlParser";
import { Database_filestream_optionContext } from "./TSqlParser";
import { Database_file_specContext } from "./TSqlParser";
import { File_groupContext } from "./TSqlParser";
import { File_specContext } from "./TSqlParser";
import { Entity_nameContext } from "./TSqlParser";
import { Entity_name_for_azure_dwContext } from "./TSqlParser";
import { Entity_name_for_parallel_dwContext } from "./TSqlParser";
import { Full_table_nameContext } from "./TSqlParser";
import { Table_nameContext } from "./TSqlParser";
import { Simple_nameContext } from "./TSqlParser";
import { Func_proc_name_schemaContext } from "./TSqlParser";
import { Func_proc_name_database_schemaContext } from "./TSqlParser";
import { Func_proc_name_server_database_schemaContext } from "./TSqlParser";
import { Ddl_objectContext } from "./TSqlParser";
import { Full_column_nameContext } from "./TSqlParser";
import { Column_name_list_with_orderContext } from "./TSqlParser";
import { Column_name_listContext } from "./TSqlParser";
import { Cursor_nameContext } from "./TSqlParser";
import { On_offContext } from "./TSqlParser";
import { ClusteredContext } from "./TSqlParser";
import { Null_notnullContext } from "./TSqlParser";
import { Null_or_defaultContext } from "./TSqlParser";
import { Scalar_function_nameContext } from "./TSqlParser";
import { Begin_conversation_timerContext } from "./TSqlParser";
import { Begin_conversation_dialogContext } from "./TSqlParser";
import { Contract_nameContext } from "./TSqlParser";
import { Service_nameContext } from "./TSqlParser";
import { End_conversationContext } from "./TSqlParser";
import { Waitfor_conversationContext } from "./TSqlParser";
import { Get_conversationContext } from "./TSqlParser";
import { Queue_idContext } from "./TSqlParser";
import { Send_conversationContext } from "./TSqlParser";
import { Data_typeContext } from "./TSqlParser";
import { Default_valueContext } from "./TSqlParser";
import { ConstantContext } from "./TSqlParser";
import { SignContext } from "./TSqlParser";
import { IdContext } from "./TSqlParser";
import { Simple_idContext } from "./TSqlParser";
import { Comparison_operatorContext } from "./TSqlParser";
import { Assignment_operatorContext } from "./TSqlParser";
import { File_sizeContext } from "./TSqlParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TSqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TSqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `RANKING_WINDOWED_FUNC`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRANKING_WINDOWED_FUNC?: (ctx: RANKING_WINDOWED_FUNCContext) => Result;

	/**
	 * Visit a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => Result;

	/**
	 * Visit a parse tree produced by the `ANALYTIC_WINDOWED_FUNC`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitANALYTIC_WINDOWED_FUNC?: (ctx: ANALYTIC_WINDOWED_FUNCContext) => Result;

	/**
	 * Visit a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => Result;

	/**
	 * Visit a parse tree produced by the `BINARY_CHECKSUM`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBINARY_CHECKSUM?: (ctx: BINARY_CHECKSUMContext) => Result;

	/**
	 * Visit a parse tree produced by the `CAST`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCAST?: (ctx: CASTContext) => Result;

	/**
	 * Visit a parse tree produced by the `CONVERT`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCONVERT?: (ctx: CONVERTContext) => Result;

	/**
	 * Visit a parse tree produced by the `CHECKSUM`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCHECKSUM?: (ctx: CHECKSUMContext) => Result;

	/**
	 * Visit a parse tree produced by the `COALESCE`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCOALESCE?: (ctx: COALESCEContext) => Result;

	/**
	 * Visit a parse tree produced by the `CURRENT_TIMESTAMP`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCURRENT_TIMESTAMP?: (ctx: CURRENT_TIMESTAMPContext) => Result;

	/**
	 * Visit a parse tree produced by the `CURRENT_USER`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCURRENT_USER?: (ctx: CURRENT_USERContext) => Result;

	/**
	 * Visit a parse tree produced by the `DATEADD`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDATEADD?: (ctx: DATEADDContext) => Result;

	/**
	 * Visit a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDATEDIFF?: (ctx: DATEDIFFContext) => Result;

	/**
	 * Visit a parse tree produced by the `DATENAME`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDATENAME?: (ctx: DATENAMEContext) => Result;

	/**
	 * Visit a parse tree produced by the `DATEPART`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDATEPART?: (ctx: DATEPARTContext) => Result;

	/**
	 * Visit a parse tree produced by the `GETDATE`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGETDATE?: (ctx: GETDATEContext) => Result;

	/**
	 * Visit a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGETUTCDATE?: (ctx: GETUTCDATEContext) => Result;

	/**
	 * Visit a parse tree produced by the `IDENTITY`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIDENTITY?: (ctx: IDENTITYContext) => Result;

	/**
	 * Visit a parse tree produced by the `MIN_ACTIVE_ROWVERSION`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMIN_ACTIVE_ROWVERSION?: (ctx: MIN_ACTIVE_ROWVERSIONContext) => Result;

	/**
	 * Visit a parse tree produced by the `NULLIF`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNULLIF?: (ctx: NULLIFContext) => Result;

	/**
	 * Visit a parse tree produced by the `STUFF`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSTUFF?: (ctx: STUFFContext) => Result;

	/**
	 * Visit a parse tree produced by the `SESSION_USER`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSESSION_USER?: (ctx: SESSION_USERContext) => Result;

	/**
	 * Visit a parse tree produced by the `SYSTEM_USER`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSYSTEM_USER?: (ctx: SYSTEM_USERContext) => Result;

	/**
	 * Visit a parse tree produced by the `ISNULL`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitISNULL?: (ctx: ISNULLContext) => Result;

	/**
	 * Visit a parse tree produced by the `XML_DATA_TYPE_FUNC`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXML_DATA_TYPE_FUNC?: (ctx: XML_DATA_TYPE_FUNCContext) => Result;

	/**
	 * Visit a parse tree produced by the `IFF`
	 * labeled alternative in `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIFF?: (ctx: IFFContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.tsql_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTsql_file?: (ctx: Tsql_fileContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.batch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBatch?: (ctx: BatchContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_clauses?: (ctx: Sql_clausesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.sql_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_clause?: (ctx: Sql_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.dml_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDml_clause?: (ctx: Dml_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.ddl_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdl_clause?: (ctx: Ddl_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_statement?: (ctx: Backup_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.cfl_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCfl_statement?: (ctx: Cfl_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.block_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock_statement?: (ctx: Block_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.break_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_statement?: (ctx: Break_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.continue_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_statement?: (ctx: Continue_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.goto_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGoto_statement?: (ctx: Goto_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.if_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_statement?: (ctx: If_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.throw_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_statement?: (ctx: Throw_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.throw_error_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_error_number?: (ctx: Throw_error_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.throw_message`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_message?: (ctx: Throw_messageContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.throw_state`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrow_state?: (ctx: Throw_stateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.try_catch_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_catch_statement?: (ctx: Try_catch_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.waitfor_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaitfor_statement?: (ctx: Waitfor_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.while_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_statement?: (ctx: While_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.print_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_statement?: (ctx: Print_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.raiseerror_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaiseerror_statement?: (ctx: Raiseerror_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.empty_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpty_statement?: (ctx: Empty_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.another_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnother_statement?: (ctx: Another_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_application_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_application_role?: (ctx: Alter_application_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_application_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_application_role?: (ctx: Create_application_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_aggregate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_aggregate?: (ctx: Drop_aggregateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_application_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_application_role?: (ctx: Drop_application_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly?: (ctx: Alter_assemblyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_start?: (ctx: Alter_assembly_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_clause?: (ctx: Alter_assembly_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_from_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_from_clause?: (ctx: Alter_assembly_from_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_from_clause_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_from_clause_start?: (ctx: Alter_assembly_from_clause_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_drop_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_drop_clause?: (ctx: Alter_assembly_drop_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_drop_multiple_files`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_drop_multiple_files?: (ctx: Alter_assembly_drop_multiple_filesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_drop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_drop?: (ctx: Alter_assembly_dropContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_add_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_add_clause?: (ctx: Alter_assembly_add_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_asssembly_add_clause_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_asssembly_add_clause_start?: (ctx: Alter_asssembly_add_clause_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_client_file_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_client_file_clause?: (ctx: Alter_assembly_client_file_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_file_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_file_name?: (ctx: Alter_assembly_file_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_file_bits`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_file_bits?: (ctx: Alter_assembly_file_bitsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_as`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_as?: (ctx: Alter_assembly_asContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_with_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_with_clause?: (ctx: Alter_assembly_with_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_assembly_with`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_assembly_with?: (ctx: Alter_assembly_withContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.client_assembly_specifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClient_assembly_specifier?: (ctx: Client_assembly_specifierContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.assembly_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssembly_option?: (ctx: Assembly_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.network_file_share`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNetwork_file_share?: (ctx: Network_file_shareContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.network_computer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNetwork_computer?: (ctx: Network_computerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.network_file_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNetwork_file_start?: (ctx: Network_file_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.file_path`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_path?: (ctx: File_pathContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.file_directory_path_separator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_directory_path_separator?: (ctx: File_directory_path_separatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.local_file`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_file?: (ctx: Local_fileContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.local_drive`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocal_drive?: (ctx: Local_driveContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.multiple_local_files`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiple_local_files?: (ctx: Multiple_local_filesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.multiple_local_file_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiple_local_file_start?: (ctx: Multiple_local_file_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_assembly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_assembly?: (ctx: Create_assemblyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_assembly`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_assembly?: (ctx: Drop_assemblyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_asymmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_asymmetric_key?: (ctx: Alter_asymmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_asymmetric_key_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_asymmetric_key_start?: (ctx: Alter_asymmetric_key_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.asymmetric_key_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsymmetric_key_option?: (ctx: Asymmetric_key_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.asymmetric_key_option_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsymmetric_key_option_start?: (ctx: Asymmetric_key_option_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.asymmetric_key_password_change_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsymmetric_key_password_change_option?: (ctx: Asymmetric_key_password_change_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_asymmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_asymmetric_key?: (ctx: Create_asymmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_asymmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_asymmetric_key?: (ctx: Drop_asymmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_authorization`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_authorization?: (ctx: Alter_authorizationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.authorization_grantee`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuthorization_grantee?: (ctx: Authorization_granteeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.entity_to`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_to?: (ctx: Entity_toContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.colon_colon`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColon_colon?: (ctx: Colon_colonContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_authorization_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_authorization_start?: (ctx: Alter_authorization_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_authorization_for_sql_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_authorization_for_sql_database?: (ctx: Alter_authorization_for_sql_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_authorization_for_azure_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_authorization_for_azure_dw?: (ctx: Alter_authorization_for_azure_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_authorization_for_parallel_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_authorization_for_parallel_dw?: (ctx: Alter_authorization_for_parallel_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.class_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type?: (ctx: Class_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.class_type_for_sql_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type_for_sql_database?: (ctx: Class_type_for_sql_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.class_type_for_azure_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type_for_azure_dw?: (ctx: Class_type_for_azure_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.class_type_for_parallel_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClass_type_for_parallel_dw?: (ctx: Class_type_for_parallel_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_availability_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_availability_group?: (ctx: Drop_availability_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_availability_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_availability_group?: (ctx: Alter_availability_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_availability_group_start`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_availability_group_start?: (ctx: Alter_availability_group_startContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_availability_group_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_availability_group_options?: (ctx: Alter_availability_group_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_broker_priority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_broker_priority?: (ctx: Create_or_alter_broker_priorityContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_broker_priority`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_broker_priority?: (ctx: Drop_broker_priorityContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_certificate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_certificate?: (ctx: Alter_certificateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_column_encryption_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_column_encryption_key?: (ctx: Alter_column_encryption_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_column_encryption_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_column_encryption_key?: (ctx: Create_column_encryption_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_certificate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_certificate?: (ctx: Drop_certificateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_column_encryption_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_column_encryption_key?: (ctx: Drop_column_encryption_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_column_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_column_master_key?: (ctx: Drop_column_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_contract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_contract?: (ctx: Drop_contractContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_credential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_credential?: (ctx: Drop_credentialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_cryptograhic_provider`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_cryptograhic_provider?: (ctx: Drop_cryptograhic_providerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_database?: (ctx: Drop_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_database_audit_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_database_audit_specification?: (ctx: Drop_database_audit_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_database_scoped_credential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_database_scoped_credential?: (ctx: Drop_database_scoped_credentialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_default?: (ctx: Drop_defaultContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_endpoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_endpoint?: (ctx: Drop_endpointContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_external_data_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_external_data_source?: (ctx: Drop_external_data_sourceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_external_file_format`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_external_file_format?: (ctx: Drop_external_file_formatContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_external_library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_external_library?: (ctx: Drop_external_libraryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_external_resource_pool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_external_resource_pool?: (ctx: Drop_external_resource_poolContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_external_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_external_table?: (ctx: Drop_external_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_event_notifications`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_event_notifications?: (ctx: Drop_event_notificationsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_event_session`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_event_session?: (ctx: Drop_event_sessionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_fulltext_catalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_fulltext_catalog?: (ctx: Drop_fulltext_catalogContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_fulltext_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_fulltext_index?: (ctx: Drop_fulltext_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_fulltext_stoplist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_fulltext_stoplist?: (ctx: Drop_fulltext_stoplistContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_login`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_login?: (ctx: Drop_loginContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_master_key?: (ctx: Drop_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_message_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_message_type?: (ctx: Drop_message_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_partition_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_partition_function?: (ctx: Drop_partition_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_partition_scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_partition_scheme?: (ctx: Drop_partition_schemeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_queue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_queue?: (ctx: Drop_queueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_remote_service_binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_remote_service_binding?: (ctx: Drop_remote_service_bindingContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_resource_pool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_resource_pool?: (ctx: Drop_resource_poolContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_db_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_db_role?: (ctx: Drop_db_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_route`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_route?: (ctx: Drop_routeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_rule?: (ctx: Drop_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_schema?: (ctx: Drop_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_search_property_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_search_property_list?: (ctx: Drop_search_property_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_security_policy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_security_policy?: (ctx: Drop_security_policyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_sequence?: (ctx: Drop_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_server_audit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_server_audit?: (ctx: Drop_server_auditContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_server_audit_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_server_audit_specification?: (ctx: Drop_server_audit_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_server_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_server_role?: (ctx: Drop_server_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_service?: (ctx: Drop_serviceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_signature`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_signature?: (ctx: Drop_signatureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_statistics_name_azure_dw_and_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_statistics_name_azure_dw_and_pdw?: (ctx: Drop_statistics_name_azure_dw_and_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_symmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_symmetric_key?: (ctx: Drop_symmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_synonym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_synonym?: (ctx: Drop_synonymContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_user?: (ctx: Drop_userContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_workload_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_workload_group?: (ctx: Drop_workload_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_xml_schema_collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_xml_schema_collection?: (ctx: Drop_xml_schema_collectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.disable_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisable_trigger?: (ctx: Disable_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.enable_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnable_trigger?: (ctx: Enable_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.lock_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLock_table?: (ctx: Lock_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.truncate_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTruncate_table?: (ctx: Truncate_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_column_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_column_master_key?: (ctx: Create_column_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_credential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_credential?: (ctx: Alter_credentialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_credential`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_credential?: (ctx: Create_credentialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_cryptographic_provider`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_cryptographic_provider?: (ctx: Alter_cryptographic_providerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_cryptographic_provider`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_cryptographic_provider?: (ctx: Create_cryptographic_providerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_event_notification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_event_notification?: (ctx: Create_event_notificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_event_session`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_event_session?: (ctx: Create_or_alter_event_sessionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.event_session_predicate_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_session_predicate_expression?: (ctx: Event_session_predicate_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.event_session_predicate_factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_session_predicate_factor?: (ctx: Event_session_predicate_factorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.event_session_predicate_leaf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEvent_session_predicate_leaf?: (ctx: Event_session_predicate_leafContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_external_data_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_external_data_source?: (ctx: Alter_external_data_sourceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_external_library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_external_library?: (ctx: Alter_external_libraryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_external_library`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_external_library?: (ctx: Create_external_libraryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_external_resource_pool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_external_resource_pool?: (ctx: Alter_external_resource_poolContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_external_resource_pool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_external_resource_pool?: (ctx: Create_external_resource_poolContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_fulltext_catalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_fulltext_catalog?: (ctx: Alter_fulltext_catalogContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_fulltext_catalog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_fulltext_catalog?: (ctx: Create_fulltext_catalogContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_fulltext_stoplist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_fulltext_stoplist?: (ctx: Alter_fulltext_stoplistContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_fulltext_stoplist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_fulltext_stoplist?: (ctx: Create_fulltext_stoplistContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_login_sql_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_login_sql_server?: (ctx: Alter_login_sql_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_login_sql_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_login_sql_server?: (ctx: Create_login_sql_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_login_azure_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_login_azure_sql?: (ctx: Alter_login_azure_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_login_azure_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_login_azure_sql?: (ctx: Create_login_azure_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_login_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_login_azure_sql_dw_and_pdw?: (ctx: Alter_login_azure_sql_dw_and_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_login_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_login_pdw?: (ctx: Create_login_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_master_key_sql_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_master_key_sql_server?: (ctx: Alter_master_key_sql_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_master_key_sql_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_master_key_sql_server?: (ctx: Create_master_key_sql_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_master_key_azure_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_master_key_azure_sql?: (ctx: Alter_master_key_azure_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_master_key_azure_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_master_key_azure_sql?: (ctx: Create_master_key_azure_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_message_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_message_type?: (ctx: Alter_message_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_partition_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_partition_function?: (ctx: Alter_partition_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_partition_scheme`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_partition_scheme?: (ctx: Alter_partition_schemeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_remote_service_binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_remote_service_binding?: (ctx: Alter_remote_service_bindingContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_remote_service_binding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_remote_service_binding?: (ctx: Create_remote_service_bindingContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_resource_pool`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_resource_pool?: (ctx: Create_resource_poolContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_resource_governor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_resource_governor?: (ctx: Alter_resource_governorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_db_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_db_role?: (ctx: Alter_db_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_db_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_db_role?: (ctx: Create_db_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_route`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_route?: (ctx: Create_routeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_rule`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_rule?: (ctx: Create_ruleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_schema_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_schema_sql?: (ctx: Alter_schema_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_schema?: (ctx: Create_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_schema_azure_sql_dw_and_pdw?: (ctx: Create_schema_azure_sql_dw_and_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_schema_azure_sql_dw_and_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_schema_azure_sql_dw_and_pdw?: (ctx: Alter_schema_azure_sql_dw_and_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_search_property_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_search_property_list?: (ctx: Create_search_property_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_security_policy`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_security_policy?: (ctx: Create_security_policyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_sequence?: (ctx: Alter_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_sequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_sequence?: (ctx: Create_sequenceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_server_audit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_server_audit?: (ctx: Alter_server_auditContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_server_audit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_server_audit?: (ctx: Create_server_auditContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_server_audit_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_server_audit_specification?: (ctx: Alter_server_audit_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_server_audit_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_server_audit_specification?: (ctx: Create_server_audit_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_server_configuration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_server_configuration?: (ctx: Alter_server_configurationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_server_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_server_role?: (ctx: Alter_server_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_server_role`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_server_role?: (ctx: Create_server_roleContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_server_role_pdw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_server_role_pdw?: (ctx: Alter_server_role_pdwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_service?: (ctx: Alter_serviceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_service`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_service?: (ctx: Create_serviceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_service_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_service_master_key?: (ctx: Alter_service_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_symmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_symmetric_key?: (ctx: Alter_symmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_symmetric_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_symmetric_key?: (ctx: Create_symmetric_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_synonym`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_synonym?: (ctx: Create_synonymContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_user?: (ctx: Alter_userContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_user`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_user?: (ctx: Create_userContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_user_azure_sql_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_user_azure_sql_dw?: (ctx: Create_user_azure_sql_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_user_azure_sql`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_user_azure_sql?: (ctx: Alter_user_azure_sqlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_workload_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_workload_group?: (ctx: Alter_workload_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_workload_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_workload_group?: (ctx: Create_workload_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_xml_schema_collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_xml_schema_collection?: (ctx: Create_xml_schema_collectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_queue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_queue?: (ctx: Create_queueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.queue_settings`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueue_settings?: (ctx: Queue_settingsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_queue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_queue?: (ctx: Alter_queueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.queue_action`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueue_action?: (ctx: Queue_actionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.queue_rebuild_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueue_rebuild_options?: (ctx: Queue_rebuild_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_contract`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_contract?: (ctx: Create_contractContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.conversation_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConversation_statement?: (ctx: Conversation_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.message_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMessage_statement?: (ctx: Message_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.merge_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_statement?: (ctx: Merge_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.merge_matched`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_matched?: (ctx: Merge_matchedContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.merge_not_matched`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMerge_not_matched?: (ctx: Merge_not_matchedContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.delete_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_statement?: (ctx: Delete_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.delete_statement_from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelete_statement_from?: (ctx: Delete_statement_fromContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.insert_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_statement?: (ctx: Insert_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.insert_statement_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_statement_value?: (ctx: Insert_statement_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.receive_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceive_statement?: (ctx: Receive_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.select_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_statement?: (ctx: Select_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.time`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTime?: (ctx: TimeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.update_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_statement?: (ctx: Update_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.output_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_clause?: (ctx: Output_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.output_dml_list_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_dml_list_elem?: (ctx: Output_dml_list_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.output_column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOutput_column_name?: (ctx: Output_column_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_database?: (ctx: Create_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_index?: (ctx: Create_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_procedure?: (ctx: Create_or_alter_procedureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_trigger?: (ctx: Create_or_alter_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_dml_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_dml_trigger?: (ctx: Create_or_alter_dml_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.dml_trigger_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDml_trigger_option?: (ctx: Dml_trigger_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.dml_trigger_operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDml_trigger_operation?: (ctx: Dml_trigger_operationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_ddl_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_ddl_trigger?: (ctx: Create_or_alter_ddl_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.ddl_trigger_operation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdl_trigger_operation?: (ctx: Ddl_trigger_operationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_or_alter_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_or_alter_function?: (ctx: Create_or_alter_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_body_returns_select`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body_returns_select?: (ctx: Func_body_returns_selectContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_body_returns_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body_returns_table?: (ctx: Func_body_returns_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_body_returns_scalar`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_body_returns_scalar?: (ctx: Func_body_returns_scalarContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.procedure_param`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_param?: (ctx: Procedure_paramContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.procedure_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcedure_option?: (ctx: Procedure_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.function_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_option?: (ctx: Function_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_statistics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_statistics?: (ctx: Create_statisticsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.update_statistics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_statistics?: (ctx: Update_statisticsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_table?: (ctx: Create_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_options?: (ctx: Table_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_view`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_view?: (ctx: Create_viewContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.view_attribute`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitView_attribute?: (ctx: View_attributeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_table?: (ctx: Alter_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_database?: (ctx: Alter_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.database_optionspec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabase_optionspec?: (ctx: Database_optionspecContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.auto_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAuto_option?: (ctx: Auto_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.change_tracking_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChange_tracking_option?: (ctx: Change_tracking_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.change_tracking_option_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChange_tracking_option_list?: (ctx: Change_tracking_option_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.containment_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContainment_option?: (ctx: Containment_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.cursor_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursor_option?: (ctx: Cursor_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.alter_endpoint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlter_endpoint?: (ctx: Alter_endpointContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.database_mirroring_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabase_mirroring_option?: (ctx: Database_mirroring_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.mirroring_set_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMirroring_set_option?: (ctx: Mirroring_set_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.mirroring_partner`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMirroring_partner?: (ctx: Mirroring_partnerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.mirroring_witness`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMirroring_witness?: (ctx: Mirroring_witnessContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.witness_partner_equal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWitness_partner_equal?: (ctx: Witness_partner_equalContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.partner_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartner_option?: (ctx: Partner_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.witness_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWitness_option?: (ctx: Witness_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.witness_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWitness_server?: (ctx: Witness_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.partner_server`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartner_server?: (ctx: Partner_serverContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.mirroring_host_port_seperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMirroring_host_port_seperator?: (ctx: Mirroring_host_port_seperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.partner_server_tcp_prefix`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPartner_server_tcp_prefix?: (ctx: Partner_server_tcp_prefixContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.port_number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPort_number?: (ctx: Port_numberContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.host`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHost?: (ctx: HostContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.date_correlation_optimization_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_correlation_optimization_option?: (ctx: Date_correlation_optimization_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.db_encryption_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_encryption_option?: (ctx: Db_encryption_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.db_state_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_state_option?: (ctx: Db_state_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.db_update_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_update_option?: (ctx: Db_update_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.db_user_access_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDb_user_access_option?: (ctx: Db_user_access_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.delayed_durability_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDelayed_durability_option?: (ctx: Delayed_durability_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.external_access_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExternal_access_option?: (ctx: External_access_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.hadr_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitHadr_options?: (ctx: Hadr_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.mixed_page_allocation_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMixed_page_allocation_option?: (ctx: Mixed_page_allocation_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.parameterization_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameterization_option?: (ctx: Parameterization_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.recovery_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecovery_option?: (ctx: Recovery_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.service_broker_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitService_broker_option?: (ctx: Service_broker_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.snapshot_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSnapshot_option?: (ctx: Snapshot_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.sql_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_option?: (ctx: Sql_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.target_recovery_time_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTarget_recovery_time_option?: (ctx: Target_recovery_time_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.termination`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTermination?: (ctx: TerminationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_index?: (ctx: Drop_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_relational_or_xml_or_spatial_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_relational_or_xml_or_spatial_index?: (ctx: Drop_relational_or_xml_or_spatial_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_backward_compatible_index`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_backward_compatible_index?: (ctx: Drop_backward_compatible_indexContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_procedure`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_procedure?: (ctx: Drop_procedureContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_trigger?: (ctx: Drop_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_dml_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_dml_trigger?: (ctx: Drop_dml_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_ddl_trigger`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_ddl_trigger?: (ctx: Drop_ddl_triggerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_function?: (ctx: Drop_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_statistics`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_statistics?: (ctx: Drop_statisticsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_table?: (ctx: Drop_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_view`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_view?: (ctx: Drop_viewContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_type?: (ctx: Create_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.drop_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDrop_type?: (ctx: Drop_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.rowset_function_limited`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowset_function_limited?: (ctx: Rowset_function_limitedContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.openquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenquery?: (ctx: OpenqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.opendatasource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpendatasource?: (ctx: OpendatasourceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.declare_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_statement?: (ctx: Declare_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.cursor_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursor_statement?: (ctx: Cursor_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_database`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_database?: (ctx: Backup_databaseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_log`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_log?: (ctx: Backup_logContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_certificate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_certificate?: (ctx: Backup_certificateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_master_key?: (ctx: Backup_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.backup_service_master_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBackup_service_master_key?: (ctx: Backup_service_master_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.execute_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute_statement?: (ctx: Execute_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.execute_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute_body?: (ctx: Execute_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.execute_statement_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute_statement_arg?: (ctx: Execute_statement_argContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.execute_var_string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute_var_string?: (ctx: Execute_var_stringContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.security_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSecurity_statement?: (ctx: Security_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_certificate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_certificate?: (ctx: Create_certificateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.existing_keys`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExisting_keys?: (ctx: Existing_keysContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.private_key_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrivate_key_options?: (ctx: Private_key_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.generate_new_keys`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenerate_new_keys?: (ctx: Generate_new_keysContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.date_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDate_options?: (ctx: Date_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.open_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_key?: (ctx: Open_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.close_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClose_key?: (ctx: Close_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_key`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_key?: (ctx: Create_keyContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.key_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitKey_options?: (ctx: Key_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.algorithm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAlgorithm?: (ctx: AlgorithmContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.encryption_mechanism`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncryption_mechanism?: (ctx: Encryption_mechanismContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.decryption_mechanism`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecryption_mechanism?: (ctx: Decryption_mechanismContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.grant_permission`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGrant_permission?: (ctx: Grant_permissionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.set_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_statement?: (ctx: Set_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.transaction_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTransaction_statement?: (ctx: Transaction_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.go_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGo_statement?: (ctx: Go_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.use_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUse_statement?: (ctx: Use_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.setuser_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSetuser_statement?: (ctx: Setuser_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.dbcc_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbcc_clause?: (ctx: Dbcc_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.dbcc_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbcc_options?: (ctx: Dbcc_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.execute_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExecute_clause?: (ctx: Execute_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.declare_local`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_local?: (ctx: Declare_localContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_type_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_type_definition?: (ctx: Table_type_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.xml_type_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_type_definition?: (ctx: Xml_type_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.xml_schema_collection`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_schema_collection?: (ctx: Xml_schema_collectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_def_table_constraints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_def_table_constraints?: (ctx: Column_def_table_constraintsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_def_table_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_def_table_constraint?: (ctx: Column_def_table_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_definition?: (ctx: Column_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.materialized_column_definition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMaterialized_column_definition?: (ctx: Materialized_column_definitionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_constraint?: (ctx: Column_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_constraint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_constraint?: (ctx: Table_constraintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.on_delete`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOn_delete?: (ctx: On_deleteContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.on_update`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOn_update?: (ctx: On_updateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.index_options`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_options?: (ctx: Index_optionsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.index_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_option?: (ctx: Index_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.declare_cursor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_cursor?: (ctx: Declare_cursorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.declare_set_cursor_common`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_set_cursor_common?: (ctx: Declare_set_cursor_commonContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.declare_set_cursor_common_partial`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclare_set_cursor_common_partial?: (ctx: Declare_set_cursor_common_partialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.fetch_cursor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFetch_cursor?: (ctx: Fetch_cursorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.set_special`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSet_special?: (ctx: Set_specialContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitive_expression?: (ctx: Primitive_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.case_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCase_expression?: (ctx: Case_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBracket_expression?: (ctx: Bracket_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.constant_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant_expression?: (ctx: Constant_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.subquery`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubquery?: (ctx: SubqueryContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.with_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_expression?: (ctx: With_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCommon_table_expression?: (ctx: Common_table_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.update_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdate_elem?: (ctx: Update_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.search_condition_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch_condition_list?: (ctx: Search_condition_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.search_condition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch_condition?: (ctx: Search_conditionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.search_condition_and`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch_condition_and?: (ctx: Search_condition_andContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.search_condition_not`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSearch_condition_not?: (ctx: Search_condition_notContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.predicate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPredicate?: (ctx: PredicateContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.query_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_expression?: (ctx: Query_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.sql_union`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSql_union?: (ctx: Sql_unionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.query_specification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_specification?: (ctx: Query_specificationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.top_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_clause?: (ctx: Top_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.top_percent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_percent?: (ctx: Top_percentContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.top_count`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTop_count?: (ctx: Top_countContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder_by_clause?: (ctx: Order_by_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.for_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_clause?: (ctx: For_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.xml_common_directives`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_common_directives?: (ctx: Xml_common_directivesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrder_by_expression?: (ctx: Order_by_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.group_by_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup_by_item?: (ctx: Group_by_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.option_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption_clause?: (ctx: Option_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOption?: (ctx: OptionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.optimize_for_arg`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOptimize_for_arg?: (ctx: Optimize_for_argContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.select_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list?: (ctx: Select_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.udt_method_arguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUdt_method_arguments?: (ctx: Udt_method_argumentsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.asterisk`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAsterisk?: (ctx: AsteriskContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_elem?: (ctx: Column_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.udt_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUdt_elem?: (ctx: Udt_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.expression_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_elem?: (ctx: Expression_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSelect_list_elem?: (ctx: Select_list_elemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_sources`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_sources?: (ctx: Table_sourcesContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_source`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_source?: (ctx: Table_sourceContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_source_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_source_item?: (ctx: Table_source_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.open_xml`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpen_xml?: (ctx: Open_xmlContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.schema_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSchema_declaration?: (ctx: Schema_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_declaration?: (ctx: Column_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.change_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitChange_table?: (ctx: Change_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.join_part`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJoin_part?: (ctx: Join_partContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPivot_clause?: (ctx: Pivot_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnpivot_clause?: (ctx: Unpivot_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFull_column_name_list?: (ctx: Full_column_name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name_with_hint?: (ctx: Table_name_with_hintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.rowset_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRowset_function?: (ctx: Rowset_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.bulk_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBulk_option?: (ctx: Bulk_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.derived_table`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDerived_table?: (ctx: Derived_tableContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.function_call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.xml_data_type_methods`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXml_data_type_methods?: (ctx: Xml_data_type_methodsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.value_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue_method?: (ctx: Value_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.query_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQuery_method?: (ctx: Query_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.exist_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExist_method?: (ctx: Exist_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.modify_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModify_method?: (ctx: Modify_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.nodes_method`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNodes_method?: (ctx: Nodes_methodContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.switch_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_section?: (ctx: Switch_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAs_column_alias?: (ctx: As_column_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAs_table_alias?: (ctx: As_table_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_alias?: (ctx: Table_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.with_table_hints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_table_hints?: (ctx: With_table_hintsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.insert_with_table_hints`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInsert_with_table_hints?: (ctx: Insert_with_table_hintsContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_hint`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_hint?: (ctx: Table_hintContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.index_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIndex_value?: (ctx: Index_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_alias_list?: (ctx: Column_alias_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_alias`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_alias?: (ctx: Column_aliasContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_value_constructor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_value_constructor?: (ctx: Table_value_constructorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.ranking_windowed_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRanking_windowed_function?: (ctx: Ranking_windowed_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.analytic_windowed_function`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnalytic_windowed_function?: (ctx: Analytic_windowed_functionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAll_distinct_expression?: (ctx: All_distinct_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.over_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOver_clause?: (ctx: Over_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.row_or_range_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRow_or_range_clause?: (ctx: Row_or_range_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.window_frame_extent`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_extent?: (ctx: Window_frame_extentContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.window_frame_bound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_bound?: (ctx: Window_frame_boundContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.window_frame_preceding`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_preceding?: (ctx: Window_frame_precedingContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.window_frame_following`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWindow_frame_following?: (ctx: Window_frame_followingContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.create_database_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCreate_database_option?: (ctx: Create_database_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.database_filestream_option`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabase_filestream_option?: (ctx: Database_filestream_optionContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.database_file_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabase_file_spec?: (ctx: Database_file_specContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.file_group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_group?: (ctx: File_groupContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.file_spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_spec?: (ctx: File_specContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.entity_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_name?: (ctx: Entity_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.entity_name_for_azure_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_name_for_azure_dw?: (ctx: Entity_name_for_azure_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.entity_name_for_parallel_dw`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEntity_name_for_parallel_dw?: (ctx: Entity_name_for_parallel_dwContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.full_table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFull_table_name?: (ctx: Full_table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.table_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTable_name?: (ctx: Table_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.simple_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_name?: (ctx: Simple_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_proc_name_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_proc_name_schema?: (ctx: Func_proc_name_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_proc_name_database_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_proc_name_database_schema?: (ctx: Func_proc_name_database_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.func_proc_name_server_database_schema`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunc_proc_name_server_database_schema?: (ctx: Func_proc_name_server_database_schemaContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.ddl_object`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDdl_object?: (ctx: Ddl_objectContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.full_column_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFull_column_name?: (ctx: Full_column_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_name_list_with_order`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name_list_with_order?: (ctx: Column_name_list_with_orderContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.column_name_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitColumn_name_list?: (ctx: Column_name_listContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.cursor_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCursor_name?: (ctx: Cursor_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.on_off`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOn_off?: (ctx: On_offContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.clustered`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClustered?: (ctx: ClusteredContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.null_notnull`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_notnull?: (ctx: Null_notnullContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.null_or_default`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNull_or_default?: (ctx: Null_or_defaultContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitScalar_function_name?: (ctx: Scalar_function_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.begin_conversation_timer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBegin_conversation_timer?: (ctx: Begin_conversation_timerContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.begin_conversation_dialog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBegin_conversation_dialog?: (ctx: Begin_conversation_dialogContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.contract_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContract_name?: (ctx: Contract_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.service_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitService_name?: (ctx: Service_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.end_conversation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnd_conversation?: (ctx: End_conversationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.waitfor_conversation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWaitfor_conversation?: (ctx: Waitfor_conversationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.get_conversation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGet_conversation?: (ctx: Get_conversationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.queue_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitQueue_id?: (ctx: Queue_idContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.send_conversation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSend_conversation?: (ctx: Send_conversationContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.data_type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitData_type?: (ctx: Data_typeContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.default_value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefault_value?: (ctx: Default_valueContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.constant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstant?: (ctx: ConstantContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.sign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSign?: (ctx: SignContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId?: (ctx: IdContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.simple_id`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_id?: (ctx: Simple_idContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;

	/**
	 * Visit a parse tree produced by `TSqlParser.file_size`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_size?: (ctx: File_sizeContext) => Result;
}

