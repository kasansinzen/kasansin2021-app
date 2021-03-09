const initialState: {[key: string]: any} = {
  aboutResult: [],
  skillResult: [],
  toolResult: [],
  languageResult: [],
  educationResult: [],
  careerResult: [],
}

export default (state = initialState, action: {type: string, value: any}) => {
  switch(action.type) {
    case 'ABOUT_RESULT': return {...state, aboutResult: action.value};
    case 'SKILL_RESULT': return {...state, skillResult: action.value};
    case 'TOOL_RESULT': return {...state, toolResult: action.value};
    case 'LANGUAGE_RESULT': return {...state, languageResult: action.value};
    case 'EDUCATION_RESULT': return {...state, educationResult: action.value};
    case 'CAREER_RESULT': return {...state, careerResult: action.value};

    default: return state;
  }
}