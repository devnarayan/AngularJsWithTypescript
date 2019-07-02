var Workpulse;
(function (Workpulse) {
    var Site;
    (function (Site) {
        // Not const so that it can be used by .js files.
        var NoteTypeId;
        (function (NoteTypeId) {
            NoteTypeId[NoteTypeId["Forms"] = 1] = "Forms";
            NoteTypeId[NoteTypeId["MatrixForms"] = 3] = "MatrixForms";
            NoteTypeId[NoteTypeId["Feedback"] = 4] = "Feedback";
            NoteTypeId[NoteTypeId["ActionPlan"] = 5] = "ActionPlan";
            NoteTypeId[NoteTypeId["DevelopmentPlan"] = 6] = "DevelopmentPlan";
            NoteTypeId[NoteTypeId["CorrectiveAction"] = 7] = "CorrectiveAction";
            NoteTypeId[NoteTypeId["EmployeeAction"] = 8] = "EmployeeAction";
            NoteTypeId[NoteTypeId["GuestComplaint"] = 9] = "GuestComplaint";
            NoteTypeId[NoteTypeId["GuestFeedback"] = 10] = "GuestFeedback";
            NoteTypeId[NoteTypeId["Task"] = 11] = "Task";
            NoteTypeId[NoteTypeId["Wow"] = 12] = "Wow";
            NoteTypeId[NoteTypeId["HelpTicket"] = 13] = "HelpTicket";
        })(NoteTypeId = Site.NoteTypeId || (Site.NoteTypeId = {}));
        // Not const so that it can be used by .js files.
        var IconId;
        (function (IconId) {
            IconId[IconId["UserNote"] = 1] = "UserNote";
            IconId[IconId["ChangeStatus"] = 2] = "ChangeStatus";
            IconId[IconId["Reply"] = 3] = "Reply";
            IconId[IconId["Call"] = 4] = "Call";
            IconId[IconId["Assign"] = 5] = "Assign";
            IconId[IconId["Pickup"] = 6] = "Pickup";
            IconId[IconId["Escalation"] = 7] = "Escalation";
            IconId[IconId["Mail"] = 8] = "Mail";
        })(IconId = Site.IconId || (Site.IconId = {}));
        // Well-known fixed string values used in the InputType column of MstBookInputType
        Site.InputType = {
            Numeric: 'Numeric',
            Image: 'Image',
            YesNo: 'YesNo',
            Checkbox: 'Checkbox',
            Timer: 'Timer'
        };
        // String to string dictionary of URLs by key.
        var _urls = {};
        function GetVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '2.5.2';
        }
        Site.GetVersion = GetVersion;
        function GetTaskAppVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '1.0.0';
        }
        Site.GetTaskAppVersion = GetTaskAppVersion;
        function GetHelpTicketAppVersion() {
            // Returns the current version of the Web app
            // This needs to be updated with each release
            return '1.0.0';
        }
        Site.GetHelpTicketAppVersion = GetHelpTicketAppVersion;
        var _userInfo;
        function SetUserInfo(userInfo) {
            _userInfo = userInfo;
        }
        Site.SetUserInfo = SetUserInfo;
        function GetUserInfo() {
            return _userInfo;
        }
        Site.GetUserInfo = GetUserInfo;
        var _userFirstName;
        function SetUserFirstName(firstName) {
            _userFirstName = firstName;
        }
        Site.SetUserFirstName = SetUserFirstName;
        function GetUserFirstName() {
            return _userFirstName;
        }
        Site.GetUserFirstName = GetUserFirstName;
        var _userFullName;
        function SetUserFullName(fullName) {
            _userFullName = fullName;
        }
        Site.SetUserFullName = SetUserFullName;
        function GetUserFullName() {
            return _userFullName;
        }
        Site.GetUserFullName = GetUserFullName;
        /**
         * Webviews (pages designed to be hosted within a Workpulse app) must call this
         * method to share their OAuth bearer token with page's JavaScript so that it
         * can be used for authenticated API requests. See _LayoutWebView.cshtml.
         */
        var _apiToken;
        function SetAuthToken(apiToken) {
            if (apiToken) {
                _apiToken = apiToken;
            }
            else {
                _apiToken = undefined;
            }
        }
        Site.SetAuthToken = SetAuthToken;
        // The version of the API the web client is written to.
        var apiVersion = '2.0';
        /**
         * Get the AJAX HTTP headers for an API request that requires authentication
         * that may be from an app webview. The webviews' controller actions store the
         * bearer token from their page request.
         */
        function GetAuthHeaders() {
            var ajaxHeaders = { 'x-wp-version': apiVersion };
            if (_apiToken) {
                ajaxHeaders.Authorization = _apiToken;
            }
            return ajaxHeaders;
        }
        Site.GetAuthHeaders = GetAuthHeaders;
        /**
         * $.ajax API request that includes the access token in the authentication header.
         * @param settings same as $.ajax url or settings parameter
         */
        function AjaxApi(settings) {
            if (typeof settings == 'string') {
                settings = { url: settings };
            }
            // Add the access token to the header.
            settings.headers = settings.headers || {};
            settings.headers.Authorization = _apiToken;
            settings.headers['x-wp-version'] = apiVersion;
            return $.ajax(settings);
        }
        Site.AjaxApi = AjaxApi;
        /**
         * Add a set of URLs to the lookup. urls is an object where the properties
         * are the URL keys and the values are their corresponding URLs with a / prefix.
         * @param urls An object containing key:url properties
         */
        function AddUrls(urls) {
            $.extend(_urls, urls);
        }
        Site.AddUrls = AddUrls;
        /**
         * Get a URL by its key.  Returns undefined if the key isn't recognized.
         *
         * @param key The name of the URL
         * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
         */
        function GetUrl(key, idOrParams) {
            var url = _urls[key];
            if (url && idOrParams !== undefined) {
                if (typeof idOrParams === 'object') {
                    url = url + '?' + toUrlParams(idOrParams);
                }
                else {
                    url = url + '/' + idOrParams;
                }
            }
            return url;
        }
        Site.GetUrl = GetUrl;
        /**
         * Get a URL's query string value by its key.  Returns undefined if the key isn't recognized.
         *
         * @param key The name of the URL
         * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
         */
        function GetUrlQueryString(key) {
            var vars = [], hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
            return vars[key];
        }
        Site.GetUrlQueryString = GetUrlQueryString;
        function toUrlParams(params) {
            // Remove any null or undefined fields as they get generated as "field=" by
            // $.param which Web API doesn't like.
            for (var key in params) {
                var value = params[key];
                if (value === null || value === undefined) {
                    delete params[key];
                }
            }
            return $.param(params);
        }
        /**
         * Get a url parameter by name
         * @param name The parameter name
         * @param url The URL to parse; if not provided, the current location is used
         */
        function UrlParam(name, url) {
            if (!url) {
                url = window.location.href;
            }
            var results = new RegExp('[\\?&]' + name + '=([^&#]*)', 'i').exec(url);
            if (!results) {
                return undefined;
            }
            return results[1] || undefined;
        }
        Site.UrlParam = UrlParam;
        /**
         * Get the query parameters from a URL as an object
         * Example: '?a=1&b=2&c=3' => {a: '1', b: '2', c: '3'}
         * @param url
         */
        function GetUrlParams(url) {
            var regex = /[?&]([^=#]+)=([^&#]*)/g, params = {}, match;
            while (match = regex.exec(url)) {
                params[match[1]] = match[2];
            }
            return params;
        }
        Site.GetUrlParams = GetUrlParams;
        /**
         * Get the best-available error message from the jQuery-wrapped XMLHttpRequest object
         * that's passed as the parameter to the error callback for $ajax.
         * @param jqXHR
         */
        function XhrMessage(jqXHR) {
            return (jqXHR.responseJSON && (jqXHR.responseJSON.exceptionMessage || jqXHR.responseJSON.message)) || jqXHR.statusText;
        }
        Site.XhrMessage = XhrMessage;
        /**
         * Display a styled alert message box.
         * @param message The message to display or a jqXHR object to extract an error message from.
         * @param title Optional title for the box (defaults to 'Alert')
         * @param callback Optional callback that's called when the user clicks OK.
         */
        function Alert(message, title, callback) {
            if (title === void 0) { title = 'Alert'; }
            if (typeof message !== 'string') {
                message = XhrMessage(message);
            }
            alert(message);
        }
        Site.Alert = Alert;
        /**
         * Display a styled confirmation box.
         * @param message The confirmation message to display.
         * @param callback The callback to deliver the user's choice to.
         */
        function Confirm(message, callback) {
            bootbox.confirm({
                title: 'Confirm',
                message: message,
                callback: callback
            });
        }
        Site.Confirm = Confirm;
        /**
         * Is the host a mobile browser?
         */
        function IsMobileBrowser() {
            return navigator.userAgent.match(/iPhone|iPad|iPod|Android/i) !== null;
        }
        Site.IsMobileBrowser = IsMobileBrowser;
        /**
        * Format Amount
        */
        var settings = {
            // These are the defaults.
            decimal_separator: ",",
            number_separator: ",",
            currency: "$",
            to_fixed: 2
        };
        function FormatCurrency(amount) {
            var currency = "$";
            if (amount == null)
                amount = "0.00";
            amount = amount.toString();
            amount = amount.replace(currency, '');
            amount = amount.replace(settings.decimal_separator, "");
            amount = amount.replace(settings.number_separator, settings.decimal_separator);
            var num = Number(amount.trim());
            if (num.toString() == "NaN") {
                num = 0;
            }
            var money = currency + '' + num.toFixed(settings.to_fixed).replace(/(\d)(?=(\d{3})+\.)/g, '$1' + settings.number_separator).replace(settings.decimal_separator, settings.number_separator).replace(settings.number_separator, settings.decimal_separator);
            //If negative value, then place - sign before $.
            if (money.search('-') > 0) {
                money = "-" + money.replace('-', '');
            }
            return money;
        }
        Site.FormatCurrency = FormatCurrency;
        function SetHeaderLocationId(locationId) {
            localStorage.setItem("HeaderSelectedLocationId", locationId.toString());
        }
        Site.SetHeaderLocationId = SetHeaderLocationId;
        function GetHeaderLocationId() {
            var locationId = localStorage.getItem("HeaderSelectedLocationId");
            if (locationId == undefined) {
                locationId = $("#HeaderSelectedLocationId").val();
                if (locationId == undefined) {
                    locationId = "0"; //WebView not have HeaderSelectedLocationId, so set it 0.
                }
                localStorage.setItem("HeaderSelectedLocationId", locationId.toString());
            }
            else {
                $("#HeaderSelectedLocationId").val(locationId);
            }
            return locationId;
        }
        Site.GetHeaderLocationId = GetHeaderLocationId;
    })(Site = Workpulse.Site || (Workpulse.Site = {}));
})(Workpulse || (Workpulse = {}));
//# sourceMappingURL=site.js.map