import React from 'react';
import {View, Text , StyleSheet, Image, TouchableOpacity} from 'react-native';



export default function List(props){
   function carregaicone(likeada){
       return likeada ? require('../img/likeada.png') : 
       require('../img/like.png');
   }
   function mostraLikes(likes){
        if(likes === 0){
           return ;
        }
        return(
          <Text style={styles.likes}>{likes} {likes > 1 ? 'Curtidas': 'Curtida'}</Text>
        );
   }

    return(
       <View>
           <View style={styles.viewPerfil}>
                <Image 
                 source={{uri: props.data.imgperfil}}
                 style={styles.fotoPerfil}
                />
                <Text style={styles.textPerfil}>{props.data.nome}</Text>
           </View>
           <Image 
            resizeMode='cover'
            source={{uri: props.data.imgPublicacao}}
            style={styles.fotoPublicacao}
           />
           <View style={styles.areaBtn}>
             <TouchableOpacity>
                <Image
                 source={carregaicone(props.data.likeada)}
                 style={styles.iconeLike}
                />
             </TouchableOpacity>
             <TouchableOpacity style={styles.iconeComment}>
                <Image
                 source={require('../img/comment.png')}
                 style={styles.iconeLike}
                />
             </TouchableOpacity>
             <TouchableOpacity style={styles.iconeSend}>
                <Image
                 source={require('../img/send.png')}
                 style={styles.iconeLike}
                />
             </TouchableOpacity>
           </View>
           {mostraLikes(props.data.likers)}
           <Text style={styles.nomeUser}>
               {props.data.nome}
           </Text>
           <Text style={styles.descUser}>
               {props.data.descricao}
           </Text>
       </View>
    );
}

const styles = StyleSheet.create({
   viewPerfil:{
        flexDirection:'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
   },
   fotoPerfil:{
     width: 50,
     height: 50,
     borderRadius: 25,     
   },
   textPerfil:{
       paddingLeft: 10,
       fontSize: 22,
       color: '#000',
   },
   fotoPublicacao:{
       height: 400,
       alignItems: 'center',
   },
   areaBtn:{    
      flexDirection:'row',
      flex : 1 ,
      alignItems: 'flex-start',
      padding: 5,
   },
   iconeLike:{
      width: 25,
      height: 25,
   },
   iconeComment:{
      paddingLeft: 5,  
   },
   iconeSend:{
      paddingLeft: 5,
   },
   likes:{
     fontWeight:'bold',
     marginLeft: 5,      
   },
   nomeUser:{
      fontSize: 18,
      fontWeight:'bold',
      paddingLeft: 5,
   },
   descUser:{
      paddingLeft: 5,
      paddingBottom: 10,
      fontSize: 15,
   }
})
