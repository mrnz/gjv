/******************************************************************************/
/* general tags */
html {
    font-size: 82%;
}

input, select, textarea {
    font-size: 1em;
}

body {
    font-family:        sans-serif;
    background:         url(./themes/pmahomme/img/left_nav_bg.png) repeat-y right 0% #f3f3f3;
    border-right:       1px solid #aaa;
    color:              #000000;
    margin:             0;
    padding:            0;
}

a img {
    border: 0;
}

a:link,
a:visited,
a:active {
    text-decoration:    none;
    color:              #0000FF;
}

ul {
    margin:0;
}

form {
    margin:             0;
    padding:            0;
    display:            inline;
}

select#select_server,
select#lightm_db {
    width:              100%;
}

/* buttons in some browsers (eg. Konqueror) are block elements,
   this breaks design */
button {
    display:            inline;
}

/******************************************************************************/
/* classes */

.navi_dbName {
    font-weight:    bold;
    color:          #0000FF;
}

/******************************************************************************/
/* specific elements */

div#pmalogo {
    }

div#recentTableList {
    text-align: center;
    margin: 20px 10px 0px 10px;
}

div#recentTableList select {
    width: 100%;
}

div#pmalogo,
div#leftframelinks,
div#databaseList {
    text-align:         center;
    margin:             5px 10px 0px 10px;
}

ul#databaseList {
    margin: 0.8em 0px;
    padding-bottom:     0.5em;
    padding-left:     0.3em;
    font-style: italic;
}

ul#databaseList span {
    padding: 5px;
}

ul#databaseList a {
    color: #333;
    background: url(./themes/pmahomme/img/database.png) no-repeat 0 5px transparent;
    display: block;
    text-indent: 0;
    padding: 5px 5px 5px 25px;
    font-style: normal;
}

div#navidbpageselector {
    margin: 0.1em;
    text-align: center;
}

div#navidbpageselector a,
div#navidbpageselector select{
    color: #333;
    margin: 0.2em;
}

ul#databaseList ul {
    margin: 0;
    padding: 0;
}

ul#databaseList li {
    list-style: none;
    text-indent: 20px;
    margin: 0;
    padding: 0;
}

ul#databaseList a:hover {
    background-color: #e4e4e4;
}

ul#databaseList li.selected a {
    background: #FFCC99;
    color: #000000;
}

div#leftframelinks .icon {
    padding:            0;
    margin:             0;
}

div#reloadlink a img,
div#leftframelinks a img.icon {
    margin:        0.3em;
    margin-top:    0.7em;
    border:        0;
}

div#leftframelinks a:hover img {

}

/* serverlist */
#body_leftFrame #list_server {
    list-style-image: url(./themes/original/img/s_host.png);
    list-style-position: inside;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

#body_leftFrame #list_server li {
    margin: 0;
    padding: 0;
}

div#left_tableList {margin:10px 10px 0 10px;}
div#left_tableList ul {
    list-style-type:    none;
    list-style-position: outside;
    margin:             0;
    padding:            0;
}

div#left_tableList ul ul {
    font-size:          100%;
}

div#left_tableList a {
    color:              #000000;
    text-decoration:    none;
}

div#left_tableList a:hover {
    background:         #D0DCE0;
    color:              #000000;
    text-decoration:    underline;
}

div#left_tableList li {
    margin:             0;
    padding:            2px 0;
    white-space:        nowrap;
}

#newtable {
    margin-top: 15px !important;
}

#newtable a {
    display: block;
    padding: 1px;
    background-image: url(./themes/svg_gradient.php?from=ffffff&to=cccccc);
