var myExtObject = ((_) => {

    return {

        createDossier: (url, userName, password, projectID, dossierID, pageNo) => {

            //END CONFIG PARAMETERS -------------------------------------------------------------------------
            //Form PostData for login REST request
            var postData = {};
            postData.username = userName;
            postData.password = password;
            postData.loginMode = 1;
            var projectUrl = url + '/app/' + projectID;
            var dossierUrl = projectUrl + '/' + dossierID + '/' + pageNo;
            console.log("DossierURL: " + dossierUrl);
            microstrategy.dossier.create({
                placeholder: document.getElementById("dossierContainer"),
                url: dossierUrl,
                navigationBar: {
                    enabled: true,
                    gotoLibrary: true,
                    title: true,
                    toc: true,
                    reset: true,
                    reprompt: true,
                    share: true,
                    comment: true,
                    notification: true,
                    filter: true,
                    options: true,
                    search: true,
                    bookmark: true
                },

                enableCustomAuthentication: true,
                enableResponsive: false,
                containerWidth: 400,
                containerHeight: 400,
                customAuthenticationType: microstrategy.dossier.CustomAuthenticationType.AUTH_TOKEN,
                getLoginToken: function () {
                    return getXHRRequestPromise(url + '/api/auth/login', postData, 'POST', 'application/json', 'x-mstr-authToken').then(function (authToken) {
                        return authToken

                    })
                }
            }).then((dossier) => {
                //any code you want to run after dossier loads
                var selectHandler = (e) => {

                    if (e.graphics.length == 0) {
                        document.getElementById("badge").innerText = "-";
                    }
                    debugger;
                    var selection = e.graphics[0][e.graphics[0].length - 1];
                    document.getElementById("badge").innerText = selection.v.toUpperCase();
                    debugger;
                }
                dossier.registerEventHandler(
                    "onGraphicsSelected",
                    selectHandler)
            });
            const getXHRRequestPromise = (host, body, method, _contentType, desiredHeader) => {
                return new Promise((resolve, reject) => {
                    var xhr = new XMLHttpRequest();
                    xhr.withCredentials = true;
                    xhr.open(method, host);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.setRequestHeader("Accept", "application/json");
                    xhr.send(JSON.stringify(body));
                    xhr.onreadystatechange = () => {
                        if (xhr.readyState === 2) {
                            resolve(xhr.getResponseHeader(desiredHeader));
                        } else {
                            reject({
                                status: xhr.status,
                                statusText: xhr.statusText
                            });
                        }
                    };
                });
            };
        }
    }

})(myExtObject)