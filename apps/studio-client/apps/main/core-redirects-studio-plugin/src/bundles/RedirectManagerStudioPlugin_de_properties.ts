/*
 * Copyright 2019 Tallence AG
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import ResourceBundleUtil from "@jangaroo/runtime/l10n/ResourceBundleUtil";
import RedirectManagerStudioPlugin_properties from "./RedirectManagerStudioPlugin_properties";

/**
 * Overrides of ResourceBundle "RedirectManagerStudioPlugin" for Locale "de".
 * @see RedirectManagerStudioPlugin_properties#INSTANCE
 */
ResourceBundleUtil.override(RedirectManagerStudioPlugin_properties, {
  redirectmanager_text: "RedirectManager",
  redirectmanager_button_text: "Umleitungen",
  redirectmanager_button_tooltip: "Umleitungen verwalten",
  redirectmanager_editor_list_loading: "Lade Umleitungen..",
  redirectmanager_editor_list_nothing_found: "Keine Umleitungen gefunden..",
  redirectmanager_editor_list_nothing_found_match: "Keine Umleitungen mit der gleichen Quelle gefunden..",
  redirectmanager_editor_same_source_title: "Umelitungen mit der selben Quell-Url",
  redirectmanager_editor_list_text: "Umleitungen",
  redirectmanager_editor_list_error_no_target: "Fehlendes Ziel",
  redirectmanager_editor_edit_text: "Umleitung",
  redirectmanager_editor_field_active: "Publiziert",
  redirectmanager_editor_field_source: "Quelle",
  redirectmanager_editor_field_target: "Ziel",
  redirectmanager_editor_field_target_link_select: "Inhalt",
  redirectmanager_editor_field_target_path_select: "URL",
  redirectmanager_editor_field_targetLink: "Ziel-Inhalt",
  redirectmanager_editor_field_targetUrl: "Ziel-Url",
  redirectmanager_editor_field_creationDate: "Erstellungsdatum",
  redirectmanager_editor_field_type: "Typ",
  redirectmanager_editor_field_type_value_0: "Immer",
  redirectmanager_editor_field_type_value_1: "Nur nach 404",
  redirectmanager_editor_field_type_value_2: "Vanity Umleitung",
  redirectmanager_editor_field_type_invalid: "Ungültiger Wert",
  redirectmanager_editor_field_parameters: "Parameter",
  redirectmanager_editor_field_description: "Beschreibung",
  redirectmanager_editor_field_sourceType: "Quell-Url-Type",
  redirectmanager_editor_field_sourceType_plain: "Plain",
  redirectmanager_editor_field_sourceType_regex: "Regulärer Ausdruck",
  redirectmanager_editor_actions_new_tooltip: "Neue Umleitung hinzufügen",
  redirectmanager_editor_actions_new_text: "Neue Umleitung",
  redirectmanager_editor_actions_new_success_text: "Die Umleitung wurde erfolgreich angelegt!<br/>Die Umleitung ist nicht direkt in der Tabelle sichtbar.<br/>Bitte klicken Sie den Aktualisierungs Button.",
  redirectmanager_editor_actions_new_error_text: "fehler beim Erstellen der Umleitung!<br>Ursache:",
  redirectmanager_editor_field_parameterName: "Name",
  redirectmanager_editor_field_parameterValue: "Wert",
  redirectmanager_editor_field_sourceParameters: "Quell-Parameter",
  redirectmanager_editor_field_targetParameters: "Ziel-Parameter",
  redirectmanager_editor_actions_delete_tooltip: "Umleitung löschen",
  redirectmanager_editor_actions_delete_confirm_title: "Umleitung löschen",
  redirectmanager_editor_actions_delete_confirm_text: "Wollen Sie diese Umleitung wirklich löschen?",
  redirectmanager_editor_actions_save_confirm_title: "Umleitung speichern",
  redirectmanager_editor_actions_save_confirm_text: "Wollen Sie die Änderungen an dieser Umleitung speichern?",
  redirectmanager_editor_actions_reload_tooltip: "Umleitungen neu laden",
  redirectmanager_editor_actions_reload_text: "Neu laden",
  redirectmanager_editor_action_result_title_success: "Erfolgreich",
  redirectmanager_editor_action_result_title_error: "Fehler",
  redirectmanager_editor_actions_publish_tooltip: "Aktuellen Stand der Umleitungen publizieren",
  redirectmanager_editor_actions_publish_text: "Publizieren",
  redirectmanager_editor_actions_publish_confirm_title: "Umleitungen publizieren",
  redirectmanager_editor_actions_publish_confirm_text: "Wollen Sie den aktuellen Stand der Umleitungen publizieren?",
  redirectmanager_editor_actions_publish_result_text_success: "Die Umleitungen wurden erfolgreich publiziert",
  redirectmanager_editor_actions_publish_result_text_error: "Fehler bei der Publikation der Umleitungen!",
  redirectmanager_editor_actions_publish_result_text_error_w_msg: "Fehler bei der Publikation der Umleitungen!<br>Ursache:",
  redirectmanager_editor_actions_delete_text: "Löschen",
  redirectmanager_editor_actions_save_text: "Speichern",
  redirectmanager_editor_list_empty: "Leer",
  redirectmanager_editor_actions_save_result_text_success: "Die Umleitung wurde erfolgreich gespeichert!",
  redirectmanager_editor_actions_save_result_text_error: "Fehler beim Speichern der Umleitung!",
  redirectmanager_editor_actions_save_result_text_error_w_msg: "Fehler beim Speichern der Umleitung!<br>Ursache:",
  redirectmanager_editor_actions_delete_result_text_error: "Fehler beim Löschen der Umleitung!",
  redirectmanager_editor_actions_delete_result_text_error_w_msg: "Fehler beim Löschen der Umleitung!<br>Ursache:",
  redirectmanager_editor_actions_delete_result_text_success: "Die Umleitung wurde erfolgreich gelöscht!",
  redirectmanager_editor_actions_save_validationerror_title: "Validierungsfehler",
  redirectmanager_editor_actions_save_validationerror_text: "Bitte füllen Sie die folgenden Felder aus:",
  redirectmanager_editor_actions_save_validationerror_targetField: "Ziel-Inhalt oder Ziel-URL",
  redirectmanager_editor_help_tooltip: "Hilfe",
  redirectmanager_editor_help_source_button: "Hilfe",
  redirectmanager_editor_help_source_title: "Hilfe",
  redirectmanager_editor_help_source_text: "Die Url, die umgeleitet werden soll z.B. /produkte/altes-produkt. Sie sollte keine Fragmente (#anchor) enthalten. Query-Parameter (z.B. ?param=value) werden automatisch entfernt und in das \"Quell-Parameter\"-Feld übertragen. Wenden Sie sich an Ihren Administrator wenn Sie das Feld nicht sehen sollten.<br/>Für mehrsprachige Seiten muss der Sprach-Präfix weggelassen werden, also z.B. /old-link anstelle von /fr/old-link für die Französisch-sprachige Schweizer-Seite.",
  redirectmanager_editor_help_targetUrl_text: "Die Url, auf die umgeleitet werden soll. Pr�fen Sie, ob stattdessen ein CoreMedia-Inhalt im \"Ziel-Inhalt\"-Feld verlinkt werden kann, da die Wartung dadurch vereinfacht wird und kein 404 im Umleitungs-Ziel auftreten kann.",
  redirectmanager_editor_actions_csvupload_example_header_sourceUrl_text: "Die Quell-Url",
  redirectmanager_editor_actions_csvupload_example_header_targetLink_text: "Pfad zum Dokument oder die CoreMedia-Inhalt-Id",
  redirectmanager_editor_actions_csvupload_example_header_description_text: "Eine optionale Beschreibung",
  redirectmanager_editor_actions_csvupload_example_header_sourceParameters_text: "The Url-Parameter der Quell-Url oder [], Beispiel: [{\"name\": \"parameterName\", \"value\": \"value\", \"operator\": \"EQUALS\"}]",
  redirectmanager_editor_actions_csvupload_example_header_targetParameters_title: "Ziel-Url Parameter:",
  redirectmanager_editor_actions_csvupload_example_header_targetParameters_text: "Die Url-Parameter, die an die Ziel-Url angehangen werden sollen or [], Beispiel: [{\"name\": \"parameterName\", \"value\": \"value\"}]",
  redirectmanager_editor_actions_csvupload_tooltip: "Klicken Sie hier, um eine Liste von Redirects über einen CSV Upload anzulegen.",
  redirectmanager_editor_actions_csvupload_text: "Upload",
  redirectmanager_editor_actions_csvupload_dropin_title: "Redirect CSV Import",
  redirectmanager_editor_actions_csvupload_dropin_label: "Datei hierhin ziehen..",
  redirectmanager_editor_actions_csvupload_upload_button_text: "Upload",
  redirectmanager_editor_actions_csvupload_upload_inProgress_text: "Umleitungen werden importiert...",
  redirectmanager_editor_actions_csvupload_cancel_button_text: "Abbrechen",
  redirectmanager_editor_actions_csvupload_upload_failed_title: "Import failed",
  redirectmanager_editor_actions_csvupload_upload_failed_msg: "Beim anlegen der Weiterleitungen ist ein Fehler aufgetreten:",
  redirectmanager_editor_actions_csvupload_upload_error_title: "Fehler beim Anlegen der Redirects",
  redirectmanager_editor_actions_csvupload_upload_error_msg: "Bitte senden Sie folgende Meldung an Ihren Administrator: <br /><br />",
  redirectmanager_editor_actions_csvupload_no_file_selected_title: "Keine Datei ausgewählt",
  redirectmanager_editor_actions_csvupload_no_file_selected_msg: "Bitte wählen Sie eine Datei aus...",
  redirectmanager_editor_actions_csvupload_import_result_title: "Import erfolgreich",
  redirectmanager_editor_actions_csvupload_import_result_msg: "<span style=\"font-weight: bold\">Der Import war erfolgreich<\/span> <br /><br />",
  redirectmanager_editor_actions_csvupload_import_result_not_created_msg: "Folgende Weiterleitungen konnten nicht angelegt werden:",
  redirectmanager_editor_actions_csvupload_import_result_button_ok_text: "OK",
  redirectmanager_editor_actions_csvupload_import_error_length_invalid: "Es werden 6 Spalten für den Import einer Umleitung benötigt.",
  redirectmanager_editor_actions_csvupload_import_error_active_invalid: "Der Wert für 'active' darf nur true oder false sein.",
  redirectmanager_editor_actions_csvupload_import_error_sourceUrlType_invalid: "Der Wert für 'sourceUrlType' darf entweder 'REGEX' oder 'PLAIN' sein.",
  redirectmanager_editor_actions_csvupload_import_error_source_invalid: "Der Wert für die Quelle darf nicht leer sein und muss mit einem '/' beginnen.",
  redirectmanager_editor_actions_csvupload_import_error_source_whitespace: "Der Wert für die Quelle darf keine Leerzeichen enthalten.",
  redirectmanager_editor_actions_csvupload_import_error_source_already_exists: "Es existiert bereits eine Umleitung für die Quelle mit den gleichen Quell-Parametern.",
  redirectmanager_editor_actions_csvupload_import_error_target_missing: "Die Umleitung benötigt ein Ziel.",
  redirectmanager_editor_actions_csvupload_import_error_target_invalid: "Um die Umleitung publizieren zu können muss das Ziel publiziert sein.",
  redirectmanager_editor_actions_csvupload_import_error_target_both: "Es sollte ein \"Ziel-Inhalt\" oder eine \"Ziel-Url\" verwendet werden, nicht beide.",
  redirectmanager_editor_actions_csvupload_import_error_target_url_invalid: "Die Ziel-Url ist ungültig.",
  redirectmanager_editor_actions_csvupload_import_error_redirectType_invalid: "Der Wert für 'redirectType' darf entweder 'ALWAYS' oder 'AFTER_NOT_FOUND' sein.",
  redirectmanager_editor_actions_csvupload_import_error_creation_failure: "Die Umleitung konnte nicht erstellt werden.",
  redirectmanager_editor_actions_csvupload_import_error_description_invalid: "Die Beschreibung ist ungültig. Sie darf nur 1024 Zeichen lang sein.",
  redirectmanager_editor_actions_csvupload_import_error_duplicate_source: "Der Csv-Import enthält die Quell-Url mit den gleichen Parametern mehrmals.",
  redirectmanager_editor_actions_csvupload_import_error_parsing_failure: "Die Umleitung konnte nicht erstellt werden, da die Quell- oder Ziel-Parameter nicht gelesen werden konnten.",
  redirectmanager_editor_error_source_invalid: "Der Wert für die Quelle darf nicht leer sein und muss mit einem '/' beginnen.",
  redirectmanager_editor_error_source_whitespace: "Der Wert für die Quelle darf keine Leerzeichen enthalten.",
  redirectmanager_editor_error_source_already_exists: "Es existiert bereits eine Umleitung für die Quelle mit den gleichen Quell-Parametern.",
  redirectmanager_editor_error_target_missing: "Die Umleitung benötigt ein Ziel.",
  redirectmanager_editor_error_target_invalid: "Um die Umleitung publizieren zu können muss das Ziel publiziert sein.",
  redirectmanager_editor_error_target_both: "Es sollte ein \"Ziel-Inhalt\" oder eine \"Ziel-Url\" verwendet werden, nicht beide.",
  redirectmanager_editor_error_target_url_invalid: "Die Ziel-Url ist ungültig.",
  redirectmanager_editor_error_description_invalid: "Die Beschreibung ist ungültig. Sie darf nur 1024 Zeichen lang sein.",
  redirectmanager_editor_grid_search_label: "Filter:",
  redirectmanager_editor_grid_search_empty_text: "Suchbegriff eingeben",
  redirectmanager_editor_grid_site_selector_label: "Umleitung der Seite:",
  redirectmanager_editor_grid_redirect_edit_label: "Umleitung bearbeiten",
  redirectmanager_editor_grid_redirect_delete_label: "Umleitung löschen",
  redirectmanager_editor_grid_redirect_open_label: "Umleitungsziel öffnen",
  redirectmanager_decision_use404Type: "Eine Quelle, die mit einer ID endet kann im Zusammenhang mit dem Typ \"Nur nach 404\" dazu führen, dass der Redirect nicht korrekt funktioniert. Der Typ sollte auf \"Immer\" geändert werden.",
  redirectmanager_decision_useAlwaysType: "Der Typ \"Immer\" sollte nur in Ausnahmefällen verwendet werden. Ansonsten könnten Anfragen auf gültige Seiten durch alte Umleitungen versehentlich umgeleitet werden. Der Typ sollte auf \"Nur nach 404\" geändert werden.",
  redirectmanager_decision_ok: "Typ ändern und speichern",
  redirectmanager_decision_title: "Überprüfung des Typ",
  redirectmanager_validation_error: "Die Umleitung konnte nicht validiert werden.",
  redirectmanager_validation_source_already_exists: "Es existiert bereits eine Umleitung für die Quelle.",
});
