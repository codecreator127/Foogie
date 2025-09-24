export interface Food {
  name: string;
  attributes: string[];        // e.g., ["breakfast", "sweet", "american"]
  dietary?: string[];          // optional, e.g., ["vegetarian", "gluten-free"]
}

export interface QuestionOption {
  label: string;               // what the user sees
  value: string;               // the actual value used for filtering
}

export interface Question {
  id: string;                  // unique identifier for the question
  text: string;                // the question text
  options: QuestionOption[];   // the list of possible answers
}

export type AppState = 'welcome' | 'questions' | 'result' | 'learning';
