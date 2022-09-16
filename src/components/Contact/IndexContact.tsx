import SocialMedias from '../UI/SocialMedias';
import styles from './IndexContact.module.css';
import {Button, Icon} from 'semantic-ui-react'


const IndexContact =() => {

    return <>
    <div className={styles.mainIndexContact}>
    <div className={styles.heading}>Contact me</div>
    <div className={styles.text1}>I'd Love to hear from you!</div>
    <a href="https://instagram.com/_shehry.public?igshid=NmNmNjAwNzg="><Button animated inverted color='red' size="big">
      <Button.Content visible>Get in Touch</Button.Content>
      <Button.Content hidden>
        <Icon name='instagram' />
      </Button.Content>
    </Button></a> 
    <div className={styles.text2}>Or, Hire me on <span className={styles.upwork}>Upwork</span></div>
    <div className={styles.social}><SocialMedias/></div>
 

    </div>
    </>
}

export default IndexContact;