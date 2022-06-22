# Introdução ao React Native

## Descrição
Curso de introdução ao React Native realizado pela Digital Innovation One, onde foi realizado uma tela de perfil utilizando informações do GitHub.

![profile_screen project print](./assets/profile_screen_print.png)

## Conteúdos do curso
 - Conhecendo o React Native
   - O que é React Native
   - O que é <i>cross-platform</i>
 - Documentação
   - Componentes
   - API
   - Blog
 - Instalação
   - React Native CLI
     - Chocolatey
     - Node
     - Java (JDK)
     - Yarn
     - Android Studio
     - Android SDK
   - React Native Expo CLI 
     - Node
     - ```npm start -g expo-cli```
     - ```expo init project```
     - ```cd project```
     - ```npm run start || npm start```
     - Expo Go no dispositivo físico

## Componentes utilizados:
 - StyleSheet: funcionamento semelhante ao CSS padrão.
   - Os estilos são escritos como objetos em JavaScript, que devem ser aplicados por meio de atributos na própria tag:
   ```javascript
      const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
        },
      })
    ```

 - FlexBox: funcionalidades semelhantes ao CSS, mas é ativado por padrão.

 - View: funcionamento semelhantes a ```<div> </div>``` do HTML. A diferença principal é no "display", que é, por padrão, em colunas.

 - Text: funcionamento semelhante ao `p` do HTML

 - Image: deve conter, como atributo, a URL (uri).

 - SafeAreaView: área de visualização fora do notch e detalhes do display.
 
 - StatusBar: estilização e manipulação da barra de notificações do dispositivo.
 
 - Pressable: componente que deve conter componentes para criação do botão desejado. Pode executar as funções de clique, clique longo e afins.
 
 - Linking API: utiliza códigos assíncronos para realizarem requisições.
    - ```javascript 
      Linking.canOpenURL()
      ```
    - ```javascript 
      Linking.openURL()
      ```