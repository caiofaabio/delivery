import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Container, Form, Inner } from './styles'
import Head from '../../components/Head'
import OrderHeader from '../../components/OrderHeader'
import PayOrder from '../../components/OrderCloseAction/PayOrder'

const schema = yup.object({
  fullName: yup.string().required('Nome e sobrenome são obrigatórios').min(3, 'Nome e sobrenome muito curto.'),
  email: yup.string().email().required('Email é obrigatório.'),
  mobile: yup.string().required('Celular é obrigatório.'),
}).required();

type FieldValues = yup.InferType<typeof schema>;



const Payment = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data)

  return (
    <Container>
      <Head title='Pagamento' />
      <OrderHeader />
      <Inner>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h4>Informações pessoais</h4>

          <div className='field'>
            <label htmlFor='fullName'>Nome e sobrenome:</label>
            <input
              type='text'
              id='fullName'
              placeholder='Nome e sobrenome'
              autoComplete='name'
              {... register('fullName')}
            />
            {errors.fullName && <p className='error'>{errors.fullName.message}</p>}
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                placeholder='Email'
                {... register('email')}
                autoComplete='email'
              />
              {errors.email && <p className='error'>{errors.email.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='mobile'>Celular:</label>
              <input
                type='tel'
                id='mobile'
                placeholder='Celular'
                {... register('mobile')}
                autoComplete='phone'
              />
              {errors.mobile && <p className='error'>{errors.mobile.message}</p>}
            </div>

            <div className='field'>
              <label htmlFor='document'>CPF / CNPJ:</label>
              <input type='text' id='document' placeholder='CPF/CNPJ' name='document' />
            </div>
          </div>

          <h4>Endereço de entrega</h4>

          <div className='field'>
            <label htmlFor='zipcode'>CEP:</label>
            <input
              type='text'
              id='zipcode'
              placeholder='CEP'
              name='zipcode'
              autoComplete='postal-code'
              style={{ width: '120px' }}
            />
          </div>

          <div className='field'>
            <label htmlFor='street'>Endereço:</label>
            <input type='text' id='street' placeholder='Endereço' name='street' />
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='number'>Número:</label>
              <input type='number' id='number' placeholder='Número' name='number' />
            </div>

            <div className='field'>
              <label htmlFor='complement'>Complemento:</label>
              <input type='text' id='complement' placeholder='Complemento' name='complement' />
            </div>
          </div>

          <div className='grouped'>
            <div className='field'>
              <label htmlFor='neighbodood'>Bairro:</label>
              <input type='text' id='neighbodood' placeholder='Bairro' name='neighbodood' />
            </div>

            <div className='field'>
              <label htmlFor='city'>Cidade:</label>
              <input type='text' id='city' placeholder='Cidade' name='city' />
            </div>

            <div className='field'>
              <label htmlFor='state'>Estado</label>
              <select id='state' name='state'>
                <option value=''>Selecione</option>
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Goiás</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value='PB'>Paraíba</option>
                <option value='PR'>Paraná</option>
                <option value='PE'>Pernambuco</option>
                <option value='PI'>Piauí</option>
                <option value='RJ'>Rio de Janeiro</option>
                <option value='RN'>Rio Grande do Norte</option>
                <option value='RS'>Rio Grande do Sul</option>
                <option value='RO'>Rondônia</option>
                <option value='RR'>Roraima</option>
                <option value='SC'>Santa Catarina</option>
                <option value='SP'>São Paulo</option>
                <option value='SE'>Sergipe</option>
                <option value='TO'>Tocantins</option>
                <option value='DF'>Distrito Federal</option>
              </select>
            </div>
          </div>

          <h4>Pagamento</h4>

          <div className='field'>
            <label htmlFor='credit-card-number'>Número do cartão:</label>
            <input
              type='text'
              id='credit-card-number'
              placeholder='Número do cartão'
              name='cc-number'
            />
          </div>

          <div className='field'>
            <label htmlFor='credit-card-holder-name'>Nome impresso no cartão:</label>
            <input
              type='text'
              id='credit-card-holder-name'
              placeholder='Nome no cartão'
              name='cc-name'
            />
          </div>

            <div className='grouped'>
            <div className='field'>
              <label htmlFor='credit-card-expiration'>Validade:</label>
              <input type='text' id='credit-card-expiration' placeholder='Validade' name='credit-card-expiration' autoComplete='cc-exp'/>
            </div>

            <div className='field'>
              <label htmlFor='credit-card-code'>Código de segurança (CVV):</label>
              <input type='text' id='credit-card-code' placeholder='Código de segurança' name='credit-card-code' autoComplete='cc-csc'/>
            </div>
          </div>
        <PayOrder />
        </Form>
      </Inner>
    </Container>
  )
}

export default Payment
