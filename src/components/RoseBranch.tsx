import React from 'react';

interface RoseBranchProps {
  side?: 'right' | 'left';
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'accent';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * تقصيبة غصن الورد الذهبية الفاخرة
 * مصممة بدقة عالية كغصن ورد جوري مذهب مع أوراق وبراعم وتطريز قصب ذهبي
 */
export const RoseBranch: React.FC<RoseBranchProps> = ({
  side = 'right',
  className = '',
  variant = 'horizontal',
  size = 'md'
}) => {
  const isLeft = side === 'left';

  // مقاسات الأغصان
  const sizeMap = {
    sm: { width: variant === 'vertical' ? 42 : 75, height: variant === 'vertical' ? 120 : 38 },
    md: { width: variant === 'vertical' ? 58 : 110, height: variant === 'vertical' ? 170 : 48 },
    lg: { width: variant === 'vertical' ? 76 : 150, height: variant === 'vertical' ? 220 : 62 }
  };

  const { width, height } = sizeMap[size];

  if (variant === 'vertical') {
    return (
      <svg
        viewBox="0 0 70 200"
        width={width}
        height={height}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`rose-branch rose-branch-vertical ${isLeft ? 'rose-branch-left' : 'rose-branch-right'} ${className}`}
        style={{
          transform: isLeft ? 'scaleX(-1)' : 'none',
          display: 'inline-block',
          verticalAlign: 'middle',
          filter: 'drop-shadow(0 2px 5px rgba(216, 179, 106, 0.25))'
        }}
      >
        <defs>
          <linearGradient id="roseGoldGradV" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fdf0d5" />
            <stop offset="30%" stopColor="#e5c17b" />
            <stop offset="65%" stopColor="#c59847" />
            <stop offset="85%" stopColor="#f6dfa9" />
            <stop offset="100%" stopColor="#a3762c" />
          </linearGradient>
          <linearGradient id="rosePetalGradV" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#fff2dc" />
            <stop offset="50%" stopColor="#deb266" />
            <stop offset="100%" stopColor="#966a24" />
          </linearGradient>
        </defs>

        {/* الغصن الرئيسي المتمايل المنحني */}
        <path
          d="M35 5 C32 30, 22 65, 30 100 C38 135, 26 165, 34 195"
          stroke="url(#roseGoldGradV)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />

        {/* تفرعات دقيقة مطرزة كالقصب */}
        <path
          d="M30 100 C15 92, 10 78, 14 65"
          stroke="url(#roseGoldGradV)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        <path
          d="M28 50 C44 42, 52 30, 48 18"
          stroke="url(#roseGoldGradV)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M32 140 C48 145, 58 160, 52 178"
          stroke="url(#roseGoldGradV)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />

        {/* وردة جورية علوية - بتلات متداخلة */}
        <g transform="translate(48, 18)">
          <path
            d="M0 0 C-4 -6, 4 -9, 7 -4 C9 0, 4 6, 0 5 C-5 4, -7 -1, -2 -5"
            fill="url(#rosePetalGradV)"
            stroke="url(#roseGoldGradV)"
            strokeWidth="0.8"
          />
          <path
            d="M2 -3 C5 -4, 6 -1, 4 2 C2 4, -1 3, 0 1"
            fill="#faecc8"
            stroke="url(#roseGoldGradV)"
            strokeWidth="0.6"
          />
          {/* كأس الزهرة والسبلات */}
          <path
            d="M-2 4 C-4 8, -1 10, 1 12 C3 9, 5 7, 3 4"
            fill="url(#roseGoldGradV)"
          />
        </g>

        {/* الوردة المركزية الرئيسية الكبيرة المتفتحة */}
        <g transform="translate(29, 96)">
          {/* بتلات خارجية كبرى */}
          <path
            d="M-12 -2 C-14 -12, 0 -16, 8 -10 C16 -4, 15 10, 7 14 C-2 17, -13 12, -12 -2 Z"
            fill="url(#rosePetalGradV)"
            opacity="0.85"
          />
          <path
            d="M-8 -6 C-7 -12, 3 -13, 8 -7 C12 -1, 10 8, 3 10 C-4 11, -9 6, -8 -6 Z"
            fill="url(#rosePetalGradV)"
            stroke="url(#roseGoldGradV)"
            strokeWidth="1"
          />
          {/* قلب الوردة الملتف */}
          <path
            d="M-3 -4 C-2 -7, 4 -7, 4 -3 C5 1, 0 5, -3 3 C-5 1, -4 -2, -1 -4"
            fill="#fff3e0"
            stroke="url(#roseGoldGradV)"
            strokeWidth="0.8"
          />
          <circle cx="0.5" cy="-0.5" r="1.5" fill="#fdf2d0" />
        </g>

        {/* برعم وردة سفلي ناعم */}
        <g transform="translate(14, 65)">
          <path
            d="M0 0 C-4 -6, 0 -11, 4 -9 C8 -7, 6 -2, 2 1 Z"
            fill="url(#rosePetalGradV)"
            stroke="url(#roseGoldGradV)"
            strokeWidth="0.8"
          />
          {/* سبلات البرعم */}
          <path
            d="M-2 1 C-5 4, -4 7, -2 8 M3 0 C6 3, 5 6, 2 8"
            stroke="url(#roseGoldGradV)"
            strokeWidth="0.9"
            strokeLinecap="round"
          />
        </g>

        {/* برعم صغير إضافي في الطرف السفلي */}
        <g transform="translate(52, 178)">
          <path
            d="M0 0 C-3 -4, 0 -8, 3 -7 C6 -5, 4 -1, 1 1 Z"
            fill="url(#rosePetalGradV)"
          />
        </g>

        {/* أوراق الورد المقصبة مع عروق دقيقة */}
        {/* ورقة 1 - أعلى اليسار */}
        <g transform="translate(25, 34)">
          <path
            d="M0 0 C-14 -4, -20 -15, -17 -22 C-9 -20, 2 -10, 0 0 Z"
            fill="url(#roseGoldGradV)"
            opacity="0.9"
          />
          <path d="M0 0 C-8 -10, -13 -16, -17 -22" stroke="#fff5df" strokeWidth="0.6" />
        </g>

        {/* ورقة 2 - منتصف اليمين */}
        <g transform="translate(34, 70)">
          <path
            d="M0 0 C12 -4, 18 -14, 16 -20 C8 -18, -1 -9, 0 0 Z"
            fill="url(#roseGoldGradV)"
            opacity="0.9"
          />
          <path d="M0 0 C7 -9, 12 -15, 16 -20" stroke="#fff5df" strokeWidth="0.6" />
        </g>

        {/* ورقة 3 - أسفل اليسار */}
        <g transform="translate(27, 128)">
          <path
            d="M0 0 C-13 2, -21 12, -18 19 C-10 17, -2 8, 0 0 Z"
            fill="url(#roseGoldGradV)"
            opacity="0.9"
          />
          <path d="M0 0 C-9 8, -14 14, -18 19" stroke="#fff5df" strokeWidth="0.6" />
        </g>

        {/* ورقة 4 - أسفل اليمين */}
        <g transform="translate(32, 155)">
          <path
            d="M0 0 C13 3, 20 13, 17 20 C9 18, 1 9, 0 0 Z"
            fill="url(#roseGoldGradV)"
            opacity="0.9"
          />
        </g>

        {/* محاليق وزخارف لولبية دقيقة (تقصيب القصب الذهبي) */}
        <path
          d="M33 30 C42 26, 46 36, 40 40 C36 43, 33 38, 36 35"
          stroke="url(#roseGoldGradV)"
          strokeWidth="0.9"
          fill="none"
        />
        <path
          d="M28 115 C16 118, 12 128, 18 132 C23 135, 27 128, 23 125"
          stroke="url(#roseGoldGradV)"
          strokeWidth="0.9"
          fill="none"
        />

        {/* حبات اللمعان والندى الذهبي */}
        <circle cx="35" cy="5" r="2.2" fill="#fff6e3" />
        <circle cx="34" cy="195" r="2" fill="#fff6e3" />
        <circle cx="8" cy="72" r="1.4" fill="#faebd0" />
        <circle cx="58" cy="148" r="1.4" fill="#faebd0" />
        <circle cx="45" cy="85" r="1.2" fill="#fff" opacity="0.8" />
      </svg>
    );
  }

