import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor'
import { TSqlParserVisitor } from './grammar/TSqlParserVisitor';
import { Query_specificationContext, Select_listContext, Select_list_elemContext, AsteriskContext, Table_nameContext, IdContext, Simple_idContext } from './grammar/TSqlParser';

export class CompileTSqlParserVisitor extends AbstractParseTreeVisitor<any> implements TSqlParserVisitor<any>{
    protected defaultResult() {
        return [];
    }

    protected aggregateResult(aggregate, nextResult) {
        return [...aggregate, nextResult];
    }

    constructor() {
        super();
    }

    // Visit a parse tree produced by TSqlParser#tsql_file.
    public visitTsql_file = function(ctx) {
        return this.visitChildren(ctx);
    };
      
      
    // Visit a parse tree produced by TSqlParser#batch.
    public visitBatch = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#sql_clauses.
    public visitSql_clauses = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#sql_clause.
    public visitSql_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#dml_clause.
    public visitDml_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ddl_clause.
    public visitDdl_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_statement.
    public visitBackup_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#cfl_statement.
    public visitCfl_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#block_statement.
    public visitBlock_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#break_statement.
    public visitBreak_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#continue_statement.
    public visitContinue_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#goto_statement.
    public visitGoto_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#return_statement.
    public visitReturn_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#if_statement.
    public visitIf_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#throw_statement.
    public visitThrow_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#throw_error_number.
    public visitThrow_error_number = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#throw_message.
    public visitThrow_message = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#throw_state.
    public visitThrow_state = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#try_catch_statement.
    public visitTry_catch_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#waitfor_statement.
    public visitWaitfor_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#while_statement.
    public visitWhile_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#print_statement.
    public visitPrint_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#raiseerror_statement.
    public visitRaiseerror_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#empty_statement.
    public visitEmpty_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#another_statement.
    public visitAnother_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_application_role.
    public visitAlter_application_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_application_role.
    public visitCreate_application_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_aggregate.
    public visitDrop_aggregate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_application_role.
    public visitDrop_application_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly.
    public visitAlter_assembly = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_start.
    public visitAlter_assembly_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_clause.
    public visitAlter_assembly_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_from_clause.
    public visitAlter_assembly_from_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_from_clause_start.
    public visitAlter_assembly_from_clause_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_drop_clause.
    public visitAlter_assembly_drop_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_drop_multiple_files.
    public visitAlter_assembly_drop_multiple_files = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_drop.
    public visitAlter_assembly_drop = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_add_clause.
    public visitAlter_assembly_add_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_asssembly_add_clause_start.
    public visitAlter_asssembly_add_clause_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_client_file_clause.
    public visitAlter_assembly_client_file_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_file_name.
    public visitAlter_assembly_file_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_file_bits.
    public visitAlter_assembly_file_bits = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_as.
    public visitAlter_assembly_as = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_with_clause.
    public visitAlter_assembly_with_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_assembly_with.
    public visitAlter_assembly_with = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#client_assembly_specifier.
    public visitClient_assembly_specifier = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#assembly_option.
    public visitAssembly_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#network_file_share.
    public visitNetwork_file_share = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#network_computer.
    public visitNetwork_computer = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#network_file_start.
    public visitNetwork_file_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#file_path.
    public visitFile_path = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#file_directory_path_separator.
    public visitFile_directory_path_separator = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#local_file.
    public visitLocal_file = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#local_drive.
    public visitLocal_drive = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#multiple_local_files.
    public visitMultiple_local_files = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#multiple_local_file_start.
    public visitMultiple_local_file_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_assembly.
    public visitCreate_assembly = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_assembly.
    public visitDrop_assembly = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_asymmetric_key.
    public visitAlter_asymmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_asymmetric_key_start.
    public visitAlter_asymmetric_key_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#asymmetric_key_option.
    public visitAsymmetric_key_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#asymmetric_key_option_start.
    public visitAsymmetric_key_option_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#asymmetric_key_password_change_option.
    public visitAsymmetric_key_password_change_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_asymmetric_key.
    public visitCreate_asymmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_asymmetric_key.
    public visitDrop_asymmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_authorization.
    public visitAlter_authorization = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#authorization_grantee.
    public visitAuthorization_grantee = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#entity_to.
    public visitEntity_to = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#colon_colon.
    public visitColon_colon = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_authorization_start.
    public visitAlter_authorization_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_authorization_for_sql_database.
    public visitAlter_authorization_for_sql_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_authorization_for_azure_dw.
    public visitAlter_authorization_for_azure_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_authorization_for_parallel_dw.
    public visitAlter_authorization_for_parallel_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#class_type.
    public visitClass_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#class_type_for_sql_database.
    public visitClass_type_for_sql_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#class_type_for_azure_dw.
    public visitClass_type_for_azure_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#class_type_for_parallel_dw.
    public visitClass_type_for_parallel_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_availability_group.
    public visitDrop_availability_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_availability_group.
    public visitAlter_availability_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_availability_group_start.
    public visitAlter_availability_group_start = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_availability_group_options.
    public visitAlter_availability_group_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_broker_priority.
    public visitCreate_or_alter_broker_priority = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_broker_priority.
    public visitDrop_broker_priority = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_certificate.
    public visitAlter_certificate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_column_encryption_key.
    public visitAlter_column_encryption_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_column_encryption_key.
    public visitCreate_column_encryption_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_certificate.
    public visitDrop_certificate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_column_encryption_key.
    public visitDrop_column_encryption_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_column_master_key.
    public visitDrop_column_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_contract.
    public visitDrop_contract = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_credential.
    public visitDrop_credential = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_cryptograhic_provider.
    public visitDrop_cryptograhic_provider = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_database.
    public visitDrop_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_database_audit_specification.
    public visitDrop_database_audit_specification = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_database_scoped_credential.
    public visitDrop_database_scoped_credential = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_default.
    public visitDrop_default = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_endpoint.
    public visitDrop_endpoint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_external_data_source.
    public visitDrop_external_data_source = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_external_file_format.
    public visitDrop_external_file_format = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_external_library.
    public visitDrop_external_library = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_external_resource_pool.
    public visitDrop_external_resource_pool = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_external_table.
    public visitDrop_external_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_event_notifications.
    public visitDrop_event_notifications = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_event_session.
    public visitDrop_event_session = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_fulltext_catalog.
    public visitDrop_fulltext_catalog = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_fulltext_index.
    public visitDrop_fulltext_index = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_fulltext_stoplist.
    public visitDrop_fulltext_stoplist = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_login.
    public visitDrop_login = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_master_key.
    public visitDrop_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_message_type.
    public visitDrop_message_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_partition_function.
    public visitDrop_partition_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_partition_scheme.
    public visitDrop_partition_scheme = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_queue.
    public visitDrop_queue = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_remote_service_binding.
    public visitDrop_remote_service_binding = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_resource_pool.
    public visitDrop_resource_pool = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_db_role.
    public visitDrop_db_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_route.
    public visitDrop_route = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_rule.
    public visitDrop_rule = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_schema.
    public visitDrop_schema = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_search_property_list.
    public visitDrop_search_property_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_security_policy.
    public visitDrop_security_policy = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_sequence.
    public visitDrop_sequence = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_server_audit.
    public visitDrop_server_audit = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_server_audit_specification.
    public visitDrop_server_audit_specification = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_server_role.
    public visitDrop_server_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_service.
    public visitDrop_service = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_signature.
    public visitDrop_signature = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_statistics_name_azure_dw_and_pdw.
    public visitDrop_statistics_name_azure_dw_and_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_symmetric_key.
    public visitDrop_symmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_synonym.
    public visitDrop_synonym = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_user.
    public visitDrop_user = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_workload_group.
    public visitDrop_workload_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_xml_schema_collection.
    public visitDrop_xml_schema_collection = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#disable_trigger.
    public visitDisable_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#enable_trigger.
    public visitEnable_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#lock_table.
    public visitLock_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#truncate_table.
    public visitTruncate_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_column_master_key.
    public visitCreate_column_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_credential.
    public visitAlter_credential = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_credential.
    public visitCreate_credential = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_cryptographic_provider.
    public visitAlter_cryptographic_provider = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_cryptographic_provider.
    public visitCreate_cryptographic_provider = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_event_notification.
    public visitCreate_event_notification = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_event_session.
    public visitCreate_or_alter_event_session = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#event_session_predicate_expression.
    public visitEvent_session_predicate_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#event_session_predicate_factor.
    public visitEvent_session_predicate_factor = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#event_session_predicate_leaf.
    public visitEvent_session_predicate_leaf = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_external_data_source.
    public visitAlter_external_data_source = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_external_library.
    public visitAlter_external_library = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_external_library.
    public visitCreate_external_library = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_external_resource_pool.
    public visitAlter_external_resource_pool = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_external_resource_pool.
    public visitCreate_external_resource_pool = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_fulltext_catalog.
    public visitAlter_fulltext_catalog = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_fulltext_catalog.
    public visitCreate_fulltext_catalog = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_fulltext_stoplist.
    public visitAlter_fulltext_stoplist = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_fulltext_stoplist.
    public visitCreate_fulltext_stoplist = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_login_sql_server.
    public visitAlter_login_sql_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_login_sql_server.
    public visitCreate_login_sql_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_login_azure_sql.
    public visitAlter_login_azure_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_login_azure_sql.
    public visitCreate_login_azure_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_login_azure_sql_dw_and_pdw.
    public visitAlter_login_azure_sql_dw_and_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_login_pdw.
    public visitCreate_login_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_master_key_sql_server.
    public visitAlter_master_key_sql_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_master_key_sql_server.
    public visitCreate_master_key_sql_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_master_key_azure_sql.
    public visitAlter_master_key_azure_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_master_key_azure_sql.
    public visitCreate_master_key_azure_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_message_type.
    public visitAlter_message_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_partition_function.
    public visitAlter_partition_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_partition_scheme.
    public visitAlter_partition_scheme = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_remote_service_binding.
    public visitAlter_remote_service_binding = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_remote_service_binding.
    public visitCreate_remote_service_binding = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_resource_pool.
    public visitCreate_resource_pool = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_resource_governor.
    public visitAlter_resource_governor = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_db_role.
    public visitAlter_db_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_db_role.
    public visitCreate_db_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_route.
    public visitCreate_route = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_rule.
    public visitCreate_rule = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_schema_sql.
    public visitAlter_schema_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_schema.
    public visitCreate_schema = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_schema_azure_sql_dw_and_pdw.
    public visitCreate_schema_azure_sql_dw_and_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_schema_azure_sql_dw_and_pdw.
    public visitAlter_schema_azure_sql_dw_and_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_search_property_list.
    public visitCreate_search_property_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_security_policy.
    public visitCreate_security_policy = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_sequence.
    public visitAlter_sequence = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_sequence.
    public visitCreate_sequence = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_server_audit.
    public visitAlter_server_audit = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_server_audit.
    public visitCreate_server_audit = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_server_audit_specification.
    public visitAlter_server_audit_specification = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_server_audit_specification.
    public visitCreate_server_audit_specification = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_server_configuration.
    public visitAlter_server_configuration = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_server_role.
    public visitAlter_server_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_server_role.
    public visitCreate_server_role = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_server_role_pdw.
    public visitAlter_server_role_pdw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_service.
    public visitAlter_service = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_service.
    public visitCreate_service = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_service_master_key.
    public visitAlter_service_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_symmetric_key.
    public visitAlter_symmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_symmetric_key.
    public visitCreate_symmetric_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_synonym.
    public visitCreate_synonym = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_user.
    public visitAlter_user = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_user.
    public visitCreate_user = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_user_azure_sql_dw.
    public visitCreate_user_azure_sql_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_user_azure_sql.
    public visitAlter_user_azure_sql = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_workload_group.
    public visitAlter_workload_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_workload_group.
    public visitCreate_workload_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_xml_schema_collection.
    public visitCreate_xml_schema_collection = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_queue.
    public visitCreate_queue = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#queue_settings.
    public visitQueue_settings = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_queue.
    public visitAlter_queue = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#queue_action.
    public visitQueue_action = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#queue_rebuild_options.
    public visitQueue_rebuild_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_contract.
    public visitCreate_contract = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#conversation_statement.
    public visitConversation_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#message_statement.
    public visitMessage_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#merge_statement.
    public visitMerge_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#merge_matched.
    public visitMerge_matched = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#merge_not_matched.
    public visitMerge_not_matched = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#delete_statement.
    public visitDelete_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#delete_statement_from.
    public visitDelete_statement_from = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#insert_statement.
    public visitInsert_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#insert_statement_value.
    public visitInsert_statement_value = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#receive_statement.
    public visitReceive_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#select_statement.
    public visitSelect_statement = function (ctx) {
        console.log("select", ctx);
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#time.
    public visitTime = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#update_statement.
    public visitUpdate_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#output_clause.
    public visitOutput_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#output_dml_list_elem.
    public visitOutput_dml_list_elem = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#output_column_name.
    public visitOutput_column_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_database.
    public visitCreate_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_index.
    public visitCreate_index = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_procedure.
    public visitCreate_or_alter_procedure = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_trigger.
    public visitCreate_or_alter_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_dml_trigger.
    public visitCreate_or_alter_dml_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#dml_trigger_option.
    public visitDml_trigger_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#dml_trigger_operation.
    public visitDml_trigger_operation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_ddl_trigger.
    public visitCreate_or_alter_ddl_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ddl_trigger_operation.
    public visitDdl_trigger_operation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_or_alter_function.
    public visitCreate_or_alter_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_body_returns_select.
    public visitFunc_body_returns_select = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_body_returns_table.
    public visitFunc_body_returns_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_body_returns_scalar.
    public visitFunc_body_returns_scalar = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#procedure_param.
    public visitProcedure_param = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#procedure_option.
    public visitProcedure_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#function_option.
    public visitFunction_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_statistics.
    public visitCreate_statistics = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#update_statistics.
    public visitUpdate_statistics = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_table.
    public visitCreate_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_options.
    public visitTable_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_view.
    public visitCreate_view = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#view_attribute.
    public visitView_attribute = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_table.
    public visitAlter_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_database.
    public visitAlter_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#database_optionspec.
    public visitDatabase_optionspec = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#auto_option.
    public visitAuto_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#change_tracking_option.
    public visitChange_tracking_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#change_tracking_option_list.
    public visitChange_tracking_option_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#containment_option.
    public visitContainment_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#cursor_option.
    public visitCursor_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#alter_endpoint.
    public visitAlter_endpoint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#database_mirroring_option.
    public visitDatabase_mirroring_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#mirroring_set_option.
    public visitMirroring_set_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#mirroring_partner.
    public visitMirroring_partner = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#mirroring_witness.
    public visitMirroring_witness = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#witness_partner_equal.
    public visitWitness_partner_equal = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#partner_option.
    public visitPartner_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#witness_option.
    public visitWitness_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#witness_server.
    public visitWitness_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#partner_server.
    public visitPartner_server = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#mirroring_host_port_seperator.
    public visitMirroring_host_port_seperator = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#partner_server_tcp_prefix.
    public visitPartner_server_tcp_prefix = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#port_number.
    public visitPort_number = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#host.
    public visitHost = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#date_correlation_optimization_option.
    public visitDate_correlation_optimization_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#db_encryption_option.
    public visitDb_encryption_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#db_state_option.
    public visitDb_state_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#db_update_option.
    public visitDb_update_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#db_user_access_option.
    public visitDb_user_access_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#delayed_durability_option.
    public visitDelayed_durability_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#external_access_option.
    public visitExternal_access_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#hadr_options.
    public visitHadr_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#mixed_page_allocation_option.
    public visitMixed_page_allocation_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#parameterization_option.
    public visitParameterization_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#recovery_option.
    public visitRecovery_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#service_broker_option.
    public visitService_broker_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#snapshot_option.
    public visitSnapshot_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#sql_option.
    public visitSql_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#target_recovery_time_option.
    public visitTarget_recovery_time_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#termination.
    public visitTermination = function (ctx) {
        console.log('termination', ctx);
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_index.
    public visitDrop_index = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_relational_or_xml_or_spatial_index.
    public visitDrop_relational_or_xml_or_spatial_index = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_backward_compatible_index.
    public visitDrop_backward_compatible_index = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_procedure.
    public visitDrop_procedure = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_trigger.
    public visitDrop_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_dml_trigger.
    public visitDrop_dml_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_ddl_trigger.
    public visitDrop_ddl_trigger = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_function.
    public visitDrop_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_statistics.
    public visitDrop_statistics = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_table.
    public visitDrop_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_view.
    public visitDrop_view = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_type.
    public visitCreate_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#drop_type.
    public visitDrop_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#rowset_function_limited.
    public visitRowset_function_limited = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#openquery.
    public visitOpenquery = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#opendatasource.
    public visitOpendatasource = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#declare_statement.
    public visitDeclare_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#cursor_statement.
    public visitCursor_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_database.
    public visitBackup_database = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_log.
    public visitBackup_log = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_certificate.
    public visitBackup_certificate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_master_key.
    public visitBackup_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#backup_service_master_key.
    public visitBackup_service_master_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#execute_statement.
    public visitExecute_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#execute_body.
    public visitExecute_body = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#execute_statement_arg.
    public visitExecute_statement_arg = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#execute_var_string.
    public visitExecute_var_string = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#security_statement.
    public visitSecurity_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_certificate.
    public visitCreate_certificate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#existing_keys.
    public visitExisting_keys = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#private_key_options.
    public visitPrivate_key_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#generate_new_keys.
    public visitGenerate_new_keys = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#date_options.
    public visitDate_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#open_key.
    public visitOpen_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#close_key.
    public visitClose_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_key.
    public visitCreate_key = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#key_options.
    public visitKey_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#algorithm.
    public visitAlgorithm = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#encryption_mechanism.
    public visitEncryption_mechanism = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#decryption_mechanism.
    public visitDecryption_mechanism = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#grant_permission.
    public visitGrant_permission = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#set_statement.
    public visitSet_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#transaction_statement.
    public visitTransaction_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#go_statement.
    public visitGo_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#use_statement.
    public visitUse_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#setuser_statement.
    public visitSetuser_statement = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#dbcc_clause.
    public visitDbcc_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#dbcc_options.
    public visitDbcc_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#execute_clause.
    public visitExecute_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#declare_local.
    public visitDeclare_local = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_type_definition.
    public visitTable_type_definition = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#xml_type_definition.
    public visitXml_type_definition = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#xml_schema_collection.
    public visitXml_schema_collection = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_def_table_constraints.
    public visitColumn_def_table_constraints = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_def_table_constraint.
    public visitColumn_def_table_constraint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_definition.
    public visitColumn_definition = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#materialized_column_definition.
    public visitMaterialized_column_definition = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_constraint.
    public visitColumn_constraint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_constraint.
    public visitTable_constraint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#on_delete.
    public visitOn_delete = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#on_update.
    public visitOn_update = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#index_options.
    public visitIndex_options = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#index_option.
    public visitIndex_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#declare_cursor.
    public visitDeclare_cursor = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#declare_set_cursor_common.
    public visitDeclare_set_cursor_common = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#declare_set_cursor_common_partial.
    public visitDeclare_set_cursor_common_partial = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#fetch_cursor.
    public visitFetch_cursor = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#set_special.
    public visitSet_special = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#constant_LOCAL_ID.
    public visitConstant_LOCAL_ID = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#expression.
    public visitExpression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#primitive_expression.
    public visitPrimitive_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#case_expression.
    public visitCase_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#unary_operator_expression.
    public visitUnary_operator_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#bracket_expression.
    public visitBracket_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#constant_expression.
    public visitConstant_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#subquery.
    public visitSubquery = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#with_expression.
    public visitWith_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#common_table_expression.
    public visitCommon_table_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#update_elem.
    public visitUpdate_elem = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#search_condition_list.
    public visitSearch_condition_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#search_condition.
    public visitSearch_condition = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#search_condition_and.
    public visitSearch_condition_and = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#search_condition_not.
    public visitSearch_condition_not = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#predicate.
    public visitPredicate = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#query_expression.
    public visitQuery_expression = function (ctx) {
        console.log("query_expression", ctx);
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#sql_union.
    public visitSql_union = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#query_specification.
    public visitQuery_specification = function (ctx: Query_specificationContext) {
        const selectList = ctx.select_list().accept(this);
        if (ctx.FROM()) {
            const tableSources = ctx.table_sources().accept(this);
        }

        if (ctx.DISTINCT()) {

        }

        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#top_clause.
    public visitTop_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#top_percent.
    public visitTop_percent = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#top_count.
    public visitTop_count = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#order_by_clause.
    public visitOrder_by_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#for_clause.
    public visitFor_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#xml_common_directives.
    public visitXml_common_directives = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#order_by_expression.
    public visitOrder_by_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#group_by_item.
    public visitGroup_by_item = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#option_clause.
    public visitOption_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#option.
    public visitOption = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#optimize_for_arg.
    public visitOptimize_for_arg = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#select_list.
    public visitSelect_list = function (ctx: Select_listContext) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#udt_method_arguments.
    public visitUdt_method_arguments = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#asterisk.
    public visitAsterisk = function (ctx: AsteriskContext) {
        if (ctx.table_name()) {
            return ctx.table_name().accept(this) + '*';
        } else {
            return '*'
        }
    };


    // Visit a parse tree produced by TSqlParser#column_elem.
    public visitColumn_elem = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#udt_elem.
    public visitUdt_elem = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#expression_elem.
    public visitExpression_elem = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#select_list_elem.
    public visitSelect_list_elem = function (ctx: Select_list_elemContext) {
        if (ctx.asterisk()) {
            return ctx.asterisk().accept(this);
        } else if (ctx.column_elem()){
            return ctx.column_elem().accept(this);
        } else if (ctx.udt_elem()) {
            return ctx.udt_elem().accept(this);
        } else if (ctx.expression_elem()) {
            return ctx.expression_elem().accept(this);
        }
    };


    // Visit a parse tree produced by TSqlParser#table_sources.
    public visitTable_sources = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_source.
    public visitTable_source = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_source_item_joined.
    public visitTable_source_item_joined = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_source_item.
    public visitTable_source_item = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#open_xml.
    public visitOpen_xml = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#schema_declaration.
    public visitSchema_declaration = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_declaration.
    public visitColumn_declaration = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#change_table.
    public visitChange_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#join_part.
    public visitJoin_part = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#pivot_clause.
    public visitPivot_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#unpivot_clause.
    public visitUnpivot_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#full_column_name_list.
    public visitFull_column_name_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_name_with_hint.
    public visitTable_name_with_hint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#rowset_function.
    public visitRowset_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#bulk_option.
    public visitBulk_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#derived_table.
    public visitDerived_table = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#RANKING_WINDOWED_FUNC.
    public visitRANKING_WINDOWED_FUNC = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#AGGREGATE_WINDOWED_FUNC.
    public visitAGGREGATE_WINDOWED_FUNC = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ANALYTIC_WINDOWED_FUNC.
    public visitANALYTIC_WINDOWED_FUNC = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#SCALAR_FUNCTION.
    public visitSCALAR_FUNCTION = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#BINARY_CHECKSUM.
    public visitBINARY_CHECKSUM = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#CAST.
    public visitCAST = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#CONVERT.
    public visitCONVERT = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#CHECKSUM.
    public visitCHECKSUM = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#COALESCE.
    public visitCOALESCE = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#CURRENT_TIMESTAMP.
    public visitCURRENT_TIMESTAMP = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#CURRENT_USER.
    public visitCURRENT_USER = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#DATEADD.
    public visitDATEADD = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#DATEDIFF.
    public visitDATEDIFF = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#DATENAME.
    public visitDATENAME = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#DATEPART.
    public visitDATEPART = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#GETDATE.
    public visitGETDATE = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#GETUTCDATE.
    public visitGETUTCDATE = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#IDENTITY.
    public visitIDENTITY = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#MIN_ACTIVE_ROWVERSION.
    public visitMIN_ACTIVE_ROWVERSION = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#NULLIF.
    public visitNULLIF = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#STUFF.
    public visitSTUFF = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#SESSION_USER.
    public visitSESSION_USER = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#SYSTEM_USER.
    public visitSYSTEM_USER = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ISNULL.
    public visitISNULL = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#XML_DATA_TYPE_FUNC.
    public visitXML_DATA_TYPE_FUNC = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#IFF.
    public visitIFF = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#xml_data_type_methods.
    public visitXml_data_type_methods = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#value_method.
    public visitValue_method = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#query_method.
    public visitQuery_method = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#exist_method.
    public visitExist_method = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#modify_method.
    public visitModify_method = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#nodes_method.
    public visitNodes_method = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#switch_section.
    public visitSwitch_section = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#switch_search_condition_section.
    public visitSwitch_search_condition_section = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#as_column_alias.
    public visitAs_column_alias = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#as_table_alias.
    public visitAs_table_alias = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_alias.
    public visitTable_alias = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#with_table_hints.
    public visitWith_table_hints = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#insert_with_table_hints.
    public visitInsert_with_table_hints = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_hint.
    public visitTable_hint = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#index_value.
    public visitIndex_value = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_alias_list.
    public visitColumn_alias_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_alias.
    public visitColumn_alias = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_value_constructor.
    public visitTable_value_constructor = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#expression_list.
    public visitExpression_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ranking_windowed_function.
    public visitRanking_windowed_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#aggregate_windowed_function.
    public visitAggregate_windowed_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#analytic_windowed_function.
    public visitAnalytic_windowed_function = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#all_distinct_expression.
    public visitAll_distinct_expression = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#over_clause.
    public visitOver_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#row_or_range_clause.
    public visitRow_or_range_clause = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#window_frame_extent.
    public visitWindow_frame_extent = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#window_frame_bound.
    public visitWindow_frame_bound = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#window_frame_preceding.
    public visitWindow_frame_preceding = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#window_frame_following.
    public visitWindow_frame_following = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#create_database_option.
    public visitCreate_database_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#database_filestream_option.
    public visitDatabase_filestream_option = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#database_file_spec.
    public visitDatabase_file_spec = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#file_group.
    public visitFile_group = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#file_spec.
    public visitFile_spec = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#entity_name.
    public visitEntity_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#entity_name_for_azure_dw.
    public visitEntity_name_for_azure_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#entity_name_for_parallel_dw.
    public visitEntity_name_for_parallel_dw = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#full_table_name.
    public visitFull_table_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#table_name.
    public visitTable_name = function (ctx: Table_nameContext) {
        if (ctx.BLOCKING_HIERARCHY()) {
            throw new Error('does not support blocking_hierarchy');
        }
        return ctx._table.accept(this);
    };


    // Visit a parse tree produced by TSqlParser#simple_name.
    public visitSimple_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_proc_name_schema.
    public visitFunc_proc_name_schema = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_proc_name_database_schema.
    public visitFunc_proc_name_database_schema = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#func_proc_name_server_database_schema.
    public visitFunc_proc_name_server_database_schema = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#ddl_object.
    public visitDdl_object = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#full_column_name.
    public visitFull_column_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_name_list_with_order.
    public visitColumn_name_list_with_order = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#column_name_list.
    public visitColumn_name_list = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#cursor_name.
    public visitCursor_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#on_off.
    public visitOn_off = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#clustered.
    public visitClustered = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#null_notnull.
    public visitNull_notnull = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#null_or_default.
    public visitNull_or_default = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#scalar_function_name.
    public visitScalar_function_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#begin_conversation_timer.
    public visitBegin_conversation_timer = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#begin_conversation_dialog.
    public visitBegin_conversation_dialog = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#contract_name.
    public visitContract_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#service_name.
    public visitService_name = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#end_conversation.
    public visitEnd_conversation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#waitfor_conversation.
    public visitWaitfor_conversation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#get_conversation.
    public visitGet_conversation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#queue_id.
    public visitQueue_id = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#send_conversation.
    public visitSend_conversation = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#data_type.
    public visitData_type = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#default_value.
    public visitDefault_value = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#constant.
    public visitConstant = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#sign.
    public visitSign = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#id.
    public visitId = function (ctx: IdContext) {
        if (ctx.DOUBLE_QUOTE_ID()) {
            return ctx.DOUBLE_QUOTE_ID().text;
        } else if (ctx.SQUARE_BRACKET_ID()) {
            return ctx.SQUARE_BRACKET_ID().text;
        } else if (ctx.simple_id()){
            return ctx.simple_id().accept(this);
        }
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#simple_id.
    public visitSimple_id = function (ctx: Simple_idContext) {
        if (ctx.ID()) {
            return ctx.ID().text;
        }
        throw new Error('only ID is support in simple_id');
    };


    // Visit a parse tree produced by TSqlParser#comparison_operator.
    public visitComparison_operator = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#assignment_operator.
    public visitAssignment_operator = function (ctx) {
        return this.visitChildren(ctx);
    };


    // Visit a parse tree produced by TSqlParser#file_size.
    public visitFile_size = function (ctx) {
        return this.visitChildren(ctx);
    };
}