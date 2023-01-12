import {Dispatch, SetStateAction} from "react";

interface TodoFormProps {
  title: string;
  content: string;
  setTitle: Dispatch<SetStateAction<string>>;
  setContent: Dispatch<SetStateAction<string>>;
  handleCancel: () => void;
  handleSubmit: () => void;
  cancelLabel: string;
  submitLabel: string;
}

const TodoForm = (props: TodoFormProps) => {
  return (
    <div className={`flex flex-col items-center justify-center 
                    bg-neutral-200 p-4 m-2 rounded-lg`}
    >
      <span>Title</span>
      <input className={`bg-neutral-100 w-2/3 h-8 rounded mb-4`}
             type="text"
             value={props.title}
             onChange={(e) => props.setTitle(e.target.value)}
      />
      <span>Content</span>
      <input className={`bg-neutral-100 w-2/3 h-8 rounded mb-6`}
             type="text"
             value={props.content}
             onChange={(e) => props.setContent(e.target.value)}
      />
      <div className={`flex flex-row gap-8`}>
        <button onClick={props.handleCancel}> {props.cancelLabel} </button>
        <button onClick={props.handleSubmit}> {props.submitLabel} </button>
      </div>
    </div>
  )
}

export default TodoForm;