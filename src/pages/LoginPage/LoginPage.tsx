import { InputSelect } from '@/components'

const LoginPage = () => (
  <div className="p-8">
    <h1 className="text-preset-2 font-bold text-foreground mb-2">Login Page</h1>
    <p className="text-preset-6 text-secondary">Login Page.</p>
    <InputSelect options={[{ value: '1', label: 'Option 1' }, { value: '2', label: 'Option 2' }]} />
  </div>
)

export default LoginPage
