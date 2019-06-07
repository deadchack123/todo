import Vue from 'vue';
import Vuex from 'vuex';
import { db } from "../main";
import { functions } from "firebase";
Vue.use(Vuex);

const state = {
    notes: [],
    rev: false,
    pageNumber: 0,
    size: 10,
    buttonSize: 2
};

const mutations = {
    ADD_NOTE(state, payload){
        let id = Math.max(...this.state.notes.map(o => o.id), 0) + 1;
        const createdAt = new Date()
        state.rev ? state.notes.reverse() : '';
        state.pageNumber != 0 ? state.pageNumber = 0 : '';
        db.collection("notes")
            .doc(String(id))
            .set({title: payload, isDone: false, id: id, createdAt: createdAt})
            .then(() => {
                state.notes.unshift({title: payload, isDone: false, id: id, createdAt: createdAt})
            })
        state.id++;
        state.rev = false;
    },

    REVERSE(state){
        state.rev ? state.rev = false : '';
        state.notes.reverse();
        state.rev = true;
    },

    DELETE_NOTE(state, payload){
        db.collection("notes")
        .doc(String(payload))
        .delete()
        .then(() => {
          let index = this.state.notes.findIndex(note => note.id == payload);
          this.state.notes.splice(index, 1);
        });
    },

    NEXT_PAGE(state){
        this.state.pageNumber++
    },

    PREV_PAGE(state){
        this.state.pageNumber--;
    },
    NOW_PAGE(state, payload){
        this.state.pageNumber = payload - 1;
    },
    DONE_NODE(state, payload){
        this.state.notes.forEach(note => {
            if(note.id == payload.id && payload.isDone == false){
                db.collection('notes')
                .doc(String(payload.id))
                .update({ isDone: true})
                .then(() => {
                    note.isDone = true 
                })   
            } else if (note.id == payload.id) {
                ndb.collection('notes')
                .doc(String(payload.id))
                .update({ isDone: false})
                .then(() => {
                    note.isDone = false 
                }) 
            }
        });
    },
    EDIT_NOTE(state, payload){
        db.collection('notes')
            .doc(String(payload.id))
            .update({ title: payload.value})
            .then(() => {
                this.state.notes.forEach(note => {
                    if(note.id == payload.id){
                        note.title = payload.value
                        this.$router.go(-1);
                    }
                })
            })
       
    },
    ADD_COLECTION(state){
        db.collection('notes')
            .orderBy('createdAt')
            .get()
            .then(querySnaphot => {
                querySnaphot.forEach(s => { 
                    this.state.notes.unshift(s.data())
                })          
            })
    },
    SET_PAG_PAGE(state, payload){
        this.state.pageNumber = payload - 1
    }
};

const actions = {
    addNote(context, payload){
        context.commit('ADD_NOTE', payload);
    },
    revNotes(context){
        context.commit('REVERSE');
    },
    delNote(context, payload){
        context.commit('DELETE_NOTE', payload);
    },
    nextPage(context){
        context.commit('NEXT_PAGE');
    },
    prevPage(context){
        context.commit('PREV_PAGE');
    },
    nowPage(context, payload){
        context.commit('NOW_PAGE', payload);
    },
    doneNode(context, payload){
        context.commit('DONE_NODE', payload);
    },
    editNote(context, payload){
        context.commit('EDIT_NOTE', payload);
    },
    addCollection(context){
        context.commit('ADD_COLECTION')
    },
    setPagPage(context,payload){
        context.commit('SET_PAG_PAGE', payload)
    }
};

const getters = {
    notes: state => state.notes,

    noteCount: state => state.notes.length,

    paginatedData(){
        const start = state.pageNumber * state.size,
                end = start + state.size;
        return state.notes.slice(start, end);
    },

    pageCount(){
        const l = state.notes.length,
            s = state.size;
        return Math.ceil(l / s);
    },

    pageNumberCount: state => state.pageNumber,

    pageButton(){
        const pages = []
        for(let i = getters.rangeStart(); i <= getters.rangeEnd(); i++){
            pages.push(i)
        }
        return pages;
    },

    rangeStart(){
        const start = (state.pageNumber + 1) - state.buttonSize
        return (start > 1) ? start : 1
    },

    rangeEnd(){
        const end = state.pageNumber + state.buttonSize
        return (end < getters.pageCount()) ? end : getters.pageCount()
    }

}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
});

export default store;