  // التقصيبة الأفقية على جانبي الكلام (Horizontal Rose Branch)
  return (
    <svg
      viewBox="0 0 160 52"
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`rose-branch rose-branch-horizontal ${isLeft ? 'rose-branch-left' : 'rose-branch-right'} ${className}`}
      style={{
        transform: isLeft ? 'scaleX(-1)' : 'none',
        display: 'inline-block',
        verticalAlign: 'middle',
        filter: 'drop-shadow(0 2px 6px rgba(216, 179, 106, 0.3))'
      }}
    >
      <defs>
        <linearGradient id="roseGoldGradH" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#fdf3dc" />
          <stop offset="25%" stopColor="#deb266" />
          <stop offset="60%" stopColor="#f7e1ad" />
          <stop offset="85%" stopColor="#c59544" />
          <stop offset="100%" stopColor="#7a541c" />
        </linearGradient>
        <linearGradient id="rosePetalGradH" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff6e5" />
          <stop offset="40%" stopColor="#deb266" />
          <stop offset="100%" stopColor="#966720" />
        </linearGradient>
      </defs>

      {/* الغصن الرئيسي الممتد بأناقة باتجاه الكلام */}
      {/* يبدأ عريضاً وغنياً بالزهور من الخارج (يسار/يمين) وينتهي بنعومة رقيقة نحو الكلام */}
      <path
        d="M6 26 C28 20, 55 34, 88 23 C115 14, 140 25, 156 26"
        stroke="url(#roseGoldGradH)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />

