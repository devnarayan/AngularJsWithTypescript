declare var bootbox: any;

namespace Workpulse.Site {

    // Error detail codes as defined in Workpulse.Service/Enums.cs
    export const enum DetailCode {
        None = 0,
        UniqueViolation = 1,
        ForeignKeyInUse = 2,
        LimitReached = 3,
        NotEmployee = 100
    }

    // Not const so that it can be used by .js files.
    export enum NoteTypeId {
        Forms = 1,
        MatrixForms = 3,
        Feedback = 4,
        ActionPlan = 5,
        DevelopmentPlan = 6,
        CorrectiveAction = 7,
        EmployeeAction = 8,
        GuestComplaint = 9,
        GuestFeedback = 10,
        Task = 11,
        Wow = 12,
        HelpTicket = 13
    }

    // MstApplication Ids
    export const enum AppId {
        Complaint = 1,
        Audit = 2,
        Task = 3,
        Wow = 4,
        Remind = 5,
        Book = 6,
        People = 7,
        Inbox = 8,
        Survey = 9,
        Time = 10,
        Reports = 11,
        HelpTicket = 12,
        Message = 13,
        Quiz = 14,
        Insight = 15,
        JournalNote = 16,
        Knowledge = 17,
        Inventory = 18,
        Sales = 19,
        Prep = 20,
        Production = 21,
        Purchasing = 22,
        RMS = 23,
    }

    export const enum ScheduleTypeId {
        Daily = 301,
        Weekly = 302,
        BiWeekly = 303,
        Monthly = 304,
        Quarterly = 305,
        Yearly = 306,
        Days = 307,
        NHours = 308
    }
    export const enum ScheduleUIName {
        Book = 1,
        Audit = 2,
        SmartAudit = 3,
        Task = 4
    }

    // Not const so that it can be used by .js files.
    export enum IconId {
        UserNote = 1,
        ChangeStatus = 2,
        Reply = 3,
        Call = 4,
        Assign = 5,
        Pickup = 6,
        Escalation = 7,
        Mail = 8
    }

    // Well-known fixed string values used in the InputType column of MstBookInputType
    export const InputType = {
        Numeric: 'Numeric',
        Image: 'Image',
        YesNo: 'YesNo',
        Checkbox: 'Checkbox',
        Timer: 'Timer'
    }

    export const enum BookReadingTypeId {
        Manual = 101,
        Device = 102
    }

    export const enum PlanStatusId {
        Open = 1,
        InProgress = 2,
        Closed = 3
    }

    export const enum PlanTypeId {
        ActionPlan = 1,
        DevelopmentPlan = 2,
        CorrectiveAction = 3,
        GuestComplaint = 4
    }

    export const enum ProductTypeId {
        Finished = 1,
        Unfinished = 2,
        Ingredient = 3,
        RetailFinished = 4,
        RetailUnfinished = 5,
        RetailIngredient = 6
    }
    export const enum ReferenceType {
        Purchasing = 1,
        Sales = 2,
        Production = 3,
        Inventory = 4,
        Prep = 5,
        POS = 6
    }
    export const enum InvtTranType {
        PO = 1,
        SO = 2,
        IngredientPhysical = 3,
        Adjustment = 4,
        DonutBakeryWaste = 5,
        CarryOver = 6,
        Depletion = 7,
        IngredientWaste = 8,
        TransferIn = 9,
        TransferOut = 10,
        DonutBakeryAdjustment = 11,
        DonutBakeryTransferIn = 12,
        DonutBakeryTransferOut = 13,
        IcedBeverageWaste = 14,
        HotBeverageWaste = 15,
        MeatAndEggsWaste = 16,
        DonutBakeryPO = 17,
        IcedBeveragePO = 18,
        HotBeveragePO = 19,
        MeatAndEggsPO = 20,
        IcedBeveragePhysical = 21,
        MeatAndEggsPhysical = 22
    }
    export const enum StoredProcedureJobs {
        BookTasksPushData = 1,
        ProductsPushData = 2,
        FinancialPushData = 3,
        DashboardsPushData = 4,
        ReportsPushData = 5,
        ComplaintsPushData = 6,
        SalesPushData = 7,
        PermissionsPushData = 8,
        VendorsPushData = 9,
        KnowledgePushData = 10
    }

    export const enum ProductDemandType {
        HotHoldingDemand = 1,
        IcedBeverageDemand = 2,
        HotBeverageDemand = 3
    }

