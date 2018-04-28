import { createSelector } from 'reselect';
function getFromState(state) {
    return state.quizData;
}
export var getQuestionnaire = createSelector([getFromState], function (c) { return c; });
//# sourceMappingURL=Selectors.js.map