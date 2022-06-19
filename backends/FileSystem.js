var Promise = require('bluebird')

module.exports = {

    /**
     * 200 Status Code를 회신한다.
     */
    _200: function (params) {
        return new Promise(function (resolve, reject) {
            resolve({
                "message": "Service is up!"
            })
        })
    },

    folders: function (params) {
        return new Promise(function (resolve, reject) {
            resolve([{
                "id": "1409",
                "isFolder": true,
                "value": "My files",
                "modified": "19-06-2022",
                "items": [{
                    "id": "1416",
                    "isFolder": true,
                    "value": "Documents",
                    "modified": "19-06-2022"
                }, {"id": "1434", "isFolder": true, "value": "Music", "modified": "19-06-2022"}, {
                    "id": "1436",
                    "isFolder": true,
                    "value": "Photos",
                    "modified": "19-06-2022"
                }]
            }])
        })
    },

    files: function (params) {
        return new Promise(function (resolve, reject) {
            resolve([{
                "id": "1417",
                "value": "Menu.html",
                "name": "Menu.html",
                "size": 373,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Menu.html"
            }, {
                "id": "1418",
                "value": "Message.html",
                "name": "Message.html",
                "size": 507,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Message.html"
            }, {
                "id": "1419",
                "value": "Popup.html",
                "name": "Popup.html",
                "size": 368,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Popup.html"
            }, {
                "id": "1420",
                "value": "Ribbon.html",
                "name": "Ribbon.html",
                "size": 389,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Ribbon.html"
            }, {
                "id": "1421",
                "value": "Sidebar.html",
                "name": "Sidebar.html",
                "size": 398,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Sidebar.html"
            }, {
                "id": "1422",
                "value": "Slider.html",
                "name": "Slider.html",
                "size": 487,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Slider.html"
            }, {
                "id": "1423",
                "value": "Suite-6.0-Release-Notes.pdf",
                "name": "Suite-6.0-Release-Notes.pdf",
                "size": 413303,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "application/pdf",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Suite-6.0-Release-Notes.pdf"
            }, {
                "id": "1424",
                "value": "Tabbar.html",
                "name": "Tabbar.html",
                "size": 389,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Tabbar.html"
            }, {
                "id": "1425",
                "value": "Time picker.html",
                "name": "Time picker.html",
                "size": 446,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Time%20picker.html"
            }, {
                "id": "1426",
                "value": "Toolbar.html",
                "name": "Toolbar.html",
                "size": 396,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Toolbar.html"
            }, {
                "id": "1427",
                "value": "Tree.html",
                "name": "Tree.html",
                "size": 401,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Tree.html"
            }, {
                "id": "1428",
                "value": "TreeGrid.html",
                "name": "TreeGrid.html",
                "size": 723,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/TreeGrid.html"
            }, {
                "id": "1429",
                "value": "What is Suite 6.0.docx",
                "name": "What is Suite 6.0.docx",
                "size": 6977,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/What%20is%20Suite%206.0.docx"
            }, {
                "id": "1430",
                "value": "Window.html",
                "name": "Window.html",
                "size": 428,
                "modified": "19-06-2022",
                "created": "19-06-2022",
                "type": "text/html",
                "url": "./backend/download?path=/root_ui328913617389/My%20files/Documents/Window.html"
            }])
        })
    },

    get: function (params) {
        return new Promise(function (resolve, reject) {

            Comment.find(params, function (err, comments) {
                if (err) {
                    reject(er)
                    return
                }

                resolve(comments)

            })
        })
    },

    getById: function (id) {
        return new Promise(function (resolve, reject) {

            Comment.findById(id, function (err, comment) {
                if (err) {
                    reject(er)
                    return
                }

                resolve(comment)

            })
        })
    },

    getByPhotoId: function (photo_id) {
        return new Promise(function (resolve, reject) {

            var filters = {
                sort: {
                    timestamp: -1
                }
            }

            Comment.find({photo_id: {$eq: photo_id}}, null, filters, function (err, comments) {
                if (err) {
                    reject(er)
                    return
                }

                resolve(comments)

            })
        })
    },

    post: function (params) {
        return new Promise(function (resolve, reject) {

            Comment.create(params, function (err, comment) {
                if (err) {
                    reject(er)
                    return
                }

                resolve(comment)

            })
        })
    },

    delete: function (id) {
        return new Promise(function (resolve, reject) {

            Comment.findByIdAndRemove(id, function (err, comment) {
                if (err) {
                    reject(err)
                    return
                }

                resolve(comment)
            })
        })
    }

}