background-size: 100% 100%;
background: -webkit-gradient(linear, left top, left bottom, from(#ffffff), to(#cccccc));
background: -webkit-linear-gradient(top, #ffffff, #cccccc);
background: -moz-linear-gradient(top, #ffffff, #cccccc);
background: -ms-linear-gradient(top, #ffffff, #cccccc);
background: -o-linear-gradient(top, #ffffff, #cccccc);    border: 1px solid #aaa;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    border-radius: 20px;
}

#newtable li:hover {
    background: transparent !important;
}

#newtable a:hover {
    background-image: url(./themes/svg_gradient.php?from=cccccc&to=dddddd);
background-size: 100% 100%;
background: -webkit-gradient(linear, left top, left bottom, from(#cccccc), to(#dddddd));
background: -webkit-linear-gradient(top, #cccccc, #dddddd);
background: -moz-linear-gradient(top, #cccccc, #dddddd);
background: -ms-linear-gradient(top, #cccccc, #dddddd);
background: -o-linear-gradient(top, #cccccc, #dddddd);}

#newtable li a:hover {
    text-decoration: none;
}

select{
    -moz-border-radius:2px 2px 2px 2px;
    -moz-box-shadow:0 1px 2px #DDDDDD;
    border:1px solid #aaa;
    color:#333333;
    padding:3px;
    background:url(./themes/pmahomme/img/input_bg.gif);
}

/* marked items */
div#left_tableList > ul li.marked > a,
div#left_tableList > ul li.marked {
    background: #e4e4e4;
    color: #000000;
}

div#left_tableList > ul li:hover > a,
div#left_tableList > ul li:hover {
    background:         #e4e4e4;
    color:              #000000;
}

div#left_tableList img {
    padding:            0;
    vertical-align:     middle;
}

div#left_tableList ul ul {
    margin-left:        0;
    padding-left:       0.1em;
    border-left:        0.1em solid #000000;
    padding-bottom:     0.1em;
    border-bottom:      0.1em solid #000000;
}

/* for the servers list in navi panel */
#serverinfo .item {
    white-space:        nowrap;
    color:              #000000;
}
#serverinfo a:hover {
    background:         #9999CC;
    color:              #000000;
}
#reloadlink {
    clear: both;
    float: right;
    display: block;
    padding: 1em;
}

#NavFilter {
    display: none;
}

#clear_fast_filter {
    background: white;
    color: black;
    cursor: pointer;
    padding: 0;
    margin: 0;
    position: relative;
    right: 3ex;
}

#fast_filter {
    width: 85%;
    padding: 0.1em;
}

#fast_filter.gray {
    color: gray;
}/* Icon sprites */
.icon, .footnotemarker {
    margin:              0 0.3em;
    padding:             0 !important;
    width:               16px;
    height:              16px;
    background-image:    url('./themes/pmahomme/img/sprites.png') !important;
    background-repeat:   no-repeat !important;
    background-position: top left !important;
}

