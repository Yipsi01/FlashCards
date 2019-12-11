import * as React from 'react';
import { Button, View, Text, Image, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';



class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: 'center', flexDirection: 'column' }}>
       <ImageBackground source={require('./img/insecto.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        <Text style= {styles.submitButtonText}>INSECTOS</Text>
        <Button
          title="INSECTS FLASHCARDS "
          onPress={() => this.props.navigation.navigate('Details')}
        />
        </ImageBackground>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        
        <ImageBackground source={require('./img/insecto.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "stretch",  justifyContent: "space-between"}}>
        <Text style= {styles.submitButtonText}>INSECTOS</Text>
        <Button 
          title="MARIPOSA MONARCA"
          //onPress={() => this.props.navigation.push('MARIPOSA MONARCA')}
          onPress={() => this.props.navigation.navigate('MARIPOSA MONARCA')}
         />
        <Button
          title="MANTIS RELIGIOSA"
          onPress={() => this.props.navigation.navigate('MANTIS RELIGIOSA')}
        />
        <Button
          title="ESCARABAJOS"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('ESCARABAJOS')}
        />
        <Button
          title="LUCIERNAGAS"
          //onPress={() => this.props.navigation.push('LUCIÉRNAGAS')}
          onPress={() => this.props.navigation.navigate('LUCIÉRNAGAS')}
        />
        <Button
          title="CABALLITOS DEL DIABLO"
          onPress={() => this.props.navigation.navigate('CABALLITOS DEL DIABLO')}
        />
        <Button
          title="ABEJAS"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('ABEJAS')}
        />
        <Button
          title="ESCARABAJO RINOCERONTE"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('ESCARABAJO RINOCERONTE')}
        />
        <Button
          title="CICADAS"
          //onPress={() => this.props.navigation.push('CICADAS')}
          onPress={() => this.props.navigation.navigate('CICADAS')}
        />
          <Button
          title="GRILLOS"
          //onPress={() => this.props.navigation.push('GRILLOS')}
          onPress={() => this.props.navigation.navigate('GRILLOS')}
        />

        <Button
          title="CHINCHELASCAMAS"
          //onPress={() => this.props.navigation.push('GRILLOS')}
          onPress={() => this.props.navigation.navigate('CHINCHELASCAMAS')}
        />
          
          <Button
          title="MEGALÓPTEROS"
          //onPress={() => this.props.navigation.push('MEGALÓPTEROS')}
          onPress={() => this.props.navigation.navigate('MEGALÓPTEROS')}
        />
          <Button
          title="INSECTOS PALO"
          //onPress={() => this.props.navigation.push('INSECTOS PALO')}
          onPress={() => this.props.navigation.navigate('INSECTOS PALO')}
        />
          <Button
          title="PIOJOS"
          //onPress={() => this.props.navigation.push('PIOJOS')}
          onPress={() => this.props.navigation.navigate('PIOJOS')}
        />
        <Button
          title="AbispaEsmeralda"
          //onPress={() => this.props.navigation.push('PIOJOS')}
          onPress={() => this.props.navigation.navigate('AbispaEsmeralda')}
        />
          <Button
          title="ABEJORROS"
          //onPress={() => this.props.navigation.push('ABEJORROS')}
          onPress={() => this.props.navigation.navigate('ABEJORROS')}
        />
         
        
        <Button
          title="AVISPAS"
          onPress={() => this.props.navigation.navigate('AVISPAS')}
        />
        <Button
        
        
          title="MOSCAS"
          //onPress={() => this.props.navigation.goBack()}
          onPress={() => this.props.navigation.navigate('MOSCAS')}
        />
         </ImageBackground>
      </View>
    );
  }
}

