abstract class AppSettings {

    public static APP_ROOT = window['_app_baseUrl'];
    public static APP_PREFIX = window['_app_prefix'];

    /**
     * base url + application prefix
     */
    public static APP_BASE = AppSettings._getPath();

    private static _getPath() {
        if (window['_app_baseUrl'] && window['_app_prefix']) {
            return AppSettings.APP_ROOT + '/' + AppSettings.APP_PREFIX;
        } else {
            return null;
        }
    }
}

export { AppSettings as APP_CONFIG };
