import { theme } from '../styles/theme';

interface FormInputProps {
  label: string;
  type: 'text' | 'email' | 'textarea';
  rows?: number;
}

const FormInput = ({ label, type, rows = 4 }: FormInputProps) => (
  <div>
    <label className="block mb-2 text-center" style={{ color: theme.blue }}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea
        rows={rows}
        className="w-full px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderColor: theme.green,
          borderWidth: '1px',
          color: theme.text
        }}
      />
    ) : (
      <input
        type={type}
        className="w-full px-4 py-2 rounded-lg transition-all duration-200 focus:outline-none"
        style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderColor: theme.green,
          borderWidth: '1px',
          color: theme.text
        }}
      />
    )}
  </div>
);

export default FormInput;