.ic_asc_order { background-position: 0 -16px !important; }
.ic_b_bookmark { background-position: 0 -32px !important; }
.ic_b_browse { background-position: 0 -48px !important; }
.ic_b_calendar { background-position: 0 -64px !important; }
.ic_b_chart { background-position: 0 -80px !important; }
.ic_b_close { background-position: 0 -96px !important; }
.ic_b_comment { background-position: 0 -112px !important; }
.ic_bd_browse { background-position: 0 -128px !important; }
.ic_b_dbstatistics { background-position: 0 -144px !important; }
.ic_bd_deltbl { background-position: 0 -160px !important; }
.ic_bd_drop { background-position: 0 -176px !important; }
.ic_bd_edit { background-position: 0 -192px !important; }
.ic_b_deltbl { background-position: 0 -208px !important; }
.ic_bd_empty { background-position: 0 -224px !important; }
.ic_bd_export { background-position: 0 -240px !important; }
.ic_bd_firstpage { background-position: 0 -256px !important; }
.ic_bd_ftext { background-position: 0 -272px !important; }
.ic_bd_index { background-position: 0 -288px !important; }
.ic_bd_insrow { background-position: 0 -304px !important; }
.ic_bd_lastpage { background-position: 0 -320px !important; }
.ic_bd_nextpage { background-position: 0 -336px !important; }
.ic_b_docs { background-position: 0 -352px !important; }
.ic_b_docsql { background-position: 0 -368px !important; }
.ic_bd_prevpage { background-position: 0 -384px !important; }
.ic_bd_primary { background-position: 0 -400px !important; }
.ic_b_drop { background-position: 0 -416px !important; }
.ic_bd_sbrowse { background-position: 0 -432px !important; }
.ic_bd_select { background-position: 0 -448px !important; }
.ic_bd_spatial { background-position: 0 -464px !important; }
.ic_bd_unique { background-position: 0 -480px !important; }
.ic_b_edit { background-position: 0 -496px !important; }
.ic_b_empty { background-position: 0 -512px !important; }
.ic_b_engine { background-position: 0 -528px !important; }
.ic_b_event_add { background-position: 0 -544px !important; }
.ic_b_events { background-position: 0 -560px !important; }
.ic_b_export { background-position: 0 -576px !important; }
.ic_b_firstpage { background-position: 0 -592px !important; }
.ic_b_ftext { background-position: 0 -608px !important; }
.ic_b_help { background-position: 0 -624px !important; }
.ic_b_home { background-position: 0 -640px !important; }
.ic_b_import { background-position: 0 -656px !important; }
.ic_b_index { background-position: 0 -672px !important; }
.ic_b_info { background-position: 0 -688px !important; width: 11px; height: 11px; }
.ic_b_inline_edit { background-position: 0 -704px !important; }
.ic_b_insrow { background-position: 0 -720px !important; }
.ic_b_lastpage { background-position: 0 -736px !important; }
.ic_b_minus { background-position: 0 -752px !important; }
.ic_b_more { background-position: 0 -768px !important; }
.ic_b_newdb { background-position: 0 -784px !important; }
.ic_b_newtbl { background-position: 0 -800px !important; }
.ic_b_nextpage { background-position: 0 -816px !important; }
.ic_b_pdfdoc { background-position: 0 -832px !important; }
.ic_b_plus { background-position: 0 -848px !important; }
.ic_b_prevpage { background-position: 0 -864px !important; }
.ic_b_primary { background-position: 0 -880px !important; }
.ic_b_print { background-position: 0 -896px !important; }
.ic_b_props { background-position: 0 -912px !important; }
.ic_b_relations { background-position: 0 -928px !important; }
.ic_b_routine_add { background-position: 0 -944px !important; }
.ic_b_routines { background-position: 0 -960px !important; }
.ic_b_save { background-position: 0 -976px !important; }
.ic_b_sbrowse { background-position: 0 -992px !important; }
.ic_b_sdb { background-position: 0 -1008px !important; width: 10px; height: 10px; }
.ic_b_search { background-position: 0 -1024px !important; }
.ic_b_selboard { background-position: 0 -1040px !important; }
.ic_b_select { background-position: 0 -1056px !important; }
.ic_b_snewtbl { background-position: 0 -1072px !important; }
.ic_b_spatial { background-position: 0 -1088px !important; }
.ic_b_sqldoc { background-position: 0 -1104px !important; }
.ic_b_sqlhelp { background-position: 0 -1120px !important; }
.ic_b_sql { background-position: 0 -1136px !important; }
.ic_b_tblanalyse { background-position: 0 -1152px !important; }
.ic_b_tblexport { background-position: 0 -1168px !important; }
.ic_b_tblimport { background-position: 0 -1184px !important; }
.ic_b_tblops { background-position: 0 -1200px !important; }
.ic_b_tbloptimize { background-position: 0 -1216px !important; }
.ic_b_tipp { background-position: 0 -1232px !important; }
.ic_b_trigger_add { background-position: 0 -1248px !important; }
.ic_b_triggers { background-position: 0 -1264px !important; }
.ic_b_unique { background-position: 0 -1280px !important; }
.ic_b_usradd { background-position: 0 -1296px !important; }
.ic_b_usrcheck { background-position: 0 -1312px !important; }
.ic_b_usrdrop { background-position: 0 -1328px !important; }
.ic_b_usredit { background-position: 0 -1344px !important; }
.ic_b_usrlist { background-position: 0 -1360px !important; }
.ic_b_view { background-position: 0 -1376px !important; }
.ic_b_views { background-position: 0 -1392px !important; }
.ic_col_drop { background-position: 0 -1408px !important; }
.ic_database { background-position: 0 -1424px !important; }
.ic_docs_menu_bg { background-position: 0 -1440px !important; width: 2px; height: 2px; }
.ic_eye_grey { background-position: 0 -1456px !important; }
.ic_eye { background-position: 0 -1472px !important; }
.ic_item_ltr { background-position: 0 -1488px !important; width: 5px; height: 9px; }
.ic_item { background-position: 0 -1504px !important; width: 9px; height: 9px; }
.ic_item_rtl { background-position: 0 -1520px !important; width: 5px; height: 9px; }
.ic_more { background-position: 0 -1536px !important; width: 13px; }
.ic_new_data_hovered { background-position: 0 -1552px !important; }
.ic_new_data { background-position: 0 -1568px !important; }
.ic_new_data_selected_hovered { background-position: 0 -1584px !important; }
.ic_new_data_selected { background-position: 0 -1600px !important; }
.ic_new_struct_hovered { background-position: 0 -1616px !important; }
.ic_new_struct { background-position: 0 -1632px !important; }
.ic_new_struct_selected_hovered { background-position: 0 -1648px !important; }
.ic_new_struct_selected { background-position: 0 -1664px !important; }
.ic_pause { background-position: 0 -1680px !important; }
.ic_php_sym { background-position: 0 -1696px !important; }
.ic_play { background-position: 0 -1712px !important; }
.ic_s_asci { background-position: 0 -1728px !important; }
.ic_s_asc { background-position: 0 -1744px !important; }
.ic_s_attention { background-position: 0 -1760px !important; }
.ic_s_cancel2 { background-position: 0 -1776px !important; }
.ic_s_cancel { background-position: 0 -1792px !important; }
.ic_s_cog { background-position: 0 -1808px !important; }
.ic_s_db { background-position: 0 -1824px !important; }
.ic_s_desc { background-position: 0 -1840px !important; }
.ic_s_error2 { background-position: 0 -1856px !important; width: 11px; height: 11px; }
.ic_s_error { background-position: 0 -1872px !important; }
.ic_s_host { background-position: 0 -1888px !important; }
.ic_s_info { background-position: 0 -1904px !important; }
.ic_s_lang { background-position: 0 -1920px !important; }
.ic_s_loggoff { background-position: 0 -1936px !important; }
.ic_s_notice { background-position: 0 -1952px !important; }
.ic_s_okay { background-position: 0 -1968px !important; }
.ic_s_passwd { background-position: 0 -1984px !important; }
.ic_s_process { background-position: 0 -2000px !important; }
.ic_s_really { background-position: 0 -2016px !important; width: 11px; height: 11px; }
.ic_s_reload { background-position: 0 -2032px !important; }
.ic_s_replication { background-position: 0 -2048px !important; }
.ic_s_rights { background-position: 0 -2064px !important; }
.ic_s_sortable { background-position: 0 -2080px !important; }
.ic_s_status { background-position: 0 -2096px !important; }
.ic_s_success { background-position: 0 -2112px !important; }
.ic_s_sync { background-position: 0 -2128px !important; }
.ic_s_tbl { background-position: 0 -2144px !important; }
.ic_s_theme { background-position: 0 -2160px !important; }
.ic_s_vars { background-position: 0 -2176px !important; }
.ic_s_views { background-position: 0 -2192px !important; }
.ic_window-new { background-position: 0 -2208px !important; }
img.sortableIcon { background-position: 0 -2080px; height: 16px; width: 16px; }
th.headerSortUp img.sortableIcon { background-position: 0 -1744px; height: 16px; width: 16px; }
th.headerSortDown img.sortableIcon { background-position: 0 -1840px; height: 16px; width: 16px; }