class MARIPOSAMONARCA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/1.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>MARIPOSA MONARCA</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/1.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        La mariposa monarca,3 (Danaus plexippus), es una especie de lepidóptero ditrisio de 
        la familia Nymphalidae. Es quizás la más conocida de todas las mariposas de América del Norte.
         Desde el siglo XIX ha sido introducida en Nueva Zelanda y en Australia. 
         En el Atlántico es residente en las Islas Canarias,
         Azores y Madeira, y se encuentra como una ocasional migrante en Europa Occidental. 
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class MANTISRELIGIOSA extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/2.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>MANTIS RELIGIOSA</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/2.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los mantodeos (Mantodea, de Mantis y del griego eidés, "que tiene aspecto de") 
        son un orden de insectos neópteros comúnmente conocidos como mantis, mamboretás,
         santa teresas, rezadoras o campamochas. Se conocen unas 2.450 especies repartidas por todo el mundo, 
        pero con especial diversidad en los trópicos.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class ESCARABAJOS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/3.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>ESCARABAJOS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/3.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los coleópteros son insectos holometábolos o endopterigotos, 
        ya que sufren una metamorfosis completa con estados de larva, 
        pupa e imago (adulto) netamente diferenciados. La larva normalmente sufre muchas mudas. 
        Por el contrario, en los órdenes de insectos hemimetábolos o exopterigotos (por ejemplo los Dermaptera) 
        las larvas o ninfas experimentan una metamorfosis incompleta o parcial por lo que se parecen a los adultos, 
        con esbozos alares y genitalia que crecen con cada muda.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class LUCIERNAGAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/4.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>LUCIÉRNAGAS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/4.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los lampíridos (Lampyridae) son una familia de coleópteros polífagos que incluye las luciérnagas 
        o bichos de luz, caracterizados por su capacidad de emitir luz (bioluminiscencia). 
        Se conocen más de 2.000 especies. Muchas se pueden encontrar en pantanos o en las áreas húmedas y boscosas,
        donde sus larvas tienen una fuente de alimento abundante.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class CABALLITOSDELDIABLO extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/5.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>CABALLITOS DEL DIABLO</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/5.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los zigópteros (Zygoptera) son un suborden del orden Odonata, conocidos 
        popularmente como caballitos del diablo. Se diferencian de otros odonatos porque 
        sus alas en descanso se alinean 
        junto al abdomen y porque los ojos están netamente separados. 
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class ABEJAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/6.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>ABEJAS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/6.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
         
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class ESCARABAJORINOCERONTE extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/7.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>ESCARABAJO RINOCERONTE</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/7.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los escarabajos rinoceronte son coleópteros provistos de uno o más cuernos en la cabeza, 
        en el protórax o en ambos. La mayoría son miembros de la familia Scarabaeidae y de la subfamilia 
        Dynastinae; algunos pertenecen a la familia Geotrupidae. Dichos cuernos están, en general,
         mucho más desarrollados en los machos, 
        ya que los utilizan en sus luchas para conseguir pareja.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class CICADAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/8.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>CICADAS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/8.jpg')}
        />
        <Text style={{textAlign: "center"}}> 
        Los auquenorrincos (Auchenorrhyncha) son un suborden del orden Hemiptera
         con muchos miembros bien conocidos del grupo tradicional Homoptera, 
         con las familias de Cicadidae, Cicadellidae, Membracidae, Fulgoromorpha, 
         y la superfamilia Cercopoidea. Los áfidos y Coccoidea son los otros miembros de "Homoptera",
          y pertenecen al suborden Sternorrhyncha. Se distribuyen mundialmente y todos son fitófagos.
           Los miembros de Auchenorrhyncha suelen
         producir sonidos audibles e infrasonidos como forma de comunicación.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class GRILLOS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/9.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>GRILLOS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/9.jpg')}
        />

        <Text style={{textAlign: "center"}}> 
        Los gríllidos (Gryllidae) son una familia de insectos ortópteros de 
        la superfamilia Grylloidea, dentro del suborden Ensifera. A esta familia pertenecen 
        insectos conocidos vulgarmente como grillos. Son, por lo general, insectos de color marrón a negro,
         con hábitos nocturnos. Algunas especies se encuentran en las casas, los grillos domésticos,
          por ejemplo Acheta domesticus y Gryllus bimaculatus en zonas templadas 
        y Gryllodes supplicans o Gryllodes sigillatus en zonas tropicales.
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class CHINCHEDELASCAMAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/10.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>CHINCHE DE LAS CAMAS</Text>
        <Image
          style={{width: '95%', height: '35%'}}
          source={require('./img/10.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
        Cimex lectularis es la especie de chinche que mejor se ha adaptado al entorno humano. 
        Se encuentra en climas templados de todo el mundo y se alimenta de sangre.
         Existen otras especies como son Cimex hemipterus, que se encuentra en las regiones tropicales, 
         que también infecta a pollos y murciélagos, y Leptocimex boueti, que se encuentra en los trópicos 
         de África occidental y Suramérica, 
        que infecta a murciélagos y humanos.
       
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class MEGALOPTEROS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/11.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>MEGALÓPTEROS</Text>
        <Image
          style={{width: '95%', height: '30%'}}
          source={require('./img/11.jpg')}
        />

        <Text style={{textAlign: "center"}}>
        Los adultos de este orden pueden distinguirse por la forma de abanico de sus alas posteriores,
         con envergadura hasta 16 cm. Los machos, especialmente de los géneros Corydalus y Acanthacorydalis,
          poseen mandíbulas sumamente grandes.
          Las larvas son alargadas aplanadas, llegan a los 10 mm de longitud,
          y poseen unas poderosas mandíbulas, presentan filamentos y penachos abdominales, y branquias bajo éstos.
         
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class INSECTOSPALO extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/12.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>INSECTOS PALO</Text>
        <Image
          style={{width: '95%', height: '50%'}}
          source={require('./img/12.jpg')}
        />

        <Text style={{textAlign: "center"}}>
        Insectos palo: alargados, menudos ápteros, cilíndricos, similares a pequeñas ramitas tanto en color como en forma.
        Insectos hoja: formas aladas, de cuerpo ancho, aplanado dorsoventalmente, con expansiones laminares en las patas y similares 
        a hojas.
        Insectos corteza: suelen tener el cuerpo más robusto y en muchas ocasiones con protuberancias en forma de pequeñas espinas 
        sobre todo o parte del cuerpo.
      
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class PIOJOS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ImageBackground source={require('./img/13.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>PIOJOS</Text>
        <Image
          style={{width: '90%', height: '30%'}}
          source={require('./img/13.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
        Son altamente específicos con el huésped muchas especies incluso prefieren lugares específicos en el cuerpo de su huésped.
         Mientras los piojos pasan su vida entera sobre el huésped, han desarrollado adaptaciones que los habilitan para mantener
          un contacto cercano con él. Estas adaptaciones son reflejadas en su tamaño (de 0,5 a 8 mm), patas y garras 
          fuertes para agarrarse firmemente al pelo, piel y plumas, sin alas e inflados dorsoventralmente. Se alimentan 
          de restos de piel (epidermal), partes de plumas, secreciones sebáceas y sangre. Su color varía de beige pálido a gris oscuro. 
          Si se alimentan de sangre, pueden ser considerablemente más oscuros. 
        Los piojos no saltan pero pueden ser contagiados por contacto, pues suelen trasladarse de un huésped a otro.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class AvispaEsmeralda extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/14.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>Avispa Esmeralda</Text>
        <Image
          style={{width: '95%', height: '30%'}}
          source={require('./img/14.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
        a avispa esmeralda (Ampulex compressa) es una especie de himenóptero apócrito de la familia Ampulicidae.
         Se la conoce por su particular ciclo reproductivo tan complejo, que consiste en controlar cucarachas vivas 
         para conducirlas hasta el nido, donde se convierten en huéspedes de sus larvas. Este mecanismo es denominado guía parasitosa,
          que consiste en la utilización de los "servicios"
         que pueda prestar un individuo, a gusto y placer puros de quien los utiliza.
   
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

class ABEJORROS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/15.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>ABEJORROS</Text>
        <Image
          style={{width: '90%', height: '40%'}}
          source={require('./img/15.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
        Bombus es un género de himenópteros de la familia Apidae que incluye las especies conocidas por el nombre común de abejorro o moscardón; 
        si bien este último nombre común también alude a otro orden de insectos totalmente diferente, 
        los dípteros (véase por ejemplo moscardón cazador de abejas). También se le conoce como cigarrón,
         si bien este nombre puede referirse a los abejorros carpinteros (mayormente en Venezuela) o a saltamontes.
        Los abejorros son robustos, velludos, de color negro, muchos presentan bandas amarillas, blancas o en algunos casos naranja. 
        El vello que cubre casi todo el cuerpo es sedoso, con setas ramificadas, plumosas.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}


class AVISPAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/16.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>AVISPAS</Text>
        <Image
          style={{width: '100%', height: '40%'}}
          source={require('./img/6.jpg')}
        />

        <Text style={{textAlign: "center"}}>
        Los véspidos (Vespidae) son una familia de himenópteros apócritos, cosmopolita y diversa (alrededor de 5.000 especies)
         que incluye a casi todas las avispas eusociales conocidas, así como muchas avispas solitarias. 
         Se distinguen de otras familias cercanas, a veces también denominadas de manera genérica avispas, 
         porque pliegan las alas en reposo. Las patas son de largo normal,
         no tan largas como las de la familia Pompilidae.
     
        </Text>
        </ImageBackground>
      </View>
    );
  }
}

class MOSCAS extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageBackground source={require('./img/17.jpg')} style={{width: '100%', height: '100%', flex: 1, alignItems: "center",  justifyContent: "flex-start"}}>
        <Text style= {styles.submitButtonText}>MOSCAS</Text>
        <Image
          style={{width: '95%', height: '40%'}}
          source={require('./img/17.jpg')}
        />
        <ScrollView>
        <Text style={{textAlign: "center"}}>
        Mosca es el nombre vulgar dado a numerosas especies de insectos, sobre todo a las pertenecientes 
        al orden de los dípteros (Diptera). Seguramente, las moscas han seguido al
         hombre desde la prehistoria y son, 
        por tanto, unos de los insectos más arraigados en el imaginario popular.
        El término "mosca" es muy vago y es difícil precisar qué especies se incluyen bajo esta denominación.
        </Text>
        </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}


const RootStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailsScreen,
  img1: MARIPOSAMONARCA,
  img2: MANTISRELIGIOSA,
  img3: ESCARABAJOS,
  img4: LUCIERNAGAS,
  img5: CABALLITOSDELDIABLO,
  img6:ABEJAS,
  img7: ESCARABAJORINOCERONTE,
  img8: CICADAS,
  img9: GRILLOS,
  img10:CHINCHEDELASCAMAS,
  img11: MEGALOPTEROS,
  img12: INSECTOSPALO,
  img13:PIOJOS,
  img14: AvispaEsmeralda,
  img15: ABEJORROS,
  img16: AVISPAS,
  img17: MOSCAS
 

});

export default createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '80%'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  },
  countText: {
    color: '#FF00FF'
  },
  submitButton: {
    backgroundColor: '#000000',
    width: '80%',
    borderRadius: 10,
    marginLeft: '25%',
    height: '5%',
  },

  submitButtonDicc: {
    backgroundColor: '#000',
    width: '45%',
    alignContent: "center"
  },
  
  submitButtonText: {
    textAlign: 'center',
    height: 80,
    fontWeight: "bold",
    fontSize: 25
  },
})