      {/* تفرع رقيق علوي */}
      <path
        d="M48 26 C58 15, 75 10, 85 13"
        stroke="url(#roseGoldGradH)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {/* تفرع رقيق سفلي */}
      <path
        d="M80 25 C92 37, 108 42, 120 38"
        stroke="url(#roseGoldGradH)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />

      {/* الوردة الكبيرة الجورية في بداية الغصن */}
      <g transform="translate(28, 25)">
        {/* البتلات الخارجية الفاخرة */}
        <path
          d="M-12 -2 C-14 -12, 1 -15, 8 -9 C16 -3, 14 11, 7 14 C-3 17, -13 11, -12 -2 Z"
          fill="url(#rosePetalGradH)"
          opacity="0.9"
        />
        <path
          d="M-8 -6 C-7 -11, 3 -12, 8 -6 C12 0, 9 8, 3 10 C-4 11, -9 5, -8 -6 Z"
          fill="url(#rosePetalGradH)"
          stroke="url(#roseGoldGradH)"
          strokeWidth="0.9"
        />
        {/* التواء البتلات الداخلية للوردة */}
        <path
          d="M-4 -3 C-3 -6, 3 -6, 4 -3 C5 1, 1 5, -2 4 C-5 2, -4 -1, -1 -3"
          fill="#fef5e0"
          stroke="url(#roseGoldGradH)"
          strokeWidth="0.8"
        />
        <circle cx="0.5" cy="-0.5" r="1.6" fill="#fff" />
      </g>

      {/* برعم وردة متألق في الأعلى */}
      <g transform="translate(85, 13)">
        <path
          d="M0 0 C-4 -5, -1 -9, 4 -8 C8 -6, 7 -1, 3 1 Z"
          fill="url(#rosePetalGradH)"
          stroke="url(#roseGoldGradH)"
          strokeWidth="0.8"
        />
        {/* سبلات البرعم الخضراء المذهبة */}
        <path
          d="M-2 1 C-5 4, -4 6, -1 7 M3 0 C6 3, 5 5, 2 7"
          stroke="url(#roseGoldGradH)"
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </g>

