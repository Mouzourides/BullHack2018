"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
function getFromState(state) {
    return state.quizData;
}
exports.getQuestionnaire = reselect_1.createSelector([getFromState], (c) => c);
//# sourceMappingURL=Selectors.js.map