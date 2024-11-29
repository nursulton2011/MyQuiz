import { Button, Input } from "../components";

// Массив уровней
const levels = [1, 2, 3, 4, 5];

export const StepFour = () => {
  return (
    <div className="emoji-quiz">
      <div className="question">
        <h2>4. Занимательный вопрос</h2>
        <ul className="level-variants">
          {
            levels.map((level, index) => (
              <li className="variant-wrapper" key={index}>
                <Input InputType="radio" InputName="variant" InputID={`variant-${level}`} />
                <label htmlFor={`variant-${level}`}>{level}</label>
              </li>
            ))
          }
        </ul>
        <Button type="button" id="next-btn" text="Далее" disabled />
      </div>
    </div>
  );
};