      {/* برعم وردة ناعم في التفرع السفلي */}
      <g transform="translate(120, 38)">
        <path
          d="M0 0 C-3 -4, 0 -7, 4 -6 C7 -4, 5 0, 2 1 Z"
          fill="url(#rosePetalGradH)"
          stroke="url(#roseGoldGradH)"
          strokeWidth="0.7"
        />
      </g>

      {/* أوراق الورد الموزعة بجمال وتناسق على الغصن */}
      {/* ورقة 1 - أعلى البداية */}
      <g transform="translate(14, 21)">
        <path
          d="M0 0 C-3 -11, -12 -16, -18 -13 C-17 -5, -8 2, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
        <path d="M0 0 C-8 -6, -14 -10, -18 -13" stroke="#fff4dc" strokeWidth="0.6" />
      </g>

      {/* ورقة 2 - أسفل البداية */}
      <g transform="translate(20, 29)">
        <path
          d="M0 0 C-4 10, -13 14, -18 11 C-16 3, -8 -2, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
      </g>

      {/* ورقة 3 - أعلى المنتصف */}
      <g transform="translate(56, 21)">
        <path
          d="M0 0 C4 -11, 14 -15, 20 -12 C18 -4, 8 2, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
        <path d="M0 0 C9 -6, 15 -9, 20 -12" stroke="#fff4dc" strokeWidth="0.6" />
      </g>

      {/* ورقة 4 - أسفل المنتصف */}
      <g transform="translate(68, 30)">
        <path
          d="M0 0 C3 11, 13 15, 19 12 C18 4, 8 -2, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
        <path d="M0 0 C8 6, 14 9, 19 12" stroke="#fff4dc" strokeWidth="0.6" />
      </g>

      {/* ورقة 5 - ناعمة قبل النهاية */}
      <g transform="translate(108, 22)">
        <path
          d="M0 0 C3 -8, 10 -11, 15 -8 C13 -3, 6 1, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
      </g>

      {/* ورقة 6 - سفلية قبل النهاية */}
      <g transform="translate(132, 28)">
        <path
          d="M0 0 C3 7, 9 9, 13 7 C12 2, 6 -1, 0 0 Z"
          fill="url(#roseGoldGradH)"
        />
      </g>

      {/* تقصيب لولبي ومحاليق قصب الذهب */}
      <path
        d="M38 18 C36 10, 43 6, 48 10 C51 13, 46 17, 42 14"
        stroke="url(#roseGoldGradH)"
        strokeWidth="0.9"
        fill="none"
      />
      <path
        d="M98 25 C100 32, 94 36, 90 33 C87 30, 92 27, 95 29"
        stroke="url(#roseGoldGradH)"
        strokeWidth="0.9"
        fill="none"
      />

      {/* لمعات الذهب والندى على طرف الغصن المنتهي عند الكلام */}
      <circle cx="156" cy="26" r="2.5" fill="#fff" filter="drop-shadow(0 0 3px #fdf3dc)" />
      <circle cx="150" cy="22" r="1.4" fill="#faebd0" />
      <circle cx="5" cy="26" r="2" fill="#fff" />
      <circle cx="68" cy="8" r="1.3" fill="#fdf0d5" />
      <circle cx="128" cy="42" r="1.3" fill="#fdf0d5" />
    </svg>
  );
};

/**
 * مكون إطار الكلام بالتقصيبتين:
 * يضع تقصيبة غصن ورد على اليمين وتقصيبة غصن ورد على اليسار
 * ليحتضنا النص بدقة وأناقة ملكية
 */
export const FramedWithBranches: React.FC<{
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'horizontal' | 'vertical';
}> = ({ children, className = '', size = 'md', variant = 'horizontal' }) => {
  return (
    <div className={`framed-branches-wrapper framed-branches-${variant} ${className}`}>
      <RoseBranch side="right" variant={variant} size={size} />
      <div className="framed-branches-content">
        {children}
      </div>
      <RoseBranch side="left" variant={variant} size={size} />
    </div>
  );
};

export default RoseBranch;
