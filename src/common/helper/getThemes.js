import { Colors, FontSize, FontWeight } from '../constants';

export const getFont = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    if (reg.test(text) === false) {
      return false;
    } else {
      return true;
    }
};

export const getColor = (req) => {
  if(req=='danger') {
    return { bgColor: Colors.PRIMARY_RED, borderColor: Colors.PRIMARY_RED_DARK, textColor: Colors.BASE_WHITE };
  }
  else if(req=='info') {
    return { bgColor: Colors.SECONDARY_LIGHT_GREAY, borderColor: Colors.PRIMARY_PURPAL, textColor: Colors.BASE_BLACK };
  }
  else if(req=='disable') {
    return { bgColor: Colors.SECONDARY_DARK_GREAY, borderColor: Colors.SECONDARY_DARK_GREAY, textColor: Colors.BASE_BLACK };
  }
  else if(req=='primary') {
    return { bgColor: Colors.Primary_Light, borderColor: Colors.PRIMARY_PURPAL_MEDIUM, textColor: Colors.BASE_WHITE };
  }
  else if(req=='primaryDark') {
    return { bgColor: Colors.PRIMARY_PURPAL_DARK, borderColor: Colors.PRIMARY_PURPAL_MEDIUM, textColor: Colors.BASE_WHITE };
  }
  else if(req=='primaryLight') {
    return { bgColor: Colors.INPUT_LIGHT_PURPAL, borderColor: Colors.INPUT_LIGHT_PURPAL, textColor: Colors.BASE_BLACK };
  }
};



export const textStyle = (req) => {
  if(req=='Title2') {
    return { fontSize: FontSize.X_LARGEST, fontWeight: FontWeight[600] };
  }
  if(req=='Title2_B') {
    return { fontSize: FontSize.X_LARGEST, fontWeight: FontWeight[800] };
  }
  if(req=='Title3') {
    return { fontSize: FontSize.LARGEST, fontWeight: FontWeight[600] };
  }
  else if(req=='Large1') {
    return { fontSize: FontSize.XXXX_LARGE, fontWeight: FontWeight[500] };
  }
  else if(req=='Large2') {
    return { fontSize: FontSize.X_LARGE, fontWeight: FontWeight[500] };
  }
  else if(req=='Large3') {
    return { fontSize: FontSize.XX_LARGE, fontWeight: FontWeight[500] };
  }
  else if(req=='Large3_B') {
    return { fontSize: FontSize.XX_LARGE, fontWeight: FontWeight[700] };
  }
  else if(req=='Large3_SB') {
    return { fontSize: FontSize.XX_LARGE, fontWeight: FontWeight[600] };
  }
  else if(req=='Large4') {
    return { fontSize: FontSize.LARGE, fontWeight: FontWeight[500] };
  }
  else if(req=='Large4_SB') {
    return { fontSize: FontSize.LARGE, fontWeight: FontWeight[600] };
  }
  else if(req=='Large4_B') {
    return { fontSize: FontSize.LARGE, fontWeight: FontWeight[700] };
  }
  else if(req=='Normal') {
    return { fontSize: FontSize.NORMAL, fontWeight: FontWeight[400] };
  }
  else if(req=='Normal_B') {
    return { fontSize: FontSize.NORMAL, fontWeight: FontWeight[700] };
  }
  else if(req=='Normal_SB') {
    return { fontSize: FontSize.NORMAL, fontWeight: FontWeight[700] };
  }
  else if(req=='Small1') {
    return { fontSize: FontSize.SMALL, fontWeight: FontWeight[400] };
  }
  else if(req=='Small2') {
    return { fontSize: FontSize.X_SMALL, fontWeight: FontWeight[400] };
  }
  else if(req=='Small3') {
    return { fontSize: FontSize.XX_SMALL, fontWeight: FontWeight[400] };
  }
};