    export const enum TemplateTypeRMS {
        MeatEggs = 1,
        Bakery = 2,
        PhysicalInventory = 3,
        PurchaseOrder = 4,
        Waste = 5,
        IcedBeverage = 6,
        HotBeverage = 7,
        MeatAndEggs = 8
    }

    export const enum HelpPageId {
        PhysicalInventory = 9
    }

    export interface IHelpItem {
        pageName: string;
        uploadedPath: string;
        htmlContent: string;
    }

    export interface INote {
        noteId: NoteTypeId;
        noteActivityId: number;
        notes: string;
        empId: number;
    }

    export interface ISelectItem {
        value: number;
        text: string;
    }
    export interface ISelectStatusItem {
        value: number;
        text: string;
        status: boolean;
    }

    export interface ISelectTemplateLocationItem {
        value: number;
        text: string;
        locationId: number;
    }

    export interface ISelectLocationtem {
        value: number;
        text: string;
        status: boolean;
        name: string;
        pcNumber: string;
    }

    export interface IPermissionDetail {
        permissionId: number;
        addPermission: boolean;
        updatePermission: boolean;
        deletePermission: boolean;
        postPermission: boolean;
    }

    export const enum PermissionOption {
        //Sales Permissions
        Dashboard = 26,
        DailySales = 27,
        ProductMix = 28,
        EnterCashCount = 29,
        ShiftCashReconciliation = 30,
        SafeReconciliation = 31,
        BankDeposits = 32,
        PaidInOut = 33,
        DailySalesSummaryReport = 34,
        SalesbyRevenueCenter = 35,
        SalesbyDaypart = 36,
        ProductMixReport = 37,
        POSTransactionViewer = 38,
        SalesbyEmployee = 39,
        SalesbyTenderType = 40,
        MenuAnalysis = 41,
        CashShortOver = 42,
        SalesByTerminal = 43,
        SalesbyTime = 44,
        SalesSummaryConsolidatedReport = 45,
        SalesbyRevenueCenterConsolidatedReport = 46,
        SalesTrends = 47,
        LaborTrends = 48,
        ProfitabilityTrends = 49,
        LossPreventionTrends = 50,
        Items = 51,
        SalesEmployee = 52,
        SalesPayment = 53,
        POSTransactionViewerDetail = 54,
        DailySalesDetail = 55,
        Reports = 56,
        HourlySales = 57,
        ProductMixDetail = 58,
        WebBasedCashManagement = 76,
        DailySalesSummaryReportDetail = 77,

        //App Management Permissions
        OrgAdmin = 1,
        WowAdmin = 3,
        AD0003SecuredInformation = 83,
        RMSManagement = 100,
        //WowManagement = 99,
        AuditManagement = 98,
        QuizManagement = 97,
        ComplaintManagement = 96,
        TaskManagement = 95,
        BookManagement = 94,
        LocationManagement = 93,
        UserManagement = 92,
    }

    export interface IImage {
        imageBase64: string;
        contentType: string;
    }

    // String to string dictionary of URLs by key.
    const _urls: { [index: string]: string } = {};

