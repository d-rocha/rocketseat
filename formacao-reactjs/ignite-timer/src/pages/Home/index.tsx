import { NewTask } from '../../components/Task/NewTask';

import { HomeContainer } from './styles';

export function Home(){
  return (
    <HomeContainer>
      <NewTask />
    </HomeContainer>
  )
}