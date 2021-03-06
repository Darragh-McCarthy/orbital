System.register(["angular2/core", "./firebase-note.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, firebase_note_service_1;
    var NoteService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (firebase_note_service_1_1) {
                firebase_note_service_1 = firebase_note_service_1_1;
            }],
        execute: function() {
            NoteService = (function () {
                function NoteService(_FirebaseNoteService) {
                    this._FirebaseNoteService = _FirebaseNoteService;
                }
                NoteService.prototype.get = function (tagName) {
                    return this._FirebaseNoteService.get(tagName).then(function (notes) {
                        notes.forEach(function (each) {
                            //each.tags = each.tags || [];
                        });
                        return notes;
                    });
                };
                NoteService.prototype.promiseNotesByTagName = function (tagName) { };
                NoteService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [firebase_note_service_1.FirebaseNoteService])
                ], NoteService);
                return NoteService;
            }());
            exports_1("NoteService", NoteService);
        }
    }
});
//# sourceMappingURL=note.service.js.map