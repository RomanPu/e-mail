import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

export const emailService = {
    query,
    save,
    remove,
    getById,
    defoultFilter
}

const STORAGE_KEY = 'emails'

_createEmails()

async function query(filterBy) {
    var emails = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        // if (filterBy.status === "all") return emails
        //var  = filterBy.filter
        console.log("service......" ,filterBy)
        var { folder , filter: { txt, readStatus}} = filterBy
        
        if (folder !== "all") emails = emails.filter(email => email.status === folder)
        if (readStatus !== "all") emails = emails.filter(email => email.isRead === 
            (readStatus === "read" ? true : false))
        if (txt)  emails = emails.filter(email => email.subject.toLowerCase().includes(txt.toLowerCase())
        || email.body.toLowerCase().includes(txt.toLowerCase()))

        // var { type, maxBatteryStatus, minBatteryStatus, model } = filterBy
        // maxBatteryStatus = maxBatteryStatus || Infinity
        // minBatteryStatus = minBatteryStatus || 0
        // emails = emails.filter(email => email.type.toLowerCase().includes(type.toLowerCase()) && email.model.toLowerCase().includes(model.toLowerCase())
        //     && (email.batteryStatus < maxBatteryStatus)
        //     && email.batteryStatus > minBatteryStatus)
    }
    console.log("service......" ,emails)
    return emails
}

function defoultFilter(){
    return {folder : "inbox", filter: {txt : "", readStatus : "all"}}
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(emailToSave) {
    console.log(emailToSave)
    if (emailToSave.id) {
        return storageService.put(STORAGE_KEY, emailToSave)
    } else {
        emailToSave.isOn = false
        return storageService.post(STORAGE_KEY, emailToSave)
    }
}


function _createEmails() {
    let emails = utilService.loadFromStorage(STORAGE_KEY)
    if (!emails || !emails.length) {
        emails = [
            { id: 'r1', subject: 'hy', body: "cxgfd", isRead: false, isStarred: false, sentAt : 1551133930594,
            removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
            { id: 'r2', subject: 'by', body: "ha ", isRead: false, isStarred: false, sentAt : 1551133930594,
                removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
                { id: 'r3', subject: 'dy', body: "ha ha ", isRead: false, isStarred: false, sentAt : 1551133930594,
                    removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
                    { id: 'r4', subject: 'ny', body: "la ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
                        removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
                        { id: 'r5', subject: 'hy', body: "ha ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
                            removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
                            { id: 'r6', subject: 'by', body: "ha ", isRead: false, isStarred: false, sentAt : 1551133930594,
                                removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "inbox"},
                                { id: 'r37', subject: 'dy', body: "ha ha ", isRead: false, isStarred: false, sentAt : 1551133930594,
                                    removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
                                    { id: 'r46', subject: 'ny', body: "la ha ha", isRead: false, isStarred: false, sentAt : 1551133930594,
                                        removedAt : null, from : "momo@shalomo.com", to: "terry@createBrowserHistory.com", status : "sent"},
                
        ]
        utilService.saveToStorage(STORAGE_KEY, emails)
    }
}

 