    export function GetVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '2.5.2';
    }

    export function GetTaskAppVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '1.0.0';
    }

    export function GetHelpTicketAppVersion() {
        // Returns the current version of the Web app
        // This needs to be updated with each release
        return '1.0.0';
    }

    interface IUserInfo {
        firstName: string;
        fullName: string;
    }
    let _userInfo: IUserInfo;

    export function SetUserInfo(userInfo: IUserInfo) {
        _userInfo = userInfo;
    }

    export function GetUserInfo() {
        return _userInfo;
    }

    let _userFirstName: string;
    export function SetUserFirstName(firstName: string) {
        _userFirstName = firstName;
    }
    export function GetUserFirstName() {
        return _userFirstName;
    }

    let _userFullName: string;
    export function SetUserFullName(fullName: string) {
        _userFullName = fullName;
    }
    export function GetUserFullName() {
        return _userFullName;
    }

    /**
     * Webviews (pages designed to be hosted within a Workpulse app) must call this
     * method to share their OAuth bearer token with page's JavaScript so that it
     * can be used for authenticated API requests. See _LayoutWebView.cshtml.
     */
    let _apiToken: string;
    export function SetAuthToken(apiToken: string) {
        if (apiToken) {
            _apiToken = apiToken;
        }
        else {
            _apiToken = undefined;
        }
    }

    // The version of the API the web client is written to.
    const apiVersion = '2.0';

    /**
     * Get the AJAX HTTP headers for an API request that requires authentication
     * that may be from an app webview. The webviews' controller actions store the
     * bearer token from their page request.
     */
    export function GetAuthHeaders() {
        let ajaxHeaders: { Authorization?: string, 'x-wp-version': string } = { 'x-wp-version': apiVersion };
        if (_apiToken) {
            ajaxHeaders.Authorization = _apiToken;
        }
        return ajaxHeaders;
    }

    /**
     * $.ajax API request that includes the access token in the authentication header.
     * @param settings same as $.ajax url or settings parameter
     */
    export function AjaxApi(settings: JQueryAjaxSettings | string): JQueryXHR {
        if (typeof settings == 'string') {
            settings = { url: settings };
        }

        // Add the access token to the header.
        settings.headers = settings.headers || {};
        settings.headers.Authorization = _apiToken;
        settings.headers['x-wp-version'] = apiVersion;
        return $.ajax(settings);
    }

    /**
     * Add a set of URLs to the lookup. urls is an object where the properties
     * are the URL keys and the values are their corresponding URLs with a / prefix.
     * @param urls An object containing key:url properties
     */
    export function AddUrls(urls) {
        $.extend(_urls, urls);
    }

    /**
     * Get a URL by its key.  Returns undefined if the key isn't recognized.
     * 
     * @param key The name of the URL
     * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
     */
    export function GetUrl(key: string, idOrParams?: number | string | Object): string {
        let url = _urls[key];
        if (url && idOrParams !== undefined) {
            if (typeof idOrParams === 'object') {
                url = url + '?' + toUrlParams(idOrParams);
            } else {
                url = url + '/' + idOrParams;
            }
        }
        return url;
    }

    /**
     * Get a URL's query string value by its key.  Returns undefined if the key isn't recognized.
     * 
     * @param key The name of the URL
     * @param idOrParams Optional; can be either a single Id value, or an object of query params to be appended. If its an Id it's included as another path segment.
     */
    export function GetUrlQueryString(key: string): string {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars.push(hash[0]);
            vars[hash[0]] = hash[1];
        }
        return vars[key];
    }

    function toUrlParams(params: Object) {
        // Remove any null or undefined fields as they get generated as "field=" by
        // $.param which Web API doesn't like.
        for (let key in params) {
            let value = params[key];
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
    export function UrlParam(name: string, url?: string) {
        if (!url) {
            url = window.location.href;
        }
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)', 'i').exec(url);
        if (!results) {
            return undefined;
        }
        return results[1] || undefined;
    }

    /**
     * Get the query parameters from a URL as an object
     * Example: '?a=1&b=2&c=3' => {a: '1', b: '2', c: '3'}
     * @param url
     */
    export function GetUrlParams(url: string) {
        var regex = /[?&]([^=#]+)=([^&#]*)/g,
            params = {},
            match: RegExpExecArray;
        while (match = regex.exec(url)) {
            params[match[1]] = match[2];
        }
        return params;
    }

    /**
     * Get the best-available error message from the jQuery-wrapped XMLHttpRequest object
     * that's passed as the parameter to the error callback for $ajax.
     * @param jqXHR
     */
    export function XhrMessage(jqXHR: JQueryXHR): string {
        return (jqXHR.responseJSON && (jqXHR.responseJSON.exceptionMessage || jqXHR.responseJSON.message)) || jqXHR.statusText;
    }

    /**
     * Display a styled alert message box.
     * @param message The message to display or a jqXHR object to extract an error message from.
     * @param title Optional title for the box (defaults to 'Alert')
     * @param callback Optional callback that's called when the user clicks OK.
     */
    export function Alert(message: string | JQueryXHR, title = 'Alert', callback?: () => void) {
        if (typeof message !== 'string') {
            message = XhrMessage(message as JQueryXHR);
        }
        alert(message);
    }

    /**
     * Display a styled confirmation box.
     * @param message The confirmation message to display.
     * @param callback The callback to deliver the user's choice to.
     */
    export function Confirm(message: string, callback: (ok: boolean) => void) {
        bootbox.confirm({
            title: 'Confirm',
            message: message,
            callback: callback
        });
    }

    /**
     * Is the host a mobile browser?
     */
    export function IsMobileBrowser() {
        return navigator.userAgent.match(/iPhone|iPad|iPod|Android/i) !== null
    }

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
    export function FormatCurrency(amount: string) {
        var currency = "$";
        if (amount == null) amount = "0.00";
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

    export function SetHeaderLocationId(locationId: number) {

        localStorage.setItem("HeaderSelectedLocationId", locationId.toString());
    }

    export function GetHeaderLocationId() {
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

}