package com;
import java.awt.Color;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;

import com.swetake.util.Qrcode;

/**
 *		Java����΢�Ŷ�ά��ɨһɨ������
 *		@author RexHang
 *		@version v.0 
 */
public class QrcodeTest {

		/**
		 *	  �����������ɶ�ά��ͼƬ
		 *	  @param contents ����
		 *    @param imgPath ����ͼƬ�洢�ķ�������ַ
		 */
		public static void getQrcodeImgBycontent(String contents,String imgPath){
				
				int width = 140;
				int height = 140;
			
				try{
				// ʵ����Qrcode new
				Qrcode qrCode = new Qrcode();
				// ���ö�ά����Ŵ��� ��ѡ��L��7%����M��15%����Q��25%����H��30%��
				qrCode.setQrcodeErrorCorrect('M');
				qrCode.setQrcodeEncodeMode('B');
				
				// ���ö�ά��ĳߴ� ȡֵ��Χ[1-40]
				qrCode.setQrcodeVersion(7);
				// ����ͼƬ�ĳߴ�
				BufferedImage bufImg = new BufferedImage(width,height,BufferedImage.TYPE_INT_BGR);
				// ���ƶ�ά��ͼƬ
				Graphics2D gs = bufImg.createGraphics();
				// ���ö�ά���������ı�����ɫ������Ϊ��ɫ
				gs.setBackground(Color.RED);
				// ����һ��ͼƬ�ľ�������
				gs.clearRect(0, 0, width, height);
				// ���ö�ά�����ɫ
				gs.setColor(Color.BLUE);
				
				
				// ��ȡ���ݣ�ͨ��һ���������ʽ�����ñ���
				byte[] contentBytes = contents.getBytes("gb2312");
				
				// ����ƫ����������������ã����ܻᵼ�½�������
				int pixoff = 2;
				
				// �����ά��
				if(contentBytes.length >0&& contentBytes.length < 120){
					 boolean[][] codeOut = qrCode.calQrcode(contentBytes);
					 for(int i = 0; i < codeOut.length; i++){
						 	for(int j = 0; j < codeOut.length; j++){
						 		  if(codeOut[j][i]){
						 			  gs.fillRect(j * 3 + pixoff, i * 3 +pixoff, 3, 3);
						 			  
						 		  }
						 		
						 	}
						 
					 }
					 	
				} else{
					 System.out.println("�����ˣ��������������ݳ��ȳ�����������ƣ�");
					
				}
				
				gs.dispose();
				bufImg.flush();
				// ���ɶ�ά���QrcodeͼƬ
				File imgFile = new File(imgPath);
				ImageIO.write(bufImg, "png" , imgFile);
				System.out.println("������ά��ɹ���");				
			} catch (Exception e){
					e.getStackTrace();
					
				}
			
		}
	
		public static void main(String[] args){
			
				System.out.println("RexHang�����Ķ�ά��");
				String contents = "http://p8.qhimg.com/dmt/234_175_/t018a2747ead92193d5.jpg";
				String imgPath = "C:\\Users\\�˺�\\RexHang.png";
				
				getQrcodeImgBycontent(contents,imgPath);
		}
}
