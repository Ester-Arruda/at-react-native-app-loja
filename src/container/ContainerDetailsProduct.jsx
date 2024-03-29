import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DetailsProduct } from '../components/DetailsProduct';
import { MoreDetailsProduct } from '../components/MoreDetailsProduct';
import { VendorInformation } from '../components/VendorInformation';
import { Comments } from '../components/Comments';
import { Doubts } from '../components/Doubts';

const Tab = createBottomTabNavigator();

export function ContainerDetailsProduct({ route  }) {
  const { params } = route

  return (
    <Tab.Navigator initialRouteName="DetalhesProduto">
      <Tab.Screen name="Detalhes de Produto">
        {() => <DetailsProduct
          name={params.product.name} 
          image={params.product.image} 
          description={params.product.description} 
        />}
      </Tab.Screen>
      <Tab.Screen name="Mais Detalhes de Produto">
        {() => <MoreDetailsProduct
          name={params.product.name} 
          price={params.product.price} 
          technicalSpecifications={params.product.technicalSpecifications} 
        />}
      </Tab.Screen>
      <Tab.Screen name="Informações de Vendedor">
        {() => <VendorInformation
          vendorData={params.product.vendorData} 
        />}
      </Tab.Screen>
      <Tab.Screen name="Comentários">
        {() => <Comments
          commentUser={params.product.comments} 
        />}
      </Tab.Screen>
      <Tab.Screen name="Dúvidas">
        {() => <Doubts
          doubtsUser={params.product.questions} 
        />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
